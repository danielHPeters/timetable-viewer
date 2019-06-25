import BaseComponent from './BaseComponent'
import { Tag } from '../html/Tag'

export interface Props {}

export interface State {}

export default class TravelQueryFormComponent extends BaseComponent<Props, State> {
  init (): void {
    const header = document.createElement(Tag.DIV)
    const content = document.createElement(Tag.DIV)
    const fromInputElement = document.createElement(Tag.INPUT)
    const toInputElement = document.createElement(Tag.INPUT)

    M.Autocomplete.init(fromInputElement, {})
    M.Autocomplete.init(toInputElement, {})

    header.classList.add('header')
    content.classList.add('content')
    this.element = document.createElement(Tag.DIV)
    this.element.classList.add('box')
    this.element.appendChild(header)
    this.element.appendChild(content)
  }
}
