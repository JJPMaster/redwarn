import {
    RW_NOWIKI_CLOSE,
    RW_NOWIKI_OPEN,
    RW_VERSION,
} from "rww/data/RedWarnConstants";
import StyleManager from "rww/styles/StyleManager";
import { Page } from "rww/mediawiki";
import { Setting } from "./Setting";

export enum rollbackMethod {
    Unset,
    Rollback,
    Revert,
}

export default class Config {
    /** Last version of RedWarn that was used */
    public static latestVersion = new Setting(RW_VERSION, "latestVersion");
    /** Rollback done option that is automatically executed on rollback complete */
    public static rollbackDoneOption = new Setting(
        "warnUser",
        "rollbackDoneOption"
    );
    /** Order warnings by template name or reason */
    public static orderNoticesByTemplateName = new Setting(
        false,
        "orderNoticesByTemplateName"
    );
    /** Array of viewed campaigns */
    public static campaigns = new Setting<string[]>([], "campaigns");
    /** Method of rollback */
    public static rollbackMethod = new Setting(
        rollbackMethod.Unset,
        "rollbackMethod"
    );
    /** Style of UI */
    public static style = new Setting(StyleManager.defaultStyle, "style");
    public static ImNaughty = new Setting(false, "ImNaughty");

    static async refresh(): Promise<void> {
        // This is effectively mw.loader.getScript, but without caching
        await $.ajax(
            "/w/index.php?title=Special:MyPage/redwarnConfig.js&action=raw&ctype=text/javascript",
            { dataType: "script" }
        );
        if (window.rw.config?.new != null) {
            this.allSettings().forEach((s) => s.refresh());
        } else if (window.rw.config != null) {
            // old config exists, convert
            for (const [key, value] of Object.entries(window.rw.config)) {
                switch (key) {
                    case "rwRollbackDoneOption":
                        switch (value) {
                            case "RWRBDONEmrevPg":
                                this.rollbackDoneOption.value = "latestRev";
                                break;
                            case "RWRBDONEnewUsrMsg":
                                this.rollbackDoneOption.value = "newMsg";
                                break;
                            case "RWRBDONEwelcomeUsr":
                                this.rollbackDoneOption.value = "quickTemplate";
                                break;
                            case "RWRBDONEwarnUsr":
                                this.rollbackDoneOption.value = "warnUser";
                                break;
                            case "RWRBDONEreportUsr":
                                this.rollbackDoneOption.value = "reportUser";
                                break;
                            default:
                                console.error(
                                    "Unknown rwRollbackDoneOption:",
                                    value
                                );
                        }
                        break;
                    case "neopolitan":
                        if (
                            value ===
                            "I turn my head up to the sky, I focus one thought at a time."
                        ) {
                            this.ImNaughty.value = true;
                            this.ImNaughty.defaultValue = true;
                        }
                        break;
                }
            }
        }
        StyleManager.activeStyle = StyleManager.styles.find(
            (v) => v.name === this.style.value
        ); // set here otherwise circular ref
    }

    static allSettings(): Map<string, Setting<unknown>> {
        const map = new Map();
        for (const [key, value] of Object.entries(this)) {
            if (value instanceof Setting) {
                map.set(key, value);
            }
        }
        return map;
    }

    static async save(reloadOnDone = false): Promise<void> {
        this.allSettings().forEach((v, k) => {
            window.rw.config.new[k] = v;
        });

        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const template = require("./redwarnConfig.template.txt");

        await Page.fromTitle("Special:MyPage/redwarnConfig.js").edit(
            Config.fromTemplate(template),
            "Updating user configuration"
        );
        if (reloadOnDone) {
            window.location.reload();
        }
        return;
    }

    static fromTemplate(template: string): string {
        return template
            .replace(/--nowikiOpen/g, RW_NOWIKI_OPEN)
            .replace(/--nowikiClose/g, RW_NOWIKI_CLOSE)
            .replace(/--configuration/g, JSON.stringify(window.rw.config));
    }
}
