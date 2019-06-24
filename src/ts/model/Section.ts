import Stop from './Stop'
import Journey from './Journey'

export default interface Section {
  arrival: Stop
  departure: Stop
  journey: Journey
  walk: any
}
