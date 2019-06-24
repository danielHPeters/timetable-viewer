import Stop from './Stop'
import Service from './Service'
import Section from './Section'

export default interface Connection {
  capacity1st: any
  capacity2nd: any
  duration: string
  products: string[]
  from: Stop
  sections: Section[]
  service: Service | null
  to: Stop
  transfers: number
}
