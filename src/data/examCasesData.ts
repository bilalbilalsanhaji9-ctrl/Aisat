import { ECGRhythm, ClinicalCase } from '../types';

export const ECG_RHYTHMS: ECGRhythm[] = [
  {
    id: 'sinus_normal',
    nameDe: 'Normaler Sinusrhythmus (SR)',
    nameAr: 'النبض الجيبي الطبيعي (Sinus Rhythm)',
    rateBpm: 72,
    regularity: 'regular',
    pWave: 'Vor jedem QRS-Komplex vorhanden, positiv in II, III, aVF',
    qrsDuration: 'Schmal (< 120 ms / ca. 0,08s)',
    clinicalSignificanceDe: 'Physiologischer Herzrhythmus. Ausreichendes Herzzeitvolumen und Organperfusion.',
    clinicalSignificanceAr: 'نشاط قلبي فيزيولوجي سليم ينبع من العقدة الجيبية وتغذية دموية مثالية لكافة الأعضاء.',
    nursingActionsDe: [
      'Routine-Überwachung der Vitalzeichen.',
      'Keine Akutintervention erforderlich.'
    ],
    nursingActionsAr: [
      'مراقبة روتينية للعلامات الحيوية.',
      'لا يلزم أي تدخل طارئ.'
    ],
    isEmergency: false,
    frequencyFactor: 1.0,
    amplitude: 1.0
  },
  {
    id: 'sinus_brady',
    nameDe: 'Sinusbradykardie',
    nameAr: 'بطء القلب الجيبي (Sinus Bradycardia)',
    rateBpm: 44,
    regularity: 'regular',
    pWave: 'Normal konfiguriert, aber mit verlängertem PP-Intervall',
    qrsDuration: 'Schmal (< 120 ms)',
    clinicalSignificanceDe: 'Frequenz < 60 bpm. Häufig bei Leistungssportlern harmlos, pathologisch bei Sick-Sinus-Syndrom, Hypothermie, Beta-Blocker-Überdosierung oder erhöhtem Hirndruck.',
    clinicalSignificanceAr: 'معدل ضربات أقل من 60 نبضة/دقيقة. قد يكون طبيعياً عند الرياضيين، لكنه مهدد إذا رافقه دوخة وإغماء أو جرعة زائدة من مثبطات بيتا.',
    nursingActionsDe: [
      'Patienten auf Schwindel, Synkope, Hypotonie und Kaltschweißigkeit prüfen.',
      'Arzt informieren; Atropin und externen Schrittmacher bereithalten.',
      'Bestehende Medikamente (Digitalis, Beta-Blocker) pausieren nach Rücksprache.'
    ],
    nursingActionsAr: [
      'فحص المريض بحثاً عن دوخة، تعرق بارد، أو هبوط ضغط دم.',
      'إبلاغ الطبيب وتجهيز دواء الأتروبين أو منظم النبض الخارجي.',
      'مراجعة الأدوية الحالية (مثل حاصرات بيتا) قبل إعطائها.'
    ],
    isEmergency: false,
    frequencyFactor: 0.6,
    amplitude: 1.0
  },
  {
    id: 'sinus_tachy',
    nameDe: 'Sinustachykardie',
    nameAr: 'تسرع القلب الجيبي (Sinus Tachycardia)',
    rateBpm: 128,
    regularity: 'regular',
    pWave: 'P-Welle vorhanden, kann bei sehr hoher Frequenz mit vorheriger T-Welle verschmelzen',
    qrsDuration: 'Schmal (< 120 ms)',
    clinicalSignificanceDe: 'Frequenz > 100 bpm. Meist reaktive Antwort des Körpers auf Schmerz, Fieber, Hypovolämie (Blutung/Schock), Hypoxie, Hyperthyreose oder Angst.',
    clinicalSignificanceAr: 'معدل نبضات يتجاوز 100 نبضة/دقيقة. وهو استجابة تعويضية للنزيف، الصدمة، الألم، نقص السوائل، أو نقص الأكسجين.',
    nursingActionsDe: [
      'Ursachensuche: Schmerz assessment, Temperaturmessung (Fieber?), Flüssigkeitsbilanz prüfen.',
      'Sauerstoffsättigung kontrollieren und ggf. O₂ applizieren.',
      'Arzt informieren bei persistierender Tachykardie ohne erkennbare Ursache.'
    ],
    nursingActionsAr: [
      'البحث عن السبب الجذري: تقييم الألم، قياس الحرارة (حمى؟)، فحص علامات الجفاف والنزيف.',
      'قياس الأكسجين وإعطاؤه إذا كان SpO2 منخفضاً.',
      'إبلاغ الطبيب إذا استمر التسرع دون استجابة للمسكنات أو السوائل.'
    ],
    isEmergency: false,
    frequencyFactor: 1.7,
    amplitude: 1.1
  },
  {
    id: 'atrial_fib',
    nameDe: 'Vorhofflimmern (VHF / Absolute Arrhythmie)',
    nameAr: 'الرجفان الأذيني (Atrial Fibrillation)',
    rateBpm: 115,
    regularity: 'irregular',
    pWave: 'Vollständiges Fehlen von P-Wellen; stattdessen unregelmäßige Flimmerwellen (350–600/min)',
    qrsDuration: 'Schmal, aber mit absolut unregelmäßigen RR-Abständen (Arrhythmia absoluta)',
    clinicalSignificanceDe: 'Häufigste anhaltende Herzrhythmusstörung. Thrombenbildung im linken Vorhofohr -> Hohes Risiko für ischämischen Schlaganfall! Kardiale Dekompensation möglich.',
    clinicalSignificanceAr: 'أشيع اضطراب نبض سريري. غياب انقباض الأذين المنتظم يسبب ركود الدم وتشكل خثرات تؤدي إلى جلطات دماغية خطيرة!',
    nursingActionsDe: [
      'Pulsdefizit prüfen (Differenz zwischen auskultierter Herzfrequenz und palpierter peripherer Radialispulsfrequenz).',
      'Antikoagulation (z.B. Heparin, NOAKs) nach ärztlicher Anordnung strikt überwachen.',
      '12-Kanal-EKG dokumentieren und Kardiologen hinzuziehen.'
    ],
    nursingActionsAr: [
      'فحص عجز النبض (Pulsdefizit): مقارنة ضربات القلب بالسماعة مع النبض المحسوس في معصم اليد.',
      'مراقبة أدوية تمييع الدم (الوارفارين، الهيبارين، NOAKs) لمنع السكتة الدماغية.',
      'تسجيل تخطيط 12 اشتقاق كامل ومتابعة سرعة ضربات البطين.'
    ],
    isEmergency: true,
    frequencyFactor: 1.3,
    amplitude: 0.85
  },
  {
    id: 'stemi',
    nameDe: 'ST-Hebungsinfarkt (STEMI / Vorderwandinfarkt)',
    nameAr: 'احتشاء عضلة القلب مع ارتفاع قطعة ST (جلطة قلبية حادة STEMI)',
    rateBpm: 92,
    regularity: 'regular',
    pWave: 'Meist vorhanden',
    qrsDuration: 'Monophasische Deformierung mit signifikanter ST-Hebung > 0,1–0,2 mV aus dem J-Punkt',
    clinicalSignificanceDe: 'Akuter vollständiger Verschluss eines Koronargefäßes. Lebensgefahr durch Myokardnekrose, kardiogenen Schock oder Kammerflimmern. Höchste Eile: "Time is muscle"!',
    clinicalSignificanceAr: 'انسداد تام حاد في أحد الشرايين التاجية المغذية لعضلة القلب. حالة طارئة قصوى تتطلب قسطرة قلبية فورية: "الوقت يساوي حياة العضلة"!',
    nursingActionsDe: [
      'SOFORT Notarzt / Herzkatheterlabor (PTCA) alarmieren!',
      'Oberkörperhochlagerung (30°), absolute Bettruhe, keine körperliche Bewegung.',
      'Sauerstoffgabe bei SpO₂ < 90%, venösen Zugang etablieren.',
      'Defibrillator griffbereit an den Bettplatz holen (hohe Flimmergefahr!).'
    ],
    nursingActionsAr: [
      'استدعاء طبيب القلب وفريق القسطرة القلبية الطارئة فوراً!',
      'رفع الجزء العلوي من السرير 30 درجة وإلزام المريض بالراحة التامة دون أي حركة.',
      'فتح خط وريدي آمن ووضع جهاز الصدمات الكهربائية بجانب السرير مباشرة تحسباً للرجفان البطيني!'
    ],
    isEmergency: true,
    frequencyFactor: 1.2,
    amplitude: 1.4
  },
  {
    id: 'vtach',
    nameDe: 'Ventrikuläre Tachykardie (VT / Kammertachykardie)',
    nameAr: 'تسرع القلب البطيني (Ventricular Tachycardia)',
    rateBpm: 175,
    regularity: 'regular',
    pWave: 'Dissoziiert oder nicht sichtbar',
    qrsDuration: 'Deutlich verbreitert (≥ 120 ms), Schenkelblock-ähnlich, monomorph deformiert',
    clinicalSignificanceDe: 'Bösartige Rhythmusstörung aus den Herzkammern. Kann jederzeit in pulslosen Herzstillstand oder Kammerflimmern übergehen!',
    clinicalSignificanceAr: 'اضطراب خبيث ينشأ من خلايا البطينين. يهدد بالانهيار المفاجئ للضغط والتحول إلى رجفان بطيني مميت!',
    nursingActionsDe: [
      'Sofort Puls an der Arteria carotis tasten: Puls tastbar oder pulslos?',
      'Wenn PULSLOS: Sofort Reanimation (CPR 30:2) und Defibrillation!',
      'Wenn Puls tastbar: Arzt alarmieren, Notfallwagen holen, EKG schreiben, Amiodaron bereitstellen.'
    ],
    nursingActionsAr: [
      'تحسس نبض الشريان السباتي بالرقبة فوراً: هل يوجد نبض أم لا؟',
      'إذا لم يكن هناك نبض: ابدأ فوراً الإنعاش القلبي الرئوي واطلب مزيل الرجفان فوراً لإعطاء صدمة!',
      'إذا كان هناك نبض: استدعاء الطبيب، تجهيز عربة الطوارئ وأدوية مكافحة اضطراب النظم (أميودارون).'
    ],
    isEmergency: true,
    frequencyFactor: 2.2,
    amplitude: 1.6
  },
  {
    id: 'vfib',
    nameDe: 'Kammerflimmern (VF / Ventricular Fibrillation)',
    nameAr: 'الرجفان البطيني (Ventricular Fibrillation)',
    rateBpm: 320,
    regularity: 'irregular',
    pWave: 'Keine erkennbaren P-Wellen oder QRS-Komplexe',
    qrsDuration: 'Völlig unkoordinierte, chaotische Zacken wechselnder Amplitude (Grob- bis Feinflimmern)',
    clinicalSignificanceDe: 'Funktioneller Herz-Kreislauf-Stillstand! Keine Auswurfleistung des Herzens. Klinischer Tod innerhalb von 3–5 Minuten ohne Intervention.',
    clinicalSignificanceAr: 'توقف وظيفي كامل للدورة الدموية! القلب يرتجف دون أي ضخ للدم. الموت الدماغي يحدث خلال 3-5 دقائق إذا لم يتم التدخل!',
    nursingActionsDe: [
      '1. NOTFALLRUF auslösen ("Reanimation Zimmer X").',
      '2. Sofort HERZDRUCKMASSAGE beginnen (100–120/min, 5–6 cm tief).',
      '3. DEFIBRILLATOR anschließen und SCHOCKEN (defibrillabler Rhythmus)!',
      '4. Nach Schock ohne Pulskontrolle sofort 2 Minuten CPR fortsetzen!'
    ],
    nursingActionsAr: [
      '1. إطلاق جرس إنذار الإنعاش القلبي فورا في القسم!',
      '2. البدء المباشر بضغطات الصدر (معدل 100-120 ضغطة/دقيقة بعمق 5-6 سم).',
      '3. توصيل مزيل الرجفان وإعطاء صدمة كهربائية فورية (إيقاع قابل للصعق)!',
      '4. استئناف الضغطات الصدرية فوراً لمدة دقيقتين بعد الصدمة دون توقف!'
    ],
    isEmergency: true,
    frequencyFactor: 4.0,
    amplitude: 0.9
  },
  {
    id: 'asystole',
    nameDe: 'Asystolie (Nulllinie / Herzstillstand)',
    nameAr: 'توقف القلب الكهربائي الكامل (Asystole - خط مستقيم)',
    rateBpm: 0,
    regularity: 'regular',
    pWave: 'Fehlt vollständig',
    qrsDuration: 'Keine QRS-Komplexe (flache Linie)',
    clinicalSignificanceDe: 'Vollständiges Erlöschen jeglicher elektrischer und mechanischer Herzaktivität. NICHT defibrillierbarer Rhythmus!',
    clinicalSignificanceAr: 'غياب تام لأي نشاط كهربائي في القلب. إيقاع غير قابل للصدمة الكهربائية!',
    nursingActionsDe: [
      '1. Kabel und Ableitungen kurz prüfen (Ausschluss "Lead-Off").',
      '2. SOFORT HERZDRUCKMASSAGE (CPR 30:2) ununterbrochen durchführen!',
      '3. Beatmung mit 100% Sauerstoff über Beatmungsbeutel.',
      '4. Adrenalin (Epinephrin) 1 mg i.v. alle 3–5 Minuten nach ärztlicher Anordnung.',
      '5. NIEMALS schocken bei Asystolie!'
    ],
    nursingActionsAr: [
      '1. التحقق السريع من توصيل الأسلاك (استبعاد انفصال القطب).',
      '2. البدء الفوري والمستمر بضغطات الصدر الإنعاشية (30:2)!',
      '3. التهوية اليدوية بكيس الإنعاش مع أكسجين 100%.',
      '4. إعطاء دواء الأدرينالين (1 ملغ بالوريد) كل 3 إلى 5 دقائق بأمر الطبيب.',
      '5. يُحظر تماماً إعطاء صدمة كهربائية في حالة الخط المستقيم (لا يوجد شحنة لتفريغها)!'
    ],
    isEmergency: true,
    frequencyFactor: 0,
    amplitude: 0.05
  }
];

export const CLINICAL_CASES: ClinicalCase[] = [
  {
    id: 'case-1',
    titleDe: 'Fall 1: Akuter retrosternaler Thoraxschmerz (V.a. Myokardinfarkt)',
    titleAr: 'الحالة 1: ألم صدري حاد خلف عظم القص مع اشتباه جلطة قلبية',
    patientProfile: {
      age: 63,
      gender: 'm',
      setting: 'Kardiologische Normalstation, 2. postoperativer Tag nach Knie-TEP',
      chiefComplaintDe: 'Plötzlich einsetzender, vernichtender Druckschmerz hinter dem Brustbein mit Ausstrahlung in den linken Arm und Unterkiefer, kalter Schweiß.',
      chiefComplaintAr: 'ألم ضاغط خانق ومفاجئ خلف عظم القص يشع نحو الذراع الأيسر والفك السفلي مع تعرق بارد شديد وخوف من الموت.'
    },
    vitals: {
      rr: '85/55 mmHg',
      hf: 118,
      af: 24,
      spo2: 91,
      temp: 36.8,
      bz: 135,
      gcs: 15,
      pain: 9
    },
    scenarioDe: `Herr Schmidt (63 J.) klingelt um 04:30 Uhr morgens aufgeregt. Sie betreten das Zimmer und finden den Patienten blass, kaltschweißig und mit panischem Gesichtsausdruck im Bett vor. Er hält sich mit der Faust an die Brust (Levine-Zeichen) und ringt nach Luft. Er gibt an, dass der Schmerz vor 15 Minuten wie ein "schwerer Stein auf der Brust" begonnen habe.`,
    scenarioAr: `يرن جرس الغرفة في الساعة 04:30 فجراً. تدخل لتجد السيد شميدت (63 سنة) شاحباً جداً، يتصبب عرقاً بارداً، ويضع قبضة يده بقوة فوق صدره (علامة ليفين Levine-Zeichen) متألماً ويلهث طلباً للهواء. يصف الألم بأنه "صخرة ثقيلة تسحق قفصه الصدري" منذ 15 دقيقة.`,
    abcdeAnalysis: {
      a: 'Atemweg frei, spricht mit abgehackten Sätzen.',
      b: 'Tachypnoe (AF 24/min), SpO₂ 91% unter Raumluft, basal beidseits diskrete Rasselgeräusche.',
      c: 'Kardiogener Schock droht: Hypotonie RR 85/55 mmHg, Tachykardie HF 118 bpm, Rekap-Zeit 3,5s, kalte Peripherie.',
      d: 'Wach, orientiert (GCS 15), aber massive Todesangst, Pupillen isokor.',
      e: 'Kaltschweißige Haut, keine äußeren Verletzungen.'
    },
    questions: [
      {
        id: 'q1',
        promptDe: 'Welche Sofortmaßnahme hat in den ersten 60 Sekunden die höchste Priorität?',
        promptAr: 'ما هو الإجراء التمريضي الأكثر أولوية في أول 60 ثانية؟',
        options: [
          {
            id: 'opt1',
            textDe: 'Patienten aufrecht lagern (Oberkörperhochlagerung 30°), Notfallruf betätigen und sofort 12-Kanal-EKG anfordern.',
            textAr: 'رفع ظهر السرير بزاوية 30° لتخفيف العبء على القلب، تفعيل نداء الطوارئ، وطلب تخطيط قلب 12 اشتقاق فوراً.',
            isCorrect: true,
            rationaleDe: 'Oberkörperhochlagerung senkt den venösen Rückstrom zum Herzen und entlastet das Myokard. Das 12-Kanal-EKG ist entscheidend für den Nachweis von ST-Hebungen.',
            rationaleAr: 'رفع الجذع يخفف رجوع الدم للقلب المنهك ويحسن التنفس، وتسجيل التخطيط فورا يكشف انسداد الشريان التاجي لبدء القسطرة.'
          },
          {
            id: 'opt2',
            textDe: 'Sofort Schocklagerung (Beine hoch) wegen des niedrigen Blutdrucks einleiten.',
            textAr: 'رفع الساقين للأعلى فوراً (وضعية الصدمة) لعلاج هبوط ضغط الدم.',
            isCorrect: false,
            rationaleDe: 'KONTRAINDIZIERT! Bei kardiogenem Pumpversagen überlastet der venöse Rückstrom das Herz und führt zum fulminanten Lungenödem!',
            rationaleAr: 'ممنوع تماماً! رفع الساقين في الصدمة القلبية يغرق الرئتين بالدم المحتقن ويسبب وذمة رئوية خانقة فورية!'
          },
          {
            id: 'opt3',
            textDe: 'Zuerst ein Glas Wasser anbieten und 20 Minuten abwarten, ob die Schmerzen vergehen.',
            textAr: 'إعطاء المريض كوب ماء والانتظار 20 دقيقة لمعرفة هل يخف الألم.',
            isCorrect: false,
            rationaleDe: 'Gefährliche Verzögerung! "Time is muscle" - jede Minute Verzögerung führt zu irreversiblem Absterben von Myokardgewebe.',
            rationaleAr: 'خطأ جسيم وإضاعة للوقت الحرج المتبقي لإنقاذ عضلة القلب.'
          }
        ]
      }
    ]
  },
  {
    id: 'case-2',
    titleDe: 'Fall 2: Bewusstseinsstörung bei Typ-2-Diabetes (Schwere Hypoglykämie)',
    titleAr: 'الحالة 2: اضطراب الوعي والارتباك لدى مريضة سكري (هبوط سكر حاد)',
    patientProfile: {
      age: 74,
      gender: 'w',
      setting: 'Geriatrische Rehabilitationsstation',
      chiefComplaintDe: 'Verwirrtheit, starkes Zittern, Somnolenz, Nicht-Erkennen der Angehörigen.',
      chiefComplaintAr: 'ارتباك ذهني حاد، ارتعاش الأطراف، نعاس شديد، وعدم التعرف على أسرتها.'
    },
    vitals: {
      rr: '135/80 mmHg',
      hf: 104,
      af: 16,
      spo2: 97,
      temp: 36.4,
      bz: 36,
      gcs: 11,
      pain: 0
    },
    scenarioDe: `Frau Weber (74 J.), bekannte insulinpflichtige Diabetikerin, wird vom Frühstücksdienst apathisch im Sessel vorgefunden. Ihr Frühstückstablett steht unberührt auf dem Tisch, obwohl sie laut Kurve vor 45 Minuten ihr prandiales Normalinsulin erhalten hat. Sie reagiert nur noch auf lautes Ansprechen mit unverständlichen Lauten. Die Haut ist schweißnass.`,
    scenarioAr: `المريضة السيدة فيبر (74 سنة)، مصابة بالسكري المعتمد على الإنسولين، وجدها الممرض في حالة خمول شديد على الكرسي. صينية الإفطار لم تمسها بالرغم من أنها أخذت جرعة الإنسولين السريع قبل 45 دقيقة. تستجيب بصعوبة بكلمات غير مفهومة وجلدها يتصبب عرقاً.`,
    abcdeAnalysis: {
      a: 'Atemweg frei, Schluckreflex eingeschränkt.',
      b: 'Atmung unauffällig, SpO₂ 97%.',
      c: 'Puls tachykard (104 bpm), RR stabil.',
      d: 'Somnolent, GCS 11 (Augen 3, Verbal 3, Motorik 5). BZ-MESSUNG ERGIBT 36 mg/dl (2,0 mmol/l)!',
      e: 'Starkes Schwitzen, feuchtkalte Haut.'
    },
    questions: [
      {
        id: 'q2',
        promptDe: 'Welche pflegerische Handlung ist bei dieser Patientin mit GCS 11 und BZ 36 mg/dl indiziert?',
        promptAr: 'ما هو الإجراء الصحيح لمريضة سكرها 36 ملغ/ديسيلتر ومستوى وعيها متدهور (GCS 11)؟',
        options: [
          {
            id: 'opt2_1',
            textDe: 'Auf keinen Fall feste Nahrung oder Getränke einflößen (Aspirationsgefahr!). Arzt rufen und 20–40% Glukose über Venenzugang anordnen lassen.',
            textAr: 'يُحظر تماماً إعطاؤها طعاماً أو شراباً بالفم لخطر الاختناق! استدعاء الطبيب فوراً لتحضير حقن جلوكوز وريدي مركز 20-40%.',
            isCorrect: true,
            rationaleDe: 'Bei somnolenten Patienten erlischt der Schluckreflex. Orale Gabe führt zur pulmonalen Aspiration von Glukoselösung oder Speisen.',
            rationaleAr: 'المريض شبه الغائب عن الوعي يفقد منعكس البلع، ومحاولة إطعامه ستؤدي لدخول السوائل للرئتين مسببة اختناقاً ووفاة فورية.'
          },
          {
            id: 'opt2_2',
            textDe: 'Einen süßen Tee mit 4 Löffeln Zucker zum Trinken zwingen.',
            textAr: 'إجبارها على شرب شاي محلى بأربع ملاعق سكر.',
            isCorrect: false,
            rationaleDe: 'Lebensgefährlich! Wegen Aspirationsgefahr streng kontraindiziert bei Bewusstseinsstörung.',
            rationaleAr: 'خطر شديد وممنوع تماماً بسبب خطر دخول السوائل لمجرى التنفس والرئتين.'
          }
        ]
      }
    ]
  }
];
