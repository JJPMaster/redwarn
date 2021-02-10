import i18next from "i18next";
import Lockr from "lockr";
import Group from "rww/definitions/Group";
import { ClientUser } from "rww/mediawiki";
import AjaxSettings = JQuery.AjaxSettings;
import Api = mw.Api;

export class MediaWikiAPI {
    static groups: Map<string, Group>;
    static api: Api;

    static async get(
        parameters: Record<string, any>,
        ajaxOptions?: AjaxSettings
    ): Promise<JQueryXHR> {
        try {
            const finalParameters = Object.assign({}, parameters);
            for (const key of Object.keys(finalParameters)) {
                if (Array.isArray(finalParameters[key]))
                    finalParameters[key] = finalParameters[key].join("|");
            }

            return await this.api.get(finalParameters, ajaxOptions);
        } catch (error) {
            console.error(
                `Error occured while running MediaWiki API get call: ${error.message}`
            );
            throw error;
        }
    }

    static async post(
        parameters: Record<string, any>,
        ajaxOptions?: AjaxSettings
    ): Promise<JQueryXHR> {
        try {
            const finalParameters = Object.assign({}, parameters);
            for (const key of Object.keys(finalParameters)) {
                if (Array.isArray(finalParameters[key]))
                    finalParameters[key] = finalParameters[key].join("|");
            }

            return await this.api.post(finalParameters, ajaxOptions);
        } catch (error) {
            console.error(
                `Error occured while running MediaWiki API get call: ${error.message}`
            );
            throw error;
        }
    }

    static async postWithEditToken(
        parameters: Record<string, any>,
        ajaxOptions?: AjaxSettings
    ): Promise<JQueryXHR> {
        try {
            return await this.api.postWithEditToken(parameters, ajaxOptions);
        } catch (error) {
            console.error(
                `Error occured while running MediaWiki API postWithEditToken call: ${error.message}`
            );
            throw error;
        }
    }

    /**
     * Initialize the MediaWiki API Manager.
     */
    static async init(): Promise<void> {
        // Create the API interface.
        this.api = new mw.Api({
            parameters: { formatversion: (2 as unknown) as string }, // temporary, until types-mediawiki#2 gets merged
            ajax: {
                headers: {
                    "Api-User-Agent": i18next.t("common:redwarn.userAgent"),
                },
            },
        });

        // Initialize the current user.
        await ClientUser.i.init();
        await this.loadGroupNames();
    }

    static async loadGroupNames(): Promise<Map<string, Group>> {
        const loadGroups = async () => {
            const userGroupMemberTitles = await this.get({
                action: "query",
                format: "json",
                meta: "allmessages",
                amenableparser: 1,
                amincludelocal: 1,
                amfilter: "-member",
                amprefix: "group-",
            });
            const userGroupPages = await this.get({
                action: "query",
                format: "json",
                meta: "allmessages",
                amenableparser: 1,
                amincludelocal: 1,
                amprefix: "grouppage-",
            });

            const groups = new Map<string, Group>();
            for (const message of userGroupMemberTitles["query"][
                "allmessages"
            ]) {
                const groupNameExec = /^group-(.+)-member$/g.exec(
                    message["name"]
                );
                if (groupNameExec == null) continue;
                const groupName = groupNameExec[1];
                if (!groups.has(groupName))
                    groups.set(groupName, {
                        name: groupName,
                        displayName: message["content"],
                    });
                else groups.get(groupName).displayName = message["content"];
            }

            for (const message of userGroupPages["query"]["allmessages"]) {
                const groupNameExec = /^grouppage-(.+)$/g.exec(message["name"]);
                if (groupNameExec == null) continue;
                const groupName = groupNameExec[1];
                if (!groups.has(groupName))
                    groups.set(groupName, {
                        name: groupName,
                        page: message["content"].replace(
                            /{{ns:project}}/gi,
                            "Project:"
                        ),
                    });
                else
                    groups.get(groupName).page = message["content"].replace(
                        /{{ns:project}}/gi,
                        "Project:"
                    );
            }

            Lockr.set("mw-groups", {
                timestamp: Date.now(),
                groups: Object.fromEntries(groups.entries()),
            });

            return groups;
        };

        if (!this.groups) {
            const groups = Lockr.get<{
                timestamp: number;
                groups: { [key: string]: Group };
            }>("mw-groups", null);

            if (!groups || groups.timestamp < Date.now() - 604800000) {
                return (this.groups = await loadGroups());
            } else {
                return (this.groups = new Map<string, Group>(
                    Object.entries(groups.groups)
                ));
            }
        } else {
            return this.groups;
        }
    }
}
