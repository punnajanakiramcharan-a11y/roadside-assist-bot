export type VehicleType = "bike" | "car";
export type SymptomId = "engineStopped" | "notStarting" | "smokecoming" | "strangeNoise" | "lowPower";

export interface VehicleModel {
  id: string;
  name: string;
  icon: string;
}

export const bikeModels: VehicleModel[] = [
  { id: "hero_splendor", name: "Hero Splendor Plus", icon: "🏍️" },
  { id: "honda_activa", name: "Honda Activa", icon: "🛵" },
  { id: "bajaj_pulsar", name: "Bajaj Pulsar 150", icon: "🏍️" },
  { id: "tvs_apache", name: "TVS Apache RTR 160", icon: "🏍️" },
  { id: "royal_enfield", name: "Royal Enfield Classic 350", icon: "🏍️" },
  { id: "yamaha_r15", name: "Yamaha R15", icon: "🏍️" },
  { id: "ktm_duke", name: "KTM Duke 200", icon: "🏍️" },
  { id: "suzuki_access", name: "Suzuki Access 125", icon: "🛵" },
  { id: "tvs_jupiter", name: "TVS Jupiter", icon: "🛵" },
  { id: "honda_shine", name: "Honda Shine", icon: "🏍️" },
];

export const carModels: VehicleModel[] = [
  { id: "maruti_swift", name: "Maruti Suzuki Swift", icon: "🚗" },
  { id: "maruti_baleno", name: "Maruti Suzuki Baleno", icon: "🚗" },
  { id: "hyundai_creta", name: "Hyundai Creta", icon: "🚙" },
  { id: "hyundai_i20", name: "Hyundai i20", icon: "🚗" },
  { id: "tata_nexon", name: "Tata Nexon", icon: "🚙" },
  { id: "tata_punch", name: "Tata Punch", icon: "🚙" },
  { id: "mahindra_thar", name: "Mahindra Thar", icon: "🚙" },
  { id: "toyota_innova", name: "Toyota Innova Crysta", icon: "🚐" },
  { id: "honda_city", name: "Honda City", icon: "🚗" },
  { id: "kia_seltos", name: "Kia Seltos", icon: "🚙" },
];

export interface DiagnosisData {
  isEngineRelated: boolean;
  possibleReasons: { en: string; te: string; hi: string; ta: string; icon: string }[];
  damagedPart: { en: string; te: string; hi: string; ta: string };
  partLocationDesc: { en: string; te: string; hi: string; ta: string };
  canFixAtHome: boolean;
  repairSteps: {
    title: { en: string; te: string; hi: string; ta: string };
    description: { en: string; te: string; hi: string; ta: string };
    icon: string;
  }[];
  partPrices: { amazon: number; flipkart: number; local: number };
  partName: { en: string; te: string; hi: string; ta: string };
}

export const symptomIcons: Record<SymptomId, string> = {
  engineStopped: "🔴",
  notStarting: "🔑",
  smokecoming: "💨",
  strangeNoise: "🔊",
  lowPower: "⚡",
};

export const diagnosisDatabase: Record<VehicleType, Record<SymptomId, DiagnosisData>> = {
  bike: {
    engineStopped: {
      isEngineRelated: true,
      possibleReasons: [
        { en: "Fuel supply blocked", te: "ఇంధనం అందడం ఆగింది", hi: "ईंधन आपूर्ति बंद", ta: "எரிபொருள் தடைபட்டது", icon: "⛽" },
        { en: "Spark plug failure", te: "స్పార్క్ ప్లగ్ పనిచేయడం లేదు", hi: "स्पार्क प्लग खराब", ta: "ஸ்பார்க் பிளக் கோளாறு", icon: "⚡" },
        { en: "Engine overheating", te: "ఇంజన్ అతిగా వేడెక్కడం", hi: "इंजन ज़्यादा गरम", ta: "இயந்திரம் அதிக வெப்பம்", icon: "🌡️" },
      ],
      damagedPart: { en: "Spark Plug / Fuel Filter", te: "స్పార్క్ ప్లగ్ / ఫ్యూల్ ఫిల్టర్", hi: "स्पार्क प्लग / फ्यूल फिल्टर", ta: "ஸ்பார்க் பிளக் / எரிபொருள் வடிகட்டி" },
      partLocationDesc: { en: "Near the engine cylinder head", te: "ఇంజన్ సిలిండర్ హెడ్ దగ్గర", hi: "इंजन सिलेंडर हेड के पास", ta: "இயந்திர சிலிண்டர் தலை அருகில்" },
      canFixAtHome: false,
      repairSteps: [
        { title: { en: "Check fuel level", te: "ఫ్యూల్ లెవల్ చెక్ చేయండి", hi: "ईंधन स्तर जांचें", ta: "எரிபொருள் அளவை சரிபார்க்கவும்" }, description: { en: "Open fuel cap, check if fuel is visible", te: "ఫ్యూల్ క్యాప్ ఓపెన్ చేసి చూడండి", hi: "ईंधन कैप खोलें और देखें", ta: "எரிபொருள் மூடியைத் திறந்து பாருங்கள்" }, icon: "⛽" },
        { title: { en: "Inspect spark plug", te: "స్పార్క్ ప్లగ్ చెక్ చేయండి", hi: "स्पार्क प्लग जांचें", ta: "ஸ்பார்க் பிளக் பரிசோதிக்கவும்" }, description: { en: "Remove and check for carbon deposits", te: "తీసి కార్బన్ డిపాజిట్స్ చూడండి", hi: "निकालकर कार्बन जमा देखें", ta: "கார்பன் படிவுகளை சரிபார்க்கவும்" }, icon: "🔧" },
        { title: { en: "Check engine oil", te: "ఇంజన్ ఆయిల్ చెక్ చేయండి", hi: "इंजन ऑयल जांचें", ta: "இயந்திர எண்ணெய் சரிபார்க்கவும்" }, description: { en: "Use dipstick to check oil level and color", te: "డిప్‌స్టిక్ తో ఆయిల్ లెవల్ చూడండి", hi: "डिपस्टिक से ऑयल लेवल देखें", ta: "டிப்ஸ்டிக் கொண்டு எண்ணெய் அளவை பாருங்கள்" }, icon: "🛢️" },
        { title: { en: "Check battery voltage", te: "బ్యాటరీ వోల్టేజ్ చెక్ చేయండి", hi: "बैटरी वोल्टेज जांचें", ta: "பேட்டரி மின்னழுத்தம் சரிபார்க்கவும்" }, description: { en: "Battery should show 12V or more", te: "బ్యాటరీ 12V లేదా ఎక్కువ ఉండాలి", hi: "बैटरी में 12V या अधिक होना चाहिए", ta: "பேட்டரி 12V அல்லது அதற்கு மேல் இருக்க வேண்டும்" }, icon: "🔋" },
      ],
      partPrices: { amazon: 250, flipkart: 230, local: 180 },
      partName: { en: "Spark Plug (NGK)", te: "స్పార్క్ ప్లగ్ (NGK)", hi: "स्पार्क प्लग (NGK)", ta: "ஸ்பார்க் பிளக் (NGK)" },
    },
    notStarting: {
      isEngineRelated: false,
      possibleReasons: [
        { en: "Dead battery", te: "బ్యాటరీ డెడ్", hi: "बैटरी डेड", ta: "பேட்டரி இறந்தது", icon: "🔋" },
        { en: "Faulty starter motor", te: "స్టార్టర్ మోటార్ పాడైంది", hi: "स्टार्टर मोटर खराब", ta: "ஸ்டார்ட்டர் மோட்டார் கோளாறு", icon: "⚙️" },
        { en: "Kill switch on", te: "కిల్ స్విచ్ ఆన్ లో ఉంది", hi: "किल स्विच ऑन है", ta: "கில் சுவிட்ச் ஆன் உள்ளது", icon: "🔘" },
      ],
      damagedPart: { en: "Battery / Kill Switch", te: "బ్యాటరీ / కిల్ స్విచ్", hi: "बैटरी / किल स्विच", ta: "பேட்டரி / கில் சுவிட்ச்" },
      partLocationDesc: { en: "Battery under seat, kill switch on right handlebar", te: "బ్యాటరీ సీట్ కింద, కిల్ స్విచ్ కుడి హ్యాండిల్‌లో", hi: "बैटरी सीट के नीचे, किल स्विच दाएं हैंडल पर", ta: "பேட்டரி இருக்கைக்கு கீழே, கில் சுவிட்ச் வலது ஹேண்டிலில்" },
      canFixAtHome: true,
      repairSteps: [
        { title: { en: "Check kill switch", te: "కిల్ స్విచ్ చెక్ చేయండి", hi: "किल स्विच जांचें", ta: "கில் சுவிட்ச் சரிபார்க்கவும்" }, description: { en: "Make sure kill switch is in RUN position", te: "కిల్ స్విచ్ RUN పొజిషన్‌లో ఉందో చూడండి", hi: "किल स्विच RUN पोजीशन में हो", ta: "கில் சுவிட்ச் RUN நிலையில் உள்ளதா பாருங்கள்" }, icon: "🔘" },
        { title: { en: "Check battery terminals", te: "బ్యాటరీ టర్మినల్స్ చెక్", hi: "बैटरी टर्मिनल जांचें", ta: "பேட்டரி முனைகளை சரிபார்க்கவும்" }, description: { en: "Clean rust from battery terminals", te: "బ్యాటరీ టర్మినల్స్ నుండి తుప్పు శుభ్రం చేయండి", hi: "बैटरी टर्मिनलों से जंग साफ करें", ta: "பேட்டரி முனைகளிலிருந்து துருவை சுத்தம் செய்யுங்கள்" }, icon: "🔧" },
        { title: { en: "Try kick start", te: "కిక్ స్టార్ట్ ట్రై చేయండి", hi: "किक स्टार्ट ट्राई करें", ta: "கிக் ஸ்டார்ட் முயற்சிக்கவும்" }, description: { en: "If electric start fails, use kick start", te: "ఎలక్ట్రిక్ స్టార్ట్ ఫెయిల్ అయితే కిక్ వాడండి", hi: "इलेक्ट्रिक स्टार्ट फेल हो तो किक करें", ta: "எலக்ட்ரிக் ஸ்டார்ட் தோல்வியானால் கிக் பயன்படுத்துங்கள்" }, icon: "🦵" },
      ],
      partPrices: { amazon: 800, flipkart: 750, local: 600 },
      partName: { en: "Bike Battery (12V)", te: "బైక్ బ్యాటరీ (12V)", hi: "बाइक बैटरी (12V)", ta: "பைக் பேட்டரி (12V)" },
    },
    smokecoming: {
      isEngineRelated: true,
      possibleReasons: [
        { en: "Oil leak into combustion chamber", te: "ఆయిల్ కంబషన్ చాంబర్‌లోకి లీక్", hi: "ऑयल कंबस्शन चैम्बर में लीक", ta: "எண்ணெய் எரிப்பு அறைக்கு கசிவு", icon: "🛢️" },
        { en: "Worn piston rings", te: "పిస్టన్ రింగ్స్ అరిగిపోయాయి", hi: "पिस्टन रिंग घिसे हुए", ta: "பிஸ்டன் வளையங்கள் தேய்ந்தன", icon: "⭕" },
      ],
      damagedPart: { en: "Piston Rings / Valve Seals", te: "పిస్టన్ రింగ్స్ / వాల్వ్ సీల్స్", hi: "पिस्टन रिंग / वाल्व सील", ta: "பிஸ்டன் வளையங்கள் / வால்வு சீல்கள்" },
      partLocationDesc: { en: "Inside engine cylinder", te: "ఇంజన్ సిలిండర్ లోపల", hi: "इंजन सिलेंडर के अंदर", ta: "இயந்திர சிலிண்டரின் உள்ளே" },
      canFixAtHome: false,
      repairSteps: [
        { title: { en: "Check smoke color", te: "పొగ రంగు చూడండి", hi: "धुएं का रंग देखें", ta: "புகையின் நிறத்தை பாருங்கள்" }, description: { en: "White = coolant, Blue = oil, Black = fuel", te: "తెలుపు = కూలెంట్, నీలం = ఆయిల్, నలుపు = ఫ్యూల్", hi: "सफेद = कूलेंट, नीला = ऑयल, काला = ईंधन", ta: "வெள்ளை = குளிர்பதனம், நீலம் = எண்ணெய், கருப்பு = எரிபொருள்" }, icon: "🎨" },
        { title: { en: "Check engine oil level", te: "ఇంజన్ ఆయిల్ లెవల్ చెక్", hi: "इंजन ऑयल लेवल चेक", ta: "இயந்திர எண்ணெய் அளவு சரிபார்க்க" }, description: { en: "Low oil can cause blue smoke", te: "తక్కువ ఆయిల్ నీలి పొగకు కారణమవుతుంది", hi: "कम ऑयल से नीला धुआं आता है", ta: "குறைந்த எண்ணெய் நீல புகையை ஏற்படுத்தும்" }, icon: "🛢️" },
        { title: { en: "Visit mechanic", te: "మెకానిక్ దగ్గరికి వెళ్ళండి", hi: "मैकेनिक के पास जाएं", ta: "மெக்கானிக் கிட்ட போங்க" }, description: { en: "Internal engine repair needed", te: "ఇంజన్ లోపలి రిపేర్ అవసరం", hi: "इंजन की अंदरूनी मरम्मत जरूरी", ta: "இயந்திர உள் பழுது தேவை" }, icon: "🧑‍🔧" },
      ],
      partPrices: { amazon: 1200, flipkart: 1100, local: 900 },
      partName: { en: "Piston Ring Set", te: "పిస్టన్ రింగ్ సెట్", hi: "पिस्टन रिंग सेट", ta: "பிஸ்டன் வளைய தொகுப்பு" },
    },
    strangeNoise: {
      isEngineRelated: false,
      possibleReasons: [
        { en: "Loose chain", te: "చైన్ వదులుగా ఉంది", hi: "चेन ढीली है", ta: "சங்கிலி தளர்வாக உள்ளது", icon: "⛓️" },
        { en: "Worn brake pads", te: "బ్రేక్ ప్యాడ్స్ అరిగిపోయాయి", hi: "ब्रेक पैड घिसे हुए", ta: "பிரேக் பேடுகள் தேய்ந்தன", icon: "🛑" },
      ],
      damagedPart: { en: "Chain / Brake Pads", te: "చైన్ / బ్రేక్ ప్యాడ్స్", hi: "चेन / ब्रेक पैड", ta: "சங்கிலி / பிரேக் பேடுகள்" },
      partLocationDesc: { en: "Chain on left side, brakes on wheels", te: "చైన్ ఎడమ వైపు, బ్రేక్స్ చక్రాలపై", hi: "चेन बाईं तरफ, ब्रेक पहियों पर", ta: "சங்கிலி இடது பக்கம், பிரேக்குகள் சக்கரங்களில்" },
      canFixAtHome: true,
      repairSteps: [
        { title: { en: "Check chain tension", te: "చైన్ టెన్షన్ చెక్", hi: "चेन टेंशन चेक", ta: "சங்கிலி இறுக்கம் சரிபார்" }, description: { en: "Push chain - should move 20-25mm", te: "చైన్ నొక్కండి - 20-25mm కదలాలి", hi: "चेन दबाएं - 20-25mm हिलनी चाहिए", ta: "சங்கிலியை அழுத்துங்கள் - 20-25mm நகர வேண்டும்" }, icon: "📏" },
        { title: { en: "Lubricate chain", te: "చైన్‌కు లూబ్ వేయండి", hi: "चेन में लूब लगाएं", ta: "சங்கிலிக்கு லூப் போடுங்கள்" }, description: { en: "Apply chain lubricant evenly", te: "చైన్ లూబ్రికెంట్ సమానంగా వేయండి", hi: "चेन लुब्रिकेंट समान रूप से लगाएं", ta: "சங்கிலி லூப்ரிகன்ட் சமமாக தடவுங்கள்" }, icon: "💧" },
        { title: { en: "Tighten chain", te: "చైన్ టైట్ చేయండి", hi: "चेन टाइट करें", ta: "சங்கிலியை இறுக்குங்கள்" }, description: { en: "Adjust rear axle nuts to tighten", te: "వెనుక ఆక్సిల్ నట్స్ adjust చేయండి", hi: "रियर एक्सल नट एडजस्ट करें", ta: "பின் அச்சு நட்டுகளை சரிசெய்யுங்கள்" }, icon: "🔩" },
      ],
      partPrices: { amazon: 450, flipkart: 420, local: 350 },
      partName: { en: "Chain & Sprocket Kit", te: "చైన్ & స్ప్రాకెట్ కిట్", hi: "चेन और स्प्रॉकेट किट", ta: "சங்கிலி & ஸ்ப்ராக்கெட் கிட்" },
    },
    lowPower: {
      isEngineRelated: false,
      possibleReasons: [
        { en: "Dirty air filter", te: "డర్టీ ఎయిర్ ఫిల్టర్", hi: "गंदा एयर फिल्टर", ta: "அழுக்கான காற்று வடிகட்டி", icon: "🌬️" },
        { en: "Clogged carburetor", te: "క్లాగ్డ్ కార్బ్యురేటర్", hi: "बंद कार्बोरेटर", ta: "அடைபட்ட கார்பரேட்டர்", icon: "🔧" },
      ],
      damagedPart: { en: "Air Filter / Carburetor", te: "ఎయిర్ ఫిల్టర్ / కార్బ్యురేటర్", hi: "एयर फिल्टर / कार्बोरेटर", ta: "காற்று வடிகட்டி / கார்பரேட்டர்" },
      partLocationDesc: { en: "Air filter near engine side panel", te: "ఎయిర్ ఫిల్టర్ ఇంజన్ సైడ్ ప్యానెల్ దగ్గర", hi: "एयर फिल्टर इंजन साइड पैनल के पास", ta: "காற்று வடிகட்டி இயந்திர பக்க பேனல் அருகில்" },
      canFixAtHome: true,
      repairSteps: [
        { title: { en: "Remove air filter", te: "ఎయిర్ ఫిల్టర్ తీయండి", hi: "एयर फिल्टर निकालें", ta: "காற்று வடிகட்டியை அகற்றுங்கள்" }, description: { en: "Open side panel, remove filter cover screws", te: "సైడ్ ప్యానెల్ ఓపెన్ చేసి స్క్రూలు తీయండి", hi: "साइड पैनल खोलें, फिल्टर कवर के स्क्रू निकालें", ta: "பக்க பேனலைத் திறந்து ஸ்க்ரூக்களை அகற்றுங்கள்" }, icon: "🔩" },
        { title: { en: "Clean or replace filter", te: "ఫిల్టర్ శుభ్రం చేయండి/మార్చండి", hi: "फिल्टर साफ करें या बदलें", ta: "வடிகட்டியை சுத்தம் செய்யுங்கள்/மாற்றுங்கள்" }, description: { en: "Wash sponge filter or replace paper filter", te: "స్పాంజ్ ఫిల్టర్ కడగండి లేదా పేపర్ ఫిల్టర్ మార్చండి", hi: "स्पंज फिल्टर धोएं या पेपर फिल्टर बदलें", ta: "ஸ்பாஞ்ச் வடிகட்டியை கழுவுங்கள் அல்லது காகித வடிகட்டியை மாற்றுங்கள்" }, icon: "🧹" },
        { title: { en: "Reassemble", te: "మళ్ళీ అసెంబుల్ చేయండి", hi: "वापस जोड़ें", ta: "மீண்டும் பொருத்துங்கள்" }, description: { en: "Put filter back, close panel, start engine", te: "ఫిల్టర్ వెనక్కి పెట్టి ప్యానెల్ మూయండి", hi: "फिल्टर वापस लगाएं, पैनल बंद करें", ta: "வடிகட்டியை வைத்து பேனலை மூடுங்கள்" }, icon: "✅" },
      ],
      partPrices: { amazon: 200, flipkart: 180, local: 120 },
      partName: { en: "Air Filter Element", te: "ఎయిర్ ఫిల్టర్ ఎలిమెంట్", hi: "एयर फिल्टर एलीमेंट", ta: "காற்று வடிகட்டி உறுப்பு" },
    },
  },
  car: {
    engineStopped: {
      isEngineRelated: true,
      possibleReasons: [
        { en: "Timing belt failure", te: "టైమింగ్ బెల్ట్ పాడైంది", hi: "टाइमिंग बेल्ट खराब", ta: "டைமிங் பெல்ட் கோளாறு", icon: "🔄" },
        { en: "Fuel pump failure", te: "ఫ్యూల్ పంప్ ఫెయిల్", hi: "ईंधन पंप खराब", ta: "எரிபொருள் பம்ப் கோளாறு", icon: "⛽" },
        { en: "ECU malfunction", te: "ECU పనిచేయడం లేదు", hi: "ECU खराबी", ta: "ECU செயலிழப்பு", icon: "💻" },
      ],
      damagedPart: { en: "Timing Belt / Fuel Pump", te: "టైమింగ్ బెల్ట్ / ఫ్యూల్ పంప్", hi: "टाइमिंग बेल्ट / ईंधन पंप", ta: "டைமிங் பெல்ட் / எரிபொருள் பம்ப்" },
      partLocationDesc: { en: "Front of engine block behind timing cover", te: "ఇంజన్ బ్లాక్ ముందు భాగంలో", hi: "इंजन ब्लॉक के सामने", ta: "இயந்திர தொகுதியின் முன்பகுதி" },
      canFixAtHome: false,
      repairSteps: [
        { title: { en: "Check dashboard warnings", te: "డాష్‌బోర్డ్ వార్నింగ్స్ చూడండి", hi: "डैशबोर्ड वार्निंग देखें", ta: "டாஷ்போர்ட் எச்சரிக்கைகளை பாருங்கள்" }, description: { en: "Note any warning lights that appeared", te: "ఏ వార్నింగ్ లైట్స్ వచ్చాయో గమనించండి", hi: "कौन सी वार्निंग लाइट आई नोट करें", ta: "எந்த எச்சரிக்கை விளக்குகள் வந்தன என்பதை கவனியுங்கள்" }, icon: "⚠️" },
        { title: { en: "Try restarting", te: "రీస్టార్ట్ ట్రై చేయండి", hi: "रीस्टार्ट करें", ta: "மீண்டும் தொடங்குங்கள்" }, description: { en: "Wait 30 seconds then try starting", te: "30 సెకన్లు ఆగి స్టార్ట్ చేయండి", hi: "30 सेकंड रुकें फिर स्टार्ट करें", ta: "30 வினாடிகள் காத்திருந்து ஸ்டார்ட் செய்யுங்கள்" }, icon: "🔄" },
        { title: { en: "Check fuel gauge", te: "ఫ్యూల్ గేజ్ చెక్", hi: "ईंधन गेज चेक", ta: "எரிபொருள் அளவி சரிபார்" }, description: { en: "Ensure there is enough fuel", te: "తగినంత ఫ్యూల్ ఉందో చూడండి", hi: "पर्याप्त ईंधन है ना देखें", ta: "போதுமான எரிபொருள் உள்ளதா பாருங்கள்" }, icon: "⛽" },
        { title: { en: "Call roadside assistance", te: "రోడ్‌సైడ్ అసిస్టెన్స్ కాల్ చేయండి", hi: "रोडसाइड असिस्टेंस कॉल करें", ta: "சாலையோர உதவியை அழைக்கவும்" }, description: { en: "If engine won't start, call for help", te: "ఇంజన్ స్టార్ట్ కాకపోతే హెల్ప్ కాల్ చేయండి", hi: "इंजन स्टार्ट ना हो तो मदद बुलाएं", ta: "இயந்திரம் ஸ்டார்ட் ஆகவில்லையெனில் உதவி அழைக்கவும்" }, icon: "📞" },
      ],
      partPrices: { amazon: 3500, flipkart: 3200, local: 2800 },
      partName: { en: "Timing Belt Kit", te: "టైమింగ్ బెల్ట్ కిట్", hi: "टाइमिंग बेल्ट किट", ta: "டைமிங் பெல்ட் கிட்" },
    },
    notStarting: {
      isEngineRelated: false,
      possibleReasons: [
        { en: "Dead car battery", te: "కార్ బ్యాటరీ డెడ్", hi: "कार बैटरी डेड", ta: "கார் பேட்டரி இறந்தது", icon: "🔋" },
        { en: "Faulty starter motor", te: "స్టార్టర్ మోటార్ పాడైంది", hi: "स्टार्टर मोटर खराब", ta: "ஸ்டார்ட்டர் மோட்டார் கோளாறு", icon: "⚙️" },
        { en: "Ignition switch problem", te: "ఇగ్నిషన్ స్విచ్ సమస్య", hi: "इग्निशन स्विच समस्या", ta: "இக்னிஷன் சுவிட்ச் பிரச்சனை", icon: "🔑" },
      ],
      damagedPart: { en: "Car Battery / Starter Motor", te: "కార్ బ్యాటరీ / స్టార్టర్ మోటార్", hi: "कार बैटरी / स्टार्टर मोटर", ta: "கார் பேட்டரி / ஸ்டார்ட்டர் மோட்டார்" },
      partLocationDesc: { en: "Battery under hood, starter near engine bottom", te: "బ్యాటరీ హుడ్ కింద, స్టార్టర్ ఇంజన్ కింద", hi: "बैटरी बोनट में, स्टार्टर इंजन के नीचे", ta: "பேட்டரி பானட்டில், ஸ்டார்ட்டர் இயந்திரத்தின் கீழே" },
      canFixAtHome: true,
      repairSteps: [
        { title: { en: "Check headlights", te: "హెడ్‌లైట్స్ చెక్", hi: "हेडलाइट चेक", ta: "ஹெட்லைட்கள் சரிபார்" }, description: { en: "If dim, battery is weak", te: "మసకగా ఉంటే బ్యాటరీ బలహీనం", hi: "मंद हो तो बैटरी कमजोर", ta: "மங்கலாக இருந்தால் பேட்டரி பலவீனம்" }, icon: "💡" },
        { title: { en: "Jump start", te: "జంప్ స్టార్ట్", hi: "जंप स्टार्ट", ta: "ஜம்ப் ஸ்டார்ட்" }, description: { en: "Connect jumper cables from another car", te: "మరో కార్ నుండి జంపర్ కేబుల్స్ కనెక్ట్ చేయండి", hi: "दूसरी कार से जम्पर केबल लगाएं", ta: "மற்றொரு காரிலிருந்து ஜம்பர் கேபிள்கள் இணைக்கவும்" }, icon: "🔌" },
        { title: { en: "Replace battery", te: "బ్యాటరీ మార్చండి", hi: "बैटरी बदलें", ta: "பேட்டரியை மாற்றுங்கள்" }, description: { en: "If old (3+ years), replace with new", te: "3+ సంవత్సరాలు పాతది అయితే కొత్తది వేయండి", hi: "3+ साल पुरानी हो तो नई लगाएं", ta: "3+ வருடங்கள் பழையதாக இருந்தால் புதியது போடுங்கள்" }, icon: "🔋" },
      ],
      partPrices: { amazon: 4500, flipkart: 4200, local: 3800 },
      partName: { en: "Car Battery (Exide)", te: "కార్ బ్యాటరీ (Exide)", hi: "कार बैटरी (Exide)", ta: "கார் பேட்டரி (Exide)" },
    },
    smokecoming: {
      isEngineRelated: true,
      possibleReasons: [
        { en: "Head gasket failure", te: "హెడ్ గ్యాస్కెట్ పాడైంది", hi: "हेड गैसकेट खराब", ta: "ஹெட் காஸ்கெட் கோளாறு", icon: "🔥" },
        { en: "Coolant leak", te: "కూలెంట్ లీక్", hi: "कूलेंट लीक", ta: "குளிர்பதனம் கசிவு", icon: "💧" },
      ],
      damagedPart: { en: "Head Gasket / Radiator", te: "హెడ్ గ్యాస్కెట్ / రేడియేటర్", hi: "हेड गैसकेट / रेडिएटर", ta: "ஹெட் காஸ்கெட் / ரேடியேட்டர்" },
      partLocationDesc: { en: "Top of engine between cylinder head and block", te: "ఇంజన్ పై భాగంలో", hi: "इंजन के ऊपर", ta: "இயந்திரத்தின் மேற்பகுதியில்" },
      canFixAtHome: false,
      repairSteps: [
        { title: { en: "Stop engine immediately", te: "వెంటనే ఇంజన్ ఆపండి", hi: "तुरंत इंजन बंद करें", ta: "உடனே இயந்திரத்தை நிறுத்துங்கள்" }, description: { en: "Continuing can cause severe damage", te: "కొనసాగిస్తే తీవ్రమైన నష్టం జరుగుతుంది", hi: "चलाते रहने से गंभीर नुकसान होगा", ta: "தொடர்ந்தால் கடுமையான சேதம் ஏற்படும்" }, icon: "🛑" },
        { title: { en: "Check coolant level", te: "కూలెంట్ లెవల్ చెక్", hi: "कूलेंट लेवल चेक", ta: "குளிர்பதன அளவு சரிபார்" }, description: { en: "Open reservoir cap (when cool) and check", te: "రిజర్వాయర్ క్యాప్ ఓపెన్ చేసి చూడండి (చల్లారాక)", hi: "रिज़र्वॉयर कैप खोलें (ठंडा होने पर)", ta: "தொட்டி மூடியைத் திறந்து பாருங்கள் (குளிர்ந்த பின்)" }, icon: "💧" },
        { title: { en: "Tow to mechanic", te: "మెకానిక్ దగ్గరికి టో చేయండి", hi: "मैकेनिक के पास टो करें", ta: "மெக்கானிக்கிடம் இழுத்துச் செல்லுங்கள்" }, description: { en: "Do not drive, get it towed", te: "డ్రైవ్ చేయకండి, టో చేయించండి", hi: "ड्राइव न करें, टो करवाएं", ta: "ஓட்ட வேண்டாம், இழுத்துச் செல்லுங்கள்" }, icon: "🚛" },
      ],
      partPrices: { amazon: 2500, flipkart: 2300, local: 2000 },
      partName: { en: "Head Gasket Set", te: "హెడ్ గ్యాస్కెట్ సెట్", hi: "हेड गैसकेट सेट", ta: "ஹெட் காஸ்கெட் செட்" },
    },
    strangeNoise: {
      isEngineRelated: false,
      possibleReasons: [
        { en: "Worn brake pads", te: "బ్రేక్ ప్యాడ్స్ అరిగిపోయాయి", hi: "ब्रेक पैड घिसे", ta: "பிரேக் பேடுகள் தேய்ந்தன", icon: "🛑" },
        { en: "Wheel bearing issue", te: "వీల్ బేరింగ్ సమస్య", hi: "व्हील बेयरिंग समस्या", ta: "சக்கர தாங்கி பிரச்சனை", icon: "⭕" },
        { en: "Loose belt", te: "బెల్ట్ వదులుగా ఉంది", hi: "बेल्ट ढीली है", ta: "பெல்ட் தளர்வாக உள்ளது", icon: "🔄" },
      ],
      damagedPart: { en: "Brake Pads / Serpentine Belt", te: "బ్రేక్ ప్యాడ్స్ / సర్పంటైన్ బెల్ట్", hi: "ब्रेक पैड / सर्पेंटाइन बेल्ट", ta: "பிரேக் பேடுகள் / செர்பன்டைன் பெல்ட்" },
      partLocationDesc: { en: "Brakes on all 4 wheels, belt on engine front", te: "4 చక్రాలపై బ్రేక్స్, ఇంజన్ ముందు బెల్ట్", hi: "4 पहियों पर ब्रेक, इंजन के सामने बेल्ट", ta: "4 சக்கரங்களில் பிரேக்குகள், இயந்திர முன்பகுதியில் பெல்ட்" },
      canFixAtHome: true,
      repairSteps: [
        { title: { en: "Identify noise source", te: "శబ్దం ఎక్కడ నుండి వస్తుందో గుర్తించండి", hi: "आवाज़ कहां से आ रही पहचानें", ta: "சத்தம் எங்கிருந்து வருகிறது என்பதை கண்டறியுங்கள்" }, description: { en: "Front/rear, left/right, while braking?", te: "ముందు/వెనుక, ఎడమ/కుడి, బ్రేకింగ్ సమయంలో?", hi: "आगे/पीछे, बाएं/दाएं, ब्रेक लगाते समय?", ta: "முன்/பின், இடது/வலது, பிரேக் போடும்போதா?" }, icon: "👂" },
        { title: { en: "Visual brake check", te: "బ్రేక్ విజువల్ చెక్", hi: "ब्रेक विज़ुअल चेक", ta: "பிரேக் காட்சி சரிபார்ப்பு" }, description: { en: "Look through wheel spokes for pad thickness", te: "వీల్ స్పోక్స్ లోంచి ప్యాడ్ thickness చూడండి", hi: "व्हील स्पोक्स से पैड थिकनेस देखें", ta: "சக்கர ஸ்போக்குகள் வழியாக பேட் தடிமனை பாருங்கள்" }, icon: "👀" },
        { title: { en: "Replace brake pads", te: "బ్రేక్ ప్యాడ్స్ మార్చండి", hi: "ब्रेक पैड बदलें", ta: "பிரேக் பேடுகளை மாற்றுங்கள்" }, description: { en: "If less than 3mm, replace immediately", te: "3mm కంటే తక్కువ అయితే వెంటనే మార్చండి", hi: "3mm से कम हो तो तुरंत बदलें", ta: "3mm-க்கு குறைவாக இருந்தால் உடனடியாக மாற்றுங்கள்" }, icon: "🔧" },
      ],
      partPrices: { amazon: 1800, flipkart: 1650, local: 1400 },
      partName: { en: "Brake Pad Set (Front)", te: "బ్రేక్ ప్యాడ్ సెట్ (ఫ్రంట్)", hi: "ब्रेक पैड सेट (फ्रंट)", ta: "பிரேக் பேட் செட் (முன்)" },
    },
    lowPower: {
      isEngineRelated: false,
      possibleReasons: [
        { en: "Clogged air filter", te: "క్లాగ్డ్ ఎయిర్ ఫిల్టర్", hi: "बंद एयर फिल्टर", ta: "அடைபட்ட காற்று வடிகட்டி", icon: "🌬️" },
        { en: "Dirty fuel injectors", te: "డర్టీ ఫ్యూల్ ఇంజెక్టర్స్", hi: "गंदे फ्यूल इंजेक्टर", ta: "அழுக்கான எரிபொருள் ஊசிகள்", icon: "💉" },
      ],
      damagedPart: { en: "Air Filter / Fuel Injectors", te: "ఎయిర్ ఫిల్టర్ / ఫ్యూల్ ఇంజెక్టర్స్", hi: "एयर फिल्टर / फ्यूल इंजेक्टर", ta: "காற்று வடிகட்டி / எரிபொருள் ஊசிகள்" },
      partLocationDesc: { en: "Air filter in airbox, injectors on intake manifold", te: "ఎయిర్ ఫిల్టర్ ఎయిర్‌బాక్స్‌లో", hi: "एयर फिल्टर एयरबॉक्स में", ta: "காற்று வடிகட்டி ஏர்பாக்ஸில்" },
      canFixAtHome: true,
      repairSteps: [
        { title: { en: "Open airbox", te: "ఎయిర్‌బాక్స్ ఓపెన్ చేయండి", hi: "एयरबॉक्स खोलें", ta: "ஏர்பாக்ஸை திறக்கவும்" }, description: { en: "Unclip airbox cover clips", te: "ఎయిర్‌బాక్స్ కవర్ క్లిప్స్ తీయండి", hi: "एयरबॉक्स कवर क्लिप खोलें", ta: "ஏர்பாக்ஸ் கவர் கிளிப்களை திறக்கவும்" }, icon: "📦" },
        { title: { en: "Replace air filter", te: "ఎయిర్ ఫిల్టర్ మార్చండి", hi: "एयर फिल्टर बदलें", ta: "காற்று வடிகட்டியை மாற்றுங்கள்" }, description: { en: "Swap old filter with new one", te: "పాత ఫిల్టర్ తీసి కొత్తది పెట్టండి", hi: "पुराना फिल्टर निकालकर नया लगाएं", ta: "பழைய வடிகட்டியை எடுத்து புதியதை போடுங்கள்" }, icon: "🔁" },
        { title: { en: "Close and test", te: "మూసి టెస్ట్ చేయండి", hi: "बंद करें और टेस्ट करें", ta: "மூடி சோதிக்கவும்" }, description: { en: "Reassemble airbox, start car, test power", te: "ఎయిర్‌బాక్స్ అసెంబుల్ చేసి కార్ స్టార్ట్ చేయండి", hi: "एयरबॉक्स जोड़ें, कार स्टार्ट करें", ta: "ஏர்பாக்ஸை இணைத்து காரை ஸ்டார்ட் செய்யுங்கள்" }, icon: "✅" },
      ],
      partPrices: { amazon: 600, flipkart: 550, local: 400 },
      partName: { en: "Car Air Filter", te: "కార్ ఎయిర్ ఫిల్టర్", hi: "कार एयर फिल्टर", ta: "கார் காற்று வடிகட்டி" },
    },
  },
};

export interface MockMechanic {
  name: string;
  distance: string;
  distanceKm: number;
  rating: number;
  phone: string;
  specialties: string[];
  available: boolean;
}

export const mockMechanics: MockMechanic[] = [
  { name: "Sri Balaji Auto Works", distance: "0.8 km", distanceKm: 0.8, rating: 4.5, phone: "+91 9876543210", specialties: ["Spark Plug", "Battery", "Chain", "Air Filter"], available: true },
  { name: "Krishna Motors", distance: "1.2 km", distanceKm: 1.2, rating: 4.2, phone: "+91 9876543211", specialties: ["Piston Rings", "Brake Pads", "Timing Belt"], available: true },
  { name: "Royal Enfield Service Center", distance: "2.1 km", distanceKm: 2.1, rating: 4.7, phone: "+91 9876543212", specialties: ["All Parts", "Engine Repair", "Full Service"], available: false },
  { name: "Quick Fix Garage", distance: "2.5 km", distanceKm: 2.5, rating: 4.0, phone: "+91 9876543213", specialties: ["Battery", "Brake Pads", "Air Filter", "Chain"], available: true },
  { name: "A1 Auto Repair", distance: "3.0 km", distanceKm: 3.0, rating: 4.3, phone: "+91 9876543214", specialties: ["Head Gasket", "Fuel Pump", "Starter Motor"], available: true },
];
