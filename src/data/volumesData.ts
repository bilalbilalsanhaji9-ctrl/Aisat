import { Volume } from '../types';

export const VOLUMES_DATA: Volume[] = [
  {
    id: 1,
    number: 1,
    titleDe: 'Mappe 1: Grundlagen der Pflege und Berufsrecht',
    titleAr: 'المجلد 1: أساسيات التمريض وأخلاقيات وقوانين المهنة في ألمانيا',
    descriptionDe: 'Rolle der Pflegefachkraft, Schweigepflicht (§203 StGB), informierte Einwilligung, Haftungsrecht und Übernahmeverantwortung.',
    descriptionAr: 'دور الممرض المؤهل، السرية المهنية، الموافقة المستنيرة، حدود مسؤولية الطالب، والمسؤولية القانونية في ألمانيا.',
    iconName: 'ShieldCheck',
    chapters: [
      {
        id: 101,
        number: 1,
        volumeId: 1,
        titleDe: 'Kapitel 1: Berufsbild Pflegefachkraft, Rollen und rechtliche Verantwortung',
        titleAr: 'الفصل 1: التوصيف المهني لممرض الرعاية المؤهل والمسؤولية القانونية',
        summaryDe: 'Differenzierung zwischen Pflegefachkraft, Pflegeassistent und Arzt. Schweigepflicht nach §203 StGB, informierte Einwilligung und Übernahmeverschulden.',
        summaryAr: 'الفروق الجوهرية بين الممرض المؤهل ومساعد التمريض والطبيب، السرية المهنية الجنائية، الموافقة المستنيرة ومسؤولية تولي المهام.',
        readTimeMin: 14,
        keywords: ['Pflegefachkraft', 'Schweigepflicht', 'Haftung', 'Übernahmeverschulden', 'Delegation', 'Einwilligung'],
        sections: [
          {
            id: '101-1',
            titleDe: '1. Rollendifferenzierung im deutschen Gesundheitssystem',
            titleAr: '1. التمايز بين الأدوار المهنية في المنظومة الصحية الألمانية',
            level: 'B2',
            contentDe: `In Deutschland definiert das Pflegeberufegesetz (PflBRefG) die dreijährige generalistische Ausbildung zur Pflegefachfrau bzw. zum Pflegefachmann.
Es besteht eine klare rechtliche und fachliche Abgrenzung:
• **Pflegefachkraft (3-jährige Ausbildung):** Trägt die Vorbehaltsaufgaben (Erhebung des Pflegebedarfs, Planung, Organisation und Evaluation des Pflegeprozesses). Verantwortlich für komplexe Behandlungspflege (z.B. ZVK-Verband, Verabreichung von BTM, Tracheostomapflege).
• **Pflegehelfer / Pflegeassistent (1- bis 2-jährige Ausbildung):** Führt grundpflegerische Tätigkeiten durch und unterstützt bei stabilen Vitalzeichenmessungen unter Aufsicht der Pflegefachkraft.
• **Arzt:** Diagnosestellung, Indikationsstellung, Anordnung invasiver und medikamentöser Therapien. Der Arzt delegiert Durchführungsverantwortung, behält jedoch die Anordnungsverantwortung.`,
            contentAr: `في ألمانيا يحدد قانون المهن التمريضية (PflBRefG) التكوين الشامل لمدة 3 سنوات (Pflegefachkraft). ويوجد تمايز قانوني ومهني صارم:
• **الممرض المؤهل المتخصص (Pflegefachkraft):** يحمل المهام الحصرية القانونية (Vorbehaltsaufgaben) كتقييم الاحتياج التمريضي، وضع خطة الرعاية، تقييم العملية التمريضية، وتنفيذ الرعاية العلاجية المعقدة (مثل غيارات القسطرة المركزية وأدوية التخدير BTM).
• **مساعد التمريض (Pflegehelfer / Assistent):** يختص بالرعاية الأساسية (Grundpflege) اليومية وقياس العلامات الحيوية الروتينية تحت إشراف الممرض المؤهل.
• **الطبيب (Arzt):** يختص بالتشخيص ووضع خطة العلاج ووصف الأدوية؛ ويقوم بتفويض التنفيذ للممرض مع احتفاظ الطبيب بمسؤولية الوصف (Anordnungsverantwortung).`,
            clinicalNoteDe: 'Merke: Vorbehaltsaufgaben nach §4 PflBRefG dürfen niemals an Pflegehelfer delegiert werden!',
            clinicalNoteAr: 'قاعدة سريرية: المهام التمريضية السيادية (§4 PflBRefG) لا يجوز تفويضها مطلقاً لمساعدي التمريض!',
            hospitalPhrase: {
              formalDe: 'Könnten Sie bitte die ärztliche Verordnung im KIS schriftlich gegenzeichnen?',
              colloquialDe: 'Kommst du mal eben zum Abzeichnen der Kurve rum?',
              meaningAr: 'هل يمكنك التكرم بالتوقيع على الأمر الطبي في السجل الإلكتروني؟'
            },
            commonErrors: {
              errorDe: 'Durchführung einer ärztlichen Anordnung ohne schriftliche Fixierung in der Kurve bei Nicht-Notfällen.',
              errorAr: 'تنفيذ أمر طبي شفوي في الحالات غير الطارئة دون توثيق كتابي من الطبيب في الملف.',
              correctionDe: 'Immer auf einer schriftlichen Anordnung bestehen (Anordnungsverantwortung des Arztes).',
              correctionAr: 'الإصرار دائماً على توثيق الأمر كتابياً لضمان مسؤولية الطبيب القانونية وحماية المريض.'
            },
            reviewQuestion: {
              questionDe: 'Was versteht man unter dem Begriff "Übernahmeverschulden" für Auszubildende?',
              questionAr: 'ماذا يعني مصطلح "خطأ تولي المهمة Übernahmeverschulden" بالنسبة للمتدرب؟',
              answerDe: 'Übernahmeverschulden liegt vor, wenn eine Pflegekraft eine Aufgabe übernimmt, für die sie fachlich oder rechtlich noch nicht ausreichend geschult oder qualifiziert ist.',
              answerAr: 'هو الخطأ القانوني الذي يقع فيه الممرض أو الطالب عندما يقبل تنفيذ إجراء لم يُدرّب عليه بشكل كافٍ أو ليس مخولاً قانونياً به.'
            }
          },
          {
            id: '101-2',
            titleDe: '2. Schweigepflicht (§203 StGB) und Datenschutz (DSGVO)',
            titleAr: '2. السرية المهنية الجنائية (§203 StGB) وحماية بيانات المريض',
            level: 'B2',
            contentDe: `Die ärztliche und pflegerische Schweigepflicht nach § 203 Strafgesetzbuch (StGB) schützt das persönliche Vertrauensverhältnis zum Patienten.
Wichtige Grundregeln:
1. **Kreis der Verschwiegenheit:** Gilt gegenüber Angehörigen, Freunden, Arbeitgebern und sogar Pflegekräften, die nicht an der direkten Behandlung beteiligt sind.
2. **Entbindung von der Schweigepflicht:** Erfordert die ausdrückliche schriftliche oder mutmaßliche Einwilligung des Patienten.
3. **Ausnahmen:** Gesetzliche Meldepflichten (Infektionsschutzgesetz - IfSG), rechtfertigender Notstand (§34 StGB bei akuter Lebensgefahr für Dritte).
4. **Schutz am Telefon:** Niemals am Telefon Patientenauskünfte erteilen, wenn die Identität des Anrufers und die Schweigepflichtentbindung nicht zweifelsfrei vorliegen.`,
            contentAr: `السرية المهنية بموجب المادة 203 من قانون العقوبات الألماني (StGB) تحمي العلاقة الائتمانية بين المريض والفريق الصحي.
قواعد أساسية لا تقبل التهاون:
1. **نطاق السرية:** يسري أمام أفراد الأسرة، الأصدقاء، أرباب العمل، وحتى الزملاء الممرضين غير المشاركين مباشرة في رعاية هذا المريض.
2. **رفع السرية (Entbindung):** يتطلب موافقة كتابية صريحة من المريض أو ممثله القانوني.
3. **الاستثناءات:** التبليغ الإلزامي بموجب قانون الوقاية من العدوى (IfSG)، وحالات الطوارئ القصوى لحماية حياة الآخرين (§34 StGB).
4. **الحذر عبر الهاتف:** يُحظر تماماً إعطاء معلومات عن المريض عبر الهاتف دون التحقق المؤكد من هوية المتصل وموافقة المريض.`,
            clinicalNoteDe: 'Telefonregel im Stationsalltag: "Aus datenschutzrechtlichen Gründen darf ich telefonisch keine Auskunft erteilen. Bitte sprechen Sie direkt mit dem behandelnden Arzt."',
            clinicalNoteAr: 'صيغة التعامل مع الهاتف في القسم: "لأسباب تتعلق بحماية البيانات، لا يحق لي تقديم معلومات عبر الهاتف. يرجى التحدث مباشرة مع الطبيب المعالج."'
          }
        ]
      },
      {
        id: 102,
        number: 2,
        volumeId: 1,
        titleDe: 'Kapitel 2: Informierte Einwilligung und Patientenautonomie',
        titleAr: 'الفصل 2: الموافقة المستنيرة واستقلالية المريض وحق رفض العلاج',
        summaryDe: 'Rechtliche Wirksamkeit der Einwilligung, Patientenverfügung, Vorsorgevollmacht und professioneller Umgang mit Pflegeverweigerung.',
        summaryAr: 'الشروط القانونية لصحة الموافقة، وصية المريض المسبقة، التوكيل الطبي، والتعامل المهني مع رفض الرعاية والعلاج.',
        readTimeMin: 12,
        keywords: ['Einwilligung', 'Patientenverfügung', 'Vorsorgevollmacht', 'Pflegeverweigerung', 'Autonomie'],
        sections: [
          {
            id: '102-1',
            titleDe: '1. Informierte Einwilligung (Informed Consent)',
            titleAr: '1. مبدأ الموافقة المستنيرة في الممارسة السريرية',
            level: 'B1',
            contentDe: `Jeder körperliche Eingriff (selbst eine Blutentnahme oder subkutane Injektion) erfüllt juristisch den Tatbestand der Körperverletzung nach §223 StGB, es sei denn, der Patient hat wirksam eingewilligt.
Voraussetzungen für eine wirksame Einwilligung:
• Rechtzeitige, verständliche Aufklärung durch den Arzt über Nutzen, Risiken und Alternativen.
• Einwilligungsfähigkeit des Patienten (Einsicht in Wesen und Tragweite des Eingriffs).
• Freiwilligkeit ohne Nötigung.`,
            contentAr: `أي تدخل جسدي في جسم المريض (حتى سحب الدم أو وخزة إبرة بسيطة) يُعتبر قانونياً في ألمانيا جناية إيذاء بدني (§223 StGB) إلا إذا اقترن بموافقة صحيحة ومستنيرة من المريض.
شروط صحة الموافقة:
• تقديم شرح مسبق ومفهوم بواسطة الطبيب يوضح الفوائد والمخاطر والبدائل.
• تمتع المريض بالأهلية الذهنية والقدرة على تقدير أبعاد القرار.
• صدور القرار طواعية دون أي إكراه.`,
            clinicalNoteDe: 'Immer vor jeder Pflegemaßnahme ankündigen: "Herr Müller, ich messe jetzt Ihren Blutdruck, ist das in Ordnung für Sie?"',
            clinicalNoteAr: 'يجب دائماً استئذان المريض قبل أي إجراء تمريضي حتى لو كان روتينياً: "سيد مولر، سأقيس ضغط دمك الآن، هل توافق على ذلك؟"'
          }
        ]
      }
    ]
  },
  {
    id: 2,
    number: 2,
    titleDe: 'Mappe 2: Anatomie, Physiologie und Organsysteme',
    titleAr: 'المجلد 2: التشريح ووظائف الأعضاء والأجهزة الحيوية',
    descriptionDe: 'Vertiefte Betrachtung des Herz-Kreislauf-Systems, der Lunge, des Nervensystems, des Gastrointestinaltrakts, der Nieren und des endokrinen Systems.',
    descriptionAr: 'دراسة متعمقة لجهاز الدوران والقلب، الجهاز التنفسي، الجهاز العصبي، الهضمي، البولي والكلوي، والغدد الصماء مع المصطلحات والاضطرابات السريرية.',
    iconName: 'Activity',
    chapters: [
      {
        id: 201,
        number: 6,
        volumeId: 2,
        titleDe: 'Kapitel 6: Das Herz-Kreislauf-System (Kardiovaskuläres System)',
        titleAr: 'الفصل 6: الجهاز القلبي الوعائي والدورة الدموية الكبرى والصغرى',
        summaryDe: 'Anatomie des Herzens (Myokard, Endokard, Epikard), Erregungsleitungssystem, Klappenmechanismus, großer und kleiner Kreislauf, Herzzyklus.',
        summaryAr: 'تشريح القلب وطبقاته، نظام التوصيل الكهربائي، صمامات القلب، الدورة الدموية الكبرى والرئوية، ودورة انقباض وانبساط القلب.',
        readTimeMin: 18,
        keywords: ['Herz', 'Myokard', 'Erregungsleitung', 'Sinusknoten', 'Kreislauf', 'Systole', 'Diastole'],
        sections: [
          {
            id: '201-1',
            titleDe: '1. Herzaufbau und Blutfluss',
            titleAr: '1. بنية حجرات القلب وصماماته ومسار تدفق الدم',
            level: 'B2',
            contentDe: `Das menschliche Herz (Cor) ist ein hohles Muskelorgan (ca. 300g beim Erwachsenen), unterteilt in:
• **Rechtes Atrium (Rechter Vorhof):** Nimmt sauerstoffarmes Blut aus Vena cava superior und inferior auf.
• **Trikuspidalklappe (Segelklappe):** Verhindert Rückfluss in den Vorhof.
• **Rechter Ventrikel (Rechte Herzkammer):** Pumpt das Blut über die Pulmonalklappe in die Arteria pulmonalis (Lungenkreislauf).
• **Linkes Atrium (Linker Vorhof):** Nimmt sauerstoffreiches Blut aus den 4 Venae pulmonales auf.
• **Mitralklappe / Bikuspidalklappe:** Segelklappe zwischen linkem Vorhof und linker Kammer.
• **Linker Ventrikel (Linke Herzkammer):** Mit dickerer Myokardschicht (ca. 10–12 mm), pumpt über die Aortenklappe sauerstoffreiches Blut in die Aorta und den Körperkreislauf.`,
            contentAr: `القلب البشري (Cor) عضو عضلي مجوف يزن حوالي 300 غرام، يتكون من 4 حجرات رئيسية:
• **الأذين الأيمن (Rechtes Atrium):** يستقبل الدم غير المؤكسج من الوريدين الأجوفين العلوي والسفلي.
• **الصمام ثلاثي الشرفات (Trikuspidalklappe):** يمنع رجوع الدم من البطين الأيمن للأذين.
• **البطين الأيمن (Rechter Ventrikel):** يضخ الدم عبر الصمام الرئوي إلى الشريان الرئوي (الدورة الرئوية الصغرى).
• **الأذين الأيسر (Linkes Atrium):** يستقبل الدم المؤكسج القادم من الرئتين عبر الأوردة الرئوية الأربعة.
• **الصمام التاجي المترالي (Mitralklappe):** صمام شرفي يفصل بين الأذين الأيسر والبطين الأيسر.
• **البطين الأيسر (Linker Ventrikel):** يتميز بعضلة سميكة (10-12 ملم) ليضخ الدم بقوة عالية عبر الصمام الأبهري إلى الشريان الأبهر ومختلف أنحاء الجسم (الدورة الجهازية الكبرى).`,
            clinicalNoteDe: 'Klinische Relevanz: Bei Linksherzinsuffizienz staut sich das Blut in die Lunge zurück -> Lungenödem, Orthopnoe, Rasselgeräusche.',
            clinicalNoteAr: 'فائدة سريرية: في قصور القلب الأيسر يحتقن الدم راجعاً نحو الرئتين مما يسبب وذمة الرئة، ضيق تنفس استلقائي (Orthopnoe)، وخرخرة تنفسية.'
          },
          {
            id: '201-2',
            titleDe: '2. Das Erregungsleitungssystem des Herzens',
            titleAr: '2. جهاز التوصيل الكهربائي الذاتي للقلب ومسار النبضة',
            level: 'B2',
            contentDe: `Das Herz erzeugt seine Erregung autonom über spezialisierte Muskelzellen:
1. **Sinusknoten (Keith-Flack-Knoten):** Primärer Schrittmacher (60–80 bpm) im rechten Vorhof nahe der Vena cava superior.
2. **AV-Knoten (Aschoff-Tawara-Knoten):** Sekundärer Schrittmacher (40–50 bpm), verzögert den Impuls um ca. 0,1s zur Vorhofentleerung.
3. **His-Bündel:** Zieht durch das bindegewebige Herzskelett.
4. **Tawara-Schenkel (Rechter & Linker Kammerschenkel):** Laufen im Septum nach apikal.
5. **Purkinje-Fasern:** Übertragen die Erregung direkt auf die Kammermyokardzellen von innen nach außen.`,
            contentAr: `ينبض القلب ذاتياً بفضل خلايا متخصصة تولد الشحنات الكهربائية وتوصلها بتنسيق فائق الدقة:
1. **العقدة الجيبية الأذينية (Sinusknoten):** المنظم الأساسي للنبض (60-80 ن/د) وتقع أعلى الأذين الأيمن.
2. **العقدة الأذينية البطينية (AV-Knoten):** المنظم الثانوي (40-50 ن/د) وتؤخر النبضة بمقدار 0.1 ثانية لإتاحة وقت كافٍ لتفريغ الأذينين.
3. **حزمة هيس (His-Bündel):** تعبر الحاجز العازل بين الأذينات والبطينات.
4. **ألياف وتاج تاوارا (Tawara-Schenkel):** فرعان أيمن وأيسر ينزلان في الحاجز البطيني.
5. **ألياف بوركينجي (Purkinje-Fasern):** تنشر الشحنة في خلايا عضلات البطينين لتحقيق انقباض متزامن من الأسفل للأعلى.`,
            reviewQuestion: {
              questionDe: 'Welcher Schrittmacher übernimmt die Führung, wenn der Sinusknoten komplett ausfällt?',
              questionAr: 'أي مركز يتولى تنظيم النبض في حال توقف العقدة الجيبية تماماً عن العمل؟',
              answerDe: 'Der AV-Knoten übernimmt als sekundärer Schrittmacher mit einer Frequenz von ca. 40 bis 50 Schlägen pro Minute.',
              answerAr: 'تتولى العقدة الأذينية البطينية (AV-Knoten) دور منظم النبض الثانوي بمعدل بديل يتراوح بين 40 إلى 50 نبضة في الدقيقة.'
            }
          }
        ]
      },
      {
        id: 202,
        number: 7,
        volumeId: 2,
        titleDe: 'Kapitel 7: Das respiratorische System (Atmungsorgane und Gasaustausch)',
        titleAr: 'الفصل 7: الجهاز التنفسي، ميكانيكا التهوية وتبادل الغازات',
        summaryDe: 'Obere und untere Atemwege, Alveolenarchitektur, Surfactant, Partialdrücke, Gasaustausch und Atemregulation.',
        summaryAr: 'المجاري التنفسية العلوية والسفلية، بنية الحويصلات الرئوية، السورفاكتانت، وميكانيكا الشهيق والزفير وتنظيم التنفس.',
        readTimeMin: 16,
        keywords: ['Respiration', 'Lunge', 'Alveolen', 'Surfactant', 'Gasaustausch', 'pO2', 'pCO2'],
        sections: [
          {
            id: '202-1',
            titleDe: '1. Anatomie der Atemwege und Alveolargaswechsel',
            titleAr: '1. تشريح المسالك الهوائية والحويصلات الهوائية وتبادل الغازات',
            level: 'B2',
            contentDe: `Das Atemsystem gliedert sich in:
• **Obere Atemwege:** Nase, Nasennebenhöhlen, Pharynx (Rachen). Erwärmung, Anfeuchtung und Vorreinigung der Luft.
• **Untere Atemwege:** Larynx (Kehlkopf mit Epiglottis zum Verschluss bei Schluckakt), Trachea (10–12 cm, 16–20 hyaline Knorpelspangen), Hauptbronchien, Bronchiolen und Alveolen (ca. 300 Millionen Alveolen mit einer Gesamtfläche von 80–100 m²).
• **Diffusion:** Sauerstoff diffundiert passiv entlang des Konzentrationsgradienten aus der Alveolarluft in das Kapillarblut, während CO₂ abgeatmet wird.
• **Surfactant:** Phospholipidgemisch, verhindert den Kollaps der Alveolen am Ende der Exspiration (Atelektasenprophylaxe).`,
            contentAr: `ينقسم الجهاز التنفسي إلى:
• **المجاري الهوائية العلوية:** الأنف والجيوب والبلعوم (تدفئة وترطيب وترشيح الهواء).
• **المجاري الهوائية السفلية:** الحنجرة مع لسان المزمار (Epiglottis) لحماية القصبة أثناء البلع، القصبة الهوائية (Trachea مع 16-20 حلقة غضروفية)، الشُعب الهوائية والشُعيبات، والحويصلات الهوائية (Alveolen بحوالي 300 مليون حويصلة تشغل مساحة سطحية هائلة تبلغ 80-100 م²).
• **الانتشار الغازي (Diffusion):** ينتقل الأكسجين عبر الغشاء السنخي الشعري نحو الدم بينما ينتقل ثاني أكسيد الكربون للرئة ليُطرد بالزفير.
• **السورفاكتانت (Surfactant):** مادة دهنية فوسفاتية تخفض التوتر السطحي وتمنع انخماص الحويصلات عند نهاية الزفير.`
          }
        ]
      }
    ]
  },
  {
    id: 3,
    number: 3,
    titleDe: 'Mappe 3: Pharmakologie, Injektionen und das Gauge-System',
    titleAr: 'المجلد 3: علم الأدوية، تقنيات الحقن الآمنة ونظام مقاييس الإبر (Gauge)',
    descriptionDe: '6-R-Regel, Darreichungsformen, subkutane, intramuskuläre und intravenöse Injektionen, Gauge-Farbsystem und Aspiration.',
    descriptionAr: 'قاعدة التحقق السداسية (6-R-Regel)، أشكال الأدوية، الحقن تحت الجلد والعضلي والوريدي، مقاسات الإبر المعيارية وزوايا الإعطاء.',
    iconName: 'Syringe',
    chapters: [
      {
        id: 301,
        number: 14,
        volumeId: 3,
        titleDe: 'Kapitel 14: Die 6-R-Regel und sichere Medikamentenverabreichung',
        titleAr: 'الفصل 14: قاعدة الأمان السداسية (6-R-Regel) وإعطاء الأدوية السريرية',
        summaryDe: 'Richtiger Patient, Richtiges Medikament, Richtige Dosierung, Richtige Applikationsform, Richtiger Zeitpunkt, Richtige Dokumentation.',
        summaryAr: 'المريض الصحيح، الدواء، الجرعة، طريقة الإعطاء، التوقيت، والتوثيق الصحيح مع التعامل مع الأدوية عالية الخطورة.',
        readTimeMin: 15,
        keywords: ['6-R-Regel', 'Medikamentengabe', 'Applikation', 'Dosierung', 'Dokumentation', 'High-Alert'],
        sections: [
          {
            id: '301-1',
            titleDe: '1. Die 6 Grundregeln der Arzneimitteltherapie',
            titleAr: '1. القواعد الست الذهبية لتفادي الأخطاء الدوائية',
            level: 'B1',
            contentDe: `Zur Vermeidung medikamentöser Zwischenfälle ist die strikte Anwendung der 6-R-Regel vor jeder Applikation Pflicht:
1. **Richtiger Patient:** Identifikation über Patientenarmband, aktives Nachfragen nach Name und Geburtsdatum.
2. **Richtiges Medikament:** 3-facher Abgleich (beim Entnehmen aus dem Schrank, beim Vorbereiten/Richten, vor dem Einwerfen/Applizieren).
3. **Richtige Dosierung:** Überprüfung der Wirkstärke, Maßeinheiten (mg vs. µg, ml, IE), Dosisberechnung.
4. **Richtige Applikationsart:** oral, i.v., s.c., i.m., rektal, transdermal (cave: Verwechslung von Schläuchen und Zugängen).
5. **Richtiger Zeitpunkt:** Nüchtern, vor/mit/nach der Mahlzeit, exakte Zeitabstände bei Antibiotika.
6. **Richtige Dokumentation:** Unverzüglich nach erfolgter Gabe im KIS/Kurve signieren.`,
            contentAr: `لتجنب الكوارث الدوائية، يلتزم الممرض بفحص النقاط الست التالية قبل إعطاء أي دواء:
1. **المريض الصحيح (Richtiger Patient):** مطابقة سوار المعصم وسؤال المريض مباشرة عن اسمه الكامل وتاريخ ميلاده.
2. **الدواء الصحيح (Richtiges Medikament):** فحص ثلاثي الأبعاد لاسم الدواء وتاريخ الصلاحية (عند إخراجه من الصيدلية، عند التحضير، وقبل إعطائه للمريض مباشرة).
3. **الجرعة الصحيحة (Richtige Dosierung):** مطابقة كمية المادة الفعالة ووحدات القياس (mg مقابل mcg، والوحدات الدولية IE).
4. **طريقة الإعطاء الصحيحة (Richtige Applikationsform):** هل هو بالفم، بالوريد، تحت الجلد، أم موضعي؟
5. **التوقيت الصحيح (Richtiger Zeitpunkt):** قبل أو مع أو بعد الأكل، وفترات المضادات الحيوية الصارمة.
6. **التوثيق السليم (Richtige Dokumentation):** التوقيع الفوري في ملف المريض بعد التأكد من أخذ المريض للدواء.`
          }
        ]
      },
      {
        id: 302,
        number: 15,
        volumeId: 3,
        titleDe: 'Kapitel 15: Injektionsmaterial, Kanülengrößen und das internationale Gauge-System',
        titleAr: 'الفصل 15: أدوات الحقن ومقاييس الإبر الدولية بنظام Gauge والترميز اللوني',
        summaryDe: 'Das Gauge-Prinzip (je größer das Gauge, desto dünner die Nadel), ISO-Farbcodes von 14G bis 26G, Durchflussraten und Indikationen.',
        summaryAr: 'مبدأ نظام غيج (كلما زاد رقم G صغر قطر الإبرة)، الألوان المعيارية من 14G إلى 26G، سرعات التدفق واستخدامات كل مقاس.',
        readTimeMin: 18,
        keywords: ['Gauge', 'Kanüle', 'Venenverweilkanüle', 'Durchflussrate', 'Farbcode', '18G', '20G', '22G'],
        sections: [
          {
            id: '302-1',
            titleDe: '1. Das Gauge-System (G) und Kanülenklassifikation',
            titleAr: '1. نظام Gauge العكسي وتصنيف الإبر والقساطر الوريدية',
            level: 'B2',
            contentDe: `Das Gauge-System (G) ist eine inverse Maßeinheit für den Außendurchmesser von Nadeln und Venenverweilkanülen (Braunülen/Viggos):
• **Regel:** Eine **niedrige** Gauge-Zahl bedeutet einen **großen** Durchmesser und eine **hohe** Durchflussrate!
• **Typische ISO-Farbcodierung für periphere Venenverweilkanülen (PVK):**
  - **14G (Orange):** Außendurchmesser ca. 2,1 mm, Flussrate ~300 ml/min. Indikation: Akute Notfälle, Massentransfusion, Schockraum.
  - **16G (Grau):** Außendurchmesser ca. 1,7 mm, Flussrate ~180 ml/min. Indikation: Größere operative Eingriffe, Volumensubstitution.
  - **18G (Grün):** Außendurchmesser ca. 1,3 mm, Flussrate ~90 ml/min. Indikation: Bluttransfusionen (Erythrozytenkonzentrate), Standard-Chirurgie.
  - **20G (Rosa/Pink):** Außendurchmesser ca. 1,1 mm, Flussrate ~60 ml/min. Indikation: Der klinische Standard für Infusionen und Medikamente bei Erwachsenen.
  - **22G (Blau):** Außendurchmesser ca. 0,9 mm, Flussrate ~36 ml/min. Indikation: Zarte, fragile Venen, ältere Patienten, Onkologie.
  - **24G (Gelb):** Außendurchmesser ca. 0,7 mm, Flussrate ~22 ml/min. Indikation: Pädiatrie, Neonatologie, extrem schwierige Venenverhältnisse.`,
            contentAr: `نظام Gauge (G) هو نظام قياس عكسي لقطر الإبر والقساطر الوريدية الطرفية:
• **القاعدة الذهبية:** كلما **قلّ** رقم الغيج (Gauge)، **زاد** سُمك الإبرة وارتفعت سرعة تدفق السوائل عبرها!
• **الألوان المعيارية الدولية للقساطر الوريدية (PVK):**
  - **14G (برتقالي):** القطر 2.1 ملم، تدفق فائق ~300 مل/دقيقة. دواعي الاستخدام: طوارئ الإنعاش ونقل الدم السريع في الصدمات الحادة.
  - **16G (رمادي):** القطر 1.7 ملم، تدفق ~180 مل/دقيقة. دواعي الاستخدام: العمليات الجراحية الكبرى وتعويض السوائل السريع.
  - **18G (أخضر):** القطر 1.3 ملم، تدفق ~90 مل/دقيقة. دواعي الاستخدام: نقل وحدات الدم ومشتقاته وجراحة البالغين.
  - **20G (وردي / زهري):** القطر 1.1 ملم، تدفق ~60 مل/دقيقة. هو المقاس القياسي الأكثر استخداماً في أقسام الباطنة والجراحة للبالغين.
  - **22G (أزرق):** القطر 0.9 ملم، تدفق ~36 مل/دقيقة. للأوردة الهشة والضعيفة لدى كبار السن ومرضى الأورام.
  - **24G (أصفر):** القطر 0.7 ملم، تدفق ~22 مل/دقيقة. لحديثي الولادة والأطفال والأوردة الدقيقة جداً.`
          },
          {
            id: '302-2',
            titleDe: '2. Injektionstechniken: s.c., i.m., i.d. und Aspiration',
            titleAr: '2. تقنيات الحقن (تحت الجلد، عضلي، داخل الأدمة) ومسألة سحب المكبس (Aspiration)',
            level: 'B2',
            contentDe: `Die Wahl der Injektionsart richtet sich nach pharmakokinetischen Erfordernissen:
• **Subkutan (s.c.):** Injektion ins Fettgewebe (Bauchdecke, Oberschenkel-Außenseite). Einstichwinkel: 45° (bei kurzer Nadel bzw. dicker Hautfalte 90°). Keine Aspiration bei Standard-Insulin und niedermolekularem Heparin.
• **Intramuskulär (i.m.):** Injektion in den Skelettmuskel (M. deltoideus am Oberarm, M. gluteus medius ventrogluteal nach von Hochstetter). Einstichwinkel: strikt 90°. Aspiration ist leitlinienabhängig bei gefäßreichen Arealen und öligen Depots erforderlich.
• **Intradermal (i.d.):** Injektion zwischen Epidermis und Dermis (z.B. Tuberkulin-Test, Allergietest). Einstichwinkel: flach 10°–15°, Bildung einer Quaddel.`,
            contentAr: `تختلف زاوية الحقن وعمقه حسب النسيج المستهدف:
• **الحقن تحت الجلد (s.c.):** في النسيج الشحمي للبطن أو الفخذ. الزاوية: 45° (أو 90° إذا كانت الإبرة قصيرة وثنية الجلد سميكة). لا يُجرى سحب راجع (Aspiration) مع إبر الإنسولين والهيبارين المعبأة مسبقاً منعاً للكدمات.
• **الحقن العضلي (i.m.):** في العضلة الدالية بالكتف أو المنطقة الألوية البطنية (Ventrogluteal). الزاوية: 90° عمودياً تماماً. السحب الراجع (Aspiration) يُطبق حسب الإرشادات في الحقن الزيتية ومواضع التروية العالية للتأكد من عدم ثقب وعاء دموي.
• **الحقن داخل الأدمة (i.d.):** لاختبارات التحسس والدرن. الزاوية: مسطحة جداً 10°-15° لتشكيل حويصلة جلدية مرتفعة (Quaddel).`
          }
        ]
      }
    ]
  },
  {
    id: 4,
    number: 4,
    titleDe: 'Mappe 4: Patientenlagerung, Ergonomie und Kinästhetik',
    titleAr: 'المجلد 4: وضعيات المرضى في السرير ونقل الحركة والوقاية من السقوط',
    descriptionDe: 'Physiologische Lagerungsformen, Trendelenburg, Oberkörperhochlagerung, Dekubitusprophylaxe und Kinästhetik-Prinzipien.',
    descriptionAr: 'وضعيات الاستلقاء العلاجية، فاولر، ترندلينبورغ، الوقاية من قرح الفراش، والميكانيكا الحيوية لحماية ظهر الممرض.',
    iconName: 'Bed',
    chapters: [
      {
        id: 401,
        number: 22,
        volumeId: 4,
        titleDe: 'Kapitel 22: Therapeutische Lagerungsarten und Indikationen',
        titleAr: 'الفصل 22: الوضعيات العلاجية في السرير ودواعي ومحاذير كل وضعية',
        summaryDe: 'Fowler- und Halb-Fowler-Lagerung, Orthopnoe-Position, Sims-Lagerung, Trendelenburg vs. Anti-Trendelenburg, Schocklagerung.',
        summaryAr: 'وضعية فاولر، وضعية أورتوبنيا لضيق التنفس، وضعية سيمز، الفروق الجوهرية بين ترندلينبورغ ورفع الساقين في الصدمة.',
        readTimeMin: 14,
        keywords: ['Lagerung', 'Fowler', 'Trendelenburg', 'Orthopnoe', 'Dekubitus', 'Sims', 'Schocklage'],
        sections: [
          {
            id: '401-1',
            titleDe: '1. Klinische Lagerungsformen im Überblick',
            titleAr: '1. دليل الوضعيات السريرية العلاجية',
            level: 'B1',
            contentDe: `• **Oberkörperhochlagerung (Fowler 45°–60° / Halb-Fowler 30°):** Erleichtert die Zwerchfellbewegung, senkt den venösen Rückstrom zum Herzen bei kardialer Dekompensation, aspiratiosprompte Lagerung bei enteraler Sondenernährung.
• **Orthopnoische Lagerung (Kutschersitz / Herzkissen):** Patient sitzt aufrecht (90°), beugt sich leicht nach vorne und stützt Arme auf Nachtisch. Aktiviert die Atemhilfsmuskulatur bei schwerer Atemnot.
• **Trendelenburg-Lagerung:** Ganzer Körper um 15°–30° gekippt, sodass Kopf tiefer als Beine liegt. Indikation: ZVK-Anlage (V. jugularis/subclavia) zur Venenfüllung und Verhinderung von Luftembolien. Cave: Nicht bei Schädel-Hirn-Trauma oder Lungenödem!
• **Autotransfusions- / Schocklagerung (Beintieflagerung vermeiden):** Nur die Beine um 30° anheben, Oberkörper flach. Bringt bis zu 500 ml Blut aus den Beinvenen in den zentralen Kreislauf.`,
            contentAr: `• **رفع الجزء العلوي (وضعية فاولر Fowler 45°-60° أو نصف فاولر 30°):** تريح الحجاب الحاجز وتسهل التنفس، وتقلل العبء على القلب المحتقن، وضرورية للمريض الذي يتغذى عبر أنبوب أنفي معدي لمنع الارتجاع الرئوي.
• **وضعية ضيق التنفس الحاد (Orthopnoe / Kutschersitz):** يجلس المريض بزاوية 90° وينحني للأمام متكئاً بذراعيه على طاولة السرير لاستخدام عضلات التنفس المساعدة (Atemhilfsmuskulatur).
• **وضعية ترندلينبورغ (Trendelenburg):** إمالة السرير كاملاً بحيث ينخفض الرأس دون مستوى القدمين بمقدار 15°-30°. تُستخدم حصراً لتركيب القسطرة المركزية (ZVK) لتمديد الأوردة ومنع الصمة الهوائية. تحذير: ممنوعة تماماً في إصابات الرأس ووذمة الرئة!
• **وضعية الصدمة الحقيقية (Schocklage):** رفع الساقين فقط بزاوية 30° مع بقاء الجذع أفقياً، مما يعيد نحو 500 مل من الدم للقلب والدماغ.`
          }
        ]
      }
    ]
  },
  {
    id: 5,
    number: 5,
    titleDe: 'Mappe 5: Enzyklopädie der Medizinischen Gerätetechnik',
    titleAr: 'المجلد 5: موسوعة الأجهزة والتقنيات الطبية والسريرية',
    descriptionDe: 'Systematischer Aufbau, Funktionsprinzipien, Bedienung, Alarme und Fehlerbehebung von Infusomaten, Perfusoren, EKG, Beatmungsgeräten u.v.m.',
    descriptionAr: 'البنية الهندسية، مبادئ التشغيل، قراءة الشاشات، تفسير الإنذارات، والتنظيف لمضخات التسريب، أجهزة التخطيط والتنفس والغلوكومتر.',
    iconName: 'Cpu',
    chapters: [
      {
        id: 501,
        number: 24,
        volumeId: 5,
        titleDe: 'Kapitel 24: Medizinproduktegesetz (MPG / MPBetreibV) und Gerätepass',
        titleAr: 'الفصل 24: اللائحة القانونية لتشغيل الأجهزة الطبية وجواز تدريب الأجهزة (Gerätepass)',
        summaryDe: 'Rechtliche Grundlagen der Inbetriebnahme, Einweisungspflicht (§10 MPBetreibV), sicherheitstechnische Kontrollen (STK), messtechnische Kontrollen (MTK).',
        summaryAr: 'المسؤولية القانونية في ألمانيا لتشغيل الأجهزة الطبية، إجبارية التدريب المعتمد (§10 MPBetreibV)، والفحوصات الدورية الفنية والمعايرة.',
        readTimeMin: 12,
        keywords: ['MPBetreibV', 'Gerätepass', 'Einweisung', 'STK', 'MTK', 'Medizinprodukte'],
        sections: [
          {
            id: '501-1',
            titleDe: '1. Rechtliche Einweisungspflicht nach MPBetreibV',
            titleAr: '1. إلزامية التدريب الموثق على الأجهزة الطبية في ألمانيا',
            level: 'B2',
            contentDe: `Nach der Medizinprodukte-Betreiberverordnung (MPBetreibV) darf in Deutschland eine Pflegefachkraft ein medizinisches Gerät der Anlage 1 (z.B. Defibrillatoren, Beatmungsgeräte, Infusionspumpen) nur dann eigenverantwortlich anwenden, wenn:
• Sie eine dokumentierte Geräteeinweisung durch eine befugte Person (z.B. Medizinprodukte-Beauftragter oder Hersteller) erhalten hat.
• Diese Einweisung im persönlichen **Gerätepass** oder elektronischen Qualifikationssystem abgestempelt ist.
• Eine Sicht- und Funktionsprüfung vor der Anwendung am Patienten fehlerfrei durchgeführt wurde.`,
            contentAr: `وفقاً لقانون تشغيل الأجهزة الطبية الألماني (MPBetreibV)، يُحظر على الممرض تشغيل أي جهاز طبي مصنف في الفئة 1 (مثل أجهزة الصدمات الكهربائية، أجهزة التنفس الاصطناعي، ومضخات التسريب الوريدي) إلا بعد:
• الحصول على تدريب رسمي موثق وموقع من المسؤول المعتمد للأجهزة (Medizinprodukte-Beauftragter) أو الشركة المصنعة.
• تسجيل هذا التدريب بختم رسمي في دفتر الأجهزة الشخصي للممرض (Gerätepass).
• إجراء الفحص البصري والوظيفي الأولي للجهاز قبل توصيله بالمريض.`
          }
        ]
      }
    ]
  },
  {
    id: 6,
    number: 6,
    titleDe: 'Mappe 6: Notfallmanagement, ABCDE-Schema und Vitalzeichen',
    titleAr: 'المجلد 6: إدارة الطوارئ، التقييم الأولي ABCDE واضطرابات العلامات الحيوية',
    descriptionDe: 'Strukturierte Notfallerfassung nach ABCDE, NEWS2-Score, Reanimation nach ERC-Guidelines, Schockformen und hypertensive Krise.',
    descriptionAr: 'بروتوكول ABCDE في الحالات الحرجة، حاسبة مقياس التحذير المبكر NEWS2، الإنعاش القلبي الرئوي، وأنواع الصدمات والسكتة الدماغية.',
    iconName: 'AlertTriangle',
    chapters: [
      {
        id: 601,
        number: 35,
        volumeId: 6,
        titleDe: 'Kapitel 35: Das strukturierte ABCDE-Schema und NEWS2',
        titleAr: 'الفصل 35: الفحص المنهجي ABCDE ومقياس الإنذار المبكر الوطني NEWS2',
        summaryDe: 'Systematisches Vorgehen: Airway, Breathing, Circulation, Disability, Exposure. Berechnung des NEWS2-Scores und Eskalationsstufen.',
        summaryAr: 'المسح الأولي المنظم للمريض الحرج: مجرى الهواء، التنفس، الدوران، الحالة العصبية، وفحص الجسم مع حساب درجات NEWS2 والتصعيد الطبي.',
        readTimeMin: 18,
        keywords: ['ABCDE', 'NEWS2', 'Notfall', 'Airway', 'Breathing', 'Circulation', 'Disability', 'Exposure'],
        sections: [
          {
            id: '601-1',
            titleDe: '1. Das ABCDE-Untersuchungsschema',
            titleAr: '1. خطوات الفحص السريري العاجل وفق بروتوكول ABCDE',
            level: 'B2',
            contentDe: `Das ABCDE-Schema ist der Goldstandard bei jeder akuten Verschlechterung eines Patienten:
• **A - Airway (Atemweg):** Ist der Atemweg frei und geschützt? Geräusche wie Stridor (Verengung), Schnarchen (Zungengrund), Gurgeln (Sekret/Blut). Maßnahmen: Überstrecken des Kopfes, Esmarch-Handgriff, Absaugen, Guedel-Tubus.
• **B - Breathing (Atmung):** Atemfrequenz (Norm: 12–20/min), Atemtiefe, Symmetrie des Thorax, Zyanose, SpO₂-Messung, Auskultation. Maßnahmen: Sauerstoffgabe über Reservoirmaske (10–15 l/min bei Schock), aufrechte Oberkörperlagerung.
• **C - Circulation (Kreislauf):** Pulsfrequenz und Rhythmus, Blutdruck (RR), Rekapillarisierungszeit (Rekap-Zeit normal < 2s am Fingernagel), Hautkolorit, Temperatur der Extremitäten. Maßnahmen: Venöser Zugang, Volumentherapie, Schocklage (wenn keine Kontraindikation).
• **D - Disability (Neurologischer Status):** Bewusstseinslage (AVPU oder GCS), Pupillengröße und Lichtreaktion, Blutzuckermessung (immer Hypoglykämie ausschließen!), FAST-Test bei V.a. Schlaganfall.
• **E - Exposure (Entkleiden & Umwelt):** Ganzkörperinspektion auf Wunden, Blutungen, Hautausschlag, Ödeme, Körpertemperatur messen (Hypothermie vermeiden -> Wärmedecke).`,
            contentAr: `بروتوكول ABCDE هو المعيار الذهبي للتعامل مع أي تدهور حاد في صحة المريض:
• **A - Airway (مجرى التنفس):** هل مجرى الهواء سالك ومحمي؟ هل يوجد صرير (Stridor) أو شخير أو غرغرة بسوائل؟ الإجراء: إمالة الرأس، مناورة إسمارش، شفط الإفرازات ووضع أنبوب غيدل (Guedel-Tubus).
• **B - Breathing (التنفس والرئتان):** فحص معدل التنفس (الطبيعي 12-20 نفس/دقيقة)، عمق التنفس، تناظر حركة الصدر، قياس الأكسجين SpO2. الإجراء: إعطاء الأكسجين بقناع خزان (10-15 لتر/د) في الحالات الحرجة، ورفع ظهر السرير.
• **C - Circulation (الدورة الدموية والقلب):** النبض، ضغط الدم، زمن عودة امتلاء الشعيرات الدموية (Rekap-Zeit طبيعي أقل من ثانيتين)، دفء الأطراف. الإجراء: فتح خط وريدي فوري، بدء المحاليل، وإبلاغ الطبيب.
• **D - Disability (الحالة العصبية والسكر):** مستوى الوعي (مقياس غلاسكو GCS أو AVPU)، حجم حدقتي العين وتفاعلهما للضوء، وقياس سكر الدم الفوري لاستبعاد هبوط السكر (Hypoglykämie)!
• **E - Exposure (الفحص الخارجي الشامل):** كشف الجسم للبحث عن نزيف أو طفح جلدي أو كسور، قياس الحرارة وحماية المريض من فقدان الحرارة عبر الغطاء الحراري.`
          }
        ]
      }
    ]
  },
  {
    id: 7,
    number: 7,
    titleDe: 'Mappe 7: Wundversorgung, Dekubitusprophylaxe und Kathetermanagement',
    titleAr: 'المجلد 7: العناية بالجروح وقرح الضغط والقساطر الوريدية والبولية',
    descriptionDe: 'Aseptischer Verbandwechsel, Phasen der Wundheilung, TIME-Prinzip, Dekubitus-Stadien (EPUAP), ZVK-Pflege und transurethraler Katheter.',
    descriptionAr: 'تبديل الضمادات المعقمة، مراحل التئام الجروح، درجات قرح الضغط، العناية بالقسطرة البولية والقسطرة الوريدية المركزية ZVK.',
    iconName: 'Bandage',
    chapters: [
      {
        id: 701,
        number: 40,
        volumeId: 7,
        titleDe: 'Kapitel 40: Moderne Wundversorgung und aseptische Verbandwechsel',
        titleAr: 'الفصل 40: الإدارة الحديثة للجروح والتقنيات المعقمة في تغيير الضمادات',
        summaryDe: 'Unterscheidung zwischen akuten und chronischen Wunden, Wundphasen (Exsudation, Granulation, Epithelisierung) und der Non-Touch-Technik.',
        summaryAr: 'الفرق بين الجروح الحادة والمزمنة، أطوار التئام الجروح، واستراتيجية عدم اللمس المباشر (Non-Touch-Technik).',
        readTimeMin: 15,
        keywords: ['Wunde', 'Aseptik', 'Verbandwechsel', 'Granulation', 'Epithelisierung', 'Dekubitus'],
        sections: [
          {
            id: '701-1',
            titleDe: '1. Aseptische Prinzipien und Non-Touch-Technik',
            titleAr: '1. مبادئ التعقيم وتقنية عدم اللمس أثناء الغيار',
            level: 'B2',
            contentDe: `Beim Verbandwechsel gelten strenge hygienische Standards:
• **Vorbereitung:** Arbeitsfläche desinfizieren, unsterile Handschuhe zum Entfernen des alten Verbandes tragen.
• **Wundinspektion:** Beurteilung nach U-R-G-E (Umgebung, Rand, Grund, Exsudat) sowie Geruch und Schmerz.
• **Reinigung & Desinfektion:** Sterile Wundspüllösung (NaCl 0,9% oder Ringer, bzw. Polihexanid/Octenidin bei Infektionsverdacht). Wischrichtung: Von innen nach außen bei aseptischen Wunden; von außen nach innen bei septischen Wunden.
• **Applikation:** Non-Touch-Technik unter Verwendung steriler Pinzetten oder steriler Handschuhe.`,
            contentAr: `قواعد التعقيم الصارمة عند تغيير ضمادات الجروح:
• **التحضير:** تطهير سطح العمل، ارتداء قفازات غير معقمة لنزع الضماد القديم الملوث.
• **فحص الجرح:** تقييم أربعة عناصر: محيط الجرح، الحواف، قاعدة الجرح، والإفرازات، بالإضافة للرائحة والألم.
• **التطهير والتنظيف:** استخدام محاليل شطف معقمة (محلول ملحي أو رينغر، أو مطهرات أنسجة مخصصة كالبوليهكسانيد عند الاشتباه بالعدوى). اتجاه المسح: من الداخل للخارج في الجروح المعقمة النظيفة؛ ومن المحيط نحو المركز في الجروح الملوثة لمنع نشر العدوى.
• **وضع الضماد:** تطبيق تقنية عدم اللمس (Non-Touch-Technik) باستخدام ملقط معقم أو قفازات جراحية معقمة.`
          }
        ]
      }
    ]
  },
  {
    id: 8,
    number: 8,
    titleDe: 'Mappe 8: Deutsche Fachsprache, Übergabe und Pflegedokumentation',
    titleAr: 'المجلد 8: لغة المستشفى الألمانية، تسليم المناوبة والتوثيق التمريضي',
    descriptionDe: 'Strukturierte Schichtübergabe nach SBAR, Arztkommunikation, B1/B2 Sprachregister, KIS-Dokumentation und Notizen.',
    descriptionAr: 'تسليم المناوبة التمريضية بنموذج SBAR، التواصل مع الأطباء والمشرفين، التمييز بين لغة الشارع والمصطلحات، ونماذج التوثيق السريري.',
    iconName: 'MessageSquare',
    chapters: [
      {
        id: 801,
        number: 43,
        volumeId: 8,
        titleDe: 'Kapitel 43: Die strukturierte Übergabe nach dem SBAR-Konzept',
        titleAr: 'الفصل 43: تسليم المناوبة التمريضية المحترفة بنموذج SBAR',
        summaryDe: 'Situation, Background, Assessment, Recommendation. Standardisierte Kommunikation zur Vermeidung von Informationsverlusten.',
        summaryAr: 'الحالة الحالية، الخلفية المرضية، التقييم السريري، والتوصيات المقترحة لنقل صورة دقيقة دون إضاعة الوقت.',
        readTimeMin: 14,
        keywords: ['SBAR', 'Übergabe', 'Kommunikation', 'Schichtwechsel', 'Arztgespräch'],
        sections: [
          {
            id: '801-1',
            titleDe: '1. Das SBAR-Kommunikationsmodell',
            titleAr: '1. أركان نموذج SBAR للتواصل الطبي الدقيق',
            level: 'B2',
            contentDe: `Das SBAR-Modell verhindert lebensgefährliche Informationsverluste:
• **S - Situation:** Wer sind Sie, von welcher Station rufen Sie an, um welchen Patienten geht es (Name, Zimmer, Alter) und was ist das aktuelle akute Problem?
• **B - Background (Hintergrund):** Aufnahmediagnose, relevante Vorerkrankungen, bisherige Therapien und OP-Datum.
• **A - Assessment (Beurteilung):** Aktuelle Vitalparameter (RR, HF, SpO₂, BZ, Schmerz), eigener klinischer Eindruck des Patienten.
• **R - Recommendation (Empfehlung):** Was schlagen Sie vor? "Ich benötige sofort eine ärztliche Visite", "Sollen wir ein 12-Kanal-EKG schreiben oder Labor abnehmen?"`,
            contentAr: `نموذج SBAR يمنع ضياع المعلومات الحرجة بين المناوبات وعند الاتصال بالطبيب:
• **S - Situation (الموقف الحالي):** من أنت، من أي قسم تتصل، من هو المريض (الاسم، الغرفة، العمر) وما هي الشكوى الحادة الآن؟
• **B - Background (خلفية المريض):** سبب التنويم الأصلي، الأمراض المزمنة، العمليات السابقة والأدوية الحالية.
• **A - Assessment (التقييم السريري):** العلامات الحيوية الحالية (الضغط، النبض، الأكسجين، السكر، الألم) وتقييمك الشخصي لحالة المريض.
• **R - Recommendation (التوصية والطلب):** ماذا تطلب تحديداً؟ "أحتاج إلى حضور الطبيب لمعاينة المريض فوراً"، "هل نبدأ تخطيط قلب 12 اشتقاق أو نسحب عينات دم طارئة؟"`
          }
        ]
      }
    ]
  },
  {
    id: 9,
    number: 9,
    titleDe: 'Mappe 9: Ausbildung, Prüfungen und Arbeitsalltag in Deutschland',
    titleAr: 'المجلد 9: مسار التكوين المهني في ألمانيا، الاختبارات وبيئة العمل',
    descriptionDe: 'Aufbau der generalistischen Pflegeausbildung, Zwischenprüfung, mündliches, schriftliches und praktisches Staatsexamen, Praxisanleiter.',
    descriptionAr: 'هيكل التدريب التمريضي الشامل في ألمانيا، اختبارات منتصف المرحلة، الامتحان الحكومي (Staatsexamen)، ودور المرشد الميداني Praxisanleiter.',
    iconName: 'GraduationCap',
    chapters: [
      {
        id: 901,
        number: 45,
        volumeId: 9,
        titleDe: 'Kapitel 45: Das Staatsexamen und die 5 Kompetenzbereiche',
        titleAr: 'الفصل 45: الامتحان الحكومي ومجالات الكفاءة التمريضية الخمسة',
        summaryDe: 'Schriftlicher, mündlicher und praktischer Prüfungsteil nach der Pflegeberufe-Ausbildungs- und -Prüfungsverordnung (PflAPrV).',
        summaryAr: 'الأجزاء الثلاثة للامتحان النهائي: التحريري والشفهي والعملي على سرير المريض وفق اللائحة الرسمية PflAPrV.',
        readTimeMin: 12,
        keywords: ['Staatsexamen', 'Ausbildung', 'PflAPrV', 'Praxisanleitung', 'Praktische Prüfung'],
        sections: [
          {
            id: '901-1',
            titleDe: '1. Die 3 Säulen des Staatsexamens',
            titleAr: '1. المحاور الثلاثة للامتحان الحكومي النهائي (Staatsexamen)',
            level: 'B2',
            contentDe: `Das Staatsexamen am Ende des 3. Ausbildungsjahres umfasst:
1. **Schriftlicher Teil:** Drei Klausuren zu je 120 Minuten über Pflegeprozessplanung, Kommunikation, Ethik und Recht.
2. **Mündlicher Teil:** Drei mündliche Prüfungen zu je 15–30 Minuten zu fallbezogenen komplexen Pflegesituationen.
3. **Praktischer Teil:** Durchführung einer umfassenden Pflege an echten Patienten über mehrere Stunden inklusive Pflegeplanung, Vorbereitung, Durchführung, Übergabe und Reflexionsgespräch.`,
            contentAr: `الامتحان الحكومي النهائي في ختام السنة الثالثة يتكون من 3 أقسام رئيسية:
1. **الامتحان التحريري (Schriftlich):** 3 اختبارات مدة كل منها 120 دقيقة تغطي التخطيط التمريضي، والعلوم الطبية، والتواصل والأخلاقيات والقوانين.
2. **الامتحان الشفهي (Mündlich):** 3 مقابلات شفهية مدة كل منها 15-30 دقيقة لمناقشة حالات مرضية معقدة أمام لجنة فاحصة.
3. **الامتحان العملي (Praktisch):** رعاية تمريضية كاملة لمرضى حقيقيين داخل المستشفى تشمل التخطيط والتحضير والتنفيذ وتسليم المناوبة ومناقشة تفنيدية مع الفاحصين.`
          }
        ]
      }
    ]
  },
  {
    id: 10,
    number: 10,
    titleDe: 'Mappe 10: Medizinisches Fachwörterbuch und klinische Verben',
    titleAr: 'المجلد 10: القاموس الطبي المتخصص، الأفعال السريرية والاختصارات',
    descriptionDe: 'Alphabetisches Glossar, griechisch-lateinische Wortstämme, Vorsilben, Nachsilben und Konjugation pflegerischer Fachverben.',
    descriptionAr: 'معجم ألفبائي للألفاظ الطبية، البادئات واللواحق اللاتينية واليونانية، وتصريف أهم الأفعال اليومية في التمريض.',
    iconName: 'BookOpen',
    chapters: [
      {
        id: 1001,
        number: 47,
        volumeId: 10,
        titleDe: 'Kapitel 47: Griechisch-lateinische Wortstämme und Baukastenprinzip',
        titleAr: 'الفصل 47: الجذور واللواحق الطبية اللاتينية واليونانية وطريقة تركيب الكلمات',
        summaryDe: 'Präfixe (Hyper-, Hypo-, Tachy-, Brady-), Suffixe (-itis, -ektomie, -skopie, -algie) und Organbezeichnungen.',
        summaryAr: 'فهم سر المصطلحات الطبية عبر البادئات (Hyper-, Hypo-) واللواحق (-itis للالتهاب، -ektomie للاستئصال) ومسميات الأعضاء.',
        readTimeMin: 14,
        keywords: ['Terminologie', 'Präfix', 'Suffix', 'Wortstamm', 'Latein', 'Griechisch'],
        sections: [
          {
            id: '1001-1',
            titleDe: '1. Das morphologische Baukastenprinzip der Medizin',
            titleAr: '1. قواعد تركيب المصطلحات الطبية المتخصصة',
            level: 'B1',
            contentDe: `Medizinische Fachausdrücke setzen sich logisch zusammen:
• **Präfixe:** Hyper- (übermäßig / hoch), Hypo- (vermindert / tief), Tachy- (schnell), Brady- (langsam), Dys- (gestört / schmerzhaft), Poly- (viel), Oligo- (wenig).
• **Stämme:** Kard- (Herz), Gastr- (Magen), Hepat- (Leber), Nephr- (Niere), Pulm- (Lunge), Enzephal- (Gehirn), Hämat- (Blut).
• **Suffixe:** -itis (Entzündung, z.B. Gastritis), -ektomie (operative Entfernung, z.B. Appendektomie), -tomie (operativer Einschnitt, z.B. Tracheotomie), -skopie (Spiegelung, z.B. Gastroskopie), -algie (Schmerz, z.B. Neuralgie).`,
            contentAr: `تتكون المصطلحات الطبية بطريقة تركيبية رياضية واضحة:
• **البادئات (Präfixe):** Hyper- (فوق/مرتفع)، Hypo- (تحت/منخفض)، Tachy- (سريع)، Brady- (بطيء)، Dys- (عسر/اضطراب)، Poly- (متعدد)، Oligo- (شحيح).
• **جذور الأعضاء (Stämme):** Kard- (قلب)، Gastr- (معدة)، Hepat- (كبد)، Nephr- (كلى)، Pulm- (رئة)، Enzephal- (دماغ)، Hämat- (دم).
• **اللواحق (Suffixe):** -itis (التهاب مثل Gastritis التهاب المعدة)، -ektomie (استئصال جراحي مثل Appendektomie استئصال الزائدة)، -tomie (شق جراحي)، -skopie (تنظير)، -algie (ألم مثل Neuralgie ألم عصبي).`
          }
        ]
      }
    ]
  },
  {
    id: 11,
    number: 11,
    titleDe: 'Mappe 11: Praxistraining, Checklisten und Simulationsfälle',
    titleAr: 'المجلد 11: التدريب السريري، قوائم التحقق والمحاكاة التفاعلية',
    descriptionDe: '50 realitätsnahe Notfall- und Pflegefälle, Schritt-für-Schritt-Entscheidungsbäume und interaktives Multiple-Choice-Examen.',
    descriptionAr: 'أكثر من 50 سيناريو وحالة سريرية تفاعلية، أشجار اتخاذ القرار عند تدهور العلامات الحيوية، وأسئلة امتحانات تجريبية.',
    iconName: 'ClipboardCheck',
    chapters: [
      {
        id: 1101,
        number: 51,
        volumeId: 11,
        titleDe: 'Kapitel 51: Standardisierte Checklisten für klinische Fertigkeiten',
        titleAr: 'الفصل 51: قوائم التحقق المعيارية للمهارات السريرية الأساسية',
        summaryDe: 'Blutdruckmessung, Blutzuckermessung, Legen einer peripheren Venenverweilkanüle, Richten von Infusionen.',
        summaryAr: 'خطوات قياس الضغط اليدوي، وخز السكر، تركيب القسطرة الوريدية الطرفية، وتحضير محاليل التسريب دون تلوث.',
        readTimeMin: 14,
        keywords: ['Checkliste', 'Fertigkeiten', 'Blutdruck', 'Blutzucker', 'PVK', 'Infusion'],
        sections: [
          {
            id: '1101-1',
            titleDe: '1. Checkliste: Korrekte manuelle Blutdruckmessung (RR)',
            titleAr: '1. قائمة التحقق لخطوات القياس اليدوي الدقيق لضغط الدم (RR)',
            level: 'B1',
            contentDe: `1. Patient 5 Minuten in Ruhe sitzen lassen (keine körperliche Anstrengung, kein Nikotin kurz zuvor).
2. Arm bequem auf Herzhöhe lagern, Kleidung beengungsfrei entfernen.
3. Passende Manschettengröße wählen (Breite ca. 40% des Armumfangs).
4. Manschette 2–3 cm oberhalb der Ellenbeuge straff anlegen, Markierung auf die A. brachialis ausrichten.
5. Stethoskop-Membran spannungsfrei auf die palpierte A. brachialis aufsetzen.
6. Rasches Aufpumpen bis ca. 30 mmHg über das Verschwinden des Radialispulses.
7. Langsames Ablassen mit 2–3 mmHg pro Sekunde.
8. 1. Korotkow-Geräusch = Systolischer Wert.
9. Verschwinden der Geräusche = Diastolischer Wert.`,
            contentAr: `1. جعل المريض يستريح بهدوء لمدة 5 دقائق (تجنب الإجهاد والتدخين قبل القياس).
2. إسناد الذراع باسترخاء على مستوى القلب وإزالة الملابس الضاغطة.
3. اختيار حجم الكفة المناسب لمحيط الذراع (عرض الكفة يغطي نحو 40% من محيط العضد).
4. لف الكفة بإحكام على بعد 2-3 سم فوق ثنية المرفق مع توجيه علامة السهم نحو الشريان العضدي.
5. وضع غشاء السماعة الطبية بلطف فوق نبض الشريان العضدي المحسوس.
6. نفخ الكفة بسرعة حتى 30 ملم زئبق فوق نقطة اختفاء نبض الشريان الكعبري.
7. تفريغ الهواء بهدوء بمعدل 2 إلى 3 ملم زئبق في الثانية.
8. ظهور صوت كورتكوف الأول = الضغط الانقباضي (Systole).
9. اختفاء الأصوات تماماً = الضغط الانبساطي (Diastole).`
          }
        ]
      }
    ]
  },
  {
    id: 12,
    number: 12,
    titleDe: 'Mappe 12: Wissenschaftliche Leitlinien und Gesamtregister',
    titleAr: 'المجلد 12: الأدلة الإرشادية الطبية المعتمدة والفهرس الشامل',
    descriptionDe: 'Aktuelle Leitlinien von RKI, DGK, DIVI, ERC und AWMF, Evidenzgrade in der Pflege und systematisches Stichwortverzeichnis.',
    descriptionAr: 'إرشادات معهد روبرت كوخ (RKI)، الجمعية الألمانية لأمراض القلب، مجلس الإنعاش الأوروبي ERC، ومستويات الدليل العلمي والفهرس العام.',
    iconName: 'FileText',
    chapters: [
      {
        id: 1201,
        number: 54,
        volumeId: 12,
        titleDe: 'Kapitel 54: Relevante medizinische Fachgesellschaften und Leitlinien',
        titleAr: 'الفصل 54: الجمعيات الطبية الرسمية ومصادر الأدلة السريرية في ألمانيا',
        summaryDe: 'Robert Koch-Institut (RKI) für Infektionsschutz, AWMF S3-Leitlinien, ERC für Reanimation, DGK für Kardiologie.',
        summaryAr: 'معهد روبرت كوخ لمكافحة العدوى، إرشادات جمعية AWMF، معايير الإنعاش الأوروبية، والجمعية الألمانية لأمراض القلب.',
        readTimeMin: 10,
        keywords: ['RKI', 'AWMF', 'Leitlinien', 'ERC', 'DGK', 'Evidenz'],
        sections: [
          {
            id: '1201-1',
            titleDe: '1. Evidenzbasierte Referenzen für Pflegekräfte',
            titleAr: '1. المراجع المعتمدة لممارسة التمريض القائم على الدليل',
            level: 'B2',
            contentDe: `In der deutschen Pflegepraxis sind folgende Referenzen verbindlich:
• **Robert Koch-Institut (RKI / KRINKO):** Nationale Richtlinien für Krankenhaushygiene und Infektionsprävention (z.B. Händehygiene, Isolierung von MRSA/VRE).
• **AWMF (Arbeitsgemeinschaft der Wissenschaftlichen Medizinischen Fachgesellschaften):** Publikation von S1- bis S3-Leitlinien (z.B. S3-Leitlinie Dekubitusprophylaxe, S3-Leitlinie Schmerztherapie).
• **ERC (European Resuscitation Council):** Verbindliche Leitlinien für BLS (Basic Life Support) und ALS (Advanced Life Support).
• **Deutsches Netzwerk für Qualitätsentwicklung in der Pflege (DNQP):** Nationale Expertenstandards (Dekubitus, Schmerz, Sturz, Kontinenz, Wundversorgung, Ernährungsmanagement).`,
            contentAr: `في الممارسة التمريضية الألمانية، تعد الهيئات والمراجع التالية حجر الأساس الملزم:
• **معهد روبرت كوخ (RKI / KRINKO):** الإرشادات الوطنية لنظافة المشافي ومكافحة العدوى وعزل البكتيريا المقاومة للمضادات الحيوية (MRSA/VRE).
• **اتحاد الجمعيات الطبية الألمانية (AWMF):** يصدر الأدلة الإرشادية العلاجية من المستوى S1 حتى أعلى مستوى علمي موثق S3.
• **مجلس الإنعاش الأوروبي (ERC):** المعايير المعتمدة دولياً لإنعاش القلب والرئتين الأساسي والمتقدم.
• **الشبكة الألمانية لتطوير الجودة التمريضية (DNQP):** المعايير الوطنية للخبراء (Expertenstandards) للوقاية من قرح الضغط، السقوط، الألم، سوء التغذية، وسلس البول.`
          }
        ]
      }
    ]
  }
];
