const languages = [
    {
        key: "ab",
        value: "abkhaz",
        text: "Abkhaz (аҧсуа)"
    },
    {
        key: "aa",
        value: "afar",
        text: "Afar (Afaraf)"
    },
    {
        key: "af",
        value: "afrikaans",
        text: "Afrikaans (Afrikaans)"
    },
    {
        key: "ak",
        value: "akan",
        text: "Akan (Akan)"
    },
    {
        key: "sq",
        value: "albanian",
        text: "Albanian (Shqip)"
    },
    {
        key: "am",
        value: "amharic",
        text: "Amharic (አማርኛ)"
    },
    {
        key: "ar",
        value: "arabic",
        text: "Arabic (العربية)"
    },
    {
        key: "an",
        value: "aragonese",
        text: "Aragonese (Aragonés)"
    },
    {
        key: "hy",
        value: "armenian",
        text: "Armenian (Հայերեն)"
    },
    {
        key: "as",
        value: "assamese",
        text: "Assamese (অসমীয়া)"
    },
    {
        key: "av",
        value: "avaric",
        text: "Avaric (авар мацӀ, магӀарул мацӀ)"
    },
    {
        key: "ae",
        value: "avestan",
        text: "Avestan (avesta)"
    },
    {
        key: "ay",
        value: "aymara",
        text: "Aymara (aymar aru)"
    },
    {
        key: "az",
        value: "azerbaijani",
        text: "Azerbaijani (azərbaycan dili)"
    },
    {
        key: "bm",
        value: "bambara",
        text: "Bambara (bamanankan)"
    },
    {
        key: "ba",
        value: "bashkir",
        text: "Bashkir (башҡорт теле)"
    },
    {
        key: "eu",
        value: "basque",
        text: "Basque (euskara, euskera)"
    },
    {
        key: "be",
        value: "belarusian",
        text: "Belarusian (Беларуская)"
    },
    {
        key: "bn",
        value: "bengali",
        text: "Bengali (বাংলা)"
    },
    {
        key: "bh",
        value: "bihari",
        text: "Bihari (भोजपुरी)"
    },
    {
        key: "bi",
        value: "bislama",
        text: "Bislama (Bislama)"
    },
    {
        key: "bs",
        value: "bosnian",
        text: "Bosnian (bosanski jezik)"
    },
    {
        key: "br",
        value: "breton",
        text: "Breton (brezhoneg)"
    },
    {
        key: "bg",
        value: "bulgarian",
        text: "Bulgarian (български език)"
    },
    {
        key: "my",
        value: "burmese",
        text: "Burmese (ဗမာစာ)"
    },
    {
        key: "ca",
        value: "catalan; valencian",
        text: "Catalan; Valencian (Català)"
    },
    {
        key: "ch",
        value: "chamorro",
        text: "Chamorro (Chamoru)"
    },
    {
        key: "ce",
        value: "chechen",
        text: "Chechen (нохчийн мотт)"
    },
    {
        key: "ny",
        value: "chichewa; chewa; nyanja",
        text: "Chichewa; Chewa; Nyanja (chiCheŵa, chinyanja)"
    },
    {
        key: "zh",
        value: "chinese",
        text: "Chinese (中文 (Zhōngwén), 汉语, 漢語)"
    },
    {
        key: "cv",
        value: "chuvash",
        text: "Chuvash (чӑваш чӗлхи)"
    },
    {
        key: "kw",
        value: "cornish",
        text: "Cornish (Kernewek)"
    },
    {
        key: "co",
        value: "corsican",
        text: "Corsican (corsu, lingua corsa)"
    },
    {
        key: "cr",
        value: "cree",
        text: "Cree (ᓀᐦᐃᔭᐍᐏᐣ)"
    },
    {
        key: "hr",
        value: "croatian",
        text: "Croatian (hrvatski)"
    },
    {
        key: "cs",
        value: "czech",
        text: "Czech (česky, čeština)"
    },
    {
        key: "da",
        value: "danish",
        text: "Danish (dansk)"
    },
    {
        key: "dv",
        value: "divehi; dhivehi; maldivian;",
        text: "Divehi; Dhivehi; Maldivian; (ދިވެހި)"
    },
    {
        key: "nl",
        value: "dutch",
        text: "Dutch (Nederlands, Vlaams)"
    },
    {
        key: "en",
        value: "english",
        text: "English (English)"
    },
    {
        key: "eo",
        value: "esperanto",
        text: "Esperanto (Esperanto)"
    },
    {
        key: "et",
        value: "estonian",
        text: "Estonian (eesti, eesti keel)"
    },
    {
        key: "ee",
        value: "ewe",
        text: "Ewe (Eʋegbe)"
    },
    {
        key: "fo",
        value: "faroese",
        text: "Faroese (føroyskt)"
    },
    {
        key: "fj",
        value: "fijian",
        text: "Fijian (vosa Vakaviti)"
    },
    {
        key: "fi",
        value: "finnish",
        text: "Finnish (suomi, suomen kieli)"
    },
    {
        key: "fr",
        value: "french",
        text: "French (français, langue française)"
    },
    {
        key: "ff",
        value: "fula; fulah; pulaar; pular",
        text: "Fula; Fulah; Pulaar; Pular (Fulfulde, Pulaar, Pular)"
    },
    {
        key: "gl",
        value: "galician",
        text: "Galician (Galego)"
    },
    {
        key: "ka",
        value: "georgian",
        text: "Georgian (ქართული)"
    },
    {
        key: "de",
        value: "german",
        text: "German (Deutsch)"
    },
    {
        key: "el",
        value: "greek, modern",
        text: "Greek, Modern (Ελληνικά)"
    },
    {
        key: "gn",
        value: "guaraní",
        text: "Guaraní (Avañeẽ)"
    },
    {
        key: "gu",
        value: "gujarati",
        text: "Gujarati (ગુજરાતી)"
    },
    {
        key: "ht",
        value: "haitian; haitian creole",
        text: "Haitian; Haitian Creole (Kreyòl ayisyen)"
    },
    {
        key: "ha",
        value: "hausa",
        text: "Hausa (Hausa, هَوُسَ)"
    },
    {
        key: "he",
        value: "hebrew (modern)",
        text: "Hebrew (modern) (עברית)"
    },
    {
        key: "hz",
        value: "herero",
        text: "Herero (Otjiherero)"
    },
    {
        key: "hi",
        value: "hindi",
        text: "Hindi (हिन्दी, हिंदी)"
    },
    {
        key: "ho",
        value: "hiri motu",
        text: "Hiri Motu (Hiri Motu)"
    },
    {
        key: "hu",
        value: "hungarian",
        text: "Hungarian (Magyar)"
    },
    {
        key: "ia",
        value: "interlingua",
        text: "Interlingua (Interlingua)"
    },
    {
        key: "id",
        value: "indonesian",
        text: "Indonesian (Bahasa Indonesia)"
    },
    {
        key: "ie",
        value: "interlingue",
        text: "Interlingue (Originally called Occidental; then Interlingue after WWII)"
    },
    {
        key: "ga",
        value: "irish",
        text: "Irish (Gaeilge)"
    },
    {
        key: "ig",
        value: "igbo",
        text: "Igbo (Asụsụ Igbo)"
    },
    {
        key: "ik",
        value: "inupiaq",
        text: "Inupiaq (Iñupiaq, Iñupiatun)"
    },
    {
        key: "io",
        value: "ido",
        text: "Ido (Ido)"
    },
    {
        key: "is",
        value: "icelandic",
        text: "Icelandic (Íslenska)"
    },
    {
        key: "it",
        value: "italian",
        text: "Italian (Italiano)"
    },
    {
        key: "iu",
        value: "inuktitut",
        text: "Inuktitut (ᐃᓄᒃᑎᑐᑦ)"
    },
    {
        key: "ja",
        value: "japanese",
        text: "Japanese (日本語 (にほんご／にっぽんご))"
    },
    {
        key: "jv",
        value: "javanese",
        text: "Javanese (basa Jawa)"
    },
    {
        key: "kl",
        value: "kalaallisut, greenlandic",
        text: "Kalaallisut, Greenlandic (kalaallisut, kalaallit oqaasii)"
    },
    {
        key: "kn",
        value: "kannada",
        text: "Kannada (ಕನ್ನಡ)"
    },
    {
        key: "kr",
        value: "kanuri",
        text: "Kanuri (Kanuri)"
    },
    {
        key: "ks",
        value: "kashmiri",
        text: "Kashmiri (कश्मीरी, كشميري‎)"
    },
    {
        key: "kk",
        value: "kazakh",
        text: "Kazakh (Қазақ тілі)"
    },
    {
        key: "km",
        value: "khmer",
        text: "Khmer (ភាសាខ្មែរ)"
    },
    {
        key: "ki",
        value: "kikuyu, gikuyu",
        text: "Kikuyu, Gikuyu (Gĩkũyũ)"
    },
    {
        key: "rw",
        value: "kinyarwanda",
        text: "Kinyarwanda (Ikinyarwanda)"
    },
    {
        key: "ky",
        value: "kirghiz, kyrgyz",
        text: "Kirghiz, Kyrgyz (кыргыз тили)"
    },
    {
        key: "kv",
        value: "komi",
        text: "Komi (коми кыв)"
    },
    {
        key: "kg",
        value: "kongo",
        text: "Kongo (KiKongo)"
    },
    {
        key: "ko",
        value: "korean",
        text: "Korean (한국어 (韓國語), 조선말 (朝鮮語))"
    },
    {
        key: "ku",
        value: "kurdish",
        text: "Kurdish (Kurdî, كوردی‎)"
    },
    {
        key: "kj",
        value: "kwanyama, kuanyama",
        text: "Kwanyama, Kuanyama (Kuanyama)"
    },
    {
        key: "la",
        value: "latin",
        text: "Latin (latine, lingua latina)"
    },
    {
        key: "lb",
        value: "luxembourgish, letzeburgesch",
        text: "Luxembourgish, Letzeburgesch (Lëtzebuergesch)"
    },
    {
        key: "lg",
        value: "luganda",
        text: "Luganda (Luganda)"
    },
    {
        key: "li",
        value: "limburgish, limburgan, limburger",
        text: "Limburgish, Limburgan, Limburger (Limburgs)"
    },
    {
        key: "ln",
        value: "lingala",
        text: "Lingala (Lingála)"
    },
    {
        key: "lo",
        value: "lao",
        text: "Lao (ພາສາລາວ)"
    },
    {
        key: "lt",
        value: "lithuanian",
        text: "Lithuanian (lietuvių kalba)"
    },
    {
        key: "lu",
        value: "luba-katanga",
        text: "Luba-Katanga ()"
    },
    {
        key: "lv",
        value: "latvian",
        text: "Latvian (latviešu valoda)"
    },
    {
        key: "gv",
        value: "manx",
        text: "Manx (Gaelg, Gailck)"
    },
    {
        key: "mk",
        value: "macedonian",
        text: "Macedonian (македонски јазик)"
    },
    {
        key: "mg",
        value: "malagasy",
        text: "Malagasy (Malagasy fiteny)"
    },
    {
        key: "ms",
        value: "malay",
        text: "Malay (bahasa Melayu, بهاس ملايو‎)"
    },
    {
        key: "ml",
        value: "malayalam",
        text: "Malayalam (മലയാളം)"
    },
    {
        key: "mt",
        value: "maltese",
        text: "Maltese (Malti)"
    },
    {
        key: "mi",
        value: "māori",
        text: "Māori (te reo Māori)"
    },
    {
        key: "mr",
        value: "marathi (marāṭhī)",
        text: "Marathi (Marāṭhī) (मराठी)"
    },
    {
        key: "mh",
        value: "marshallese",
        text: "Marshallese (Kajin M̧ajeļ)"
    },
    {
        key: "mn",
        value: "mongolian",
        text: "Mongolian (монгол)"
    },
    {
        key: "na",
        value: "nauru",
        text: "Nauru (Ekakairũ Naoero)"
    },
    {
        key: "nv",
        value: "navajo, navaho",
        text: "Navajo, Navaho (Diné bizaad, Dinékʼehǰí)"
    },
    {
        key: "nb",
        value: "norwegian bokmål",
        text: "Norwegian Bokmål (Norsk bokmål)"
    },
    {
        key: "nd",
        value: "north ndebele",
        text: "North Ndebele (isiNdebele)"
    },
    {
        key: "ne",
        value: "nepali",
        text: "Nepali (नेपाली)"
    },
    {
        key: "ng",
        value: "ndonga",
        text: "Ndonga (Owambo)"
    },
    {
        key: "nn",
        value: "norwegian nynorsk",
        text: "Norwegian Nynorsk (Norsk nynorsk)"
    },
    {
        key: "no",
        value: "norwegian",
        text: "Norwegian (Norsk)"
    },
    {
        key: "ii",
        value: "nuosu",
        text: "Nuosu (ꆈꌠ꒿ Nuosuhxop)"
    },
    {
        key: "nr",
        value: "south ndebele",
        text: "South Ndebele (isiNdebele)"
    },
    {
        key: "oc",
        value: "occitan",
        text: "Occitan (Occitan)"
    },
    {
        key: "oj",
        value: "ojibwe, ojibwa",
        text: "Ojibwe, Ojibwa (ᐊᓂᔑᓈᐯᒧᐎᓐ)"
    },
    // {
    //     key: "cu",
    //     value: "old church slavonic, church slavic, church slavonic, old bulgarian, old slavonic",
    //     text: "Old Church Slavonic, Church Slavic, Church Slavonic, Old Bulgarian, Old Slavonic (ѩзыкъ словѣньскъ)"
    // },
    {
        key: "om",
        value: "oromo",
        text: "Oromo (Afaan Oromoo)"
    },
    {
        key: "or",
        value: "oriya",
        text: "Oriya (ଓଡ଼ିଆ)"
    },
    {
        key: "os",
        value: "ossetian, ossetic",
        text: "Ossetian, Ossetic (ирон æвзаг)"
    },
    {
        key: "pa",
        value: "panjabi, punjabi",
        text: "Panjabi, Punjabi (ਪੰਜਾਬੀ, پنجابی‎)"
    },
    {
        key: "pi",
        value: "pāli",
        text: "Pāli (पाऴि)"
    },
    {
        key: "fa",
        value: "persian",
        text: "Persian (فارسی)"
    },
    {
        key: "pl",
        value: "polish",
        text: "Polish (polski)"
    },
    {
        key: "ps",
        value: "pashto, pushto",
        text: "Pashto, Pushto (پښتو)"
    },
    {
        key: "pt",
        value: "portuguese",
        text: "Portuguese (Português)"
    },
    {
        key: "qu",
        value: "quechua",
        text: "Quechua (Runa Simi, Kichwa)"
    },
    {
        key: "rm",
        value: "romansh",
        text: "Romansh (rumantsch grischun)"
    },
    {
        key: "rn",
        value: "kirundi",
        text: "Kirundi (kiRundi)"
    },
    {
        key: "ro",
        value: "romanian, moldavian, moldovan",
        text: "Romanian, Moldavian, Moldovan (română)"
    },
    {
        key: "ru",
        value: "russian",
        text: "Russian (русский язык)"
    },
    {
        key: "sa",
        value: "sanskrit (saṁskṛta)",
        text: "Sanskrit (Saṁskṛta) (संस्कृतम्)"
    },
    {
        key: "sc",
        value: "sardinian",
        text: "Sardinian (sardu)"
    },
    {
        key: "sd",
        value: "sindhi",
        text: "Sindhi (सिन्धी, سنڌي، سندھی‎)"
    },
    {
        key: "se",
        value: "northern sami",
        text: "Northern Sami (Davvisámegiella)"
    },
    {
        key: "sm",
        value: "samoan",
        text: "Samoan (gagana faa Samoa)"
    },
    {
        key: "sg",
        value: "sango",
        text: "Sango (yângâ tî sängö)"
    },
    {
        key: "sr",
        value: "serbian",
        text: "Serbian (српски језик)"
    },
    {
        key: "gd",
        value: "scottish gaelic; gaelic",
        text: "Scottish Gaelic; Gaelic (Gàidhlig)"
    },
    {
        key: "sn",
        value: "shona",
        text: "Shona (chiShona)"
    },
    {
        key: "si",
        value: "sinhala, sinhalese",
        text: "Sinhala, Sinhalese (සිංහල)"
    },
    {
        key: "sk",
        value: "slovak",
        text: "Slovak (slovenčina)"
    },
    {
        key: "sl",
        value: "slovene",
        text: "Slovene (slovenščina)"
    },
    {
        key: "so",
        value: "somali",
        text: "Somali (Soomaaliga, af Soomaali)"
    },
    {
        key: "st",
        value: "southern sotho",
        text: "Southern Sotho (Sesotho)"
    },
    {
        key: "es",
        value: "spanish; castilian",
        text: "Spanish; Castilian (español, castellano)"
    },
    {
        key: "su",
        value: "sundanese",
        text: "Sundanese (Basa Sunda)"
    },
    {
        key: "sw",
        value: "swahili",
        text: "Swahili (Kiswahili)"
    },
    {
        key: "ss",
        value: "swati",
        text: "Swati (SiSwati)"
    },
    {
        key: "sv",
        value: "swedish",
        text: "Swedish (svenska)"
    },
    {
        key: "ta",
        value: "tamil",
        text: "Tamil (தமிழ்)"
    },
    {
        key: "te",
        value: "telugu",
        text: "Telugu (తెలుగు)"
    },
    {
        key: "tg",
        value: "tajik",
        text: "Tajik (тоҷикӣ, toğikī, تاجیکی‎)"
    },
    {
        key: "th",
        value: "thai",
        text: "Thai (ไทย)"
    },
    {
        key: "ti",
        value: "tigrinya",
        text: "Tigrinya (ትግርኛ)"
    },
    {
        key: "bo",
        value: "tibetan standard, tibetan, central",
        text: "Tibetan Standard, Tibetan, Central (བོད་ཡིག)"
    },
    {
        key: "tk",
        value: "turkmen",
        text: "Turkmen (Türkmen, Түркмен)"
    },
    {
        key: "tl",
        value: "tagalog",
        text: "Tagalog (Wikang Tagalog, ᜏᜒᜃᜅ᜔ ᜆᜄᜎᜓᜄ᜔)"
    },
    {
        key: "tn",
        value: "tswana",
        text: "Tswana (Setswana)"
    },
    {
        key: "to",
        value: "tonga (tonga islands)",
        text: "Tonga (Tonga Islands) (faka Tonga)"
    },
    {
        key: "tr",
        value: "turkish",
        text: "Turkish (Türkçe)"
    },
    {
        key: "ts",
        value: "tsonga",
        text: "Tsonga (Xitsonga)"
    },
    {
        key: "tt",
        value: "tatar",
        text: "Tatar (татарча, tatarça, تاتارچا‎)"
    },
    {
        key: "tw",
        value: "twi",
        text: "Twi (Twi)"
    },
    {
        key: "ty",
        value: "tahitian",
        text: "Tahitian (Reo Tahiti)"
    },
    {
        key: "ug",
        value: "uighur, uyghur",
        text: "Uighur, Uyghur (Uyƣurqə, ئۇيغۇرچە‎)"
    },
    {
        key: "uk",
        value: "ukrainian",
        text: "Ukrainian (українська)"
    },
    {
        key: "ur",
        value: "urdu",
        text: "Urdu (اردو)"
    },
    {
        key: "uz",
        value: "uzbek",
        text: "Uzbek (zbek, Ўзбек, أۇزبېك‎)"
    },
    {
        key: "ve",
        value: "venda",
        text: "Venda (Tshivenḓa)"
    },
    {
        key: "vi",
        value: "vietnamese",
        text: "Vietnamese (Tiếng Việt)"
    },
    {
        key: "vo",
        value: "volapük",
        text: "Volapük (Volapük)"
    },
    {
        key: "wa",
        value: "walloon",
        text: "Walloon (Walon)"
    },
    {
        key: "cy",
        value: "welsh",
        text: "Welsh (Cymraeg)"
    },
    {
        key: "wo",
        value: "wolof",
        text: "Wolof (Wollof)"
    },
    {
        key: "fy",
        value: "western frisian",
        text: "Western Frisian (Frysk)"
    },
    {
        key: "xh",
        value: "xhosa",
        text: "Xhosa (isiXhosa)"
    },
    {
        key: "yi",
        value: "yiddish",
        text: "Yiddish (ייִדיש)"
    },
    {
        key: "yo",
        value: "yoruba",
        text: "Yoruba (Yorùbá)"
    },
    {
        key: "za",
        value: "zhuang, chuang",
        text: "Zhuang, Chuang (Saɯ cueŋƅ, Saw cuengh)"
    }
];

export default languages;