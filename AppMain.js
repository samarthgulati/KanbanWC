const template = document.createElement('template')
template.innerHTML = `
<style>
:host {
  height: calc(100vh - var(--header-ht) - var(--footer-ht));
  display: flex;
}

:host {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
    grid-template-rows: calc(100vh - var(--header-ht) - var(--footer-ht) - 2 * var(--padding));
    grid-auto-flow: column;
    grid-gap: var(--padding);
    padding: var(--padding);
    color: var(--color);
}
</style>
<app-lane title="Todo"></app-lane>
<app-lane title="Plan"></app-lane>
<app-lane title="Develop"></app-lane>
<app-lane title="Test"></app-lane>
<app-lane title="Deploy"></app-lane>
<app-lane title="Done"></app-lane>
`
export default class AppMain extends HTMLElement {
  static get is() {
    return 'app-main'
  }
  constructor() {
    super()
    this.attachShadow({mode: 'open'})
    this.shadowRoot.appendChild(template.content.cloneNode(true))
    this._dragSource = undefined
  }
  _handleDragstart(e) {
    this._dragSource = e.path.find(el => el.localName === 'app-lane')
    e.dataTransfer.setData('text', this._dragSource.getAttribute('title'))
  }
  _handleDrop(e) {
    const dropLane = e.path.find(el => el.localName === 'app-lane')
    this._dragSource.selected.forEach(card => dropLane.addCard(card))
  }
  connectedCallback() {
    this._handleDragstart = this._handleDragstart.bind(this)
    this._handleDrop = this._handleDrop.bind(this)
    this.addEventListener('dragstart', this._handleDragstart)
    this.addEventListener('dragenter', e => e.preventDefault())
    this.addEventListener('dragover', e => e.preventDefault())
    this.addEventListener('drop', this._handleDrop)
  }
}