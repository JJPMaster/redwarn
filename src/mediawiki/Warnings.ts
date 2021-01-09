import { WarningLevel } from "rww/mediawiki/MediaWiki";

// TODO Move this to wiki-specific definition files.
// TODO i18n

export enum WarningCategory {
    COMMON = "Common warnings",
    ARTICLE = "Article Conduct Warnings",
    SPAM = "Promotions and spam",
    EDITORS = "Behavior towards other editors",
    REMOVE = "Removal of deletion tags",
    OTHER = "Other",
    REMIND = "Reminders",
    POLICY = "Policy Violation Warnings",
}
export interface Warning {
    name: string;
    category: WarningCategory;
    template: string;
    warningLevels: WarningLevel[];
    note?: string;
}

export const Warnings = {
    vandalism: {
        name: "Vandalism",
        category: WarningCategory.COMMON,
        template: "uw-vandalism",
        warningLevels: [1, 2, 3, 4, 5],
    },
    disruptive: {
        name: "Disruptive editing",
        category: WarningCategory.COMMON,
        template: "uw-disruptive",
        warningLevels: [1, 2, 3, 4],
    },
    test: {
        name: "Editing tests",
        category: WarningCategory.COMMON,
        template: "uw-test",
        warningLevels: [1, 2, 3],
    },
    delete: {
        name: "Removal of content, blanking",
        category: WarningCategory.COMMON,
        template: "uw-delete",
        warningLevels: [1, 2, 3, 4, 5],
    },
    generic: {
        name: "Generic warning (for template series missing level 4)",
        category: WarningCategory.COMMON,
        template: "uw-generic",
        warningLevels: [4],
    },
    biog: {
        name: "Adding unreferenced information about living persons",
        category: WarningCategory.ARTICLE,
        template: "uw-biog",
        warningLevels: [1, 2, 3, 4, 5],
    },
    error: {
        name: "Introducing deliberate factual errors",
        category: WarningCategory.ARTICLE,
        template: "uw-error",
        warningLevels: [1, 2, 3, 4],
    },
    genre: {
        name:
            "Frequent or mass changes to genres without consensus or reference",
        category: WarningCategory.ARTICLE,
        template: "uw-genre",
        warningLevels: [1, 2, 3, 4],
    },
    image: {
        name: "Image-related vandalism",
        category: WarningCategory.ARTICLE,
        template: "uw-image",
        warningLevels: [1, 2, 3, 4, 5],
    },
    joke: {
        name: "Using improper humor",
        category: WarningCategory.ARTICLE,
        template: "uw-joke",
        warningLevels: [1, 2, 3, 4, 5],
    },
    nor: {
        name:
            "Adding original research, including unpublished syntheses of sources",
        category: WarningCategory.ARTICLE,
        template: "uw-nor",
        warningLevels: [1, 2, 3, 4],
    },
    notcensored: {
        name: "Censorship of material",
        category: WarningCategory.ARTICLE,
        template: "uw-notcensored",
        warningLevels: [1, 2, 3],
    },
    own: {
        name: "Ownership of articles",
        category: WarningCategory.ARTICLE,
        template: "uw-own",
        warningLevels: [1, 2, 3, 4, 5],
    },
    tdel: {
        name: "Removal of maintenance templates",
        category: WarningCategory.ARTICLE,
        template: "uw-tdel",
        warningLevels: [1, 2, 3, 4],
    },
    unsourced: {
        name: "Addition of unsourced or improperly cited material",
        category: WarningCategory.ARTICLE,
        template: "uw-unsourced",
        warningLevels: [1, 2, 3, 4],
    },
    advert: {
        name: "Using Wikipedia for advertising or promotion",
        category: WarningCategory.SPAM,
        template: "uw-advert",
        warningLevels: [1, 2, 3, 4, 5],
    },
    npov: {
        name: "Not adhering to neutral point of view",
        category: WarningCategory.SPAM,
        template: "uw-npov",
        warningLevels: [1, 2, 3, 4],
    },
    paid: {
        name:
            "Paid editing without disclosure under the Wikimedia Terms of Use",
        category: WarningCategory.SPAM,
        template: "uw-paid",
        warningLevels: [1, 2, 3, 4],
    },
    spam: {
        name: "Adding spam links",
        category: WarningCategory.SPAM,
        template: "uw-spam",
        warningLevels: [1, 2, 3, 4, 5],
    },
    agf: {
        name: "Not assuming good faith",
        category: WarningCategory.EDITORS,
        template: "uw-agf",
        warningLevels: [1, 2, 3],
    },
    harass: {
        name: "Harassment of other users",
        category: WarningCategory.EDITORS,
        template: "uw-harass",
        warningLevels: [1, 2, 3, 4, 5],
    },
    npa: {
        name: "Personal attack directed at a specific editor",
        category: WarningCategory.EDITORS,
        template: "uw-npa",
        warningLevels: [1, 2, 3, 4, 5],
    },
    tempabuse: {
        name: "Improper use of warning or blocking template",
        category: WarningCategory.EDITORS,
        template: "uw-tempabuse",
        warningLevels: [1, 2],
    },
    afd: {
        name: "Removing {{afd}} templates",
        category: WarningCategory.REMOVE,
        template: "uw-afd",
        warningLevels: [1, 2, 3, 4],
    },
    blpprod: {
        name: "Removing {{blp prod}} templates",
        category: WarningCategory.REMOVE,
        template: "uw-blpprod",
        warningLevels: [1, 2, 3, 4],
    },
    idt: {
        name: "Removing file deletion tags",
        category: WarningCategory.REMOVE,
        template: "uw-idt",
        warningLevels: [1, 2, 3, 4],
    },
    speedy: {
        name: "Removing speedy deletion tags",
        category: WarningCategory.REMOVE,
        template: "uw-speedy",
        warningLevels: [1, 2, 3, 4],
    },
    attempt: {
        name: "Triggering the edit filter",
        category: WarningCategory.OTHER,
        template: "uw-attempt",
        warningLevels: [1, 2, 3, 4],
    },
    chat: {
        name: "Using talk page as forum",
        category: WarningCategory.OTHER,
        template: "uw-chat",
        warningLevels: [1, 2, 3, 4],
    },
    create: {
        name: "Creating inappropriate pages",
        category: WarningCategory.OTHER,
        template: "uw-create",
        warningLevels: [1, 2, 3, 4, 5],
    },
    mos: {
        name: "Manual of style",
        category: WarningCategory.OTHER,
        template: "uw-mos",
        warningLevels: [1, 2, 3, 4],
    },
    move: {
        name: "Page moves against naming conventions or consensus",
        category: WarningCategory.OTHER,
        template: "uw-move",
        warningLevels: [1, 2, 3, 4, 5],
    },
    tpv: {
        name: "Refactoring others' talk page comments",
        category: WarningCategory.OTHER,
        template: "uw-tpv",
        warningLevels: [1, 2, 3, 4, 5],
    },
    upload: {
        name: "Uploading unencyclopedic images",
        category: WarningCategory.OTHER,
        template: "uw-upload",
        warningLevels: [1, 2, 3, 4, 5],
    },
    aiv: {
        name: "Bad AIV report",
        category: WarningCategory.REMIND,
        template: "uw-aiv",
        warningLevels: [0],
    },
    autobiography: {
        name: "Creating autobiographies",
        category: WarningCategory.REMIND,
        template: "uw-autobiography",
        warningLevels: [0],
    },
    badcat: {
        name: "Adding incorrect categories",
        category: WarningCategory.REMIND,
        template: "uw-badcat",
        warningLevels: [0],
    },
    badlistentry: {
        name: "Adding inappropriate entries to lists",
        category: WarningCategory.REMIND,
        template: "uw-badlistentry",
        warningLevels: [0],
    },
    bite: {
        name: "Being harsh to newcomers",
        category: WarningCategory.REMIND,
        template: "uw-bite",
        warningLevels: [0],
    },
    coi: {
        name: "Conflict of interest",
        category: WarningCategory.REMIND,
        template: "uw-coi",
        warningLevels: [0],
    },
    controversial: {
        name: "Introducing controversial material",
        category: WarningCategory.REMIND,
        template: "uw-controversial",
        warningLevels: [0],
    },
    copying: {
        name: "Copying text to another page",
        category: WarningCategory.REMIND,
        template: "uw-copying",
        warningLevels: [0],
    },
    crystal: {
        name: "Adding speculative or unconfirmed information",
        category: WarningCategory.REMIND,
        template: "uw-crystal",
        warningLevels: [0],
    },
    cpmove: {
        name: "Cut and paste moves",
        category: WarningCategory.REMIND,
        template: "uw-c&pmove",
        warningLevels: [0],
    },
    dab: {
        name: "Incorrect edit to a disambiguation page",
        category: WarningCategory.REMIND,
        template: "uw-dab",
        warningLevels: [0],
    },
    date: {
        name: "Unnecessarily changing date formats",
        category: WarningCategory.REMIND,
        template: "uw-date",
        warningLevels: [0],
    },
    deadlink: {
        name: "Removing proper sources containing dead links",
        category: WarningCategory.REMIND,
        template: "uw-deadlink",
        warningLevels: [0],
    },
    draftfirst: {
        name: "User should draft in draftspace or userspace",
        category: WarningCategory.REMIND,
        template: "uw-draftfirst",
        warningLevels: [0],
    },
    editsummary: {
        name: "Not using edit comment",
        category: WarningCategory.REMIND,
        template: "uw-editsummary",
        warningLevels: [0],
    },
    elinbody: {
        name: "Adding external links to the body of an article",
        category: WarningCategory.REMIND,
        template: "uw-elinbody",
        warningLevels: [0],
    },
    english: {
        name: "Not communicating in English",
        category: WarningCategory.REMIND,
        template: "uw-english",
        warningLevels: [0],
    },
    hasty: {
        name: "Hasty addition of speedy deletion tags",
        category: WarningCategory.REMIND,
        template: "uw-hasty",
        warningLevels: [0],
    },
    italicize: {
        name:
            "Italicize books, films, albums, magazines, TV series, etc within articles",
        category: WarningCategory.REMIND,
        template: "uw-italicize",
        warningLevels: [0],
    },
    lang: {
        name: "Unnecessarily changing between British and American English",
        category: WarningCategory.REMIND,
        template: "uw-lang",
        warningLevels: [0],
    },
    linking: {
        name: "Excessive addition of redlinks or repeated blue links",
        category: WarningCategory.REMIND,
        template: "uw-linking",
        warningLevels: [0],
    },
    minor: {
        name: "Incorrect use of minor edits check box",
        category: WarningCategory.REMIND,
        template: "uw-minor",
        warningLevels: [0],
    },
    notenglish: {
        name: "Creating non-English articles",
        category: WarningCategory.REMIND,
        template: "uw-notenglish",
        warningLevels: [0],
    },
    notvote: {
        name: "We use consensus, not voting",
        category: WarningCategory.REMIND,
        template: "uw-notvote",
        warningLevels: [0],
    },
    plagiarism: {
        name: "Copying from public domain sources without attribution",
        category: WarningCategory.REMIND,
        template: "uw-plagiarism",
        warningLevels: [0],
    },
    preview: {
        name: "Use preview button to avoid mistakes",
        category: WarningCategory.REMIND,
        template: "uw-preview",
        warningLevels: [0],
    },
    redlink: {
        name: "Indiscriminate removal of redlinks",
        category: WarningCategory.REMIND,
        template: "uw-redlink",
        warningLevels: [0],
    },
    selfrevert: {
        name: "Reverting self tests",
        category: WarningCategory.REMIND,
        template: "uw-selfrevert",
        warningLevels: [0],
    },
    socialnetwork: {
        name: "Wikipedia is not a social network",
        category: WarningCategory.REMIND,
        template: "uw-socialnetwork",
        warningLevels: [0],
    },
    sofixit: {
        name: "Be bold and fix things yourself",
        category: WarningCategory.REMIND,
        template: "uw-sofixit",
        warningLevels: [0],
    },
    spoiler: {
        name:
            "Adding spoiler alerts or removing spoilers from appropriate sections",
        category: WarningCategory.REMIND,
        template: "uw-spoiler",
        warningLevels: [0],
    },
    talkinarticle: {
        name: "Talk in article",
        category: WarningCategory.REMIND,
        template: "uw-talkinarticle",
        warningLevels: [0],
    },
    tilde: {
        name: "Not signing posts",
        category: WarningCategory.REMIND,
        template: "uw-tilde",
        warningLevels: [0],
    },
    toppost: {
        name: "Posting at the top of talk pages",
        category: WarningCategory.REMIND,
        template: "uw-toppost",
        warningLevels: [0],
    },
    userspaceDraftFinish: {
        name: "Stale userspace draft",
        category: WarningCategory.REMIND,
        template: "uw-userspace draft finish",
        warningLevels: [0],
    },
    vgscope: {
        name: "Adding video game walkthroughs, cheats or instructions",
        category: WarningCategory.REMIND,
        template: "uw-vgscope",
        warningLevels: [0],
    },
    warn: {
        name: "Place user warning templates when reverting vandalism",
        category: WarningCategory.REMIND,
        template: "uw-warn",
        warningLevels: [0],
    },
    wrongsummary: {
        name: "Using inaccurate or inappropriate edit summaries",
        category: WarningCategory.REMIND,
        template: "uw-wrongsummary",
        warningLevels: [0],
    },
    _3rr: {
        name: "Potential three-revert rule violation; see also uw-ew",
        category: WarningCategory.POLICY,
        template: "uw-3rr",
        warningLevels: [6],
    },
    affiliate: {
        name: "Affiliate marketing",
        category: WarningCategory.POLICY,
        template: "uw-affiliate",
        warningLevels: [6],
    },
    agfsock: {
        name: "Use of multiple accounts (assuming good faith)",
        category: WarningCategory.POLICY,
        template: "uw-agf-sock",
        warningLevels: [6],
    },
    attack: {
        name: "Creating attack pages",
        category: WarningCategory.POLICY,
        template: "uw-attack",
        warningLevels: [6],
    },
    botun: {
        name: "Bot username",
        category: WarningCategory.POLICY,
        template: "uw-botun",
        warningLevels: [6],
        note:
            "Username notices should not be added for blatant violations. In these cases, click the gavel to report the username to the admins.",
    },
    canvass: {
        name: "Canvassing",
        category: WarningCategory.POLICY,
        template: "uw-canvass",
        warningLevels: [6],
    },
    copyright: {
        name: "Copyright violation",
        category: WarningCategory.POLICY,
        template: "uw-copyright",
        warningLevels: [6],
    },
    copyrightlink: {
        name: "Linking to copyrighted works violation",
        category: WarningCategory.POLICY,
        template: "uw-copyright-link",
        warningLevels: [6],
    },
    copyrightnew: {
        name: "Copyright violation (with explanation for new users)",
        category: WarningCategory.POLICY,
        template: "uw-copyright-new",
        warningLevels: [6],
    },
    copyrightremove: {
        name: "Removing {{copyvio}} template from articles",
        category: WarningCategory.POLICY,
        template: "uw-copyright-remove",
        warningLevels: [6],
    },
    efsummary: {
        name: "Edit comment triggering the edit filter",
        category: WarningCategory.POLICY,
        template: "uw-efsummary",
        warningLevels: [6],
    },
    ew: {
        name: "Edit warring (stronger wording)",
        category: WarningCategory.POLICY,
        template: "uw-ew",
        warningLevels: [6],
    },
    ewsoft: {
        name: "Edit warring (softer wording for newcomers)",
        category: WarningCategory.POLICY,
        template: "uw-ewsoft",
        warningLevels: [6],
    },
    hijacking: {
        name: "Hijacking articles",
        category: WarningCategory.POLICY,
        template: "uw-hijacking",
        warningLevels: [6],
    },
    hoax: {
        name: "Creating hoaxes",
        category: WarningCategory.POLICY,
        template: "uw-hoax",
        warningLevels: [6],
    },
    legal: {
        name: "Making legal threats",
        category: WarningCategory.POLICY,
        template: "uw-legal",
        warningLevels: [6],
    },
    login: {
        name: "Editing while logged out",
        category: WarningCategory.POLICY,
        template: "uw-login",
        warningLevels: [6],
    },
    multipleIPs: {
        name: "Usage of multiple IPs",
        category: WarningCategory.POLICY,
        template: "uw-multipleIPs",
        warningLevels: [6],
    },
    pinfo: {
        name: "Personal info",
        category: WarningCategory.POLICY,
        template: "uw-pinfo",
        warningLevels: [6],
    },
    salt: {
        name: "Recreating salted articles under a different title",
        category: WarningCategory.POLICY,
        template: "uw-salt",
        warningLevels: [6],
    },
    socksuspect: {
        name: "Sockpuppetry",
        category: WarningCategory.POLICY,
        template: "uw-socksuspect",
        warningLevels: [6],
    },
    upv: {
        name: "Userpage vandalism",
        category: WarningCategory.POLICY,
        template: "uw-upv",
        warningLevels: [6],
    },
    username: {
        name: "Username is against policy",
        category: WarningCategory.POLICY,
        template: "uw-username",
        warningLevels: [6],
        note:
            "Username notices should not be added for blatant violations. In these cases, click the gavel to report the username to the admins.",
    },
    coiusername: {
        name: "Username is against policy, and conflict of interest",
        category: WarningCategory.POLICY,
        template: "uw-coi-username",
        warningLevels: [6],
        note:
            "Username notices should not be added for blatant violations. In these cases, click the gavel to report the username to the admins.",
    },
    userpage: {
        name: "Userpage or subpage is against policy",
        category: WarningCategory.POLICY,
        template: "uw-userpage",
        warningLevels: [6],
        note:
            "Username notices should not be added for blatant violations. In these cases, click the gavel to report the username to the admins.",
    },
};
export type Warnings = Readonly<typeof Warnings>;
