const template = document.createElement('template')
template.innerHTML = `
<style>
:host {
    height: var(--header-ht);
    background: var(--primary);
    color: var(--pri-font-color);
    box-shadow: var(--elevation);

    display: flex;
    align-items: center;
    justify-content: space-between;
}

h1 {
    display: flex;
    margin: 0;
    font-weight: 100;
    margin-left: var(--padding);
    align-items: center;
}

h1 > span {
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--pri-font-color);
    width: calc(var(--header-ht) * 0.75);
    height: calc(var(--header-ht) * 0.75);
    border-radius: 50%;
    color: var(--primary);
    font-weight: bold;
    margin-right: var(--padding);
}

nav {
    margin-right: var(--padding);
}
</style>
<h1>
    <span>A</span>
    AppTitle
</h1>
<nav>
</nav>
`
export default class AppHeader extends HTMLElement {
  static get is() {
    return 'app-header'
  }
  constructor() {
    super()
    this.attachShadow({mode: 'open'})
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }
  connectedCallback() {
    
  }
}