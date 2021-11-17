const countries = [
    {
        text: "Afghanistan", value: "afghanistan", continent: "asia", flag: "af", key: "af"
    },
    {
        text: "Åland Islands", value: "åland islands", continent: "europe", flag: "ax", key: "ax"
    },
    {
        text: "Albania", value: "albania", continent: "europe", flag: "al", key: "al"
    },
    {
        text: "Algeria", value: "algeria", continent: "africa", flag: "dz", key: "dz"
    },
    {
        text: "American Samoa", value: "american samoa", continent: "australia/oceania", flag: "as", key: "as"
    },
    {
        text: "Andorra", value: "andorra", continent: "europe", flag: "ad", key: "ad"
    },
    {
        text: "Angola", value: "angola", continent: "africa", flag: "ao", key: "ao"
    },
    {
        text: "Anguilla", value: "anguilla", continent: "north america", flag: "ai", key: "ai"
    },
    {
        text: "Antigua and Barbuda", value: "antigua and barbuda", continent: "north america", flag: "ag", key: "ag"
    },
    {
        text: "Argentina", value: "argentina", continent: "south america", flag: "ar", key: "ar"
    },
    {
        text: "Armenia", value: "armenia", continent: "asia", flag: "am", key: "am"
    },
    {
        text: "Aruba", value: "aruba", continent: "south america", flag: "aw", key: "aw"
    },
    {
        text: "Australia", value: "australia", continent: "australia/oceania", flag: "au", key: "au", alters: ['Österreich']
    },
    {
        text: "Austria", value: "austria", continent: "", flag: "at", key: "at"
    },
    {
        text: "Azerbaijan", value: "azerbaijan", continent: "asia", flag: "az", key: "az"
    },
    {
        text: "Bahamas", value: "bahamas", continent: "north america", flag: "bs", key: "bs"
    },
    {
        text: "Bahrain", value: "bahrain", continent: "asia", flag: "bh", key: "bh"
    },
    {
        text: "Bangladesh", value: "bangladesh", continent: "asia", flag: "bd", key: "bd"
    },
    {
        text: "Barbados", value: "barbados", continent: "north america", flag: "bb", key: "bb"
    },
    {
        text: "Belarus", value: "belarus", continent: "europe", flag: "by", key: "by", alters: ['Беларусь', 'Minsk']
    },
    {
        text: "Belgium", value: "belgium", continent: "europe", flag: "be", key: "be", alters: ['België', 'Belgia']
    },
    {
        text: "Belize", value: "belize", continent: "north america", flag: "bz", key: "bz"
    },
    {
        text: "Benin", value: "benin", continent: "africa", flag: "bj", key: "bj"
    },
    {
        text: "Bermuda", value: "bermuda", continent: "north america", flag: "bm", key: "bm"
    },
    {
        text: "Bhutan", value: "bhutan", continent: "asia", flag: "bt", key: "bt"
    },
    {
        text: "Bolivia", value: "bolivia", continent: "south america", flag: "bo", key: "bo"
    },
    {
        text: "Bosnia and Herzegovina", value: "bosnia and herzegovina", continent: "europe", flag: "ba", key: "ba", alters: ['Bosna i Hercegovina']
    },
    {
        text: "Botswana", value: "botswana", continent: "africa", flag: "bw", key: "bw"
    },
    {
        text: "Bouvet Island", value: "bouvet island", continent: "europe", flag: "bv", key: "bv"
    },
    {
        text: "Brazil", value: "brazil", continent: "south america", flag: "br", key: "br", alters: ['Brasil']
    },
    {
        text: "British Indian Ocean Territory", value: "british indian ocean territory", continent: "asia", flag: "io", key: "io"
    },
    {
        text: "Brunei Darussalam", value: "brunei darussalam", continent: "asia", flag: "bn", key: "bn"
    },
    {
        text: "Bulgaria", value: "bulgaria", continent: "europe", flag: "bg", key: "bg", alters: ['България']
    },
    {
        text: "Burkina Faso", value: "burkina faso", continent: "africa", flag: "bf", key: "bf"
    },
    {
        text: "Burundi", value: "burundi", continent: "africa", flag: "bi", key: "bi"
    },
    {
        text: "Cambodia", value: "cambodia", continent: "asia", flag: "kh", key: "kh"
    },
    {
        text: "Cameroon", value: "cameroon", continent: "africa", flag: "cm", key: "cm"
    },
    {
        text: "Canada", value: "canada", continent: "north america", flag: "ca", key: "ca"
    },
    {
        text: "Cape Verde", value: "cape verde", continent: "africa", flag: "cv", key: "cv"
    },
    {
        text: "Cayman Islands", value: "cayman islands", continent: "north america", flag: "ky", key: "ky"
    },
    {
        text: "Central African Republic", value: "central african republic", continent: "africa", flag: "cf", key: "cf"
    },
    {
        text: "Chad", value: "chad", continent: "africa", flag: "td", key: "td"
    },
    {
        text: "Chile", value: "chile", continent: "south america", flag: "cl", key: "cl"
    },
    {
        text: "China", value: "china", continent: "asia", flag: "cn", key: "cn"
    },
    {
        text: "Christmas Island", value: "christmas island", continent: "asia", flag: "cx", key: "cx"
    },
    {
        text: "Cocos (Keeling) Islands", value: "cocos (keeling) islands", continent: "asia", flag: "cc", key: "cc"
    },
    {
        text: "Colombia", value: "colombia", continent: "south america", flag: "co", key: "co"
    },
    {
        text: "Comoros", value: "comoros", continent: "africa", flag: "km", key: "km"
    },
    {
        text: "Congo", value: "congo", continent: "africa", flag: "cg", key: "cg"
    },
    {
        text: "Congo, The Democratic Republic of the", value: "congo, the democratic republic of the", continent: "africa", flag: "cd", key: "cd"
    },
    {
        text: "Cook Islands", value: "cook islands", continent: "australia/oceania", flag: "ck", key: "ck"
    },
    {
        text: "Costa Rica", value: "costa rica", continent: "north america", flag: "cr", key: "cr"
    },
    {
        text: "Cote D'Ivoire", value: "cote d'ivoire", continent: "africa", flag: "ci", key: "ci"
    },
    {
        text: "Croatia", value: "croatia", continent: "europe", flag: "hr", key: "hr", alters: ['Hrvatska']
    },
    {
        text: "Cuba", value: "cuba", continent: "north america", flag: "cu", key: "cu"
    },
    {
        text: "Cyprus", value: "cyprus", continent: "europe", flag: "cy", key: "cy"
    },
    {
        text: "Czech Republic", value: "czech republic", continent: "europe", flag: "cz", key: "cz", alters:['Czechia', 'Česko']
    },
    {
        text: "Denmark", value: "denmark", continent: "europe", flag: "dk", key: "dk"
    },
    {
        text: "Djibouti", value: "djibouti", continent: "africa", flag: "dj", key: "dj"
    },
    {
        text: "Dominica", value: "dominica", continent: "north america", flag: "dm", key: "dm"
    },
    {
        text: "Dominican Republic", value: "dominican republic", continent: "north america", flag: "do", key: "do"
    },
    {
        text: "Ecuador", value: "ecuador", continent: "south america", flag: "ec", key: "ec"
    },
    {
        text: "Egypt", value: "egypt", continent: "africa", flag: "eg", key: "eg"
    },
    {
        text: "El Salvador", value: "el salvador", continent: "north america", flag: "sv", key: "sv"
    },
    {
        text: "Equatorial Guinea", value: "equatorial guinea", continent: "africa", flag: "gq", key: "gq"
    },
    {
        text: "Eritrea", value: "eritrea", continent: "africa", flag: "er", key: "er"
    },
    {
        text: "Estonia", value: "estonia", continent: "europe", flag: "ee", key: "ee", alters: ['Эстония']
    },
    {
        text: "Ethiopia", value: "ethiopia", continent: "africa", flag: "et", key: "et"
    },
    {
        text: "Falkland Islands (Malvinas)", value: "falkland islands (malvinas)", continent: "south america", flag: "fk", key: "fk"
    },
    {
        text: "Faroe Islands", value: "faroe islands", continent: "europe", flag: "fo", key: "fo"
    },
    {
        text: "Fiji", value: "fiji", continent: "australia/oceania", flag: "fj", key: "fj"
    },
    {
        text: "Finland", value: "finland", continent: "europe", flag: "fi", key: "fi"
    },
    {
        text: "France", value: "france", continent: "europe", flag: "fr", key: "fr", alters: ['Франция']
    },
    {
        text: "French Guiana", value: "french guiana", continent: "south america", flag: "gf", key: "gf"
    },
    {
        text: "French Polynesia", value: "french polynesia", continent: "australia/oceania", flag: "pf", key: "pf"
    },
    {
        text: "French Southern Territories", value: "french southern territories", continent: "asia", flag: "tf", key: "tf"
    },
    {
        text: "Gabon", value: "gabon", continent: "africa", flag: "ga", key: "ga"
    },
    {
        text: "Gambia", value: "gambia", continent: "africa", flag: "gm", key: "gm"
    },
    {
        text: "Georgia", value: "georgia", continent: "asia", flag: "ge", key: "ge"
    },
    {
        text: "Germany", value: "germany", continent: "europe", flag: "de", key: "de", alters: ['Deutschland', 'Munich', 'Berlin']
    },
    {
        text: "Ghana", value: "ghana", continent: "africa", flag: "gh", key: "gh"
    },
    {
        text: "Gibraltar", value: "gibraltar", continent: "europe", flag: "gi", key: "gi"
    },
    {
        text: "Greece", value: "greece", continent: "europe", flag: "gr", key: "gr", alters: ['Ελλάδα']
    },
    {
        text: "Greenland", value: "greenland", continent: "north america", flag: "gl", key: "gl"
    },
    {
        text: "Grenada", value: "grenada", continent: "north america", flag: "gd", key: "gd"
    },
    {
        text: "Guadeloupe", value: "guadeloupe", continent: "north america", flag: "gp", key: "gp"
    },
    {
        text: "Guam", value: "guam", continent: "australia/oceania", flag: "gu", key: "gu"
    },
    {
        text: "Guatemala", value: "guatemala", continent: "north america", flag: "gt", key: "gt"
    },
    {
        text: "Guinea", value: "guinea", continent: "africa", flag: "gn", key: "gn"
    },
    {
        text: "Guinea-Bissau", value: "guinea-bissau", continent: "africa", flag: "gw", key: "gw"
    },
    {
        text: "Guyana", value: "guyana", continent: "south america", flag: "gy", key: "gy"
    },
    {
        text: "Haiti", value: "haiti", continent: "north america", flag: "ht", key: "ht"
    },
    {
        text: "Heard Island and Mcdonald Islands", value: "heard island and mcdonald islands", continent: "antarctica", flag: "hm", key: "hm"
    },
    {
        text: "Holy See (Vatican City State)", value: "holy see (vatican city state)", continent: "europe", flag: "va", key: "va"
    },
    {
        text: "Honduras", value: "honduras", continent: "north america", flag: "hn", key: "hn"
    },
    {
        text: "Hong Kong", value: "hong kong", continent: "asia", flag: "hk", key: "hk"
    },
    {
        text: "Hungary", value: "hungary", continent: "europe", flag: "hu", key: "hu", alters: ['Magyarország', 'Ungheria']
    },
    {
        text: "Iceland", value: "iceland", continent: "europe", flag: "is", key: "is"
    },
    {
        text: "India", value: "india", continent: "asia", flag: "in", key: "in"
    },
    {
        text: "Indonesia", value: "indonesia", continent: "asia", flag: "id", key: "id"
    },
    {
        text: "Iran, Islamic Republic Of", value: "iran, islamic republic of", continent: "asia", flag: "ir", key: "ir", alters: ['Iran']
    },
    {
        text: "Iraq", value: "iraq", continent: "asia", flag: "iq", key: "iq"
    },
    {
        text: "Ireland", value: "ireland", continent: "europe", flag: "ie", key: "ie", alters:['Irlanda', 'Irland']
    },
    {
        text: "Israel", value: "israel", continent: "asia", flag: "il", key: "il"
    },
    {
        text: "Italy", value: "italy", continent: "europe", flag: "it", key: "it", alters:['Italia', 'Italie']
    },
    {
        text: "Jamaica", value: "jamaica", continent: "north america", flag: "jm", key: "jm"
    },
    {
        text: "Japan", value: "japan", continent: "asia", flag: "jp", key: "jp"
    },
    {
        text: "Jordan", value: "jordan", continent: "asia", flag: "jo", key: "jo"
    },
    {
        text: "Kazakhstan", value: "kazakhstan", continent: "asia", flag: "kz", key: "kz"
    },
    {
        text: "Kenya", value: "kenya", continent: "africa", flag: "ke", key: "ke"
    },
    {
        text: "Kiribati", value: "kiribati", continent: "australia/oceania", flag: "ki", key: "ki"
    },
    {
        text: "Korea, Democratic People'S Republic of", value: "korea, democratic people's republic of", continent: "asia", flag: "kp", key: "kp"
    },
    {
        text: "Korea, Republic of", value: "korea, republic of", continent: "asia", flag: "kr", key: "kr", alters: ['South Korea', '대한민국', 'Coreia do Sul']
    },
    {   
        text: 'Kosovo', value: 'kosovo', continent: "europe", alters: [ 'Pristina', 'Kosovo', 'Prishtina']
    },
    {
        text: "Kuwait", value: "kuwait", continent: "asia", flag: "kw", key: "kw"
    },
    {
        text: "Kyrgyzstan", value: "kyrgyzstan", continent: "asia", flag: "kg", key: "kg"
    },
    {
        text: "Lao People'S Democratic Republic", value: "lao people's democratic republic", continent: "asia", flag: "la", key: "la"
    },
    {
        text: "Latvia", value: "latvia", continent: "europe", flag: "lv", key: "lv", alters: ['Latvija']
    },
    {
        text: "Lebanon", value: "lebanon", continent: "asia", flag: "lb", key: "lb"
    },
    {
        text: "Lesotho", value: "lesotho", continent: "africa", flag: "ls", key: "ls"
    },
    {
        text: "Liberia", value: "liberia", continent: "africa", flag: "lr", key: "lr"
    },
    {
        text: "Libyan Arab Jamahiriya", value: "libyan arab jamahiriya", continent: "africa", flag: "ly", key: "ly"
    },
    {
        text: "Liechtenstein", value: "liechtenstein", continent: "europe", flag: "li", key: "li"
    },
    {
        text: "Lithuania", value: "lithuania", continent: "europe", flag: "lt", key: "lt", alters: ['Lietuva']
    },
    {
        text: "Luxembourg", value: "luxembourg", continent: "europe", flag: "lu", key: "lu"
    },
    {
        text: "Macao", value: "macao", continent: "asia", flag: "mo", key: "mo"
    },
    {
        text: "Macedonia, The Former Yugoslav Republic of", value: "macedonia, the former yugoslav republic of", continent: "europe", flag: "mk", key: "mk", alters: ['Macedonia']
    },
    {
        text: "Madagascar", value: "madagascar", continent: "africa", flag: "mg", key: "mg"
    },
    {
        text: "Malawi", value: "malawi", continent: "africa", flag: "mw", key: "mw"
    },
    {
        text: "Malaysia", value: "malaysia", continent: "asia", flag: "my", key: "my"
    },
    {
        text: "Maldives", value: "maldives", continent: "asia", flag: "mv", key: "mv"
    },
    {
        text: "Mali", value: "mali", continent: "africa", flag: "ml", key: "ml"
    },
    {
        text: "Malta", value: "malta", continent: "europe", flag: "mt", key: "mt"
    },
    {
        text: "Marshall Islands", value: "marshall islands", continent: "australia/oceania", flag: "mh", key: "mh"
    },
    {
        text: "Martinique", value: "martinique", continent: "north america", flag: "mq", key: "mq"
    },
    {
        text: "Mauritania", value: "mauritania", continent: "africa", flag: "mr", key: "mr"
    },
    {
        text: "Mauritius", value: "mauritius", continent: "africa", flag: "mu", key: "mu"
    },
    {
        text: "Mayotte", value: "mayotte", continent: "africa", flag: "yt", key: "yt"
    },
    {
        text: "Mexico", value: "mexico", continent: "north america", flag: "mx", key: "mx"
    },
    {
        text: "Micronesia, Federated States of", value: "micronesia, federated states of", continent: "australia/oceania", flag: "fm", key: "fm"
    },
    {
        text: "Moldova, Republic of", value: "moldova, republic of", continent: "europe", flag: "md", key: "md", alters: ['Moldova']
    },
    {
        text: "Monaco", value: "monaco", continent: "europe", flag: "mc", key: "mc"
    },
    {
        text: "Mongolia", value: "mongolia", continent: "asia", flag: "mn", key: "mn"
    },
    {
        text: 'Montenegro', value: 'montenegro', continent: "europe", alters: ['Montenegro', 'Черногория',]
    },
    {
        text: "Montserrat", value: "montserrat", continent: "north america", flag: "ms", key: "ms"
    },
    {
        text: "Morocco", value: "morocco", continent: "africa", flag: "ma", key: "ma"
    },
    {
        text: "Mozambique", value: "mozambique", continent: "africa", flag: "mz", key: "mz"
    },
    {
        text: "Myanmar", value: "myanmar", continent: "asia", flag: "mm", key: "mm"
    },
    {
        text: "Namibia", value: "namibia", continent: "africa", flag: "na", key: "na"
    },
    {
        text: "Nauru", value: "nauru", continent: "australia/oceania", flag: "nr", key: "nr"
    },
    {
        text: "Nepal", value: "nepal", continent: "asia", flag: "np", key: "np"
    },
    {
        text: "Netherlands", value: "netherlands", continent: "europe", flag: "nl", key: "nl", alters: ['Nederland']
    },
    {
        text: "Netherlands Antilles", value: "netherlands antilles", continent: "europe", flag: "an", key: "an"
    },
    {
        text: "New Caledonia", value: "new caledonia", continent: "australia/oceania", flag: "nc", key: "nc"
    },
    {
        text: "New Zealand", value: "new zealand", continent: "australia/oceania", flag: "nz", key: "nz"
    },
    {
        text: "Nicaragua", value: "nicaragua", continent: "orth america", flag: "ni", key: "ni"
    },
    {
        text: "Niger", value: "niger", continent: "africa", flag: "ne", key: "ne"
    },
    {
        text: "Nigeria", value: "nigeria", continent: "africa", flag: "ng", key: "ng"
    },
    {
        text: "Niue", value: "niue", continent: "australia/oceania", flag: "nu", key: "nu"
    },
    {
        text: "Norfolk Island", value: "norfolk island", continent: "australia/oceania", flag: "nf", key: "nf"
    },
    {
        text: "Northern Mariana Islands", value: "northern mariana islands", continent: "australia/oceania", flag: "mp", key: "mp"
    },
    {
        text: "Norway", value: "norway", continent: "europe", flag: "no", key: "no"
    },
    {
        text: "Oman", value: "oman", continent: "asia", flag: "om", key: "om"
    },
    {
        text: "Pakistan", value: "pakistan", continent: "asia", flag: "pk", key: "pk"
    },
    {
        text: "Palau", value: "palau", continent: "australia/oceania", flag: "pw", key: "pw"
    },
    {
        text: "Palestinian Territory, Occupied", value: "palestinian territory, occupied", continent: "asia", flag: "ps", key: "ps"
    },
    {
        text: "Panama", value: "panama", continent: "north america", flag: "pa", key: "pa"
    },
    {
        text: "Papua New Guinea", value: "papua new guinea", continent: "australia/oceania", flag: "pg", key: "pg"
    },
    {
        text: "Paraguay", value: "paraguay", continent: "south america", flag: "py", key: "py"
    },
    {
        text: "Peru", value: "peru", continent: "south america", flag: "pe", key: "pe", alters: ['Pérou']
    },
    {
        text: "Philippines", value: "philippines", continent: "asia", flag: "ph", key: "ph"
    },
    {
        text: "Pitcairn", value: "pitcairn", continent: "australia/oceania", flag: "pn", key: "pn"
    },
    {
        text: "Poland", value: "poland", continent: "europe", flag: "pl", key: "pl", alters: ['Polska', 'Polonia', 'Польща', 'Warszawa']
    },
    {
        text: "Portugal", value: "portugal", continent: "europe", flag: "pt", key: "pt"
    },
    {
        text: "Puerto Rico", value: "puerto rico", continent: "north america", flag: "pr", key: "pr"
    },
    {
        text: "Qatar", value: "qatar", continent: "asia", flag: "qa", key: "qa"
    },
    {
        text: "Reunion", value: "reunion", continent: "africa", flag: "re", key: "re"
    },
    {
        text: "Romania", value: "romania", continent: "europe", flag: "ro", key: "ro", alters: ['România']
    },
    {
        text: "Russian Federation", value: "russian federation", continent: "europe", flag: "ru", key: "ru", alters: ['Russia', 'Россия']
    },
    {
        text: "Rwanda", value: "rwanda", continent: "africa", flag: "rw", key: "rw"
    },
    {
        text: "Saint Helena", value: "saint helena", continent: "africa", flag: "sh", key: "sh"
    },
    {
        text: "Saint Kitts and Nevis", value: "saint kitts and nevis", continent: "north america", flag: "kn", key: "kn"
    },
    {
        text: "Saint Lucia", value: "saint lucia", continent: "north america", flag: "lc", key: "lc"
    },
    {
        text: "Saint Pierre and Miquelon", value: "saint pierre and miquelon", continent: "north america", flag: "pm", key: "pm"
    },
    {
        text: "Saint Vincent and the Grenadines", value: "saint vincent and the grenadines", continent: "north america", flag: "vc", key: "vc"
    },
    {
        text: "Samoa", value: "samoa", continent: "australia/oceania", flag: "ws", key: "ws"
    },
    {
        text: "San Marino", value: "san marino", continent: "europe", flag: "sm", key: "sm"
    },
    {
        text: "Sao Tome and Principe", value: "sao tome and principe", continent: "africa", flag: "st", key: "st"
    },
    {
        text: "Saudi Arabia", value: "saudi arabia", continent: "asia", flag: "sa", key: "sa"
    },
    {
        text: "Senegal", value: "senegal", continent: "africa", flag: "sn", key: "sn"
    },
    {
        text: "Serbia", value: "serbia", continent: "europe", flag: "rs", key: "rs"
    },
    {
        text: "Seychelles", value: "seychelles", continent: "africa", flag: "sc", key: "sc"
    },
    {
        text: "Sierra Leone", value: "sierra leone", continent: "africa", flag: "sl", key: "sl"
    },
    {
        text: "Singapore", value: "singapore", continent: "asia", flag: "sg", key: "sg"
    },
    {
        text: "Slovakia", value: "slovakia", continent: "europe", flag: "sk", key: "sk", alters: ['Szlovákia']
    },
    {
        text: "Slovenia", value: "slovenia", continent: "europe", flag: "si", key: "si", alters: ['Slovenija']
    },
    {
        text: "Solomon Islands", value: "solomon islands", continent: "australia/oceania", flag: "sb", key: "sb"
    },
    {
        text: "Somalia", value: "somalia", continent: "africa", flag: "so", key: "so"
    },
    {
        text: "South Africa", value: "south africa", continent: "africa", flag: "za", key: "za", alters: ['Südafrika']
    },
    {
        text: "South Georgia and the South Sandwich Islands", value: "south georgia and the south sandwich islands", continent: "antarctica", flag: "gs", key: "gs"
    },
    {
        text: "Spain", value: "spain", continent: "europe", flag: "es", key: "es", alters: ['España']
    },
    {
        text: "Sri Lanka", value: "sri lanka", continent: "asia", flag: "lk", key: "lk"
    },
    {
        text: "Sudan", value: "sudan", continent: "africa", flag: "sd", key: "sd"
    },
    {
        text: "Suriname", value: "suriname", continent: "south america", flag: "sr", key: "sr"
    },
    {
        text: "Svalbard and Jan Mayen", value: "svalbard and jan mayen", continent: "europe", flag: "sj", key: "sj"
    },
    {
        text: "Swaziland", value: "swaziland", continent: "africa", flag: "sz", key: "sz"
    },
    {
        text: "Sweden", value: "sweden", continent: "europe", flag: "se", key: "se", alters: ['Sverige', 'Suecia']
    },
    {
        text: "Switzerland", value: "switzerland", continent: "europe", flag: "ch", key: "ch", alters: ['Schweiz']
    },
    {
        text: "Syrian Arab Republic", value: "syrian arab republic", continent: "asia", flag: "sy", key: "sy"
    },
    {
        text: "Taiwan, Province of China", value: "taiwan, province of china", continent: "asia", flag: "tw", key: "tw", alters: ['Taiwan']
    },
    {
        text: "Tajikistan", value: "tajikistan", continent: "asia", flag: "tj", key: "tj"
    },
    {
        text: "Tanzania, United Republic of", value: "tanzania, united republic of", continent: "africa", flag: "tz", key: "tz"
    },
    {
        text: "Thailand", value: "thailand", continent: "asia", flag: "th", key: "th"
    },
    {
        text: "Timor-Leste", value: "timor-leste", continent: "asia", flag: "tl", key: "tl"
    },
    {
        text: "Togo", value: "togo", continent: "africa", flag: "tg", key: "tg"
    },
    {
        text: "Tokelau", value: "tokelau", continent: "australia/oceania", flag: "tk", key: "tk"
    },
    {
        text: "Tonga", value: "tonga", continent: "australia/oceania", flag: "to", key: "to"
    },
    {
        text: "Trinidad and Tobago", value: "trinidad and tobago", continent: "south america", flag: "tt", key: "tt"
    },
    {
        text: "Tunisia", value: "tunisia", continent: "africa", flag: "tn", key: "tn", alters: ['Tunisie']
    },
    {
        text: "Turkey", value: "turkey", continent: "europe", flag: "tr", key: "tr", alters: ['Türkiye', 'Turquie']
    },
    {
        text: "Turkmenistan", value: "turkmenistan", continent: "asia", flag: "tm", key: "tm"
    },
    {
        text: "Turks and Caicos Islands", value: "turks and caicos islands", continent: "north america", flag: "tc", key: "tc"
    },
    {
        text: "Tuvalu", value: "tuvalu", continent: "australia/oceania", flag: "tv", key: "tv"
    },
    {
        text: "Uganda", value: "uganda", continent: "africa", flag: "ug", key: "ug"
    },
    {
        text: "Ukraine", value: "ukraine", continent: "europe", flag: "ua", key: "ua", alters: ['Украина', 'Україна']
    },
    {
        text: "United Arab Emirates", value: "united arab emirates", continent: "asia", flag: "ae", key: "ae"
    },
    {
        text: "United Kingdom", value: "united kingdom", continent: "europe", flag: "gb", key: "gb", alters: ['UK', 'Egyesült Királyság', 'イギリス', 'Великобритания']
    },
    {
        text: "United States", value: "united states", continent: "north america", flag: "us", key: "us", alters: ['USA']
    },
    {
        text: "United States Minor Outlying Islands", value: "united states minor outlying islands", continent: "north america", flag: "um", key: "um"
    },
    {
        text: "Uruguay", value: "uruguay", continent: "europe", flag: "uy", key: "uy"
    },
    {
        text: "Uzbekistan", value: "uzbekistan", continent: "asia", flag: "uz", key: "uz"
    },
    {
        text: "Vanuatu", value: "vanuatu", continent: "australia/oceania", flag: "vu", key: "vu"
    },
    {
        text: "Venezuela", value: "venezuela", continent: "south america", flag: "ve", key: "ve"
    },
    {
        text: "Viet Nam", value: "viet nam", continent: "asia", flag: "vn", key: "vn", alters: ['Vietnam']
    },
    {
        text: "Virgin Islands, British", value: "virgin islands, british", continent: "north america", flag: "vg", key: "vg"
    },
    {
        text: "Virgin Islands, U.S.", value: "virgin islands, u.s.", continent: "north america", flag: "vi", key: "vi"
    },
    {
        text: "Wallis and Futuna", value: "wallis and futuna", continent: "australia/oceania", flag: "wf", key: "wf"
    },
    {
        text: "Western Sahara", value: "western sahara", continent: "africa", flag: "eh", key: "eh"
    },
    {
        text: "Yemen", value: "yemen", continent: "asia", flag: "ye", key: "ye"
    },
    {
        text: "Zambia", value: "zambia", continent: "africa", flag: "zm", key: "zm"
    },
    {
        text: "Zimbabwe", value: "zimbabwe", continent: "africa", flag: "zw", key: "zw"
    }
];

export default countries;
