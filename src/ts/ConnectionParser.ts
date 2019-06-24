import Connection from './model/Connection'
import JourneyPoint, { JourneyPointType } from './model/JourneyPoint'

export default class ConnectionParser {
  static parse (connection: Connection): JourneyPoint[] {
    let stops: JourneyPoint[] = []

    if (connection.transfers > 0) {
      connection.sections.forEach((section, sectionsKey) => {
        let sectionStops = section.journey.passList.map((stop, stopKey) => {
          let type

          if (stopKey === 0) {
            if (sectionsKey === 0) {
              type = JourneyPointType.START
            } else {
              type = JourneyPointType.TRANSFER
            }
          } else if (stopKey === section.journey.passList.length - 1 && sectionsKey === connection.sections.length - 1) {
            type = JourneyPointType.END
          } else {
            type = JourneyPointType.PASSTHROUGH
          }

          return {
            platform: stop.platform,
            station: stop.station,
            journeyName: section.journey.name,
            type: type,
            arrivalTimestamp: stop.arrivalTimestamp,
            departureTimestamp: stop.departureTimestamp
          }
        })

        if (sectionsKey !== connection.sections.length - 1) {
          sectionStops.pop()
        }

        stops.push(...sectionStops)
      })
    } else {
      const section = connection.sections[0]

      stops = section.journey.passList.map((stop, key) => {
        let type

        if (key === 0) {
          type = JourneyPointType.START
        } else if (key === section.journey.passList.length - 1) {
          type = JourneyPointType.END
        } else {
          type = JourneyPointType.PASSTHROUGH
        }

        return {
          platform: stop.platform,
          station: stop.station,
          journeyName: section.journey.name,
          type: type,
          arrivalTimestamp: stop.arrivalTimestamp,
          departureTimestamp: stop.departureTimestamp
        }
      })
    }

    return stops
  }
}
