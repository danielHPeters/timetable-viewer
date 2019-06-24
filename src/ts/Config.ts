export default class Config {
  static readonly LANGUAGE_KEY = 'lang'
  static PDF_FOLDER = '/documents'
  static IMAGE_FOLDER = '/img/page'
  static readonly LANGUAGES = {
    DE: {
      code: 'de-ch',
      description: 'German (CH)',
      nativeDescription: 'Deutsch (CH)'
    },
    EN: {
      code: 'en-us',
      description: 'English (US)',
      nativeDescription: 'English (US)'
    },
    FR: {
      code: 'fr-ch',
      description: 'French (CH)',
      nativeDescription: 'Français (CH)'
    }
  }
  static currentLocale = Config.LANGUAGES.DE.code
}
