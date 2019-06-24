import Connection from './Connection'
import Location from './Location'

export default interface TimeTableApi {
  connections: Connection[]
  from: Location
  to: Location
  stations: Location[]
}
