import Stop from './Stop'

export default interface Journey {
  name: string
  category: string
  subcategory: string | null
  categoryCode: string | null
  number: string
  operator: string
  to: string
  capacity1st: any
  capacity2nd: any
  passList: Stop[]
}
