import { DictionaryTerm, ClinicalVerb, Abbreviation } from '../types';

export const DICTIONARY_TERMS: DictionaryTerm[] = [
  {
    id: 'term-1',
    german: 'Pflegefachkraft',
    article: 'die',
    plural: 'Pflegefachkräfte',
    arabic: 'ممرض/ممرضة رعاية مؤهل متخصص',
    pronunciation: 'بفليغه فاخ كرافت',
    category: 'legal',
    definitionDe: 'Staatlich anerkannte Fachperson nach dreijähriger generalistischer Ausbildung zur eigenverantwortlichen Durchführung und Steuerung der Pflege.',
    definitionAr: 'مهني رعاية معتمد حكومياً بعد تدريب شامل لمدة 3 سنوات، مخول قانونياً بإدارة وتخطيط وتنفيذ الرعاية التمريضية المستقلة.',
    hospitalExampleDe: 'Die Pflegefachkraft übernimmt die Schichtleitung und delegiert Aufgaben an das Team.',
    hospitalExampleAr: 'تتولى الممرضة المؤهلة قيادة المناوبة وتفوض المهام لأعضاء الفريق.'
  },
  {
    id: 'term-2',
    german: 'Schweigepflicht',
    article: 'die',
    arabic: 'السرية المهنية الطبية القانونية',
    pronunciation: 'شفايغه بفليخت',
    category: 'legal',
    definitionDe: 'Gesetzliche Pflicht nach §203 StGB, Geheimnisse des Patienten, die im Rahmen der Berufsausübung anvertraut wurden, strikt zu wahren.',
    definitionAr: 'واجب قانوني جنائي بموجب المادة 203 من قانون العقوبات يحظر إفشاء أي أسرار أو معلومات تخص المريض ائتُمن عليها الممرض.',
    hospitalExampleDe: 'Aus Gründen der Schweigepflicht darf ich Ihnen am Telefon keine Auskunft über den Zustand des Patienten geben.',
    hospitalExampleAr: 'بناءً على واجب السرية المهنية، لا يحق لي تزويدكم بمعلومات عن حالة المريض عبر الهاتف.'
  },
  {
    id: 'term-3',
    german: 'Venenverweilkanüle',
    article: 'die',
    plural: 'Venenverweilkanülen',
    arabic: 'قسطرة وريدية طرفية (كانيولا / برونولا)',
    pronunciation: 'فينين فيرفايل كانيوله',
    category: 'device',
    definitionDe: 'Intravenöser Zugang mit flexiblem Kunststoffkatheter zur Applikation von Infusionen, Notfallmedikamenten und Blutprodukten.',
    definitionAr: 'قسطرة بلاستيكية مرنة تُدخل في وريد طرفي لحقن الأدوية والمحاليل الوريدية وسحب عينات الدم.',
    hospitalExampleDe: 'Ich lege jetzt eine Venenverweilkanüle in die linke Ellenbeuge.',
    hospitalExampleAr: 'سأقوم الآن بتركيب قسطرة وريدية طرفية في ثنية المرفق الأيسر.',
    colloquialVariant: 'Braunüle / Viggo'
  },
  {
    id: 'term-4',
    german: 'Blutdruck',
    article: 'der',
    arabic: 'ضغط الدم الشرياني (RR)',
    pronunciation: 'بلوت دروك',
    category: 'clinical',
    definitionDe: 'Druck des Blutes auf die Gefäßwand der Arterien, angegeben in Millimeter Quecksilbersäule (mmHg).',
    definitionAr: 'القوة التي يمارسها الدم على جدران الشرايين أثناء انقباض وانبساط القلب ويقاس بالملم زئبق (mmHg).',
    hospitalExampleDe: 'Der Blutdruck von Frau Müller ist auf 175 zu 95 mmHg angestiegen.',
    hospitalExampleAr: 'ارتفع ضغط دم السيدة مولر ليصل إلى 175 على 95 ملم زئبق.',
    colloquialVariant: 'RR (nach Riva-Rocci)'
  },
  {
    id: 'term-5',
    german: 'Blutzucker',
    article: 'der',
    arabic: 'سكر الدم / جلوكوز الدم (BZ)',
    pronunciation: 'بلوت تسوكر',
    category: 'clinical',
    definitionDe: 'Konzentration von Glukose im Blut; klinisch meist gemessen in mg/dl oder mmol/l.',
    definitionAr: 'تركيز الجلوكوز في بلازما الدم، يقاس سريرياً بوحدة ملغ/ديسيلتر أو ميليمول/لتر.',
    hospitalExampleDe: 'Herr Becker zittert und schwitzt, bitte sofort den BZ kontrollieren!',
    hospitalExampleAr: 'السيد بيكر يرتجف ويتصبب عرقاً، يرجى فحص سكر الدم فوراً!',
    colloquialVariant: 'BZ'
  },
  {
    id: 'term-6',
    german: 'Dekubitus',
    article: 'der',
    plural: 'Dekubiti',
    arabic: 'قرحة الفراش / قرحة الضغط',
    pronunciation: 'ديكوبيتوس',
    category: 'clinical',
    definitionDe: 'Lokal begrenzte Schädigung der Haut und/oder des darunterliegenden Gewebes, meist über knöchernen Vorsprüngen infolge von Druck und Scherkräften.',
    definitionAr: 'تلف موضعي في الجلد والأنسجة العميقة فوق النتوءات العظمية بسبب الضغط المستمر ونقص التروية الدموية.',
    hospitalExampleDe: 'Zur Vermeidung eines Dekubitus müssen wir den Patienten alle zwei Stunden umlagern.',
    hospitalExampleAr: 'لتجنب قرح الفراش، يجب أن نغير وضعية استلقاء المريض في السرير كل ساعتين بانتظام.'
  },
  {
    id: 'term-7',
    german: 'Infusomat',
    article: 'der',
    plural: 'Infusomaten',
    arabic: 'مضخة تسريب وريدي حجمية',
    pronunciation: 'إنفوزومات',
    category: 'device',
    definitionDe: 'Elektronisch gesteuerte Schlauchpumpe zur genauen volumenbasierten Infusionstherapie in ml/h.',
    definitionAr: 'جهاز إلكتروني يضخ المحاليل الوريدية بدقة فائقة بمعدل محدد مسبقاً بالمليلتر في الساعة.',
    hospitalExampleDe: 'Die Kochsalzlösung läuft über den Infusomaten mit 100 ml/h.',
    hospitalExampleAr: 'محلول الملح يجري عبر مضخة التسريب بمعدل 100 مل/ساعة.'
  },
  {
    id: 'term-8',
    german: 'Perfusor',
    article: 'der',
    plural: 'Perfusoren',
    arabic: 'مضخة حقن السرنجة الدقيقة',
    pronunciation: 'بيرفيوزور',
    category: 'device',
    definitionDe: 'Motorgetriebene Spritzenpumpe zur kontinuierlichen Dosierung von Notfall- und Intensivmedikamenten.',
    definitionAr: 'مضخة كهربائية آلية تدفع مكبس سرنجة طبية لضخ أدوية دقيقة باستمرار.',
    hospitalExampleDe: 'Der Perfusor mit Heparin läuft mit einer Laufrate von 2 ml/h.',
    hospitalExampleAr: 'مضخة الهيبارين تعمل حالياً بمعدل تدفق 2 مل/ساعة.'
  },
  {
    id: 'term-9',
    german: 'Aspiration',
    article: 'die',
    arabic: 'الاستنشاق الرئوي / السحب الراجع بالسرنجة',
    pronunciation: 'أسبيراتسيون',
    category: 'clinical',
    definitionDe: 'Zweideutig: 1. Eindringen fester oder flüssiger Stoffe in die Atemwege. 2. Rücksaugen mit dem Spritzenkolben zur Lagekontrolle.',
    definitionAr: 'لها معنيان: 1. دخول طعام أو سوائل إلى مجرى التنفس والرئتين. 2. سحب مكبس الإبرة للخلف للتأكد من عدم ثقب وعاء دموي.',
    hospitalExampleDe: 'Wegen Aspirationsgefahr muss der Oberkörper beim Essen aufrecht gelagert werden.',
    hospitalExampleAr: 'بسبب خطر دخول الطعام للرئة، يجب رفع الجزء العلوي من جسم المريض بوضعية مستقيمة أثناء الأكل.'
  },
  {
    id: 'term-10',
    german: 'Hypoglykämie',
    article: 'die',
    arabic: 'هبوط حاد في مستوى سكر الدم',
    pronunciation: 'هيبوغليكيمي',
    category: 'clinical',
    definitionDe: 'Abfall der Blutglukosekonzentration unter den Normwert (< 70 mg/dl bzw. < 3,9 mmol/l) mit vegetativen und neurologischen Symptomen.',
    definitionAr: 'انخفاض مستوى سكر الدم لأقل من 70 ملغ/ديسيلتر مصحوباً بتعرق، دوخة، ارتعاش، وخطر فقدان الوعي.',
    hospitalExampleDe: 'Der Patient hat eine schwere Hypoglykämie von 38 mg/dl und benötigt unverzüglich Glukose.',
    hospitalExampleAr: 'يعاني المريض من هبوط سكر شديد يبلغ 38 ملغ/ديسيلتر ويحتاج محاليل سكرية فورية.'
  }
];

export const CLINICAL_VERBS: ClinicalVerb[] = [
  {
    verb: 'verabreichen',
    arabic: 'أعطى دواء / قدّم علاجاً للمريض',
    present: 'ich verabreiche, du verabreichst, er verabreicht',
    perfekt: 'hat verabreicht',
    imperative: 'Verabreichen Sie!',
    clinicalSentenceDe: 'Die Pflegekraft verabreicht das verordnete Antibiotikum pünktlich um 14:00 Uhr.',
    clinicalSentenceAr: 'يقوم الممرض بإعطاء المضاد الحيوي الموصوف في تمام الساعة 14:00 بدقة.',
    typicalObjectDe: 'ein Medikament, eine Tablette, eine Infusion'
  },
  {
    verb: 'messen',
    arabic: 'قاس / فحص قيمة حيوية',
    present: 'ich messe, du misst, er misst',
    perfekt: 'hat gemessen',
    imperative: 'Messen Sie!',
    clinicalSentenceDe: 'Ich messe jetzt Ihren Blutdruck und Ihre Körpertemperatur.',
    clinicalSentenceAr: 'سأقيس الآن ضغط دمك ودرجة حرارة جسمك.',
    typicalObjectDe: 'den Blutdruck, den Blutzucker, die Sauerstoffsättigung'
  },
  {
    verb: 'absaugen',
    arabic: 'شفط الإفرازات والمخاط من المسالك التنفسية',
    present: 'ich sauge ab, du saugst ab, er saugt ab',
    perfekt: 'hat abgesaugt',
    imperative: 'Saugen Sie ab!',
    clinicalSentenceDe: 'Wegen Rasselgeräuschen muss die Patientin endotracheal abgesaugt werden.',
    clinicalSentenceAr: 'بسبب أصوات الخرخرة التنفسية يجب شفط الإفرازات من القصبة الهوائية للمريضة.',
    typicalObjectDe: 'Sekret, die Trachealkanüle, den Mundraum'
  },
  {
    verb: 'lagern',
    arabic: 'وضع المريض في وضعية علاجية معينة في السرير',
    present: 'ich lagere, du lagerst, er lagert',
    perfekt: 'hat gelagert',
    imperative: 'Lagern Sie!',
    clinicalSentenceDe: 'Wir lagern den Patienten nach dem Kinästhetik-Konzept auf die linke Seite.',
    clinicalSentenceAr: 'نقوم بوضع المريض مستلقياً على جنبه الأيسر وفق مبادئ الحركة الحيوية (Kinästhetik).',
    typicalObjectDe: 'den Patienten hoch, auf die Seite, in 30-Grad-Lagerung'
  },
  {
    verb: 'mobilisieren',
    arabic: 'حرّك المريض / ساعده على النهوض والمشي',
    present: 'ich mobilisiere, du mobilisierst, er mobilisiert',
    perfekt: 'hat mobilisiert',
    imperative: 'Mobilisieren Sie!',
    clinicalSentenceDe: 'Am ersten Tag nach der Operation mobilisieren wir den Patienten an die Bettkante.',
    clinicalSentenceAr: 'في اليوم الأول بعد العملية الجراحية نساعد المريض على الجلوس على حافة السرير.',
    typicalObjectDe: 'den Patienten an die Bettkante, in den Rollstuhl'
  },
  {
    verb: 'desinfizieren',
    arabic: 'طهّر / عقّم سطحاً أو جلداً أو يدين',
    present: 'ich desinfiziere, du desinfizierst, er desinfiziert',
    perfekt: 'hat desinfiziert',
    imperative: 'Desinfizieren Sie!',
    clinicalSentenceDe: 'Vor jeder Injektion muss die Einstichstelle mindestens 30 Sekunden lang desinfiziert werden.',
    clinicalSentenceAr: 'قبل أي وخزة إبرة، يجب تطهير موضع الحقن والانتظار 30 ثانية على الأقل حتى يجف.',
    typicalObjectDe: 'die Hände, die Haut, die Arbeitsfläche'
  },
  {
    verb: 'dokumentieren',
    arabic: 'وثّق في السجل الطبي أو الملف الإلكتروني',
    present: 'ich dokumentiere, du dokumentierst, er dokumentiert',
    perfekt: 'hat dokumentiert',
    imperative: 'Dokumentieren Sie!',
    clinicalSentenceDe: 'Vergessen Sie nicht, die abgegebene Flüssigkeitsmenge in der Einfuhr-Ausfuhr-Bilanz zu dokumentieren.',
    clinicalSentenceAr: 'لا تنسَ توثيق كمية السوائل التي شربها المريض في جدول المدخول والإخراج السريري.',
    typicalObjectDe: 'die Vitalwerte, den Verbandwechsel, Zwischenfälle'
  },
  {
    verb: 'überwachen',
    arabic: 'راقب المريض أو الأجهزة الحيوية باستمرار',
    present: 'ich überwache, du überwachst, er überwacht',
    perfekt: 'hat überwacht',
    imperative: 'Überwachen Sie!',
    clinicalSentenceDe: 'Auf der Überwachungsstation überwachen wir kontinuierlich den Herzrhythmus über den Monitor.',
    clinicalSentenceAr: 'في وحدة المراقبة نرصد نبض ونشاط القلب باستمرار عبر شاشات القياس.',
    typicalObjectDe: 'den Herzrhythmus, die Atmung, den Bewusstseinszustand'
  }
];

export const ABBREVIATIONS_DATA: Abbreviation[] = [
  {
    abbr: 'i.v.',
    fullGerman: 'intravenös',
    fullLatinOrEnglish: 'intra venam',
    meaningAr: 'في الوريد (داخل الوعاء الوريدي)',
    clinicalContext: 'Direkte Gabe von Medikamenten oder Infusionen in die Blutbahn.'
  },
  {
    abbr: 's.c.',
    fullGerman: 'subkutan',
    fullLatinOrEnglish: 'sub cutem',
    meaningAr: 'تحت الجلد (في النسيج الشحمي)',
    clinicalContext: 'Häufig für Insulin oder Thromboseprophylaxe (Heparin).'
  },
  {
    abbr: 'i.m.',
    fullGerman: 'intramuskulär',
    fullLatinOrEnglish: 'intra musculum',
    meaningAr: 'في العضلة (حقن عضلي)',
    clinicalContext: 'Für Impfungen oder Depotpräparate; strikt im 90-Grad-Winkel.'
  },
  {
    abbr: 'RR',
    fullGerman: 'Blutdruck (nach Riva-Rocci)',
    fullLatinOrEnglish: 'Scipione Riva-Rocci',
    meaningAr: 'ضغط الدم الشرياني (الانقباضي والانبساطي)',
    clinicalContext: 'Standard-Abkürzung in der deutschen Pflegekurve für Blutdruckwerte.'
  },
  {
    abbr: 'BZ',
    fullGerman: 'Blutzucker',
    meaningAr: 'سكر الدم (الجلوكوز)',
    clinicalContext: 'Regelmäßige Kontrolle bei Diabetes mellitus oder Notfallzuständen.'
  },
  {
    abbr: 'HF',
    fullGerman: 'Herzfrequenz',
    meaningAr: 'معدل نبضات القلب في الدقيقة',
    clinicalContext: 'Normalbereich Erwachsener in Ruhe: 60 bis 80 Schläge pro Minute.'
  },
  {
    abbr: 'AF',
    fullGerman: 'Atemfrequenz',
    meaningAr: 'معدل مرات التنفس في الدقيقة',
    clinicalContext: 'Normalbereich Erwachsener: 12 bis 20 Atemzüge pro Minute.'
  },
  {
    abbr: 'SpO₂',
    fullGerman: 'Partielle Sauerstoffsättigung',
    fullLatinOrEnglish: 'Saturation of Peripheral Oxygen',
    meaningAr: 'نسبة تشبع الأكسجين في الدم المحيطي',
    clinicalContext: 'Gemessen über Pulsoximeter am Finger; Zielwert meist ≥ 94% (bei COPD 88–92%).'
  },
  {
    abbr: 'ZVK',
    fullGerman: 'Zentraler Venenkatheter',
    meaningAr: 'قسطرة وريدية مركزية',
    clinicalContext: 'Katheter in V. jugularis oder V. subclavia für kreislaufwirksame Medikamente.'
  },
  {
    abbr: 'PVK',
    fullGerman: 'Periphere Venenverweilkanüle',
    meaningAr: 'قسطرة وريدية طرفية (الكانيولا)',
    clinicalContext: 'Klinischer Standardzugang an Unterarm oder Handrücken.'
  },
  {
    abbr: 'GCS',
    fullGerman: 'Glasgow Coma Scale',
    meaningAr: 'مقياس غلاسكو للغيبوبة وتقييم الوعي (من 3 إلى 15)',
    clinicalContext: 'Beurteilung von Augenöffnung, verbaler und motorischer Reaktion.'
  },
  {
    abbr: 'KIS',
    fullGerman: 'Krankenhaus-Informationssystem',
    meaningAr: 'نظام معلومات المستشفى والسجل الطبي الإلكتروني',
    clinicalContext: 'Digitale Patientenakte zur Dokumentation aller pflegerischen und ärztlichen Daten.'
  },
  {
    abbr: 'NEWS2',
    fullGerman: 'National Early Warning Score 2',
    meaningAr: 'مقياس التحذير والإنذار المبكر البريطاني/الألماني',
    clinicalContext: 'Punkte-Score zur Früherkennung lebensbedrohlicher Verschlechterungen.'
  },
  {
    abbr: 'BTM',
    fullGerman: 'Betäubungsmittel',
    meaningAr: 'الأدوية المخدرة والمسكنات الخاضعة للرقابة الصارمة (مثل المورفين)',
    clinicalContext: 'Strikte Lagerung im BTM-Tresor mit lückenlosem Nachweisbuch.'
  }
];
