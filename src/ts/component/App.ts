import BaseComponent from './BaseComponent'
import StopComponent from './StopComponent'
import JourneyPoint from '../model/JourneyPoint'

export interface Props {
  stops: JourneyPoint[]
}

export interface State {}

export default class App extends BaseComponent<Props, State> {
  init (): void {
    this.children = this.props.stops.map(stop => new StopComponent({ stop: stop }))
    this.element = document.createDocumentFragment()
  }
}
