export default abstract class BaseComponent<P, S> {
  protected props: P
  protected state: S
  protected children: BaseComponent<any, any>[]
  protected element: HTMLElement | DocumentFragment

  constructor (props: P) {
    this.props = props
    this.children = []
  }

  abstract init (): void

  build (): HTMLElement | DocumentFragment {
    this.init()

    if (this.children.length > 0) {
      this.children.forEach(child => this.element.appendChild(child.build()))
    }

    return this.element
  }
}
