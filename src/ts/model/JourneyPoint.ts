import Location from './Location'

export enum JourneyPointType {
  START = 'start',
  PASSTHROUGH = 'passthrough',
  TRANSFER = 'transfer',
  END = 'end'
}

export default interface JourneyPoint {
  arrivalTimestamp: number | null
  departureTimestamp: number | null
  type: JourneyPointType
  journeyName: string
  platform: string
  station: Location
}
