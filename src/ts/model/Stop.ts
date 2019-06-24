import Location from './Location'
import Prognosis from './Prognosis'

export default interface Stop {
  arrival: string | null
  arrivalTimestamp: number | null
  delay: number | null
  departure: string | null
  departureTimestamp: number | null
  location: Location
  prognosis: Prognosis
  platform: string
  realtimeAvailability: any
  station: Location
}
