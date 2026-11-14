export interface LanguageOption {
  id: string;
  name: string;
  nativeName: string;
}

export const MOTHER_TONGUE_OPTIONS: LanguageOption[] = [
  { id: 'Hindi', name: 'Hindi', nativeName: 'हिन्दी' },
  { id: 'Bengali', name: 'Bengali', nativeName: 'বাংলা' },
  { id: 'Tamil', name: 'Tamil', nativeName: 'தமிழ்' },
  { id: 'Telugu', name: 'Telugu', nativeName: 'తెలుగు' },
  { id: 'Marathi', name: 'Marathi', nativeName: 'मराठी' },
  { id: 'Gujarati', name: 'Gujarati', nativeName: 'ગુજરાતી' },
  { id: 'Punjabi', name: 'Punjabi', nativeName: 'ਪੰਜਾਬੀ' },
  { id: 'Malayalam', name: 'Malayalam', nativeName: 'മലയാളം' },
  { id: 'Kannada', name: 'Kannada', nativeName: 'ಕನ್ನಡ' },
  { id: 'Odia', name: 'Odia', nativeName: 'ଓଡ଼ିଆ' },
  { id: 'Assamese', name: 'Assamese', nativeName: 'অসমীয়া' },
  { id: 'Bhojpuri', name: 'Bhojpuri', nativeName: 'भोजपुरी' },
  { id: 'Maithili', name: 'Maithili', nativeName: 'मैथिली' },
  { id: 'Urdu', name: 'Urdu', nativeName: 'اردو' },
  { id: 'Nepali', name: 'Nepali', nativeName: 'नेपाली' },
  { id: 'Spanish', name: 'Spanish', nativeName: 'Español' },
  { id: 'French', name: 'French', nativeName: 'Français' },
  { id: 'Japanese', name: 'Japanese', nativeName: '日本語' },
  { id: 'Arabic', name: 'Arabic', nativeName: 'العربية' },
];

export const SUGGESTED_FESTIVALS = [
  'Diwali',
  'Chhath Puja',
  'Pongal',
  'Durga Puja',
  'Onam',
  'Holi',
  'Eid al-Fitr',
  'Bihu',
  'Ganesh Chaturthi',
  'Lohri',
];
