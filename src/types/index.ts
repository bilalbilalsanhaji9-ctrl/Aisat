export type AppMode =
  | 'fundamentals'
  | 'reader'
  | 'devices'
  | 'calculators'
  | 'ecg'
  | 'emergency'
  | 'dictionary'
  | 'cases'
  | 'index';

export type LanguageView = 'split' | 'german' | 'arabic';

export interface ChapterSection {
  id: string;
  titleDe: string;
  titleAr: string;
  level?: 'B1' | 'B2' | 'C1';
  contentDe: string;
  contentAr: string;
  clinicalNoteDe?: string;
  clinicalNoteAr?: string;
  hospitalPhrase?: {
    formalDe: string;
    colloquialDe: string;
    meaningAr: string;
  };
  commonErrors?: {
    errorDe: string;
    errorAr: string;
    correctionDe: string;
    correctionAr: string;
  };
  reviewQuestion?: {
    questionDe: string;
    questionAr: string;
    answerDe: string;
    answerAr: string;
  };
  imageType?: 'device' | 'anatomy' | 'procedure' | 'table';
  imageCaptionDe?: string;
  imageCaptionAr?: string;
}

export interface Chapter {
  id: number;
  number: number;
  volumeId: number;
  titleDe: string;
  titleAr: string;
  summaryDe: string;
  summaryAr: string;
  readTimeMin: number;
  sections: ChapterSection[];
  keywords: string[];
}

export interface Volume {
  id: number;
  number: number;
  titleDe: string;
  titleAr: string;
  descriptionDe: string;
  descriptionAr: string;
  iconName: string;
  chapters: Chapter[];
}

export interface DeviceHotspot {
  id: string;
  nameDe: string;
  nameAr: string;
  x: number; // percentage 0-100
  y: number; // percentage 0-100
  functionDe: string;
  functionAr: string;
  clinicalRiskDe: string;
  clinicalRiskAr: string;
  alarmConditionDe?: string;
  alarmConditionAr?: string;
}

export interface DeviceAlarm {
  code: string;
  labelDe: string;
  labelAr: string;
  causeDe: string;
  causeAr: string;
  immediateActionDe: string;
  immediateActionAr: string;
  priority: 'low' | 'medium' | 'high' | 'critical';
}

export interface MedicalDevice {
  id: string;
  nameDe: string;
  nameAr: string;
  nameEn: string;
  category: 'infusion' | 'monitoring' | 'respiratory' | 'diagnostics' | 'emergency';
  shortDescDe: string;
  shortDescAr: string;
  physicalPrincipleDe: string;
  physicalPrincipleAr: string;
  hotspots: DeviceHotspot[];
  alarms: DeviceAlarm[];
  cleaningProtocolsDe: string[];
  cleaningProtocolsAr: string[];
  safetyGuidelinesDe: string[];
  safetyGuidelinesAr: string[];
  recommendedIntervals: string;
  germanPhrases: {
    de: string;
    ar: string;
    context: string;
  }[];
}

export interface DictionaryTerm {
  id: string;
  german: string;
  article?: 'der' | 'die' | 'das';
  plural?: string;
  arabic: string;
  pronunciation?: string;
  definitionDe: string;
  definitionAr: string;
  category: 'anatomy' | 'clinical' | 'device' | 'pharmacology' | 'hygiene' | 'legal';
  hospitalExampleDe: string;
  hospitalExampleAr: string;
  colloquialVariant?: string;
}

export interface ClinicalVerb {
  verb: string;
  arabic: string;
  present: string;
  perfekt: string;
  imperative: string;
  clinicalSentenceDe: string;
  clinicalSentenceAr: string;
  typicalObjectDe: string;
}

export interface Abbreviation {
  abbr: string;
  fullGerman: string;
  fullLatinOrEnglish?: string;
  meaningAr: string;
  clinicalContext: string;
}

export interface ECGRhythm {
  id: string;
  nameDe: string;
  nameAr: string;
  rateBpm: number;
  regularity: 'regular' | 'irregular';
  pWave: string;
  qrsDuration: string;
  clinicalSignificanceDe: string;
  clinicalSignificanceAr: string;
  nursingActionsDe: string[];
  nursingActionsAr: string[];
  isEmergency: boolean;
  frequencyFactor: number;
  amplitude: number;
}

export interface ClinicalCase {
  id: string;
  titleDe: string;
  titleAr: string;
  patientProfile: {
    age: number;
    gender: 'm' | 'w';
    setting: string;
    chiefComplaintDe: string;
    chiefComplaintAr: string;
  };
  vitals: {
    rr: string;
    hf: number;
    af: number;
    spo2: number;
    temp: number;
    bz: number;
    gcs: number;
    pain: number;
  };
  scenarioDe: string;
  scenarioAr: string;
  questions: {
    id: string;
    promptDe: string;
    promptAr: string;
    options: {
      id: string;
      textDe: string;
      textAr: string;
      isCorrect: boolean;
      rationaleDe: string;
      rationaleAr: string;
    }[];
  }[];
  abcdeAnalysis: {
    a: string;
    b: string;
    c: string;
    d: string;
    e: string;
  };
}
