import BaseComponent from './BaseComponent'
import { Tag } from '../html/Tag'
import DateUtils from '../DateUtils'
import JourneyPoint from '../model/JourneyPoint'

export interface Props {
  stop: JourneyPoint
}

export interface State {}

export default class StopComponent extends BaseComponent<Props, State> {
  init (): void {
    const header = document.createElement(Tag.DIV)
    const content = document.createElement(Tag.DIV)
    const journeyNameElement = document.createElement(Tag.P)
    const arrivalTimestamp = this.props.stop.arrivalTimestamp
    const departureTimestamp = this.props.stop.departureTimestamp

    this.element = document.createElement(Tag.DIV)
    this.element.classList.add('box')
    this.element.appendChild(header)
    this.element.appendChild(content)
    content.appendChild(journeyNameElement)
    journeyNameElement.textContent = this.props.stop.journeyName
    header.textContent = this.props.stop.station.name
    header.classList.add('header')
    content.classList.add('content')
    content.classList.add(this.props.stop.type)

    if (arrivalTimestamp) {
      const textElement = document.createElement(Tag.P)

      textElement.textContent = `Arrival at ${DateUtils.timestampToString(arrivalTimestamp)}`
      content.appendChild(textElement)
    }

    if (departureTimestamp) {
      const textElement = document.createElement(Tag.P)

      textElement.textContent = `Departure at ${DateUtils.timestampToString(departureTimestamp)}`
      content.appendChild(textElement)
    }
  }
}
