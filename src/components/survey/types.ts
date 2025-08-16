export interface SurveyFormData {
  location: string;
  experience: string;
  regions: string[];
  interests: string[];
  interestsOther: string;
  sector: string;
  employmentType: string;
  features: string;
  skills: string;
}

export interface SurveyState {
  formData: SurveyFormData;
  answeredCount: number;
  isSubmitted: boolean;
  isSubmitting: boolean;
}

export interface ProgressState {
  totalQuestions: 8;
  answeredQuestions: number;
  progressPercentage: number;
}

export const initialFormData: SurveyFormData = {
  location: '',
  experience: '',
  regions: [],
  interests: [],
  interestsOther: '',
  sector: '',
  employmentType: '',
  features: '',
  skills: '',
};

export const LOCATION_OPTIONS = [
  'Japan',
  'United States',
  'Canada',
  'Australia',
  'United Kingdom',
  'Other Asia',
  'Other Europe',
  'Other',
];

export const EXPERIENCE_OPTIONS = [
  { value: 'none', label: 'No experience' },
  { value: '1-2', label: '1-2 years' },
  { value: '3-5', label: '3-5 years' },
  { value: '5+', label: '5+ years' },
];

export const REGION_OPTIONS = [
  'Hokkaido',
  'Tohoku',
  'Kanto',
  'Chubu',
  'Kansai',
  'Chugoku',
  'Shikoku',
  'Kyushu',
  'No preference',
];

export const INTEREST_OPTIONS = [
  'Learning traditional Japanese techniques',
  'Stable employment opportunities',
  'Cultural exchange',
  'Contributing to food security',
  'Seasonal work flexibility',
  'Rural lifestyle experience',
];

export const SECTOR_OPTIONS = [
  { value: 'agriculture', label: 'Agriculture' },
  { value: 'forestry', label: 'Forestry' },
  { value: 'fishery', label: 'Fishery' },
  { value: 'all', label: 'Open to all sectors' },
];

export const EMPLOYMENT_TYPE_OPTIONS = [
  { value: 'full-time', label: 'Full-time permanent' },
  { value: 'seasonal', label: 'Seasonal work' },
  { value: 'training', label: 'Training program' },
  { value: 'part-time', label: 'Part-time/Flexible' },
];