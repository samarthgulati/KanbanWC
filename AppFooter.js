const template = document.createElement('template')
template.innerHTML = `
<style>
:host {
    display: flex;
    background: var(--pri-font-color);
    color: var(--primary);
}
</style>

`
export default class AppFooter extends HTMLElement {
  static get is() {
    return 'app-footer'
  }
  constructor() {
    super()
    this.attachShadow({mode: 'open'})
    this.shadowRoot.appendChild(template.content.cloneNode(true))
    
  }
  connectedCallback() {
    
  }
}