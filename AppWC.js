const template = document.createElement('template')
template.innerHTML = `
<style>
:host {
    --header-ht: 4rem;
    --footer-ht: 0rem;
    --primary: rebeccapurple;
    --pri-font-color: white;
    --color: #232323;
    --padding: 0.5rem;
    --bgd: #efefef;
    --shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    --elevation: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    --border-radius: 0.4rem;
    background: var(--bgd);
    height: 100vh;
    width: 100vw;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    display: flex;
    flex-direction: column;
}
</style>
<app-header></app-header>
<app-main></app-main>
<app-footer></app-footer>
`
export default class App extends HTMLElement {
  static get is() {
    return 'app-wc'
  }
  constructor() {
    super()
    this.attachShadow({mode: 'open'})
    this.shadowRoot.appendChild(template.content.cloneNode(true))
    
  }
  connectedCallback() {
    
  }
}