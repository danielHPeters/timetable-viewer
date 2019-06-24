import Config from './Config'

export default class DateUtils {
  static timestampToString (timestamp: number): string {
    const date = new Date(timestamp * 1000)

    return date.toLocaleDateString(Config.currentLocale, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric'
    })
  }
}
