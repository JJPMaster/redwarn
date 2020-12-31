import { RW_VERSION } from "rww/data/RedWarnConstants";

if (window.RedWarnLanguages == null) {
    window.RedWarnLanguages = [];
}

window.RedWarnLanguages.push({
    tag: "qqq",
    id: "key-documentation-this-shouldnt-be-used",
    meta: {
        name: "Key Documentation - Should not be used in production",
        translators: ["The RedWarn Contributors"],
        license: {
            url: "https://www.apache.org/licenses/LICENSE-2.0.txt",
            text: "Apache License 2.0",
        },
        version: RW_VERSION,
        links: {
            home: "https://en.wikipedia.org/wiki/Wikpedia:RedWarn",
            license:
                "https://gitlab.com/redwarn/redwarn-web/-/blob/master/LICENSE",
        },
    },
    namespaces: {
        common: require("./common.json"),
        wikipedia: require("./wikipedia.json"),
        ui: require("./ui.json"),
    },
});
