import { MedicalDevice } from '../types';

export const MEDICAL_DEVICES_DATA: MedicalDevice[] = [
  {
    id: 'infusomat',
    nameDe: 'Volumetrische Infusionspumpe (Infusomat® Space)',
    nameAr: 'مضخة التسريب الحجمية الوريدية (إنفوسومات)',
    nameEn: 'Volumetric Infusion Pump',
    category: 'infusion',
    shortDescDe: 'Präzise Verabreichung von intravenösen Infusionslösungen über peristaltische Förderfinger.',
    shortDescAr: 'جهاز التحكم الدقيق في تدفق المحاليل الوريدية والسوائل العلاجية بمعدل محدد (مل/ساعة).',
    physicalPrincipleDe: 'Lineare peristaltische Pumpmechanik: Exzentergesteuerte Finger komprimieren das Infusionsschlauchsegment sequentiell und transportieren ein definiertes Volumen pro Zeiteinheit.',
    physicalPrincipleAr: 'آلية العصر التمعجي المتسلسل: تقوم أصابع ميكانيكية بضغط أنبوب التسريب بالتتابع لدفع حجم محدد من السائل في زمن دقيق.',
    recommendedIntervals: 'Sicherheitstechnische Kontrolle (STK) alle 24 Monate nach MPBetreibV.',
    hotspots: [
      {
        id: 'door_latch',
        nameDe: 'Türverschluss & Pumpenklappe',
        nameAr: 'مقبض الباب وغطاء حجرة الضخ',
        x: 48,
        y: 18,
        functionDe: 'Verriegelt die Druckkammer und positioniert das Infusionsset exakt über den Peristaltikfingern.',
        functionAr: 'يحكم إغلاق الحجرة ويضبط استقرار أنبوب المحلول أمام أصابع الضخ الميكانيكية بدقة.',
        clinicalRiskDe: 'Unvollständige Verriegelung führt zu Free-Flow (unkontrolliertem Einlaufen der Infusion).',
        clinicalRiskAr: 'عدم الإغلاق المحكم قد يسبب تدفقاً حراً غير منضبط للسائل إلى وريد المريض (خطر الحمل الزائد).'
      },
      {
        id: 'air_detector',
        nameDe: 'Ultraschall-Luftdetektor',
        nameAr: 'مستشعر كشف الهواء بالموجات فوق الصوتية',
        x: 72,
        y: 65,
        functionDe: 'Erkennt Luftblasen im Schlauchsystem ab einer Größe von typischerweise 0,01 ml mittels Ultraschallsignal.',
        functionAr: 'يرصد أي فقاعات هواء في مجرى الأنبوب بدقة متناهية تبدأ من 0.01 مل بالموجات الصوتية.',
        clinicalRiskDe: 'Verhindert lebensbedrohliche Luftembolien im venösen Kreislauf.',
        clinicalRiskAr: 'يمنع حدوث انصمام هوائي قاتل (Luftembolie) في الدورة الدموية للمريض.',
        alarmConditionDe: 'Alarm: "Luft in der Leitung" -> Sofort stoppen, Schlauch entlüften.',
        alarmConditionAr: 'إنذار: "هواء في الأنبوب" -> إيقاف فوري وفصل الخط وتفريغ الهواء.'
      },
      {
        id: 'pressure_sensor',
        nameDe: 'Drucksensor & Okklusionserkennung',
        nameAr: 'مستشعر الضغط وكشف الانسداد (Okklusion)',
        x: 30,
        y: 65,
        functionDe: 'Misst den Leitungsdruck patientenseitig und geräteseitig (Druckstufen meist 1 bis 9 einstellbar).',
        functionAr: 'يقيس الضغط الداخلي للأنبوب باتجاه الوريد ويكشف أي مقاومة أو انسداد في المسار.',
        clinicalRiskDe: 'Erkennt geknickte Schläuche, Verschluss des Hahnenbanks oder paravasale Lage der Kanüle.',
        clinicalRiskAr: 'يرصد انثناء الأنبوب، إغلاق المحابس، أو تسرب المحلول تحت الجلد (بارافازات).',
        alarmConditionDe: 'Alarm: "Druck oben / unten" (Verschluss / Okklusion).',
        alarmConditionAr: 'إنذار: "ارتفاع الضغط / انسداد المسار".'
      },
      {
        id: 'screen_display',
        nameDe: 'Farbdisplay & Parametermonitor',
        nameAr: 'شاشة العرض وضبط المعايير',
        x: 50,
        y: 42,
        functionDe: 'Zeigt Förderrate in ml/h, Vorwahlvolumen (VTBI) und Restlaufzeit an.',
        functionAr: 'تعرض سرعة التسريب الحالية (مل/ساعة)، الحجم الكلي المتبقي، والوقت المتبقي لانتهاء الكيس.',
        clinicalRiskDe: 'Fehleingabe des Kommas (z.B. 100 statt 10 ml/h) führt zu akuter Überdosierung.',
        clinicalRiskAr: 'خطأ إدخال الفاصلة العشرية (مثل 100 بدلاً من 10 مل/س) يسبب تسمماً دوائياً حاداً.'
      },
      {
        id: 'battery_pack',
        nameDe: 'Akkumodul & Netzsteckeranschluss',
        nameAr: 'البطارية الداخلية ومنفذ التيار الكهربائي',
        x: 88,
        y: 35,
        functionDe: 'Ermöglicht netzunabhängigen Transport des Patienten (Akkulaufzeit ca. 4–6 Stunden bei 100 ml/h).',
        functionAr: 'تسمح بنقل المريض بين الأقسام دون انقطاع التسريب (تعمل 4-6 ساعات متواصلة).',
        clinicalRiskDe: 'Bei unzureichend geladenem Akku stoppt die Infusion während des Transports unbemerkt.',
        clinicalRiskAr: 'نفاد شحن البطارية أثناء النقل يوقف الدواء الحرج فجأة دون انتباه.'
      }
    ],
    alarms: [
      {
        code: 'ERR_OCCLUSION',
        labelDe: 'Okklusion patientenseitig (Druck hoch)',
        labelAr: 'انسداد في مسار المريض (ارتفاع الضغط)',
        causeDe: 'Geknickter Infusionsschlauch, geschlossene Klemme, paravasale Kanüle, Thrombus in der PVK.',
        causeAr: 'انثناء أنبوب التسريب، محبس مغلق، خروج القسطرة من الوريد للنسيج، أو تجلط دموي في الكانيولا.',
        immediateActionDe: 'Pumpe pausieren, Schlauchverlauf und Punktionsstelle prüfen, Venenverweilkanüle auf Durchgängigkeit aspirieren (niemals mit Druck spülen!).',
        immediateActionAr: 'إيقاف مؤقت، فحص موضع الكانيولا وانثناء الأنبوب، فحص سالكية الوريد بالسحب الراجع (يمنع الضغط بقوة!).',
        priority: 'high'
      },
      {
        code: 'ERR_AIR_IN_LINE',
        labelDe: 'Luft in der Leitung (Air-in-Line)',
        labelAr: 'رصد فقاعات هواء داخل الأنبوب',
        causeDe: 'Infusionsbeutel leer gelaufen, unzureichend entlüftetes Schlauchset, Mikrobläschenbildung.',
        causeAr: 'فراغ كيس المحلول، عدم تفريغ الهواء جيداً عند بدء الخط، أو تشكل فقاعات دقيقة.',
        immediateActionDe: 'Infusionsleitung am Patienten abstöpseln, Leitung manuell oder über Pumpenfunktion blasenfrei entlüften, erst dann wieder anschließen.',
        immediateActionAr: 'فصل الخط عن قسطرة المريض فوراً، تفريغ الفقاعات خارجياً حتى خروج السائل ناصعاً، ثم إعادة التوصيل.',
        priority: 'critical'
      },
      {
        code: 'ERR_DOOR_OPEN',
        labelDe: 'Pumpentür geöffnet / Verriegelung gelöst',
        labelAr: 'باب المضخة مفتوح أو غير محكم',
        causeDe: 'Unbeabsichtigtes Öffnen des Hebels während des Betriebs.',
        causeAr: 'فتح مقبض الباب بالخطأ أثناء عمل المضخة.',
        immediateActionDe: 'Klemme am Schlauch schließen (Free-Flow-Schutz prüfen!), Tür korrekt schließen und verriegeln, Start drücken.',
        immediateActionAr: 'إغلاق مشبك الأنبوب فوراً منعاً للتدفق الحر، إغلاق الباب بإحكام، والضغط على زر الاستئناف.',
        priority: 'high'
      }
    ],
    cleaningProtocolsDe: [
      'Wischdesinfektion ausschließlich im ausgeschalteten Zustand mit zugelassenen Flächendesinfektionsmitteln (z.B. quartäre Ammoniumverbindungen oder Glucoprotamin).',
      'Niemals Flüssigkeit in die Ultraschall-Sensorkammer oder Netzbuchse gelangen lassen.',
      'Keine alkoholhaltigen Sprühdesinfektionen verwenden (Gefahr von Spannungsrissen im Polycarbonat-Gehäuse).'
    ],
    cleaningProtocolsAr: [
      'التطهير بالمسح فقط والجهاز مطفأ ومفصول عن الكهرباء باستخدام مطهرات أسطح معتمدة طبياً.',
      'يُمنع منعاً باتاً دخول السوائل إلى حجرة مستشعر الموجات فوق الصوتية أو مآخذ الكهرباء.',
      'تجنب الرش المباشر للكحول لتفادي تشقق الغلاف البلاستيكي وتعطيل الحساسات.'
    ],
    safetyGuidelinesDe: [
      'Immer die 6-R-Regel beim Richten der Infusion anwenden.',
      'Spezielle Infusionsleitungen (z.B. Infusomat Space Lines) mit integrierter Anti-Free-Flow-Klemme verwenden.',
      'Bei hochviskosen oder lichtempfindlichen Medikamenten (z.B. Nitroprussid, Furosemid) lichtgeschützte Spezialleitungen (orange/schwarz) einsetzen.'
    ],
    safetyGuidelinesAr: [
      'تطبيق قاعدة التحقق السداسية (6-R-Regel) قبل توصيل أي محلول.',
      'استخدام أنابيب التسريب الأصلية المعتمدة المزودة بمشبك الحماية من التدفق الحر.',
      'للأدوية الحساسة للضوء (كالنيتروبروسيد والفيوروسيميد) استخدام أنابيب مظللة خاصة برتقالية أو سوداء.'
    ],
    germanPhrases: [
      {
        de: 'Die Infusionspumpe schlägt Alarm wegen Luft in der Leitung.',
        ar: 'مضخة التسريب تطلق إنذاراً لوجود هواء في الأنبوب.',
        context: 'Übergabe / Alarmmeldung an Kollegen'
      },
      {
        de: 'Bitte hängen Sie 500 ml Ringer-Lösung mit einer Laufrate von 125 ml/h an.',
        ar: 'يرجى تعليق 500 مل من محلول رينغر بمعدل تدفق 125 مل/ساعة.',
        context: 'Ärztliche Anordnung'
      }
    ]
  },
  {
    id: 'perfusor',
    nameDe: 'Spritzenpumpe / Perfusor®',
    nameAr: 'مضخة الحقن بالسرنجة (بيرفيوزور)',
    nameEn: 'Syringe Driver / Syringe Pump',
    category: 'infusion',
    shortDescDe: 'Hochpräzise kontinuierliche Mikro-Verabreichung hochwirksamer Medikamente (z.B. Katecholamine, Sedativa, Insulin).',
    shortDescAr: 'جهاز الحقن الدقيق المستمر للأدوية عالية الخطورة بجرعات مجهرية بالغة الدقة (مثل النورادرينالين والإنسولين).',
    physicalPrincipleDe: 'Schrittmotorgetriebene Gewindespindel: Ein hochpräziser Motor schiebt den Kolben einer kalibrierten Spritze (10, 20 oder 50 ml) mit kontrolliertem Vorschub nach vorne.',
    physicalPrincipleAr: 'محرك خطوي دقيق يدفع مكبس السرنجة المعايرة (10، 20 أو 50 مل) بمسافات ميكرومترية لضمان ثبات تركيز الدواء في بلازما الدم.',
    recommendedIntervals: 'STK alle 24 Monate; Kalibrierung des Drucksensors bei jedem Service.',
    hotspots: [
      {
        id: 'syringe_clamp',
        nameDe: 'Spritzenflügel-Arretierung & Sensor',
        nameAr: 'مشبك تثبيت أجنحة السرنجة ومستشعر الحجم',
        x: 35,
        y: 40,
        functionDe: 'Erkennt automatisch die Größe und den Hersteller der eingesetzten 50-ml-Spritze über Potentiometer-Messung.',
        functionAr: 'يتعرف آلياً على حجم وماركة السرنجة (10، 20، 50 مل) بمستشعر إلكتروني.',
        clinicalRiskDe: 'Falsch erkannte Spritze führt zu gravierenden Dosierungsfehlern (z.B. 50-ml-Profil bei 20-ml-Spritze = mehrfache Überdosierung!).',
        clinicalRiskAr: 'التعرف الخاطئ على حجم السرنجة يؤدي إلى كارثة دوائية بضخ أضعاف الجرعة المقررة!'
      },
      {
        id: 'drive_head',
        nameDe: 'Vorschub-Kopf & Ausrückhebel',
        nameAr: 'رأس الدفع الميكانيكي ومقبض التحرير السريع',
        x: 78,
        y: 40,
        functionDe: 'Greift den Kolbenboden der Spritze formschlüssig und schiebt ihn mit kontinuierlicher Vorschubgeschwindigkeit voran.',
        functionAr: 'يمسك بقاعدة مكبس السرنجة بإحكام ويدفعه ببطء متناهٍ وفق السرعة المبرمجة.',
        clinicalRiskDe: 'Nicht eingerasteter Kolben kann beim Hochlagern der Spritze unbemerkt nachrutschen (Bolusgefahr).',
        clinicalRiskAr: 'عدم تعشيق مكبس السرنجة جيداً قد يؤدي إلى انزلاقه بالجاذبية وإعطاء جرعة بلعمة غير مقصودة.'
      },
      {
        id: 'bolus_button',
        nameDe: 'Bolus-Taste & Notfallgabe',
        nameAr: 'زر الجرعة الدافعة السريعة (بولس Bolus)',
        x: 48,
        y: 65,
        functionDe: 'Ermöglicht die kurzzeitige Applikation eines definierten Zusatzvolumens auf Knopfdruck.',
        functionAr: 'يتيح إعطاء جرعة إضافية سريعة ومحددة مسبقاً عند الحاجة السريرية الطارئة.',
        clinicalRiskDe: 'Versehentliches Auslösen bei hochpotenten Vasopressoren (z.B. Arterenol) verursacht hypertensive Krise.',
        clinicalRiskAr: 'الضغط العرضي بالخطأ على زر البولس مع أدوية الضغط يسبب أزمة فرط ضغط دم مهددة للحياة.'
      }
    ],
    alarms: [
      {
        code: 'ERR_SYRINGE_EMPTY',
        labelDe: 'Spritze fast leer / Spritze leer (Vorwarnung)',
        labelAr: 'اقتراب فراغ السرنجة / فراغ كامل',
        causeDe: 'Vorwarnzeit (ca. 3–5 Minuten vor Ende des Inhalts) abgelaufen.',
        causeAr: 'بقاء دقائق معدودة قبل توقف ضخ الدواء الحرج.',
        immediateActionDe: 'Neue Spritze rechtzeitig unterbrechungsfrei vorbereiten (Doppelinfusions-Konzept bei Katecholaminen!).',
        immediateActionAr: 'تحضير سرنجة بديلة فوراً وتوصيلها دون تأخير ثانية واحدة لتفادي هبوط ضغط دم المريض.',
        priority: 'high'
      },
      {
        code: 'ERR_PRESSURE_OCCLUSION',
        labelDe: 'Verschlussdruck überschritten',
        labelAr: 'تجاوز حد ضغط الانسداد الأقصى',
        causeDe: 'Dreiwegehahn geschlossen, Thrombus in der PVK oder Leitung abgeknickt.',
        causeAr: 'صمام المحبس الثلاثي مغلق أو تجلط في قنية الوريد.',
        immediateActionDe: 'Klemme öffnen, Druckabbaumodus der Pumpe abwarten, um unkontrollierten Bolus zu vermeiden.',
        immediateActionAr: 'فتح المحبس، والانتظار حتى يقوم الجهاز بسحب الضغط المتراكم آلياً لمنع اندفاع جرعة مفاجئة.',
        priority: 'critical'
      }
    ],
    cleaningProtocolsDe: [
      'Antriebsstange sauber halten; keine klebrigen Medikamentenreste eintrocknen lassen.',
      'Regelmäßige Wischdesinfektion mit alkoholfreien Tuchsystemen.'
    ],
    cleaningProtocolsAr: [
      'الحفاظ على نظافة محور الدفع الميكانيكي ومنع جفاف بقايا الأدوية اللزجة عليه.',
      'المسح التطهيري المنتظم بمناديل معقمة غير كحولية.'
    ],
    safetyGuidelinesDe: [
      'Katecholamine (Noradrenalin/Adrenalin) immer über einen separaten, gekennzeichneten ZVK-Schenkel applizieren.',
      'Niemals parallel mit Elektrolyt- oder Volumeninfusionen über dasselbe Lumen koppeln.'
    ],
    safetyGuidelinesAr: [
      'حقن الأدوية المقبضة للأوعية (نورادرينالين) دائماً عبر مسار مخصص في القسطرة المركزية ZVK.',
      'يُمنع دمج خط النورادرينالين مع محاليل الترطيب العامة في نفس المجرى تفادياً للجرعات المفاجئة.'
    ],
    germanPhrases: [
      {
        de: 'Der Noradrenalin-Perfusor läuft aktuell auf 0,08 µg/kg/min.',
        ar: 'مضخة النورادرينالين تعمل حالياً بمعدل 0.08 ميكروغرام/كغ/دقيقة.',
        context: 'Intensivstation Übergabe'
      }
    ]
  },
  {
    id: 'ekg_monitor',
    nameDe: '12-Kanal-Elektrokardiograph (EKG-Gerät) & Patientenmonitor',
    nameAr: 'جهاز تخطيط القلب الكهربائي 12 اشتقاق وشاشة مراقبة المريض',
    nameEn: '12-Lead Electrocardiograph & Bedside Monitor',
    category: 'monitoring',
    shortDescDe: 'Erfassung und Aufzeichnung der elektrischen Herzaktivität zur Diagnose von Ischämien, Infarkten und Rhythmusstörungen.',
    shortDescAr: 'تسجيل التيارات الكهربائية الناتجة عن عضلة القلب لتشخيص احتشاء العضلة القلبية واضطرابات النبض.',
    physicalPrincipleDe: 'Differenzverstärker erfassen Potenzialdifferenzen im Millivoltbereich (0,1–2 mV) zwischen Oberflächenelektroden an Brustwand und Extremitäten.',
    physicalPrincipleAr: 'مضخمات تفاضلية دقيقة تلتقط الفروق الكهربائية الميكروية (بالميلي فولت) بين أقطاب الصدر والأطراف.',
    recommendedIntervals: 'MTK (Messtechnische Kontrolle) alle 24 Monate nach MPBetreibV.',
    hotspots: [
      {
        id: 'limb_leads',
        nameDe: 'Extremitätenkabel (Ampelprinzip: Rot, Gelb, Grün, Schwarz)',
        nameAr: 'أقطاب الأطراف الأربعة (قاعدة إشارة المرور: أحمر، أصفر، أخضر، أسود)',
        x: 18,
        y: 70,
        functionDe: 'Leitet die bipolaren Extremitätenableitungen (I, II, III) nach Einthoven und unipolaren (aVR, aVL, aVF) nach Goldberger ab.',
        functionAr: 'توصل إشارات الأطراف وفق نظام أينتهوفن وغولدبيرغر.',
        clinicalRiskDe: 'Verwechslung von Rot und Gelb führt zur falschen Diagnose von Achsenfehlern oder scheinbarem Vorderwandinfarkt.',
        clinicalRiskAr: 'تبديل القطب الأحمر والأصفر يقلب موجات التخطيط ويؤدي لتشخيص خاطئ بجلطة قلبية غير حقيقية.',
        alarmConditionDe: 'Merkspruch: "Ampel von rechts oben: Rot (rechter Arm), Gelb (linker Arm), Grün (linkes Bein). Schwarz (rechtes Bein) ist die Erde am Boden!"',
        alarmConditionAr: 'قاعدة الحفظ: "إشارة المرور تبدأ من اليمين: أحمر (الذراع الأيمن)، أصفر (الذراع الأيسر)، أخضر (الساق اليسرى)، وأسود (الساق اليمنى = الأرضية)!"'
      },
      {
        id: 'chest_leads',
        nameDe: 'Brustwandableitungen V1 bis V6 nach Wilson',
        nameAr: 'أقطاب الصدر الستة من V1 إلى V6 بنظام ويلسون',
        x: 48,
        y: 70,
        functionDe: 'Exakte Erfassung der horizontalen Herzstromebene (V1/V2 Septum, V3/V4 Vorderwand, V5/V6 Seitenwand).',
        functionAr: 'تسجيل التيارات الأفقية للقلب: V1/V2 للحاجز، V3/V4 للجدار الأمامي، V5/V6 للجدار الجانبي.',
        clinicalRiskDe: 'Falsche Platzierung (z.B. V1/V2 zu hoch im 2. statt 4. ICR) imitiert Brugada-Muster oder RBBB.',
        clinicalRiskAr: 'وضع الأقطاب في مستوى ضلع خاطئ يشوه موجات QRS ويعطي إشارات كاذبة لانسداد الحزم.'
      },
      {
        id: 'screen_waveform',
        nameDe: 'Monitorbildschirm (Sweep Speed 25/50 mm/s)',
        nameAr: 'شاشة المنحنيات وسرعة حركة الورق (25 أو 50 مم/ثانية)',
        x: 50,
        y: 30,
        functionDe: 'Echtzeitdarstellung der P-Welle, QRS-Komplexe, ST-Strecke und T-Welle.',
        functionAr: 'عرض حي متزامن لموجة P، مركب QRS، قطعة ST، وموجة T.',
        clinicalRiskDe: 'Verwechslung von 25 mm/s (Standard Deutschland) und 50 mm/s verdoppelt/halbiert die gemessene Frequenz optisch.',
        clinicalRiskAr: 'عدم الانتباه لسرعة الورق (25 مم/ث القياسية في ألمانيا مقابل 50 مم/ث) يخدع في حساب زمن النبضات.'
      }
    ],
    alarms: [
      {
        code: 'ERR_LEAD_OFF',
        labelDe: 'Elektrode abgefallen (Lead Off)',
        labelAr: 'انفصال أحد أقطاب التخطيط عن جلد المريض',
        causeDe: 'Schwitzen des Patienten, Behaarung, ausgetrocknetes Kontaktgel, Zug am Kabel.',
        causeAr: 'تعرق المريض، وجود شعر كثيف، جفاف المادة الهلامية (الجل)، أو شد في السلك.',
        immediateActionDe: 'Haut reinigen und trocknen, ggf. rasieren, frische Elektrode aufkleben.',
        immediateActionAr: 'تنظيف الجلد وتجفيفه، حلاقة الشعر بموضع القطب، واستخدام قطب لاصق جديد.',
        priority: 'medium'
      },
      {
        code: 'ERR_ASYSTOLE',
        labelDe: 'ASYSTOLIE / Herz-Kreislauf-Stillstand',
        labelAr: 'توقف نشاط القلب الكهربائي تماماً (خط مستقيم)',
        causeDe: 'Keine elektrische Herzaktivität oder Kabel komplett getrennt.',
        causeAr: 'توقف القلب الفعلي أو انقطاع كامل في توصيل الأسلاك.',
        immediateActionDe: 'SOFORT Patient ansprechen und Puls an A. carotis prüfen! Wenn bewusstlos und kein Puls: REANIMATION (30:2) beginnen!',
        immediateActionAr: 'افحص المريض أولاً! المس نبض الشريان السباتي في الرقبة، إذا لم يكن هناك وعي ولا نبض: ابدأ فوراً الإنعاش القلبي الرئوي (30 ضغطة ونَفَسَين)!',
        priority: 'critical'
      }
    ],
    cleaningProtocolsDe: [
      'Patientenkabel nach jedem Patienten mit desinfizierenden Tüchern abwischen.',
      'Saugelektroden gründlich von Gelresten befreien, um Korrosion zu vermeiden.'
    ],
    cleaningProtocolsAr: [
      'مسح الكابلات والأسلاك بمناديل مطهرة بعد كل مريض.',
      'تنظيف أقطاب الشفط من بقايا الجل تماماً منعاً للأكسدة والتشويش.'
    ],
    safetyGuidelinesDe: [
      'Defibrillationssicherheit beachten: EKG-Kabel müssen für Defibrillationsstöße zertifiziert sein.',
      'Netzfilter auf 50 Hz einstellen, um Wechselstrombrummen zu eliminieren.'
    ],
    safetyGuidelinesAr: [
      'التأكد من أن الكابلات معزولة ومقاومة لصدمات مزيل الرجفان (Defibrillator-proof).',
      'تفعيل مرشح التردد 50 هرتز للتخلص من تشويش شبكة الكهرباء.'
    ],
    germanPhrases: [
      {
        de: 'Bitte schreiben Sie umgehend ein 12-Kanal-EKG, der Patient klagt über retrosternalen Druck.',
        ar: 'يرجى تسجيل تخطيط قلب 12 اشتقاق فوراً، المريض يشكو من ألم وضغط خلف عظم القص.',
        context: 'Notfall auf Station'
      }
    ]
  },
  {
    id: 'pulsoximeter',
    nameDe: 'Pulsoximeter (SpO₂- und Pulsfrequenz-Monitor)',
    nameAr: 'جهاز قياس تشبع الأكسجين في الدم المحيطي والنبض (بيلس أوكسيميتر)',
    nameEn: 'Pulse Oximeter',
    category: 'monitoring',
    shortDescDe: 'Nicht-invasive kontinuierliche Bestimmung der arteriellen Sauerstoffsättigung (SpO₂) und des Pulses.',
    shortDescAr: 'جهاز غير جراحي يقيس نسبة تشبع خضاب الدم بالأكسجين (SpO2) ومعدل ضربات القلب عبر الإصبع.',
    physicalPrincipleDe: 'Spektrophotometrie: Zwei Leuchtdioden (Rotlicht 660 nm und Infrarotlicht 940 nm) durchleuchten das Gewebe. Oxygeniertes Hämoglobin absorbiert mehr Infrarotlicht, desoxygeniertes mehr Rotlicht. Eine Photodiode misst die pulsatile Reststrahlung.',
    physicalPrincipleAr: 'التحليل الطيفي الضوئي: يرسل الجهاز ضوءاً أحمر (660 نانومتر) وضوءاً تحت أحمر (940 نانومتر). يمتص الهيموغلوبين المشبع بالأكسجين الضوء تحت الأحمر أكثر، بينما يمتص غير المشبع الضوء الأحمر. يقيس الحساس النبضي النسبة بينهما بدقة.',
    recommendedIntervals: 'Regelmäßige Kalibrierungsprüfung des Sensors auf Kabelbruch.',
    hotspots: [
      {
        id: 'clip_sensor',
        nameDe: 'Fingersensor / Mess-Clip mit LEDs',
        nameAr: 'مشبك الإصبع مع صمامات الإضاءة والمستشعر',
        x: 50,
        y: 60,
        functionDe: 'Umschließt den Finger spannungsfrei; beherbergt Emitter-Dioden und Photodetektor.',
        functionAr: 'يثبت حول الإصبع باسترخاء لا يعيق التروية؛ ويحتوي على الصمامات الباعثة ومستقبل الضوء.',
        clinicalRiskDe: 'Nagellack, Gelnägel oder Schmutz verfälschen das optische Signal drastisch nach unten.',
        clinicalRiskAr: 'طلاء الأظافر وأظافر الأكريليك تعيق مرور الضوء وتعطي قراءة منخفضة كاذبة للأكسجين.'
      },
      {
        id: 'pleth_curve',
        nameDe: 'Plethysmographische Welle (Pleth-Kurve)',
        nameAr: 'منحنى النبض الحجمي (Pleth-Kurve)',
        x: 50,
        y: 28,
        functionDe: 'Zeigt die pulsatile Durchblutung des Gewebes. Nur bei sauber ausgeprägter Kurve mit dikroter Einkerbung ist der SpO₂-Wert verlässlich!',
        functionAr: 'يوضح تدفق الدم النبضي في الأنسجة. قراءة الأكسجين لا يعتد بها سريرياً إلا إذا كان منحنى النبض منتظماً وواضحاً!',
        clinicalRiskDe: 'Flache Kurve bei Hypothermie, Schock oder Vasokonstriktion zeigt Messfehler an.',
        clinicalRiskAr: 'تسطح المنحنى عند برودة الأطراف أو الصدمة يعني أن القيمة غير موثوقة ويجب تدفئة اليد أولاً.'
      }
    ],
    alarms: [
      {
        code: 'ERR_LOW_SPO2',
        labelDe: 'Entsättigung / SpO₂ unter Grenzwert (< 90%)',
        labelAr: 'انخفاض نسبة تشبع الأكسجين (أقل من 90%)',
        causeDe: 'Atemwegsverlegung, Lungenödem, COPD-Exazerbation, Pneumonie, Zyanose.',
        causeAr: 'انسداد مجرى التنفس، وذمة الرئة، نوبة ربو أو انسداد رئوي مزمن، التهاب رئوي.',
        immediateActionDe: 'Patient ansprechen, Atmung und Thoraxbewegung kontrollieren, Sauerstoffgabe veranlassen, Oberkörper aufrecht setzen, Arzt rufen!',
        immediateActionAr: 'افحص المريض، ارفع الجزء العلوي من السرير، ابدأ بإعطاء الأكسجين عبر القنية، وأبلغ الطبيب فوراً!',
        priority: 'critical'
      }
    ],
    cleaningProtocolsDe: [
      'Sensorflächen nach jeder Nutzung mit desinfizierenden Tüchern abwischen, keine aggressiven Scheuermittel.'
    ],
    cleaningProtocolsAr: [
      'مسح العدسات الزجاجية الداخلية للمشبك بقطنة مطهرة ناعمة بعد كل استخدام.'
    ],
    safetyGuidelinesDe: [
      'Bei schlechter peripherer Durchblutung Sensor an Ohrläppchen oder Stirn anbringen.',
      'Cave bei Kohlenmonoxid-Vergiftung (CO-Intoxikation): Das Gerät misst fälschlicherweise normale Werte, da HbCO dieselbe Wellenlänge absorbiert!'
    ],
    safetyGuidelinesAr: [
      'في حالات ضعف التروية وبرودة الأصابع، ضع الحساس على شحمة الأذن.',
      'تحذير شديد الأهمية: في حالات التسمم بأول أكسيد الكربون (CO)، يقرأ الجهاز 100% كاذبة لأن الهيموغلوبين يرتبط بالغاز السام!'
    ],
    germanPhrases: [
      {
        de: 'Die Sauerstoffsättigung liegt bei 88% unter Raumluft.',
        ar: 'تشبع الأكسجين يبلغ 88% في هواء الغرفة الطبيعي.',
        context: 'Vitalzeichenkontrolle'
      }
    ]
  },
  {
    id: 'blutzucker',
    nameDe: 'Blutzuckermessgerät (Glucometer) & Stechhilfe',
    nameAr: 'جهاز قياس السكر في الدم وقلم الوخز المعقم',
    nameEn: 'Blood Glucose Meter & Lancing Device',
    category: 'diagnostics',
    shortDescDe: 'Amperometrische Bestimmung der Glukosekonzentration im kapillären Vollblut.',
    shortDescAr: 'جهاز كيميائي كهربائي يقيس تركيز الجلوكوز في عينة الدم الشعري خلال ثوانٍ معدودة.',
    physicalPrincipleDe: 'Enzymatische Reaktion: Glukose-Oxidase oder Glukose-Dehydrogenase auf dem Teststreifen oxidiert die Glukose. Die dabei freiwerdenden Elektronen erzeugen einen messbaren Mikrostrom (Amperometrie), der proportional zum Glukosegehalt ist.',
    physicalPrincipleAr: 'تفاعل إنزيمي كهربائي: يحتوي شريط الفحص على إنزيم يؤكسد الجلوكوز وينتج تياراً كهربائياً ميكروياً يتناسب طردياً مع مستوى السكر في الدم.',
    recommendedIntervals: 'Tägliche Funktionskontrolle mit Kontrolllösung auf Station.',
    hotspots: [
      {
        id: 'strip_port',
        nameDe: 'Teststreifen-Einschub (Sensorport)',
        nameAr: 'منفذ إدخال شريط الاختبار',
        x: 50,
        y: 15,
        functionDe: 'Nimmt den mikroprozessorgesteuerten Teststreifen auf und schaltet das Gerät automatisch ein.',
        functionAr: 'يستقبل شريط الفحص ويشغل الجهاز تلقائياً للاستعداد لسحب قطرة الدم.',
        clinicalRiskDe: 'Verschmutzung durch Blut oder Desinfektionsmittel beschädigt die Kontakte.',
        clinicalRiskAr: 'دخول الدم أو المطهر داخل المنفذ يتلف مجسات التوصيل الكهربائية.'
      },
      {
        id: 'lancet_pen',
        nameDe: 'Sicherheits-Stechhilfe & Nadeltiefe',
        nameAr: 'قلم الوخز الآمن وضبط عمق الإبرة',
        x: 18,
        y: 55,
        functionDe: 'Punktion der seitlichen Fingerbeere (strikte Einmal-Sicherheitslanzetten im Krankenhaus!).',
        functionAr: 'وخز جانبي في طرف الإصبع (في المستشفى يُلزم استخدام مشارط أمان أحادية الاستخدام حصراً!).',
        clinicalRiskDe: 'Niemals Fingerkuppenmitte punktieren (hohe Nervendichte, Schmerz, Tastsinnverlust).',
        clinicalRiskAr: 'تجنب الوخز في منتصف رأس الإصبع لحماية الأعصاب الحساسة من الألم المزمن؛ احقن في الجانب دائماً.'
      }
    ],
    alarms: [
      {
        code: 'ERR_LO',
        labelDe: 'Meldung "LO" - Schwere Hypoglykämie (< 20 mg/dl bzw. < 1,1 mmol/l)',
        labelAr: 'رسالة LO - هبوط سكر حاد مهدد للحياة',
        causeDe: 'Zu hohe Insulingabe, Auslassen einer Mahlzeit, schwere Sepsis.',
        causeAr: 'جرعة إنسولين زائدة، عدم تناول الوجبة بعد الدواء، أو إنتان حاد.',
        immediateActionDe: 'BEI BEWUSSTSEIN: Sofort Traubenzucker oder Fruchtsaft geben! BEI BEWUSSTLOSIGKEIT: Stabile Seitenlage, Notfallruf, Arzt verabreicht 20–40% Glukose i.v.!',
        immediateActionAr: 'إذا كان واعياً: سكريات سريعة فوراً (عصير مركز، تمر، جلوكوز)! إذا فقد الوعي: وضعية الإفاقة الجانبية، استدعاء الطوارئ لحقن جلوكوز وريدي مركز!',
        priority: 'critical'
      },
      {
        code: 'ERR_HI',
        labelDe: 'Meldung "HI" - Schwere Hyperglykämie (> 600 mg/dl bzw. > 33,3 mmol/l)',
        labelAr: 'رسالة HI - ارتفاع سكر دم شديد جداً',
        causeDe: 'Insulinmangel, diabetische Ketoazidose (DKA) oder hyperosmolares hyperglykämisches Syndrom (HHS).',
        causeAr: 'نقص حاد في الإنسولين، الحماض الكيتوني السكري DKA، أو متلازمة فرط الأسمولية.',
        immediateActionDe: 'Sofort Arzt informieren, Vitalzeichen überwachen, venösen Zugang legen, Ketone im Urin/Blut messen, Flüssigkeitssubstitution (NaCl 0,9%) beginnen.',
        immediateActionAr: 'إبلاغ الطبيب العاجل، فتح خط وريدي، فحص الكيتونات، والبدء الفوري بتعويض السوائل بالمحلول الملحي.',
        priority: 'critical'
      }
    ],
    cleaningProtocolsDe: [
      'Gerät nach jeder Patientenmessung mit alkoholischen Desinfektionstüchern wischen, Teststreifenschlitz trocken halten.'
    ],
    cleaningProtocolsAr: [
      'تطهير الجهاز بالمسح بعد كل مريض، وتفادي تبليل منفذ الشرائط.'
    ],
    safetyGuidelinesDe: [
      'Ersten Blutstropfen immer mit sterilem Tupfer verwerfen (Gewebe- und Desinfektionsmittelreste verfälschen das Ergebnis!).',
      'Desinfektionsmittel vor der Punktion vollständig abtrocknen lassen (sonst Hämolyse und falsch niedrige Werte).'
    ],
    safetyGuidelinesAr: [
      'امسح قطرة الدم الأولى دائماً بقطنة جافة واستخدم القطرة الثانية النظيفة.',
      'انتظر جفاف كحول التطهير على الجلد تماماً قبل الوخز (الكحول يحلل خلايا الدم ويعطي قراءة خاطئة).'
    ],
    germanPhrases: [
      {
        de: 'Der Nüchternblutzucker von Herrn Schmidt liegt bei 142 mg/dl.',
        ar: 'سكر الصيام لدى السيد شميدت يبلغ 142 ملغ/ديسيلتر.',
        context: 'Morgendliche Messung'
      }
    ]
  },
  {
    id: 'beatmung',
    nameDe: 'Intensiv-Beatmungsgerät (Respirator / Beatmungsmaschine)',
    nameAr: 'جهاز التنفس الاصطناعي لوحدة العناية المركزة (الرسبيراتور)',
    nameEn: 'Mechanical Intensive Care Ventilator',
    category: 'respiratory',
    shortDescDe: 'Invasive und nicht-invasive Beatmung zur Sicherstellung des Gasaustauschs bei respiratorischer Insuffizienz.',
    shortDescAr: 'جهاز دعم التهوية الغازية وغير الغازية لتأمين إمداد الأكسجين وطرد ثاني أكسيد الكربون عند فشل الرئتين.',
    physicalPrincipleDe: 'Überdruckbeatmung: Ein servogesteuertes Ventilsystem leitet ein definiertes Gasgemisch (Sauerstoff/Druckluft) mit kontrolliertem Druck und Fluss in die Lunge.',
    physicalPrincipleAr: 'التهوية بالضغط الموجب: صمامات كهرومغناطيسية فائقة الحساسية تضخ مزيج الهواء والأكسجين بضغط وحجم محددين لحماية الحويصلات الرئوية من التلف.',
    recommendedIntervals: 'Herstellerspezifische Wartung alle 12 Monate; Schlauchwechsel nach Hygieneplan.',
    hotspots: [
      {
        id: 'breathing_circuit',
        nameDe: 'Beatmungsschlauchsystem (Inspirations- & Exspirationstrakt)',
        nameAr: 'أنابيب دائرة التنفس (مسار الشهيق والزفير)',
        x: 50,
        y: 75,
        functionDe: 'Doppelschlauchsystem mit Bakterienfilter und HME-Filter (Künstliche Nase zur Anwärmung und Befeuchtung).',
        functionAr: 'نظام أنابيب معقم مع فلتر بكتيري وفلتر HME لترطيب وتدفئة الغازات البديلة عن وظيفة الأنف.',
        clinicalRiskDe: 'Diskonnektion (Schlauch löst sich) führt innerhalb von Sekunden zum Erstickungstod bei sedierten Patienten.',
        clinicalRiskAr: 'انفصال الأنبوب المفاجئ يسبب الوفاة اختناقاً خلال دقائق للمريض المخدر.'
      },
      {
        id: 'peep_valve',
        nameDe: 'Exspirationsventil & PEEP-Steuerung',
        nameAr: 'صمام الزفير والتحكم بضغط نهاية الزفير الإيجابي (PEEP)',
        x: 80,
        y: 65,
        functionDe: 'Hält am Ende der Ausatmung einen positiven Druck (z.B. 5–10 mbar) aufrecht, um den Alveolarkollaps zu verhindern.',
        functionAr: 'يحافظ على بقاء ضغط إيجابي داخل الرئة في نهاية الزفير لمنع انخماص الحويصلات وتسهيل تبادل الغازات.',
        clinicalRiskDe: 'Zu hoher PEEP behindert den venösen Rückstrom zum Herzen und senkt den Blutdruck drastisch.',
        clinicalRiskAr: 'رفع PEEP المفرط يضغط على القلب ويعيق تدفق الدم الوريدي مسبباً هبوطاً حاداً في ضغط الدم.'
      }
    ],
    alarms: [
      {
        code: 'ERR_DISCONNECTION',
        labelDe: 'Diskonnektion / Druckabfall im System',
        labelAr: 'انفصال أنبوب التنفس / انخفاض الضغط الحاد',
        causeDe: 'Tubus abgerutscht, Schlauchanschluss gelöst, Tubus-Cuff undicht.',
        causeAr: 'انفصال الأنبوب عن جهاز التنفس أو تلف بالون التثبيت (Cuff).',
        immediateActionDe: 'SOFORT Patient ventilieren! Wenn Schlauch ab: sofort wieder anstecken. Bei Zweifel: Patient von Hand mit Beatmungsbeutel (Ambu-Bag) und 100% O₂ beatmen!',
        immediateActionAr: 'افحص المريض وأعد توصيل الأنبوب فوراً! إذا حدث أي شك في عمل الجهاز، افصل المريض وابدأ بالتهوية اليدوية بكيس الإنعاش (Ambu-Bag) مع أكسجين 100%!',
        priority: 'critical'
      },
      {
        code: 'ERR_PEAK_PRESSURE',
        labelDe: 'Spitzendruck überschritten (Ppeak high)',
        labelAr: 'ارتفاع ضغط الشهيق الأقصى داخل الرئتين',
        causeDe: 'Patient beißt auf den Tubus, Sekretverlegung in Trachea, Bronchospasmus, Spannungspneumothorax.',
        causeAr: 'عض المريض على أنبوب القصبة، تجمع إفرازات مخاطية، تشنج قصبي، أو استرواح صدري ضاغط.',
        immediateActionDe: 'Tubus freihalten (Beißkeil), endotracheales Absaugen durchführen, Thoraxexkursion prüfen, Arzt unverzüglich hinzuziehen.',
        immediateActionAr: 'وضع واقي الأسنان، شفط الإفرازات من القصبة الهوائية، فحص حركة الصدر، واستدعاء الطبيب فوراً.',
        priority: 'critical'
      }
    ],
    cleaningProtocolsDe: [
      'Wischdesinfektion des Außengehäuses nach jedem Patienten.',
      'Exspirationsventil nach Vorgabe sterilisieren oder autoklavieren.'
    ],
    cleaningProtocolsAr: [
      'تطهير الهيكل الخارجي والشاشة بالمسح بمطهرات معتمدة.',
      'تعقيم صمام الزفير في جهاز الأوتوكلاف بالحرارة العالية وفق البروتوكول.'
    ],
    safetyGuidelinesDe: [
      'Niemals Alarmgrenzen stummschalten, ohne die Ursache am Patienten geprüft zu haben!',
      'Ein funktionstüchtiger Beatmungsbeutel mit passender Maske und O₂-Anschluss muss immer am Bettplatz bereitliegen.'
    ],
    safetyGuidelinesAr: [
      'يُحظر كتم صوت الإنذار دون التحقق من حالة المريض وسلامة تنفسه أولاً!',
      'يجب دائماً وجود كيس إنعاش يدوي (Beatmungsbeutel) مع قناع مناسب جاهزاً فوق رأس المريض للطوارئ.'
    ],
    germanPhrases: [
      {
        de: 'Der Patient ist intubiert und wird druckkontrolliert beatmet.',
        ar: 'المريض مركب له أنبوب رغامي ويتنفس اصطناعياً بنمط التحكم بالضغط.',
        context: 'Schichtübergabe Intensiv'
      }
    ]
  }
];
