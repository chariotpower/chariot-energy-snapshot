(() => {
  "use strict";

  const I18N = {
    en: {
      brandProduct:"Client Energy Application",brandLine:"Private project preparation",openSnapshot:"Open Energy Snapshot",languageLabel:"Language",
      eyebrow:"Chariot Power · Guided application",heroTitle:"Prepare your energy project for a professional assessment.",heroIntro:"Share what you know. Choose “Not sure” where needed and Chariot will confirm the technical and financial details with you.",trust1:"Guided choices",trust2:"Draft saved on this device",trust3:"You choose when to share",subjectLine:"Indicative · Subject to full technical and credit assessment",
      voiceEyebrow:"Talk instead of typing",voiceTitle:"Describe your site in your own words.",voiceHelp:"Record a short note or type below. The tool can use it to suggest answers without overwriting choices you have already made.",speechLanguage:"Speech language",startVoice:"Start voice note",stopVoice:"Stop",guideAnswers:"Use note to guide my answers",voicePrivacy:"Speech processing depends on your browser. Type instead if you prefer not to grant microphone access.",transcriptPlaceholder:"Example: We run a packhouse near Ceres, spend about R180,000 a month and need lower costs plus backup power…",
      tabContact:"Contact",tabEnergy:"Energy",tabSite:"Site",tabDocuments:"Documents",tabReview:"Review",saveReturn:"Saved automatically · return at any time",
      step1:"Step 1 · Contact",contactTitle:"Who should Chariot speak to?",contactHelp:"Only the essential contact details are required.",nameLabel:"Your name",companyLabel:"Business or organisation",phoneLabel:"Mobile number",emailLabel:"Email",optional:"Optional",nameError:"Please enter your name.",companyError:"Please enter the business name.",phoneError:"Please enter a contact number.",phonePlaceholder:"e.g. 082 123 4567",sectorLegend:"Type of site",sectorAgriculture:"Agriculture",sectorIndustrial:"Industrial",sectorCommercial:"Commercial",sectorHospitality:"Hospitality",other:"Other",notSure:"Not sure",otherSiteLabel:"Please describe the site type",otherSitePlaceholder:"e.g. School, clinic or logistics depot",
      step2:"Step 2 · Energy",energyTitle:"What best describes the site?",energyHelp:"Choose the closest answer. Estimates are completely acceptable.",billLegend:"Typical monthly electricity cost",bill1:"Under R25k",bill2:"R25k–R75k",bill3:"R75k–R250k",bill4:"Over R250k",supplyLegend:"Power supply",municipal:"Municipal",privateSupply:"Landlord / private",otherSupplyLabel:"Please describe the power supplier",otherSupplyPlaceholder:"e.g. Estate, private network or embedded generator",generatorLegend:"Generator on site?",yes:"Yes",no:"No",generatorSizeLabel:"Rough generator size",generator1:"Under 100 kVA",generator3:"Over 500 kVA",goalLegend:"What matters most?",goalCost:"Reduce cost",goalResilience:"Improve resilience",goalBoth:"Cost and resilience",goalGrowth:"Support expansion",fundingLegend:"Preferred funding direction",fundingPpa:"PPA · no upfront capital",fundingCash:"Purchase outright",fundingRent:"Rent-to-own",fundingBank:"Bank / asset finance",fundingCompare:"Compare all options",
      step3:"Step 3 · Site",siteTitle:"Where could the system be installed?",siteHelp:"Confirm the site if convenient. Exact technical mapping can also be completed later.",placementLegend:"Preferred solar placement",roof:"Roof",ground:"Ground",carport:"Carport",mixed:"Mixed",otherPlacementLabel:"Please describe the preferred placement",otherPlacementPlaceholder:"e.g. Dam, shade structure or adjacent property",addressPlaceholder:"Search business, farm, town or address",searchAddress:"Search address",coordinatePlaceholder:"Coordinates, e.g. -29.8587, 31.0218",useCoordinates:"Use coordinates",useLocation:"◎ Use current location",skipLocation:"Skip location",locationInitial:"No location shared. Search, paste coordinates or use this device’s position.",pinType:"Pin type",pinSolar:"☀ Solar placement",pinInverter:"▣ Inverter / battery",pinGrid:"⚡ Eskom / grid connection",pinGenerator:"G Generator",pinCritical:"! Critical loads",pinCable:"● Cable run point",toolFreehand:"✏ Freehand area",toolRectangle:"▭ Rectangle",toolPin:"📍 Drop selected pin",toolCable:"📏 Measure cable run",toolClear:"↺ Clear map",
      step4:"Step 4 · Documents",documentsTitle:"Prepare the assessment documents.",documentsHelp:"Choose a status for each item. Files remain on this device until you deliberately share them.",emailEyebrow:"Representative email assistant",emailTitle:"Turn your answers into a clear handover.",emailHelp:"We will prepare a professional email using your application and voice note. You can review it before opening your email app.",draftEmail:"Draft email to Chariot",emailPrivacy:"Nothing is sent automatically.",documentsIntro:"A recent electricity bill is the most useful starting point. The other items can follow when available.",docBills:"Recent electricity bills",docBillsHelp:"Ideally 3–12 months",docCompany:"Company registration documents",docCompanyHelp:"CIPC or equivalent",docTenure:"Proof of site tenure",docTenureHelp:"Title deed or lease",docDirector:"Director / authorised person details",docDirectorHelp:"ID only when formally requested",docGenerator:"Generator information",docGeneratorHelp:"Size, fuel use or service record",available:"Available",sendLater:"Will send later",needHelp:"Need help",notApplicable:"Not applicable",chooseFile:"Choose file",
      step5:"Step 5 · Review",reviewTitle:"Your project handover is ready.",reviewHelp:"Review the summary, then choose how you would like to share it with Chariot Power.",readinessLabel:"Application readiness",nextTitle:"What happens next",nextCopy:"A Chariot representative will review the information, clarify any gaps and arrange the appropriate technical and funding assessment.",extraNotes:"Anything else Chariot should know?",notesPlaceholder:"Site constraints, timing, expansion plans or questions",shareWhatsApp:"Share via WhatsApp",copySummary:"Copy summary",disclaimer:"This application supports an indicative assessment only. All system, production, savings, funding, credit, structural, grid and engineering outcomes remain subject to full assessment and formal approval.",clearDraft:"Clear saved draft",continue:"Continue →",back:"← Back",skip:"Skip for now",review:"Review application →",
      progress:"Step {step} of 5 · {label}",voiceListening:"Listening… speak naturally.",voiceStopped:"Voice note stopped. You can edit the transcript.",voiceUnsupported:"Voice transcription is not supported by this browser. Please type your note instead.",voiceDenied:"Microphone access was not available. Please type your note instead.",guideNone:"Add a little more detail before asking for suggestions.",guideDone:"Suggested {count} answer(s). Please review them before continuing.",searching:"Searching…",noResults:"No matching address found. Try a town plus province or paste coordinates.",searchError:"Address search is temporarily unavailable. Paste coordinates or use this device’s position.",invalidCoordinates:"Enter latitude and longitude separated by a comma.",locating:"Requesting this device’s location…",locationDenied:"Location could not be accessed. Search an address or paste coordinates instead.",locationSkipped:"Location skipped. Chariot can confirm it later.",locationConfirmed:"Site confirmed: {lat}, {lng}",mapCount:"{areas} area(s) · {pins} pin(s) · {cables} cable run(s){distance}",cableDistance:" · {metres} m total",drawingFreehand:"Draw directly on the map and release to finish the area.",drawingPin:"Tap the map to place the selected pin.",paperwork:"{available} item(s) available · {later} to follow · {help} need help · {files} file(s) selected",summaryTitle:"Application summary",summaryContact:"Contact",summaryCompany:"Business",summarySector:"Site type",summaryBill:"Monthly electricity cost",summarySupply:"Power supply",summaryGenerator:"Generator",summaryGoal:"Priority",summaryFunding:"Funding direction",summaryPlacement:"Solar placement",summaryLocation:"Site location",summaryTranscript:"Voice / typed note",summaryDocuments:"Documents",summaryFiles:"Selected files",noLocation:"Not supplied",noTranscript:"Not supplied",readinessStrong:"Strong starting information. Chariot can move directly into validation.",readinessMedium:"Good starting point. Chariot will clarify a few items with you.",readinessEarly:"Early-stage application. Chariot will help fill the remaining gaps.",emailSubject:"Energy assessment application — {company}",emailIntro:"Hello Chariot Power,\n\nPlease review the following client energy application. All information is indicative and subject to full technical and credit assessment.\n\n",emailClose:"\n\nPlease contact me to confirm the next steps.\n\nKind regards,\n{name}",copied:"Application summary copied.",copyFailed:"Copy was not available. Please select and copy the summary manually.",clearConfirm:"Clear this saved application and start again?",filesLocal:"Files selected here are not attached automatically. Please attach them in your email or WhatsApp conversation."
    },
    af: {
      brandProduct:"Kliënt-energieaansoek",brandLine:"Privaat projekvoorbereiding",openSnapshot:"Open Energie-oorsig",languageLabel:"Taal",
      eyebrow:"Chariot Power · Begeleide aansoek",heroTitle:"Berei u energieprojek vir ’n professionele beoordeling voor.",heroIntro:"Deel wat u weet. Kies “Nie seker nie” waar nodig; Chariot sal die tegniese en finansiële besonderhede saam met u bevestig.",trust1:"Begeleide keuses",trust2:"Konsep op hierdie toestel gestoor",trust3:"U kies wanneer om te deel",subjectLine:"Aanduidend · Onderhewig aan volledige tegniese en kredietbeoordeling",
      voiceEyebrow:"Praat in plaas van tik",voiceTitle:"Beskryf u perseel in u eie woorde.",voiceHelp:"Neem ’n kort nota op of tik hieronder. Die hulpmiddel kan antwoorde voorstel sonder om bestaande keuses te oorskryf.",speechLanguage:"Spraaktaal",startVoice:"Begin stemnota",stopVoice:"Stop",guideAnswers:"Gebruik nota om antwoorde te rig",voicePrivacy:"Spraakverwerking hang van u blaaier af. Tik eerder as u nie mikrofoontoegang wil gee nie.",transcriptPlaceholder:"Voorbeeld: Ons bedryf ’n pakhuis naby Ceres, bestee sowat R180 000 per maand en benodig laer koste plus rugsteunkrag…",
      tabContact:"Kontak",tabEnergy:"Energie",tabSite:"Perseel",tabDocuments:"Dokumente",tabReview:"Hersien",saveReturn:"Outomaties gestoor · keer enige tyd terug",
      step1:"Stap 1 · Kontak",contactTitle:"Met wie moet Chariot praat?",contactHelp:"Slegs die noodsaaklike kontakbesonderhede word vereis.",nameLabel:"U naam",companyLabel:"Besigheid of organisasie",phoneLabel:"Selfoonnommer",emailLabel:"E-pos",optional:"Opsioneel",nameError:"Voer asseblief u naam in.",companyError:"Voer asseblief die besigheidsnaam in.",phoneError:"Voer asseblief ’n kontaknommer in.",phonePlaceholder:"bv. 082 123 4567",sectorLegend:"Tipe perseel",sectorAgriculture:"Landbou",sectorIndustrial:"Nywerheid",sectorCommercial:"Kommersieel",sectorHospitality:"Gasvryheid",other:"Ander",notSure:"Nie seker nie",otherSiteLabel:"Beskryf asseblief die tipe perseel",otherSitePlaceholder:"bv. Skool, kliniek of logistieke depot",
      step2:"Stap 2 · Energie",energyTitle:"Wat beskryf die perseel die beste?",energyHelp:"Kies die naaste antwoord. Ramings is heeltemal aanvaarbaar.",billLegend:"Tipiese maandelikse elektrisiteitskoste",bill1:"Onder R25k",bill2:"R25k–R75k",bill3:"R75k–R250k",bill4:"Bo R250k",supplyLegend:"Kragvoorsiening",municipal:"Munisipaal",privateSupply:"Verhuurder / privaat",otherSupplyLabel:"Beskryf asseblief die kragverskaffer",otherSupplyPlaceholder:"bv. Landgoed, privaat netwerk of ingebedde opwekker",generatorLegend:"Kragopwekker op perseel?",yes:"Ja",no:"Nee",generatorSizeLabel:"Benaderde kragopwekkergrootte",generator1:"Onder 100 kVA",generator3:"Bo 500 kVA",goalLegend:"Wat is die belangrikste?",goalCost:"Verminder koste",goalResilience:"Verbeter veerkragtigheid",goalBoth:"Koste en veerkragtigheid",goalGrowth:"Ondersteun uitbreiding",fundingLegend:"Voorkeur-finansieringsrigting",fundingPpa:"PPA · geen voorafkapitaal",fundingCash:"Koop kontant",fundingRent:"Huur-tot-eienaarskap",fundingBank:"Bank- / batefinansiering",fundingCompare:"Vergelyk alle opsies",
      step3:"Stap 3 · Perseel",siteTitle:"Waar kan die stelsel geïnstalleer word?",siteHelp:"Bevestig die perseel indien gerieflik. Presiese tegniese kartering kan later voltooi word.",placementLegend:"Voorkeurplasing vir sonkrag",roof:"Dak",ground:"Grond",carport:"Motorafdak",mixed:"Gemeng",otherPlacementLabel:"Beskryf asseblief die voorkeurplasing",otherPlacementPlaceholder:"bv. Dam, skadustruktuur of aangrensende eiendom",addressPlaceholder:"Soek besigheid, plaas, dorp of adres",searchAddress:"Soek adres",coordinatePlaceholder:"Koördinate, bv. -29.8587, 31.0218",useCoordinates:"Gebruik koördinate",useLocation:"◎ Gebruik huidige ligging",skipLocation:"Slaan ligging oor",locationInitial:"Geen ligging gedeel nie. Soek, plak koördinate of gebruik hierdie toestel se posisie.",pinType:"Pen-tipe",pinSolar:"☀ Sonkragplasing",pinInverter:"▣ Omskakelaar / battery",pinGrid:"⚡ Eskom / netaansluiting",pinGenerator:"G Kragopwekker",pinCritical:"! Kritieke laste",pinCable:"● Kabelroetepunt",toolFreehand:"✏ Vryhand-area",toolRectangle:"▭ Reghoek",toolPin:"📍 Plaas gekose pen",toolCable:"📏 Meet kabelroete",toolClear:"↺ Maak kaart skoon",
      step4:"Stap 4 · Dokumente",documentsTitle:"Berei die assesseringsdokumente voor.",documentsHelp:"Kies ’n status vir elke item. Lêers bly op hierdie toestel totdat u dit doelbewus deel.",emailEyebrow:"E-posassistent vir verteenwoordiger",emailTitle:"Omskep u antwoorde in ’n duidelike oorhandiging.",emailHelp:"Ons berei ’n professionele e-pos met u aansoek en stemnota voor. U kan dit hersien voordat u e-posprogram oopmaak.",draftEmail:"Stel e-pos aan Chariot op",emailPrivacy:"Niks word outomaties gestuur nie.",documentsIntro:"’n Onlangse elektrisiteitsrekening is die nuttigste beginpunt. Die ander items kan volg wanneer beskikbaar.",docBills:"Onlangse elektrisiteitsrekeninge",docBillsHelp:"Ideaal 3–12 maande",docCompany:"Maatskappyregistrasiedokumente",docCompanyHelp:"CIPC of gelykwaardig",docTenure:"Bewys van perseelbesit",docTenureHelp:"Titelakte of huurkontrak",docDirector:"Direkteur / gemagtigde persoon se besonderhede",docDirectorHelp:"ID slegs wanneer formeel versoek",docGenerator:"Kragopwekkerinligting",docGeneratorHelp:"Grootte, brandstofverbruik of diensrekord",available:"Beskikbaar",sendLater:"Sal later stuur",needHelp:"Benodig hulp",notApplicable:"Nie van toepassing nie",chooseFile:"Kies lêer",
      step5:"Stap 5 · Hersien",reviewTitle:"U projekoorhandiging is gereed.",reviewHelp:"Hersien die opsomming en kies dan hoe u dit met Chariot Power wil deel.",readinessLabel:"Aansoekgereedheid",nextTitle:"Wat gebeur volgende",nextCopy:"’n Chariot-verteenwoordiger sal die inligting hersien, enige gapings uitklaar en die toepaslike tegniese en finansieringsbeoordeling reël.",extraNotes:"Enigiets anders wat Chariot moet weet?",notesPlaceholder:"Perseelbeperkings, tydsberekening, uitbreidingsplanne of vrae",shareWhatsApp:"Deel via WhatsApp",copySummary:"Kopieer opsomming",disclaimer:"Hierdie aansoek ondersteun slegs ’n aanduidende beoordeling. Alle stelsel-, produksie-, besparings-, finansierings-, krediet-, strukturele, netwerk- en ingenieursuitkomste bly onderhewig aan volledige beoordeling en formele goedkeuring.",clearDraft:"Vee gestoorde konsep uit",continue:"Gaan voort →",back:"← Terug",skip:"Slaan vir eers oor",review:"Hersien aansoek →",
      progress:"Stap {step} van 5 · {label}",voiceListening:"Luister… praat natuurlik.",voiceStopped:"Stemnota gestop. U kan die transkripsie wysig.",voiceUnsupported:"Stemtranskripsie word nie deur hierdie blaaier ondersteun nie. Tik asseblief u nota.",voiceDenied:"Mikrofoontoegang was nie beskikbaar nie. Tik asseblief u nota.",guideNone:"Voeg ’n bietjie meer besonderhede by voordat u voorstelle vra.",guideDone:"{count} antwoord(e) voorgestel. Hersien dit voordat u voortgaan.",searching:"Soek tans…",noResults:"Geen passende adres gevind nie. Probeer ’n dorp plus provinsie of plak koördinate.",searchError:"Adres-soektog is tydelik onbeskikbaar. Plak koördinate of gebruik hierdie toestel se posisie.",invalidCoordinates:"Voer breedte- en lengtegraad in, geskei deur ’n komma.",locating:"Versoek hierdie toestel se ligging…",locationDenied:"Ligging kon nie verkry word nie. Soek ’n adres of plak koördinate.",locationSkipped:"Ligging oorgeslaan. Chariot kan dit later bevestig.",locationConfirmed:"Perseel bevestig: {lat}, {lng}",mapCount:"{areas} area(s) · {pins} pen(ne) · {cables} kabelroete(s){distance}",cableDistance:" · {metres} m totaal",drawingFreehand:"Teken direk op die kaart en laat los om die area te voltooi.",drawingPin:"Tik op die kaart om die gekose pen te plaas.",paperwork:"{available} item(s) beskikbaar · {later} volg later · {help} benodig hulp · {files} lêer(s) gekies",summaryTitle:"Aansoekopsomming",summaryContact:"Kontak",summaryCompany:"Besigheid",summarySector:"Perseeltipe",summaryBill:"Maandelikse elektrisiteitskoste",summarySupply:"Kragvoorsiening",summaryGenerator:"Kragopwekker",summaryGoal:"Prioriteit",summaryFunding:"Finansieringsrigting",summaryPlacement:"Sonkragplasing",summaryLocation:"Perseelligging",summaryTranscript:"Stem- / getikte nota",summaryDocuments:"Dokumente",summaryFiles:"Gekose lêers",noLocation:"Nie verskaf nie",noTranscript:"Nie verskaf nie",readinessStrong:"Sterk begininligting. Chariot kan direk na validering beweeg.",readinessMedium:"Goeie beginpunt. Chariot sal ’n paar items met u uitklaar.",readinessEarly:"Vroeëstadium-aansoek. Chariot sal help om die oorblywende gapings te vul.",emailSubject:"Energiebeoordelingsaansoek — {company}",emailIntro:"Hallo Chariot Power,\n\nHersien asseblief die volgende kliënt-energieaansoek. Alle inligting is aanduidend en onderhewig aan volledige tegniese en kredietbeoordeling.\n\n",emailClose:"\n\nKontak my asseblief om die volgende stappe te bevestig.\n\nVriendelike groete,\n{name}",copied:"Aansoekopsomming gekopieer.",copyFailed:"Kopieer was nie beskikbaar nie. Kies en kopieer die opsomming handmatig.",clearConfirm:"Vee hierdie gestoorde aansoek uit en begin weer?",filesLocal:"Lêers wat hier gekies is, word nie outomaties aangeheg nie. Heg dit asseblief in u e-pos- of WhatsApp-gesprek aan."
    },
    zu: {
      brandProduct:"Isicelo Samandla Sekhasimende",brandLine:"Ukulungiselela iphrojekthi ngokuyimfihlo",openSnapshot:"Vula i-Energy Snapshot",languageLabel:"Ulimi",
      eyebrow:"Chariot Power · Isicelo esiqondisiwe",heroTitle:"Lungiselela iphrojekthi yakho yamandla ukuze ihlolwe ngobungcweti.",heroIntro:"Yabelana ngalokho okwaziyo. Khetha “Angiqiniseki” lapho kudingeka khona; uChariot uzoqinisekisa imininingwane yobuchwepheshe neyezimali nawe.",trust1:"Izinketho eziqondisiwe",trust2:"Okusalungiswa kugcinwe kule divayisi",trust3:"Nguwe okhetha isikhathi sokwabelana",subjectLine:"Okokuqala kuphela · Kuncike ekuhlolweni okuphelele kobuchwepheshe nekhredithi",
      voiceEyebrow:"Khuluma esikhundleni sokuthayipha",voiceTitle:"Chaza indawo yakho ngamazwi akho.",voiceHelp:"Qopha umlayezo omfishane noma uthayiphe ngezansi. Ithuluzi lingaphakamisa izimpendulo ngaphandle kokushintsha osuvele ukuzikhethile.",speechLanguage:"Ulimi lokukhuluma",startVoice:"Qala umlayezo wezwi",stopVoice:"Misa",guideAnswers:"Sebenzisa umlayezo ukuqondisa izimpendulo",voicePrivacy:"Ukucutshungulwa kwezwi kuncike kusiphequluli sakho. Thayipha uma ungafuni ukunikeza imvume yemakrofoni.",transcriptPlaceholder:"Isibonelo: Sisebenzisa iphakhausi eduze naseCeres, sichitha cishe u-R180 000 ngenyanga futhi sidinga izindleko eziphansi namandla ayisipele…",
      tabContact:"Oxhumana naye",tabEnergy:"Amandla",tabSite:"Indawo",tabDocuments:"Amadokhumenti",tabReview:"Buyekeza",saveReturn:"Kugcinwa ngokuzenzakalela · buya noma nini",
      step1:"Isinyathelo 1 · Oxhumana naye",contactTitle:"UChariot kufanele akhulume nobani?",contactHelp:"Kudingeka imininingwane ebalulekile yokuxhumana kuphela.",nameLabel:"Igama lakho",companyLabel:"Ibhizinisi noma inhlangano",phoneLabel:"Inombolo yeselula",emailLabel:"I-imeyili",optional:"Akuphoqelekile",nameError:"Sicela ufake igama lakho.",companyError:"Sicela ufake igama lebhizinisi.",phoneError:"Sicela ufake inombolo yokuxhumana.",phonePlaceholder:"isb. 082 123 4567",sectorLegend:"Uhlobo lwendawo",sectorAgriculture:"Ezolimo",sectorIndustrial:"Imboni",sectorCommercial:"Ezentengiselwano",sectorHospitality:"Ezokuvakasha",other:"Okunye",notSure:"Angiqiniseki",otherSiteLabel:"Sicela uchaze uhlobo lwendawo",otherSitePlaceholder:"isb. Isikole, umtholampilo noma idepho yezokuthutha",
      step2:"Isinyathelo 2 · Amandla",energyTitle:"Yini echaza kahle indawo?",energyHelp:"Khetha impendulo esondele kakhulu. Izilinganiso zamukelekile.",billLegend:"Izindleko zikagesi zenyanga ezivamile",bill1:"Ngaphansi kuka-R25k",bill2:"R25k–R75k",bill3:"R75k–R250k",bill4:"Ngaphezu kuka-R250k",supplyLegend:"Umhlinzeki kagesi",municipal:"Umasipala",privateSupply:"Umnikazi / ozimele",otherSupplyLabel:"Sicela uchaze umhlinzeki kagesi",otherSupplyPlaceholder:"isb. Ifa, inethiwekhi yangasese noma ijeneretha",generatorLegend:"Ikhona ijeneretha endaweni?",yes:"Yebo",no:"Cha",generatorSizeLabel:"Usayizi olinganiselwe wejeneretha",generator1:"Ngaphansi kuka-100 kVA",generator3:"Ngaphezu kuka-500 kVA",goalLegend:"Yini ebaluleke kakhulu?",goalCost:"Yehlisa izindleko",goalResilience:"Thuthukisa ukuthembeka",goalBoth:"Izindleko nokuthembeka",goalGrowth:"Sekela ukukhula",fundingLegend:"Indlela yezimali oyikhethayo",fundingPpa:"PPA · akukho mali yokuqala",fundingCash:"Thenga ngokuphelele",fundingRent:"Qasha uze ube ngumnikazi",fundingBank:"Ibhange / uxhaso lwempahla",fundingCompare:"Qhathanisa zonke izindlela",
      step3:"Isinyathelo 3 · Indawo",siteTitle:"Uhlelo lungafakwa kuphi?",siteHelp:"Qinisekisa indawo uma kulula. Ukudwetshwa kobuchwepheshe okunembile kungaqedwa kamuva.",placementLegend:"Indawo ekhethwayo yesola",roof:"Uphahla",ground:"Phansi",carport:"I-carport",mixed:"Kuxubile",otherPlacementLabel:"Sicela uchaze indawo oyikhethayo",otherPlacementPlaceholder:"isb. Idamu, isakhiwo somthunzi noma umhlaba oseduze",addressPlaceholder:"Sesha ibhizinisi, ipulazi, idolobha noma ikheli",searchAddress:"Sesha ikheli",coordinatePlaceholder:"Ama-coordinates, isb. -29.8587, 31.0218",useCoordinates:"Sebenzisa ama-coordinates",useLocation:"◎ Sebenzisa indawo yamanje",skipLocation:"Yeqa indawo",locationInitial:"Ayikho indawo eyabiwe. Sesha, namathisela ama-coordinates noma usebenzise indawo yale divayisi.",pinType:"Uhlobo lwephini",pinSolar:"☀ Indawo yesola",pinInverter:"▣ I-inverter / ibhethri",pinGrid:"⚡ Ukuxhumeka kwe-Eskom / igridi",pinGenerator:"G Ijeneretha",pinCritical:"! Imithwalo ebalulekile",pinCable:"● Iphoyinti lomzila wekhebula",toolFreehand:"✏ Indawo edwetshwe ngesandla",toolRectangle:"▭ Unxande",toolPin:"📍 Beka iphini elikhethiwe",toolCable:"📏 Kala umzila wekhebula",toolClear:"↺ Sula imephu",
      step4:"Isinyathelo 4 · Amadokhumenti",documentsTitle:"Lungiselela amadokhumenti okuhlola.",documentsHelp:"Khetha isimo sento ngayinye. Amafayela ahlala kule divayisi uze ukhethe ukwabelana ngawo.",emailEyebrow:"Umsizi we-imeyili yommeleli",emailTitle:"Guqula izimpendulo zakho zibe umbiko ocacile.",emailHelp:"Sizolungisa i-imeyili yobungcweti sisebenzisa isicelo nomlayezo wakho wezwi. Ungayibuyekeza ngaphambi kokuvula uhlelo lwe-imeyili.",draftEmail:"Bhala i-imeyili kuChariot",emailPrivacy:"Akukho okuthunyelwa ngokuzenzakalela.",documentsIntro:"Ibhili yakamuva kagesi iyisiqalo esiwusizo kakhulu. Ezinye izinto zingalandela uma sezitholakala.",docBills:"Amabhili kagesi akamuva",docBillsHelp:"Kungcono izinyanga ezi-3–12",docCompany:"Amadokhumenti okubhaliswa kwenkampani",docCompanyHelp:"CIPC noma okulinganayo",docTenure:"Ubufakazi belungelo lendawo",docTenureHelp:"Itayitela noma isivumelwano sokuqasha",docDirector:"Imininingwane yomqondisi / ogunyaziwe",docDirectorHelp:"I-ID kuphela uma icelwa ngokusemthethweni",docGenerator:"Imininingwane yejeneretha",docGeneratorHelp:"Usayizi, ukusetshenziswa kukaphethiloli noma irekhodi lesevisi",available:"Iyatholakala",sendLater:"Ngizothumela kamuva",needHelp:"Ngidinga usizo",notApplicable:"Akusebenzi",chooseFile:"Khetha ifayela",
      step5:"Isinyathelo 5 · Buyekeza",reviewTitle:"Umbiko wephrojekthi yakho usulungile.",reviewHelp:"Buyekeza isifinyezo bese ukhetha indlela yokwabelana noChariot Power.",readinessLabel:"Ukulungela kwesicelo",nextTitle:"Kwenzekani ngokulandelayo",nextCopy:"Ummeleli wakwaChariot uzobuyekeza imininingwane, acacise okusashodayo futhi ahlele ukuhlolwa okufanele kobuchwepheshe nezimali.",extraNotes:"Kukhona okunye uChariot okufanele akwazi?",notesPlaceholder:"Imikhawulo yendawo, isikhathi, izinhlelo zokukhula noma imibuzo",shareWhatsApp:"Yabelana nge-WhatsApp",copySummary:"Kopisha isifinyezo",disclaimer:"Lesi sicelo sisekela ukuhlolwa kokuqala kuphela. Zonke izibalo zesistimu, ukukhiqizwa, ukonga, uxhaso, ikhredithi, isakhiwo, igridi nobunjiniyela zincike ekuhlolweni okuphelele nasekuvunyweni ngokusemthethweni.",clearDraft:"Sula okusalungiswa",continue:"Qhubeka →",back:"← Emuva",skip:"Yeqa okwamanje",review:"Buyekeza isicelo →",
      progress:"Isinyathelo {step} kwezi-5 · {label}",voiceListening:"Ngilalele… khuluma ngokwemvelo.",voiceStopped:"Umlayezo wezwi umisiwe. Ungahlela umbhalo.",voiceUnsupported:"Ukuguqulwa kwezwi akusekelwa yilesi siphequluli. Sicela uthayiphe umlayezo.",voiceDenied:"Imakrofoni ayitholakalanga. Sicela uthayiphe umlayezo.",guideNone:"Faka imininingwane eyengeziwe ngaphambi kokucela iziphakamiso.",guideDone:"Kuphakanyiswe izimpendulo ezingu-{count}. Sicela uzibuyekeze.",searching:"Kuyaseshwa…",noResults:"Alikho ikheli elifanayo. Zama idolobha nesifundazwe noma unamathisele ama-coordinates.",searchError:"Ukusesha ikheli akutholakali okwamanje. Namathisela ama-coordinates noma usebenzise indawo yale divayisi.",invalidCoordinates:"Faka i-latitude ne-longitude ehlukaniswe yikhoma.",locating:"Kucelwa indawo yale divayisi…",locationDenied:"Indawo ayitholakalanga. Sesha ikheli noma unamathisele ama-coordinates.",locationSkipped:"Indawo yeqiwe. UChariot angayiqinisekisa kamuva.",locationConfirmed:"Indawo iqinisekisiwe: {lat}, {lng}",mapCount:"Izindawo ezingu-{areas} · amaphini angu-{pins} · imizila yekhebula engu-{cables}{distance}",cableDistance:" · amamitha angu-{metres} esewonke",drawingFreehand:"Dweba ngqo ebalazweni bese uyadedela ukuze uqede indawo.",drawingPin:"Thepha ebalazweni ukubeka iphini elikhethiwe.",paperwork:"Izinto ezingu-{available} ziyatholakala · ezingu-{later} zizolandela · ezingu-{help} zidinga usizo · amafayela angu-{files} akhethiwe",summaryTitle:"Isifinyezo sesicelo",summaryContact:"Oxhumana naye",summaryCompany:"Ibhizinisi",summarySector:"Uhlobo lwendawo",summaryBill:"Izindleko zikagesi zenyanga",summarySupply:"Umhlinzeki kagesi",summaryGenerator:"Ijeneretha",summaryGoal:"Okuza kuqala",summaryFunding:"Indlela yezimali",summaryPlacement:"Indawo yesola",summaryLocation:"Indawo yesiza",summaryTranscript:"Umlayezo wezwi / othayiphiwe",summaryDocuments:"Amadokhumenti",summaryFiles:"Amafayela akhethiwe",noLocation:"Akufakiwe",noTranscript:"Akufakiwe",readinessStrong:"Ulwazi lokuqala luqinile. UChariot angaqala ukuqinisekisa.",readinessMedium:"Isiqalo esihle. UChariot uzocacisa izinto ezimbalwa nawe.",readinessEarly:"Isicelo sisesigabeni sokuqala. UChariot uzosiza ukugcwalisa okushodayo.",emailSubject:"Isicelo sokuhlolwa kwamandla — {company}",emailIntro:"Sawubona Chariot Power,\n\nSicela nibuyekeze isicelo samandla sekhasimende esilandelayo. Lonke ulwazi luyinkomba kuphela futhi luncike ekuhlolweni okuphelele kobuchwepheshe nekhredithi.\n\n",emailClose:"\n\nNgicela ningithinte ukuze niqinisekise izinyathelo ezilandelayo.\n\nOzithobayo,\n{name}",copied:"Isifinyezo sesicelo sikopishiwe.",copyFailed:"Ukukopisha akutholakalanga. Sicela ukhethe bese ukopisha isifinyezo mathupha.",clearConfirm:"Sula lesi sicelo esigciniwe bese uqala kabusha?",filesLocal:"Amafayela akhethwe lapha awanamathiseli ngokuzenzakalela. Sicela uwanamathisele ku-imeyili noma engxoxweni ye-WhatsApp."
    }
  };
  Object.assign(I18N.en,{
    largeFilesTitle:"Large files or document folders?",largeFilesHelp:"Upload them to your preferred secure file service, then paste the sharing link below. Check that Chariot can open the link before submitting.",openDrive:"Open Google Drive",openTransfer:"Open WeTransfer",shareLinkLabel:"Document sharing link",shareLinkPlaceholder:"Paste Google Drive, WeTransfer or another secure link",submitEyebrow:"Final handover",submitTitle:"Prepare and submit your application.",submitHelp:"We will package your answers and selected files into a ZIP on this device. Your email app will then open with a completed handover to Chariot.",prepareSubmit:"Prepare & submit",preparingZip:"Preparing secure ZIP…",zipReady:"ZIP downloaded. Attach it to the email that opens next.",zipTooLarge:"Your selected files are too large for a reliable browser ZIP. Upload them to Drive or WeTransfer, paste the link, then submit.",zipUnavailable:"ZIP packaging is unavailable. Use a sharing link or attach the files manually.",shareLinkMissing:"Add a sharing link for this large document set before submitting."
  });
  Object.assign(I18N.af,{
    largeFilesTitle:"Groot lêers of dokumentvouers?",largeFilesHelp:"Laai dit na u voorkeur veilige lêerdiens op en plak die deelskakel hieronder. Kontroleer dat Chariot die skakel kan oopmaak voordat u indien.",openDrive:"Open Google Drive",openTransfer:"Open WeTransfer",shareLinkLabel:"Dokumentdeelskakel",shareLinkPlaceholder:"Plak Google Drive-, WeTransfer- of ’n ander veilige skakel",submitEyebrow:"Finale oorhandiging",submitTitle:"Berei u aansoek voor en dien dit in.",submitHelp:"Ons verpak u antwoorde en gekose lêers op hierdie toestel in ’n ZIP. U e-posprogram sal dan met ’n voltooide oorhandiging aan Chariot oopmaak.",prepareSubmit:"Berei voor en dien in",preparingZip:"Berei veilige ZIP voor…",zipReady:"ZIP afgelaai. Heg dit aan die e-pos wat volgende oopmaak.",zipTooLarge:"U gekose lêers is te groot vir ’n betroubare blaaier-ZIP. Laai dit na Drive of WeTransfer op, plak die skakel en dien dan in.",zipUnavailable:"ZIP-verpakking is nie beskikbaar nie. Gebruik ’n deelskakel of heg die lêers handmatig aan.",shareLinkMissing:"Voeg ’n deelskakel vir hierdie groot dokumentstel by voordat u indien."
  });
  Object.assign(I18N.zu,{
    largeFilesTitle:"Amafayela amakhulu noma amafolda amadokhumenti?",largeFilesHelp:"Walaye kusevisi yamafayela evikelekile oyikhethayo bese unamathisela isixhumanisi sokwabelana ngezansi. Hlola ukuthi uChariot angakwazi ukusivula ngaphambi kokuthumela.",openDrive:"Vula i-Google Drive",openTransfer:"Vula i-WeTransfer",shareLinkLabel:"Isixhumanisi sokwabelana ngamadokhumenti",shareLinkPlaceholder:"Namathisela isixhumanisi se-Google Drive, WeTransfer noma esinye esivikelekile",submitEyebrow:"Umbiko wokugcina",submitTitle:"Lungiselela bese uthumela isicelo sakho.",submitHelp:"Sizopakisha izimpendulo namafayela akhethiwe abe yi-ZIP kule divayisi. Uhlelo lwe-imeyili luzovuleka nombiko ogcwalisiwe oya kuChariot.",prepareSubmit:"Lungiselela bese uthumela",preparingZip:"Kulungiselelwa i-ZIP evikelekile…",zipReady:"I-ZIP ilandiwe. Yinamathisele ku-imeyili evuleka ngokulandelayo.",zipTooLarge:"Amafayela akho makhulu kakhulu ukuze kwenziwe i-ZIP ethembekile kusiphequluli. Walaye ku-Drive noma ku-WeTransfer, unamathisele isixhumanisi bese uthumela.",zipUnavailable:"Ukupakisha i-ZIP akutholakali. Sebenzisa isixhumanisi noma unamathisele amafayela mathupha.",shareLinkMissing:"Faka isixhumanisi sokwabelana salawa madokhumenti amakhulu ngaphambi kokuthumela."
  });
  Object.assign(I18N.en,{summaryShareLink:"Document sharing link",reselectFiles:"Some files were selected in an earlier session. For privacy, select them again before creating the ZIP, or add a sharing link."});
  Object.assign(I18N.af,{summaryShareLink:"Dokumentdeelskakel",reselectFiles:"Sommige lêers is in ’n vorige sessie gekies. Kies dit om privaatheidsredes weer voordat u die ZIP skep, of voeg ’n deelskakel by."});
  Object.assign(I18N.zu,{summaryShareLink:"Isixhumanisi samadokhumenti",reselectFiles:"Amanye amafayela akhethwe esikhathini esedlule. Ngenxa yobumfihlo, wakhethe futhi ngaphambi kokudala i-ZIP, noma ufake isixhumanisi sokwabelana."});
  Object.assign(I18N.en,{
    documentGuidance:"Document guidance",documentGuidanceCopy:"These documents help Chariot validate consumption, site rights, technical feasibility and suitable funding routes. Start with what is available and only share sensitive records through an approved channel.",draftRequestEmail:"Draft a request email",close:"Close",
    emailEyebrow:"Document request assistant",emailTitle:"Ask for missing paperwork professionally.",emailHelp:"Choose who should receive the request. The draft will use your application, document statuses and voice note.",requestRecipient:"Request from",recipientAccountant:"Accountant / finance team",recipientLandlord:"Landlord / property owner",recipientMunicipality:"Municipality / utility",recipientInternal:"Internal operations team",requestDocuments:"Draft request for missing documents",draftEmail:"Draft application email to Chariot",
    coreDocuments:"Core commercial & funding documents",coreDocumentsHint:"Best prepared first",technicalDocuments:"Technical & site documents",technicalDocumentsHint:"Add when applicable",statusLabel:"Document status",infoAria:"Why this document is useful",removeFile:"Remove file",
    docBills:"Electricity bills — 12 months preferred",docBillsHelp:"Complete utility bills, including tariff, demand and consumption pages.",docCompany:"Company registration documents",docCompanyHelp:"CIPC registration certificate, MOI or equivalent constitutional records.",docTenure:"Proof of site ownership or lease",docTenureHelp:"Title deed, current lease and landlord consent where relevant.",docDirector:"Director / authorised representative details",docDirectorHelp:"Identity and authority records only where required for funding and due diligence.",docBank:"Recent bank statements — last 3–6 months",docBankHelp:"Business operating-account statements used only for the relevant funding assessment.",docAfs:"Latest Annual Financial Statements (AFS)",docAfsHelp:"Most recent signed or final AFS; draft accounts may be noted as such.",docManagement:"Current management accounts or trial balance",docManagementHelp:"Useful when the latest AFS is older than six months.",docTax:"Tax compliance and VAT details",docTaxHelp:"SARS tax compliance status or VAT information where requested by a funder.",docInterval:"Interval or smart-meter data",docIntervalHelp:"Half-hourly or hourly CSV data materially improves solar and storage sizing.",docGenerator:"Generator specifications and fuel records",docGeneratorHelp:"Nameplate size, runtime, fuel consumption, service records and recent invoices.",docExisting:"Existing energy proposals and system records",docExistingHelp:"Previous solar, storage or generator proposals, warranties and monitoring exports.",docPhotos:"Site and electrical photographs",docPhotosHelp:"Roof or land, main distribution board, transformer, meter and generator photographs.",docStructural:"Roof condition and structural information",docStructuralHelp:"Structural drawings, engineer reports, asbestos status or known roof constraints.",docElectrical:"Electrical drawings and supply information",docElectricalHelp:"Single-line diagram, notified maximum demand, transformer and main-breaker details.",docUtility:"Utility and grid correspondence",docUtilityHelp:"Municipal or Eskom account details, applications, approvals and point-of-connection information.",
    requestNoMissing:"No outstanding documents match this recipient. Change the recipient or update a document status.",requestSubject:"Request for energy assessment documents — {company}",requestGreetingAccountant:"Good day,",requestGreetingLandlord:"Good day,",requestGreetingMunicipality:"Good day,",requestGreetingInternal:"Hi team,",requestIntro:"We are preparing an energy assessment for {company}{site}. Please assist with the following documents:",requestContext:"Application context",requestVoiceContext:"Client note",requestAsk:"Please share the available documents securely, or confirm when they are likely to be ready. Sensitive records should only be sent through an approved channel.",requestClose:"Thank you for your assistance.\n\nKind regards,\n{name}",requestPrepared:"Your document request has been prepared in your email app. Nothing was sent automatically."
  });
  Object.assign(I18N.af,{
    documentGuidance:"Dokumentriglyne",documentGuidanceCopy:"Hierdie dokumente help Chariot om verbruik, perseelregte, tegniese uitvoerbaarheid en geskikte finansieringsroetes te bevestig. Begin met wat beskikbaar is en deel sensitiewe rekords slegs deur ’n goedgekeurde kanaal.",draftRequestEmail:"Stel ’n versoek-e-pos op",close:"Sluit",
    emailEyebrow:"Dokumentversoek-assistent",emailTitle:"Versoek ontbrekende dokumente professioneel.",emailHelp:"Kies wie die versoek moet ontvang. Die konsep gebruik u aansoek, dokumentstatusse en stemnota.",requestRecipient:"Versoek van",recipientAccountant:"Rekenmeester / finansiële span",recipientLandlord:"Verhuurder / eienaar",recipientMunicipality:"Munisipaliteit / nutsdiens",recipientInternal:"Interne bedryfspan",requestDocuments:"Stel versoek vir ontbrekende dokumente op",draftEmail:"Stel aansoek-e-pos aan Chariot op",
    coreDocuments:"Kern kommersiële en finansieringsdokumente",coreDocumentsHint:"Berei verkieslik eerste voor",technicalDocuments:"Tegniese en perseeldokumente",technicalDocumentsHint:"Voeg by waar van toepassing",statusLabel:"Dokumentstatus",infoAria:"Waarom hierdie dokument nuttig is",removeFile:"Verwyder lêer",
    docBills:"Elektrisiteitsrekeninge — verkieslik 12 maande",docBillsHelp:"Volledige nutsrekeninge, insluitend tarief-, aanvraag- en verbruiksbladsye.",docCompany:"Maatskappyregistrasiedokumente",docCompanyHelp:"CIPC-registrasiesertifikaat, MOI of gelykwaardige stigtingsrekords.",docTenure:"Bewys van perseeleienaarskap of huur",docTenureHelp:"Titelakte, huidige huurkontrak en verhuurdertoestemming waar toepaslik.",docDirector:"Direkteur / gemagtigde verteenwoordiger se besonderhede",docDirectorHelp:"Identiteits- en magtigingsrekords slegs waar finansiering en omsigtigheid dit vereis.",docBank:"Onlangse bankstate — laaste 3–6 maande",docBankHelp:"Besigheid se bedryfsrekeningstate wat slegs vir die toepaslike finansieringsbeoordeling gebruik word.",docAfs:"Jongste Finansiële Jaarstate (AFS)",docAfsHelp:"Mees onlangse getekende of finale AFS; konseprekeninge kan as sodanig aangedui word.",docManagement:"Huidige bestuursrekeninge of proefbalans",docManagementHelp:"Nuttig wanneer die jongste AFS ouer as ses maande is.",docTax:"Belastingnakoming en BTW-besonderhede",docTaxHelp:"SARS-belastingnakomingstatus of BTW-inligting waar ’n finansierder dit versoek.",docInterval:"Interval- of slimmetermeting",docIntervalHelp:"Halfuurlikse of uurlikse CSV-data verbeter sonkrag- en batterygroottebepaling beduidend.",docGenerator:"Kragopwekkerspesifikasies en brandstofrekords",docGeneratorHelp:"Naamplaatgrootte, looptyd, brandstofverbruik, diensrekords en onlangse fakture.",docExisting:"Bestaande energievoorstelle en stelselrekords",docExistingHelp:"Vorige sonkrag-, battery- of kragopwekkervoorstelle, waarborge en moniteringsuitvoere.",docPhotos:"Perseel- en elektriese foto’s",docPhotosHelp:"Dak of grond, hoofverdeelbord, transformator, meter en kragopwekkerfoto’s.",docStructural:"Dakkondisie en strukturele inligting",docStructuralHelp:"Struktuurtekeninge, ingenieursverslae, asbesstatus of bekende dakbeperkings.",docElectrical:"Elektriese tekeninge en voorsieningsinligting",docElectricalHelp:"Enkellyndiagram, aangemelde maksimum aanvraag, transformator- en hoofbrekerbesonderhede.",docUtility:"Nutsdiens- en netkorrespondensie",docUtilityHelp:"Munisipale of Eskom-rekeningbesonderhede, aansoeke, goedkeurings en aansluitpuntinligting.",
    requestNoMissing:"Geen uitstaande dokumente pas by hierdie ontvanger nie. Verander die ontvanger of werk ’n dokumentstatus by.",requestSubject:"Versoek vir energiebeoordelingsdokumente — {company}",requestGreetingAccountant:"Goeiedag,",requestGreetingLandlord:"Goeiedag,",requestGreetingMunicipality:"Goeiedag,",requestGreetingInternal:"Hallo span,",requestIntro:"Ons berei ’n energiebeoordeling vir {company}{site} voor. Help asseblief met die volgende dokumente:",requestContext:"Aansoekkonteks",requestVoiceContext:"Kliëntnota",requestAsk:"Deel asseblief die beskikbare dokumente veilig, of bevestig wanneer dit gereed sal wees. Sensitiewe rekords moet slegs deur ’n goedgekeurde kanaal gestuur word.",requestClose:"Dankie vir u hulp.\n\nVriendelike groete,\n{name}",requestPrepared:"U dokumentversoek is in u e-posprogram voorberei. Niks is outomaties gestuur nie."
  });
  Object.assign(I18N.zu,{
    documentGuidance:"Umhlahlandlela wamadokhumenti",documentGuidanceCopy:"La madokhumenti asiza uChariot aqinisekise ukusetshenziswa kwamandla, amalungelo endawo, ukufaneleka kobuchwepheshe nezindlela ezifanele zoxhaso. Qala ngalokho okukhona futhi wabelane ngamarekhodi ayimfihlo kuphela ngendlela egunyaziwe.",draftRequestEmail:"Bhala i-imeyili yesicelo",close:"Vala",
    emailEyebrow:"Umsizi wokucela amadokhumenti",emailTitle:"Cela amadokhumenti angekho ngobungcweti.",emailHelp:"Khetha ozothola isicelo. Okusalungiswa kuzosebenzisa isicelo sakho, isimo samadokhumenti nomlayezo wezwi.",requestRecipient:"Cela ku",recipientAccountant:"Umgcini-mabhuku / ithimba lezezimali",recipientLandlord:"Umnikazi wendawo",recipientMunicipality:"Umasipala / umhlinzeki kagesi",recipientInternal:"Ithimba langaphakathi lokusebenza",requestDocuments:"Bhala isicelo samadokhumenti angekho",draftEmail:"Bhala i-imeyili yesicelo eya kuChariot",
    coreDocuments:"Amadokhumenti ayisisekelo ebhizinisi noxhaso",coreDocumentsHint:"Kuhle ukuqala ngawo",technicalDocuments:"Amadokhumenti obuchwepheshe nendawo",technicalDocumentsHint:"Wengeze uma esebenza",statusLabel:"Isimo sedokhumenti",infoAria:"Kungani le dokhumenti iwusizo",removeFile:"Susa ifayela",
    docBills:"Izikweletu zikagesi — kukhethwa izinyanga eziyi-12",docBillsHelp:"Izikweletu ezigcwele ezibonisa intela, amandla aphezulu nokusetshenziswa.",docCompany:"Amadokhumenti okubhaliswa kwenkampani",docCompanyHelp:"Isitifiketi se-CIPC, i-MOI noma amarekhodi afanayo enkampani.",docTenure:"Ubufakazi bobunikazi noma besivumelwano sokuqasha indawo",docTenureHelp:"I-title deed, isivumelwano samanje nemvume yomnikazi lapho kudingeka.",docDirector:"Imininingwane yomqondisi / omele inkampani",docDirectorHelp:"Umazisi nobufakazi begunya kuphela lapho kudingwa uxhaso nokuhlolwa.",docBank:"Izitatimende zasebhange — izinyanga ezi-3–6",docBankHelp:"Izitatimende ze-akhawunti yebhizinisi ezisetshenziselwa kuphela ukuhlolwa koxhaso olufanele.",docAfs:"Izitatimende Zezimali Zonyaka zakamuva (AFS)",docAfsHelp:"Ama-AFS akamuva asayiniwe noma aqediwe; awokuqala angaphawulwa kanjalo.",docManagement:"Ama-management accounts noma trial balance yamanje",docManagementHelp:"Iwusizo uma ama-AFS akamuva esedlule izinyanga eziyisithupha.",docTax:"Ukuthobela intela nemininingwane ye-VAT",docTaxHelp:"Isimo sokuthobela i-SARS noma imininingwane ye-VAT uma icelwa umxhasi.",docInterval:"Idatha ye-interval noma ye-smart meter",docIntervalHelp:"Idatha ye-CSV yehora noma yesigamu sehora ithuthukisa ukusizwa kosayizi welanga nebhethri.",docGenerator:"Imininingwane ye-generator namarekhodi kaphethiloli",docGeneratorHelp:"Usayizi, isikhathi sokusebenza, ukusetshenziswa kukaphethiloli, isevisi nama-invoyisi akamuva.",docExisting:"Iziphakamiso zamandla namarekhodi esistimu akhona",docExistingHelp:"Iziphakamiso zelanga, ibhethri noma generator, amawaranti nedatha yokuqapha.",docPhotos:"Izithombe zendawo nezikagesi",docPhotosHelp:"Uphahla noma umhlaba, ibhodi elikhulu, i-transformer, imitha ne-generator.",docStructural:"Isimo sophahla nolwazi lwesakhiwo",docStructuralHelp:"Imidwebo, imibiko kanjiniyela, isimo se-asbestos noma imikhawulo yophahla.",docElectrical:"Imidwebo kagesi nolwazi lokuhlinzekwa",docElectricalHelp:"I-single-line diagram, maximum demand, i-transformer ne-main breaker.",docUtility:"Ukuxhumana nomhlinzeki kagesi / igridi",docUtilityHelp:"Imininingwane ye-akhawunti kaMasipala noma Eskom, izicelo, izimvume nendawo yokuxhuma.",
    requestNoMissing:"Awekho amadokhumenti angekho ahambisana nalo mamukeli. Shintsha umamukeli noma isimo sedokhumenti.",requestSubject:"Isicelo samadokhumenti okuhlolwa kwamandla — {company}",requestGreetingAccountant:"Sawubona,",requestGreetingLandlord:"Sawubona,",requestGreetingMunicipality:"Sawubona,",requestGreetingInternal:"Sanibonani thimba,",requestIntro:"Silungiselela ukuhlolwa kwamandla kwe-{company}{site}. Sicela nisize ngala madokhumenti:",requestContext:"Umongo wesicelo",requestVoiceContext:"Umlayezo wekhasimende",requestAsk:"Sicela nabelane ngokuphephile ngamadokhumenti akhona, noma niqinisekise ukuthi azolunga nini. Amarekhodi ayimfihlo kufanele athunyelwe kuphela ngendlela egunyaziwe.",requestClose:"Siyabonga ngosizo lwenu.\n\nOzithobayo,\n{name}",requestPrepared:"Isicelo sakho samadokhumenti silungisiwe ohlelweni lwe-imeyili. Akukho okuthunyelwe ngokuzenzakalela."
  });
  window.__APPLICATION_I18N = I18N;

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const form = $("#applicationForm");
  const STORE = "chariot-client-application-v2";
  const DOCUMENTS = [
    {group:"core",id:"bills",title:"docBills",help:"docBillsHelp",recipient:"internal"},
    {group:"core",id:"company",title:"docCompany",help:"docCompanyHelp",recipient:"accountant"},
    {group:"core",id:"tenure",title:"docTenure",help:"docTenureHelp",recipient:"landlord"},
    {group:"core",id:"director",title:"docDirector",help:"docDirectorHelp",recipient:"accountant"},
    {group:"core",id:"bank",title:"docBank",help:"docBankHelp",recipient:"accountant"},
    {group:"core",id:"afs",title:"docAfs",help:"docAfsHelp",recipient:"accountant"},
    {group:"core",id:"management",title:"docManagement",help:"docManagementHelp",recipient:"accountant"},
    {group:"core",id:"tax",title:"docTax",help:"docTaxHelp",recipient:"accountant"},
    {group:"technical",id:"interval",title:"docInterval",help:"docIntervalHelp",recipient:"internal"},
    {group:"technical",id:"generator",title:"docGenerator",help:"docGeneratorHelp",recipient:"internal"},
    {group:"technical",id:"existing",title:"docExisting",help:"docExistingHelp",recipient:"internal"},
    {group:"technical",id:"photos",title:"docPhotos",help:"docPhotosHelp",recipient:"internal"},
    {group:"technical",id:"structural",title:"docStructural",help:"docStructuralHelp",recipient:"landlord"},
    {group:"technical",id:"electrical",title:"docElectrical",help:"docElectricalHelp",recipient:"internal"},
    {group:"technical",id:"utility",title:"docUtility",help:"docUtilityHelp",recipient:"municipality"}
  ];
  const state = { step:1, language:"en", location:null, layers:[], files:[], drawing:null };
  const selectedFiles = [];
  let map, drawnItems, activeDrawer, recognition, finalTranscript = "", selectedHelpDocument = null;

  function tr(key, vars = {}) {
    let text = (I18N[state.language] && I18N[state.language][key]) || I18N.en[key] || key;
    Object.entries(vars).forEach(([name, value]) => { text = text.replaceAll(`{${name}}`, value); });
    return text;
  }

  function documentRow(item) {
    return `<div class="document-row" data-document="${item.id}" data-recipient="${item.recipient}">
      <div class="doc-copy"><div class="doc-title"><b data-i18n="${item.title}">${escapeHtml(tr(item.title))}</b><button class="doc-info" type="button" data-doc-info="${item.id}" aria-label="${escapeHtml(tr("infoAria"))}" data-i18n-aria="infoAria">i</button></div><small data-i18n="${item.help}">${escapeHtml(tr(item.help))}</small></div>
      <label class="status-control"><span class="sr-only" data-i18n="statusLabel">${escapeHtml(tr("statusLabel"))}</span><select aria-label="${escapeHtml(tr("statusLabel"))}" data-i18n-aria="statusLabel"><option value="Will send later" data-i18n="sendLater">${escapeHtml(tr("sendLater"))}</option><option value="Available" data-i18n="available">${escapeHtml(tr("available"))}</option><option value="Need help" data-i18n="needHelp">${escapeHtml(tr("needHelp"))}</option><option value="Not applicable" data-i18n="notApplicable">${escapeHtml(tr("notApplicable"))}</option></select></label>
      <label class="mini-upload"><span data-i18n="chooseFile">${escapeHtml(tr("chooseFile"))}</span><input type="file" multiple aria-label="${escapeHtml(tr("chooseFile"))}" data-i18n-aria="chooseFile"></label>
    </div>`;
  }

  function renderDocuments() {
    const list = $("#documentList");
    if (!list) return;
    const group = (name,title,hint,open) => {
      const rows = DOCUMENTS.filter(item=>item.group===name).map(documentRow).join("");
      return `<details class="document-group" ${open ? "open" : ""}><summary><span><b data-i18n="${title}">${escapeHtml(tr(title))}</b><small data-i18n="${hint}">${escapeHtml(tr(hint))}</small></span><em>${DOCUMENTS.filter(item=>item.group===name).length}</em></summary><div class="document-group-body">${rows}</div></details>`;
    };
    list.innerHTML = group("core","coreDocuments","coreDocumentsHint",true) + group("technical","technicalDocuments","technicalDocumentsHint",false);
  }

  function applyLanguage(language) {
    state.language = I18N[language] ? language : "en";
    document.documentElement.lang = state.language;
    $("#language").value = state.language;
    $$("[data-i18n]").forEach(el => { el.textContent = tr(el.dataset.i18n); });
    $$("[data-i18n-placeholder]").forEach(el => { el.placeholder = tr(el.dataset.i18nPlaceholder); });
    $$("[data-i18n-aria]").forEach(el => { el.setAttribute("aria-label",tr(el.dataset.i18nAria)); });
    updateProgress(); updateMapReadout(); updatePaperwork(); buildSummary(); save();
  }

  function radioValue(name) {
    const input = form.elements[name] instanceof RadioNodeList
      ? [...form.elements[name]].find(item => item.checked)
      : null;
    if (!input) return tr("notSure");
    if (input.value === "Other") {
      const other = form.elements[name + "Other"];
      return other && other.value.trim() ? `Other — ${other.value.trim()}` : "Other";
    }
    if (name === "generator" && input.value === "Yes") return `Yes — ${form.elements.generatorSize.value}`;
    return input.value;
  }

  function displayValue(value) {
    const keys = {
      "Not sure":"notSure","Yes":"yes","No":"no","Agriculture":"sectorAgriculture","Industrial":"sectorIndustrial","Commercial":"sectorCommercial","Hospitality":"sectorHospitality",
      "Municipal":"municipal","Landlord / private network":"privateSupply","Under R25,000":"bill1","R25,000–R75,000":"bill2","R75,000–R250,000":"bill3","Over R250,000":"bill4",
      "Reduce energy cost":"goalCost","Improve reliability":"goalResilience","Cost and resilience":"goalBoth","Support expansion":"goalGrowth",
      "PPA — no upfront capital":"fundingPpa","Outright purchase":"fundingCash","Rent-to-own":"fundingRent","Bank or asset finance":"fundingBank","Compare all options":"fundingCompare",
      "Roof":"roof","Ground":"ground","Carport":"carport","Mixed":"mixed","Under 100 kVA":"generator1","Over 500 kVA":"generator3"
    };
    if (value.startsWith("Other — ")) return tr("other") + " — " + value.slice(8);
    if (value.startsWith("Yes — ")) return tr("yes") + " — " + displayValue(value.slice(6));
    return keys[value] ? tr(keys[value]) : value;
  }

  function setRadio(name, value, onlyIfUnsure = false) {
    const inputs = $$('input[type="radio"][name="' + name + '"]', form);
    const current = inputs.find(input => input.checked);
    if (onlyIfUnsure && current && current.value !== "Not sure") return false;
    const match = inputs.find(input => input.value === value);
    if (!match) return false;
    match.checked = true;
    match.dispatchEvent(new Event("change", { bubbles:true }));
    return true;
  }

  function toggleConditionals() {
    $$("[data-other-target]", form).forEach(input => {
      const target = document.getElementById(input.dataset.otherTarget);
      if (target) target.hidden = !(input.checked);
    });
  }

  function validateContact() {
    let valid = true;
    ["name","company","phone"].forEach(name => {
      const input = form.elements[name];
      const holder = input.closest(".field");
      const okay = input.value.trim().length > (name === "phone" ? 5 : 1);
      holder.classList.toggle("invalid", !okay);
      if (!okay) valid = false;
    });
    return valid;
  }

  function showStep(step) {
    if (step > 1 && !validateContact()) { step = 1; }
    state.step = Math.max(1, Math.min(5, step));
    $$(".step", form).forEach(section => { section.hidden = Number(section.dataset.step) !== state.step; });
    $$(".step-tabs button").forEach(button => {
      const number = Number(button.dataset.jump);
      button.classList.toggle("active", number === state.step);
      button.classList.toggle("done", number < state.step);
    });
    if (state.step === 3 && map) setTimeout(() => map.invalidateSize(), 80);
    if (state.step === 5) buildSummary();
    updateProgress(); save();
    $(".application-panel").scrollIntoView({ behavior:"smooth", block:"start" });
  }

  function updateProgress() {
    const labels = [tr("tabContact"),tr("tabEnergy"),tr("tabSite"),tr("tabDocuments"),tr("tabReview")];
    $("#progressLabel").textContent = tr("progress", { step:state.step, label:labels[state.step - 1] });
    $("#progressFill").style.width = (state.step * 20) + "%";
    $(".track").setAttribute("aria-valuenow", state.step);
  }

  function formSnapshot() {
    const data = {};
    $$("input[name],select[name],textarea[name]", form).forEach(input => {
      if (input.type === "file") return;
      if (input.type === "radio") { if (input.checked) data[input.name] = input.value; }
      else data[input.name] = input.value;
    });
    return data;
  }

  function save() {
    const docs = Object.fromEntries($$(".document-row").map(row => [row.dataset.document,row.querySelector("select").value]));
    const payload = { step:state.step,language:state.language,location:state.location,layers:state.layers,files:state.files,transcript:$("#transcript").value,documents:docs,form:formSnapshot() };
    try { localStorage.setItem(STORE, JSON.stringify(payload)); } catch (_) {}
  }

  function restore() {
    let data;
    try { data = JSON.parse(localStorage.getItem(STORE) || "null"); } catch (_) { data = null; }
    if (!data) return;
    Object.entries(data.form || {}).forEach(([name,value]) => {
      const control = form.elements[name];
      if (!control) return;
      if (control instanceof RadioNodeList) {
        const match = [...control].find(item => item.value === value);
        if (match) match.checked = true;
      } else control.value = value;
    });
    state.location = data.location || null;
    state.layers = Array.isArray(data.layers) ? data.layers : [];
    state.files = [];
    $("#transcript").value = data.transcript || "";
    if (Array.isArray(data.documents)) {
      const legacyIds = ["bills","company","tenure","director","generator"];
      data.documents.forEach((value,index) => { const select = $(`.document-row[data-document="${legacyIds[index]}"] select`); if (select) select.value = value; });
    } else Object.entries(data.documents || {}).forEach(([id,value]) => { const select = $(`.document-row[data-document="${id}"] select`); if (select) select.value = value; });
    state.step = Number(data.step) || 1;
    state.language = data.language || "en";
  }

  function setupSpeech() {
    const Speech = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!Speech) {
      $("#startVoice").addEventListener("click", () => { $("#voiceStatus").textContent = tr("voiceUnsupported"); $("#transcript").focus(); });
      return;
    }
    recognition = new Speech();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.onstart = () => {
      finalTranscript = $("#transcript").value.trim();
      $("#startVoice").disabled = true; $("#stopVoice").disabled = false; $("#voiceStatus").textContent = tr("voiceListening");
    };
    recognition.onresult = event => {
      let interim = "";
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const text = event.results[i][0].transcript;
        if (event.results[i].isFinal) finalTranscript += (finalTranscript ? " " : "") + text.trim();
        else interim += text;
      }
      $("#transcript").value = (finalTranscript + (interim ? " " + interim : "")).trim();
      save();
    };
    recognition.onerror = () => { $("#voiceStatus").textContent = tr("voiceDenied"); };
    recognition.onend = () => {
      $("#startVoice").disabled = false; $("#stopVoice").disabled = true;
      if ($("#voiceStatus").textContent === tr("voiceListening")) $("#voiceStatus").textContent = tr("voiceStopped");
    };
    $("#startVoice").addEventListener("click", () => {
      recognition.lang = $("#speechLanguage").value;
      try { recognition.start(); } catch (_) {}
    });
    $("#stopVoice").addEventListener("click", () => recognition.stop());
  }

  function guideFromTranscript() {
    const text = $("#transcript").value.toLowerCase().trim();
    if (text.length < 8) { $("#voiceStatus").textContent = tr("guideNone"); return; }
    let count = 0;
    const suggest = (name,value) => { if (setRadio(name,value,true)) count++; };
    if (/farm|agri|packhouse|pack house|dairy|orchard|irrigat|plaas|landbou|ipulazi|ezolimo/.test(text)) suggest("sector","Agriculture");
    else if (/factory|manufactur|plant|mill|industrial|fabriek|nywer|ifektri|imboni/.test(text)) suggest("sector","Industrial");
    else if (/hotel|lodge|guest|hospitality|ihhotela|indawo yokulala/.test(text)) suggest("sector","Hospitality");
    else if (/office|retail|shop|warehouse|commercial|ihhovisi|isitolo/.test(text)) suggest("sector","Commercial");
    const amountMatch = text.match(/(?:r|zar)\s*([\d\s,.]+?)\s*(k|m|million|miljoen)?(?:\s|per|a month|monthly|per maand|ngenyanga|$)/i);
    if (amountMatch) {
      let amount = Number(amountMatch[1].replace(/[\s,]/g,""));
      if (/k/i.test(amountMatch[2] || "")) amount *= 1000;
      if (/m|million|miljoen/i.test(amountMatch[2] || "")) amount *= 1000000;
      suggest("bill",amount < 25000 ? "Under R25,000" : amount < 75000 ? "R25,000–R75,000" : amount < 250000 ? "R75,000–R250,000" : "Over R250,000");
    }
    if (/eskom/.test(text)) suggest("supply","Eskom");
    else if (/municip|council|city power|umasipala|munisip/.test(text)) suggest("supply","Municipal");
    if (/generator|genset|diesel|kragopwekker|ijeneretha/.test(text)) {
      suggest("generator","Yes");
      const kva = text.match(/(\d[\d\s,.]*)\s*kva/i);
      if (kva) {
        const size = Number(kva[1].replace(/[\s,]/g,""));
        form.elements.generatorSize.value = size < 100 ? "Under 100 kVA" : size <= 500 ? "100–500 kVA" : "Over 500 kVA";
      }
    }
    const cost = /cost|saving|save|cheaper|koste|bespaar|izindleko|onga/.test(text);
    const resilience = /backup|outage|reliab|load.?shedding|rugsteun|betrou|isipele|ukuthembeka/.test(text);
    if (cost && resilience) suggest("goal","Cost and resilience");
    else if (cost) suggest("goal","Reduce energy cost");
    else if (resilience) suggest("goal","Improve reliability");
    else if (/expand|growth|new line|uitbrei|groei|ukukhula/.test(text)) suggest("goal","Support expansion");
    if (/ppa|no upfront|geen vooraf|akukho mali yokuqala/.test(text)) suggest("funding","PPA — no upfront capital");
    else if (/cash|outright|kontant|ngokuphelele/.test(text)) suggest("funding","Outright purchase");
    else if (/rent.to.own|huur.tot|qasha/.test(text)) suggest("funding","Rent-to-own");
    else if (/compare|vergelyk|qhathanisa/.test(text)) suggest("funding","Compare all options");
    const mentionsRoof = /roof|rooftop|dak|uphahla/.test(text), mentionsGround = /ground|land|veld|grond|umhlaba/.test(text), mentionsCarport = /carport|parking|motorafdak/.test(text);
    if ([mentionsRoof,mentionsGround,mentionsCarport].filter(Boolean).length > 1) suggest("placement","Mixed");
    else if (mentionsCarport) suggest("placement","Carport");
    else if (/roof|rooftop|dak|uphahla/.test(text)) suggest("placement","Roof");
    else if (/ground|land|veld|grond|umhlaba/.test(text)) suggest("placement","Ground");
    const markAvailable = (id,pattern) => {
      const row = $(`.document-row[data-document="${id}"]`);
      if (row && pattern.test(text) && row.querySelector("select").value === "Will send later") { row.querySelector("select").value = "Available"; count++; }
    };
    markAvailable("bills",/(?:have|attached|available|het|beskikbaar|sinawo).{0,28}(?:electricity|utility|eskom|municipal|bill|rekening|isikweletu)/);
    markAvailable("bank",/(?:have|attached|available|het|beskikbaar|sinawo).{0,28}(?:bank statement|bankstaat|isitatimende sasebhange)/);
    markAvailable("afs",/(?:have|attached|available|het|beskikbaar|sinawo).{0,28}(?:afs|annual financial|finansiële jaarstate|izitatimende zezimali)/);
    $("#voiceStatus").textContent = count ? tr("guideDone",{count}) : tr("guideNone");
    save();
  }

  function parseCoordinates(text) {
    const parts = text.split(/[;,\s]+/).filter(Boolean).map(Number);
    if (parts.length < 2 || !Number.isFinite(parts[0]) || !Number.isFinite(parts[1]) || Math.abs(parts[0]) > 90 || Math.abs(parts[1]) > 180) return null;
    return { lat:parts[0], lng:parts[1] };
  }

  function setLocation(lat,lng,label = "") {
    state.location = { lat:Number(lat),lng:Number(lng),label };
    $("#coordinates").value = `${Number(lat).toFixed(6)}, ${Number(lng).toFixed(6)}`;
    $("#locationStatus").className = "location-status good";
    $("#locationStatus").textContent = (label ? label + " · " : "") + tr("locationConfirmed",{lat:Number(lat).toFixed(5),lng:Number(lng).toFixed(5)});
    ensureMap();
    map.setView([lat,lng],18);
    $("#siteMap").hidden = false; $("#mapTools").hidden = false;
    setTimeout(() => map.invalidateSize(),80);
    save();
  }

  function ensureMap() {
    if (map || !window.L) return;
    map = L.map("siteMap",{zoomControl:true}).setView([-30.5595,22.9375],5);
    const satellite = L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{maxZoom:20,attribution:"Tiles © Esri"});
    const streets = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:19,attribution:"© OpenStreetMap contributors"});
    satellite.addTo(map);
    L.control.layers({"Satellite":satellite,"Street map":streets},null,{position:"topright"}).addTo(map);
    drawnItems = new L.FeatureGroup().addTo(map);
    map.on(L.Draw.Event.CREATED,event=>{
      drawnItems.addLayer(event.layer);
      const kind=event.layerType==="rectangle"?"rectangle":event.layerType==="polyline"?"polyline":"polygon";
      recordLayer(kind,event.layer);
      $$("[data-tool]").forEach(button=>button.classList.remove("active"));
    });
    restoreLayers();
  }

  const PIN = {
    solar:{icon:"☀",colour:"#e4a329"},inverterBattery:{icon:"▣",colour:"#00a9d6"},grid:{icon:"⚡",colour:"#2878b8"},
    generator:{icon:"G",colour:"#5c6570"},critical:{icon:"!",colour:"#b94646"},cable:{icon:"●",colour:"#754ea0"}
  };

  function pinIcon(type) {
    const p = PIN[type] || PIN.solar;
    return L.divIcon({className:"chariot-pin",html:`<span style="--pin:${p.colour}"><b>${p.icon}</b></span>`,iconSize:[32,32],iconAnchor:[11,28]});
  }

  function addPersistedLayer(item) {
    if (!drawnItems || !item) return;
    let layer;
    if (item.kind === "marker") layer = L.marker(item.latlng,{icon:pinIcon(item.pinType)}).bindTooltip(item.label || item.pinType);
    else if (item.kind === "polygon") layer = L.polygon(item.latlngs,{color:"#00a9d6",weight:2,fillOpacity:.16});
    else if (item.kind === "rectangle") layer = L.rectangle(item.bounds,{color:"#00a9d6",weight:2,fillOpacity:.16});
    else if (item.kind === "polyline") layer = L.polyline(item.latlngs,{color:"#8a5cb8",weight:4,dashArray:"7 7"});
    if (layer) drawnItems.addLayer(layer);
  }
  function restoreLayers() { state.layers.forEach(addPersistedLayer); updateMapReadout(); }

  function recordLayer(kind, layer, extra = {}) {
    const item = {kind,...extra};
    if (kind === "marker") item.latlng = layer.getLatLng();
    if (kind === "polygon" || kind === "polyline") item.latlngs = layer.getLatLngs();
    if (kind === "rectangle") item.bounds = layer.getBounds();
    state.layers.push(JSON.parse(JSON.stringify(item))); updateMapReadout(); save();
  }

  function activateMapTool(tool) {
    ensureMap(); if (!map) return;
    if (activeDrawer && activeDrawer.disable) activeDrawer.disable();
    activeDrawer = null;
    $$("[data-tool]").forEach(button => button.classList.toggle("active",button.dataset.tool === tool));
    if (tool === "clear") {
      drawnItems.clearLayers(); state.layers = []; updateMapReadout(); save(); $$("[data-tool]").forEach(b=>b.classList.remove("active")); return;
    }
    if (tool === "rectangle") activeDrawer = new L.Draw.Rectangle(map,{shapeOptions:{color:"#00a9d6",weight:2,fillOpacity:.16}});
    if (tool === "polyline") activeDrawer = new L.Draw.Polyline(map,{shapeOptions:{color:"#8a5cb8",weight:4,dashArray:"7 7"},showLength:true,metric:true});
    if (activeDrawer) { activeDrawer.enable(); return; }
    if (tool === "marker") {
      $("#mapReadout").hidden = false; $("#mapReadout").textContent = tr("drawingPin");
      map.once("click",e => {
        const type = $("#pinType").value, label = $("#pinType").selectedOptions[0].textContent;
        const layer = L.marker(e.latlng,{icon:pinIcon(type)}).bindTooltip(label).addTo(drawnItems);
        recordLayer("marker",layer,{pinType:type,label}); $$("[data-tool]").forEach(b=>b.classList.remove("active"));
      });
      return;
    }
    if (tool === "freehand") startFreehand();
  }

  function startFreehand() {
    $("#mapReadout").hidden = false; $("#mapReadout").textContent = tr("drawingFreehand");
    const container = map.getContainer();
    let points = [], preview = null, drawing = false;
    map.dragging.disable();
    const down = event => {
      event.preventDefault(); drawing = true; points = [map.mouseEventToLatLng(event)];
      preview = L.polyline(points,{color:"#00a9d6",weight:3}).addTo(map);
      container.setPointerCapture?.(event.pointerId);
    };
    const move = event => {
      if (!drawing) return;
      const point = map.mouseEventToLatLng(event);
      if (!points.length || map.distance(points.at(-1),point) > .4) { points.push(point); preview.setLatLngs(points); }
    };
    const up = event => {
      if (!drawing) return; drawing = false;
      container.removeEventListener("pointerdown",down); container.removeEventListener("pointermove",move); container.removeEventListener("pointerup",up);
      if (preview) map.removeLayer(preview);
      if (points.length > 2) { const layer = L.polygon(points,{color:"#00a9d6",weight:2,fillOpacity:.16}).addTo(drawnItems); recordLayer("polygon",layer); }
      map.dragging.enable(); $$("[data-tool]").forEach(b=>b.classList.remove("active")); updateMapReadout();
    };
    container.addEventListener("pointerdown",down,{passive:false}); container.addEventListener("pointermove",move,{passive:false}); container.addEventListener("pointerup",up,{passive:false});
  }

  function updateMapReadout() {
    const box = $("#mapReadout"); if (!box) return;
    const areas = state.layers.filter(x=>x.kind==="polygon"||x.kind==="rectangle").length;
    const pins = state.layers.filter(x=>x.kind==="marker").length;
    const cables = state.layers.filter(x=>x.kind==="polyline");
    let metres = 0;
    cables.forEach(c => {
      const raw = Array.isArray(c.latlngs[0]) ? c.latlngs[0] : c.latlngs;
      for (let i=1;i<raw.length;i++) metres += map ? map.distance(raw[i-1],raw[i]) : 0;
    });
    if (!areas && !pins && !cables.length) { box.hidden = true; box.textContent = ""; return; }
    box.hidden = false;
    box.textContent = tr("mapCount",{areas,pins,cables:cables.length,distance:metres?tr("cableDistance",{metres:Math.round(metres)}):""});
  }

  function updatePaperwork() {
    const rows = $$(".document-row");
    const values = rows.map(row=>row.querySelector("select").value);
    const counts = {available:values.filter(v=>v==="Available").length,later:values.filter(v=>v==="Will send later").length,help:values.filter(v=>v==="Need help").length,files:state.files.length};
    $("#paperworkStatus").textContent = tr("paperwork",counts);
    $("#fileList").innerHTML = state.files.map((file,index)=>`<div class="file-pill"><span>${escapeHtml(file.name)} · ${formatBytes(file.size)}</span><button type="button" data-remove-file="${index}" aria-label="${escapeHtml(tr("removeFile"))}">×</button></div>`).join("");
  }

  function formatBytes(bytes) { return bytes < 1024*1024 ? Math.ceil(bytes/1024)+" KB" : (bytes/(1024*1024)).toFixed(1)+" MB"; }
  function escapeHtml(text) { const div=document.createElement("div"); div.textContent=String(text??""); return div.innerHTML; }
  function documentSummary() { return $$(".document-row").map(row=>`${row.querySelector("b").textContent}: ${row.querySelector("select").selectedOptions[0].textContent}`).join("; "); }

  function summaryData() {
    return [
      [tr("summaryContact"), [form.elements.name.value,form.elements.phone.value,form.elements.email.value].filter(Boolean).join(" · ") || "—"],
      [tr("summaryCompany"), form.elements.company.value || "—"],
      [tr("summarySector"), displayValue(radioValue("sector"))],[tr("summaryBill"), displayValue(radioValue("bill"))],[tr("summarySupply"), displayValue(radioValue("supply"))],
      [tr("summaryGenerator"), displayValue(radioValue("generator"))],[tr("summaryGoal"), displayValue(radioValue("goal"))],[tr("summaryFunding"), displayValue(radioValue("funding"))],
      [tr("summaryPlacement"), displayValue(radioValue("placement"))],[tr("summaryLocation"), state.location ? `${state.location.label ? state.location.label+" · " : ""}${state.location.lat.toFixed(6)}, ${state.location.lng.toFixed(6)}` : tr("noLocation")],
      [tr("summaryTranscript"), $("#transcript").value.trim() || tr("noTranscript")],[tr("summaryDocuments"), documentSummary()],
      [tr("summaryFiles"), state.files.length ? state.files.map(f=>f.name).join(", ") : tr("noTranscript")],
      [tr("summaryShareLink"), form.elements.shareLink.value.trim() || tr("noTranscript")]
    ];
  }

  function readiness() {
    let score = 0;
    if (form.elements.name.value.trim()) score += 10;if (form.elements.company.value.trim()) score += 10;if (form.elements.phone.value.trim()) score += 10;
    ["sector","bill","supply","generator","goal","funding","placement"].forEach(name=>{ if (radioValue(name)!=="Not sure") score += 6; });
    if (state.location) score += 12;if ($("#transcript").value.trim()) score += 6;if ($$(".document-row select").some(s=>s.value==="Available")) score += 6;
    return Math.min(100,score);
  }

  function buildSummary() {
    if (!$("#summaryCard")) return;
    const data = summaryData(), score = readiness();
    $("#summaryCard").innerHTML = `<h3>${escapeHtml(tr("summaryTitle"))}</h3>` + data.map(([label,value])=>`<div class="summary-row"><span>${escapeHtml(label)}</span><b>${escapeHtml(value)}</b></div>`).join("");
    $("#readinessScore").innerHTML = `${score}<small>/100</small>`;
    $("#readinessText").textContent = score >= 75 ? tr("readinessStrong") : score >= 50 ? tr("readinessMedium") : tr("readinessEarly");
  }

  function plainSummary() {
    const notes = form.elements.notes.value.trim();
    return tr("summaryTitle").toUpperCase() + "\n" +
      summaryData().map(([label,value]) => `${label}: ${value}`).join("\n") +
      (notes ? "\n" + tr("extraNotes") + ": " + notes : "") +
      "\n\n" + tr("disclaimer");
  }

  function safeFilename(text) {
    return String(text || "client").trim().replace(/[^a-z0-9_-]+/gi,"-").replace(/^-+|-+$/g,"").slice(0,60) || "client";
  }

  async function prepareSubmission() {
    const button = $("#prepareSubmit");
    const totalBytes = selectedFiles.reduce((sum,file)=>sum+file.size,0);
    const shareLink = form.elements.shareLink.value.trim();
    if (totalBytes > 20 * 1024 * 1024) {
      $("#submitHelp").textContent = tr("zipTooLarge");
      if (!shareLink) {
        alert(tr("shareLinkMissing"));
        showStep(4);
        setTimeout(()=>form.elements.shareLink.focus(),250);
        return;
      }
      draftEmail();
      return;
    }
    if (!selectedFiles.length) {
      draftEmail();
      return;
    }
    if (!window.JSZip) {
      $("#submitHelp").textContent = tr("zipUnavailable");
      alert(tr("zipUnavailable"));
      return;
    }
    button.disabled = true;
    button.textContent = tr("preparingZip");
    $("#submitHelp").textContent = tr("preparingZip");
    try {
      const zip = new JSZip();
      zip.file("APPLICATION-SUMMARY.txt",plainSummary());
      zip.file("application-data.json",JSON.stringify({
        createdAt:new Date().toISOString(),
        language:state.language,
        answers:formSnapshot(),
        location:state.location,
        siteLayout:state.layers,
        documents:documentSummary(),
        transcript:$("#transcript").value.trim(),
        disclaimer:tr("disclaimer")
      },null,2));
      if(state.layers.length) zip.file("site-layout.json",JSON.stringify(state.layers,null,2));
      const folder=zip.folder("documents");
      selectedFiles.forEach((file,index)=>folder.folder(safeFilename(state.files[index]?.documentId || "general")).file(file.name,file));
      const blob=await zip.generateAsync({type:"blob",compression:"DEFLATE",compressionOptions:{level:6}});
      const url=URL.createObjectURL(blob);
      const anchor=document.createElement("a");
      anchor.href=url;
      anchor.download=`Chariot-Energy-Application-${safeFilename(form.elements.company.value)}.zip`;
      document.body.appendChild(anchor);anchor.click();anchor.remove();
      setTimeout(()=>URL.revokeObjectURL(url),30000);
      $("#submitHelp").textContent=tr("zipReady");
      setTimeout(draftEmail,700);
    } catch (_) {
      $("#submitHelp").textContent=tr("zipUnavailable");
      alert(tr("zipUnavailable"));
    } finally {
      button.disabled=false;
      button.textContent=tr("prepareSubmit");
    }
  }

  function draftEmail() {
    const company = form.elements.company.value.trim() || "Client";
    const subject = tr("emailSubject",{company});
    const body = tr("emailIntro")+plainSummary()+tr("emailClose",{name:form.elements.name.value.trim()||""})+"\n\n"+tr("filesLocal");
    window.location.href = `mailto:admin@chariotpower.co.za?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  function documentById(id) { return DOCUMENTS.find(item=>item.id===id); }

  function openDocumentHelp(id = null) {
    selectedHelpDocument = id;
    const item = documentById(id);
    $("#helpDialogTitle").textContent = item ? tr(item.title) : tr("documentsTitle");
    $("#helpDialogCopy").textContent = item ? tr(item.help) + " " + tr("documentGuidanceCopy") : tr("documentGuidanceCopy");
    if (item) $("#requestRecipient").value = item.recipient;
    const dialog = $("#documentHelpDialog");
    if (typeof dialog.showModal === "function") dialog.showModal(); else dialog.setAttribute("open","");
  }

  function outstandingDocuments(recipient, specificId = null) {
    return $$(".document-row").filter(row => {
      const status = row.querySelector("select").value;
      const matches = specificId ? row.dataset.document === specificId : row.dataset.recipient === recipient;
      return matches && status !== "Available" && status !== "Not applicable";
    });
  }

  function draftDocumentRequest(specificId = null) {
    const recipient = $("#requestRecipient").value;
    const rows = outstandingDocuments(recipient,specificId);
    if (!rows.length) { alert(tr("requestNoMissing")); return; }
    const company = form.elements.company.value.trim() || tr("summaryCompany");
    const name = form.elements.name.value.trim() || "";
    const site = state.location && state.location.label ? ` (${state.location.label})` : "";
    const greetingKey = "requestGreeting" + recipient.charAt(0).toUpperCase() + recipient.slice(1);
    const list = rows.map(row=>`• ${row.querySelector("b").textContent} — ${row.querySelector("select").selectedOptions[0].textContent}`).join("\n");
    const context = [
      `${tr("summaryCompany")}: ${company}`,
      `${tr("summarySector")}: ${displayValue(radioValue("sector"))}`,
      `${tr("summarySupply")}: ${displayValue(radioValue("supply"))}`,
      `${tr("summaryLocation")}: ${state.location ? `${state.location.lat.toFixed(6)}, ${state.location.lng.toFixed(6)}` : tr("noLocation")}`
    ].join("\n");
    const transcript = $("#transcript").value.trim();
    const body = `${tr(greetingKey)}\n\n${tr("requestIntro",{company,site})}\n\n${list}\n\n${tr("requestContext")}:\n${context}${transcript ? `\n\n${tr("requestVoiceContext")}:\n${transcript}` : ""}\n\n${tr("requestAsk")}\n\n${tr("requestClose",{name})}`;
    window.location.href = `mailto:?subject=${encodeURIComponent(tr("requestSubject",{company}))}&body=${encodeURIComponent(body)}`;
    $("#paperworkStatus").textContent = tr("requestPrepared");
  }

  async function searchAddress() {
    const query = $("#address").value.trim(); if (!query) return;
    $("#locationStatus").className = "location-status"; $("#locationStatus").textContent = tr("searching");
    try {
      const response = await fetch(`https://nominatim.openstreetmap.org/search?format=jsonv2&limit=5&countrycodes=za&q=${encodeURIComponent(query)}`,{headers:{"Accept-Language":state.language}});
      if (!response.ok) throw new Error("search");
      const results = await response.json(), box = $("#addressResults");
      box.innerHTML = results.map((result,index)=>`<button type="button" data-result="${index}">${escapeHtml(result.display_name)}</button>`).join("");
      box.hidden = !results.length; box._results = results;
      $("#locationStatus").textContent = results.length ? tr("searchAddress") : tr("noResults");
    } catch (_) { $("#locationStatus").className="location-status bad"; $("#locationStatus").textContent=tr("searchError"); }
  }

  function bindEvents() {
    form.addEventListener("input",event => { event.target.closest(".field")?.classList.remove("invalid"); save(); if(state.step===5)buildSummary(); });
    form.addEventListener("change",event => { if(event.target.matches('input[type="radio"]'))toggleConditionals(); updatePaperwork();save();if(state.step===5)buildSummary(); });
    $$("[data-next]").forEach(button=>button.addEventListener("click",()=>showStep(state.step+1)));
    $$("[data-back]").forEach(button=>button.addEventListener("click",()=>showStep(state.step-1)));
    $$("[data-jump]").forEach(button=>button.addEventListener("click",()=>showStep(Number(button.dataset.jump))));
    $("#language").addEventListener("change",event=>applyLanguage(event.target.value));
    $("#guideAnswers").addEventListener("click",guideFromTranscript);
    $("#searchAddress").addEventListener("click",searchAddress);
    $("#address").addEventListener("keydown",event=>{if(event.key==="Enter"){event.preventDefault();searchAddress();}});
    $("#addressResults").addEventListener("click",event=>{const button=event.target.closest("[data-result]");if(!button)return;const item=event.currentTarget._results[Number(button.dataset.result)];setLocation(item.lat,item.lon,item.display_name);event.currentTarget.hidden=true;});
    $("#useCoordinates").addEventListener("click",()=>{const coords=parseCoordinates($("#coordinates").value);if(!coords){$("#locationStatus").className="location-status bad";$("#locationStatus").textContent=tr("invalidCoordinates");return;}setLocation(coords.lat,coords.lng);});
    $("#useLocation").addEventListener("click",()=>{
      $("#locationStatus").className="location-status";$("#locationStatus").textContent=tr("locating");
      if(!navigator.geolocation){$("#locationStatus").textContent=tr("locationDenied");return;}
      navigator.geolocation.getCurrentPosition(position=>setLocation(position.coords.latitude,position.coords.longitude),()=>{$("#locationStatus").className="location-status bad";$("#locationStatus").textContent=tr("locationDenied");},{enableHighAccuracy:true,timeout:15000,maximumAge:300000});
    });
    $("#skipLocation").addEventListener("click",()=>{state.location=null;$("#locationStatus").className="location-status";$("#locationStatus").textContent=tr("locationSkipped");save();});
    $$("[data-tool]").forEach(button=>button.addEventListener("click",()=>activateMapTool(button.dataset.tool)));
    $$(".document-row input[type=file]").forEach(input=>input.addEventListener("change",()=>{
      [...input.files].forEach(file=>{selectedFiles.push(file);state.files.push({name:file.name,size:file.size,type:file.type,available:true,documentId:input.closest(".document-row").dataset.document});});
      if (input.files.length) input.closest(".document-row").querySelector("select").value="Available";
      input.value="";updatePaperwork();save();
    }));
    $("#documentList").addEventListener("click",event=>{const button=event.target.closest("[data-doc-info]");if(button)openDocumentHelp(button.dataset.docInfo);});
    $("#documentInfo").addEventListener("click",()=>openDocumentHelp());
    $("#dialogClose").addEventListener("click",()=>$("#documentHelpDialog").close?.());
    $("#dialogRequestEmail").addEventListener("click",()=>{$("#documentHelpDialog").close?.();draftDocumentRequest(selectedHelpDocument);});
    $("#requestDocuments").addEventListener("click",()=>draftDocumentRequest());
    $("#fileList").addEventListener("click",event=>{const button=event.target.closest("[data-remove-file]");if(!button)return;const index=Number(button.dataset.removeFile);state.files.splice(index,1);selectedFiles.splice(index,1);updatePaperwork();save();});
    $("#draftEmail").addEventListener("click",draftEmail);$("#reviewEmail").addEventListener("click",draftEmail);
    $("#prepareSubmit").addEventListener("click",prepareSubmission);
    $("#shareWhatsApp").addEventListener("click",()=>window.open(`https://wa.me/27661105578?text=${encodeURIComponent(plainSummary())}`,"_blank","noopener"));
    $("#copySummary").addEventListener("click",async()=>{try{await navigator.clipboard.writeText(plainSummary());$("#copySummary").textContent=tr("copied");setTimeout(()=>$("#copySummary").textContent=tr("copySummary"),1800);}catch(_){alert(tr("copyFailed"));}});
    $("#clearDraft").addEventListener("click",()=>{if(confirm(tr("clearConfirm"))){localStorage.removeItem(STORE);location.reload();}});
  }

  renderDocuments(); restore(); bindEvents(); toggleConditionals(); setupSpeech(); updatePaperwork(); applyLanguage(state.language);
  if(state.location)setLocation(state.location.lat,state.location.lng,state.location.label||"");
  showStep(state.step);
})();
