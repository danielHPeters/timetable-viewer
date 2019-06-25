import BaseComponent from './BaseComponent'
import { Tag } from '../html/Tag'
import Location from '../model/Location'
import StationOption from '../model/StationOption'
import autocomplete from 'autocompleter'

export interface Props {}

export interface State {}

export default class AutoCompleteComponent extends BaseComponent<Props, State> {
  init (): void {
    const element = document.createElement(Tag.INPUT)

    element.type = 'text'
    this.element = element
    autocomplete<StationOption>({
      input: element,
      emptyMsg: 'No matching data found.',
      minLength: 1,
      fetch: (text: string, update: (items: StationOption[]) => void) => {
        fetch(`http://transport.opendata.ch/v1/locations?query=${text}`, {
          method: 'get',
          mode: 'cors'
        })
          .then(response => response.json())
          .then((data: { stations: Location[] }) => {
            const autocompleteData: StationOption[] = data.stations.map(station => {
              return {
                label: station.name,
                value: station.name
              }
            })
            const suggestions = autocompleteData
              .filter(data => data.label.toLowerCase().startsWith(text.toLowerCase()))

            update(suggestions)
          })
      },
      onSelect: (item: StationOption) => {
        element.value = item.value
      }
    })
  }

  getSelection (): string {
    return (this.element as HTMLInputElement).value
  }
}
