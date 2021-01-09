import i18next from "i18next";
import { ClientUser } from "rww/mediawiki/MediaWiki";
import AjaxSettings = JQuery.AjaxSettings;
import Api = mw.Api;

export class MediaWikiAPI {
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
            parameters: { formatversion: 2 },
            ajax: {
                headers: {
                    "Api-User-Agent": i18next.t("common:redwarn.userAgent"),
                },
            },
        });

        // Initialize the current user.
        await ClientUser.i.init();
    }
}
