const template = document.createElement('template')
template.innerHTML = `
<style>
:host {
    display: flex;
    flex-direction: column;
    background: var(--bgd);
    padding: var(--padding);
    border-radius: var(--border-radius);
    margin-bottom: var(--padding);
}

h3 {
    margin: var(--padding) 0;
    border-bottom: 2px solid rgba(0,0,0,0.25);
    display: flex;
    align-items: center;
}

p {
  display: flex;
  flex-direction: column;
  margin: 0;
}
editable-input {
  flex: 0.85;
}
</style>
<h3>
  Ticket ID #<editable-input placeholder="42"></editable-input>
</h3>
<p><editable-input placeholder="Activity"></editable-input></p>
<span></span>`
export default class AppCard extends HTMLElement {
  static get is() {
    return 'app-card'
  }
  static get observedAttributes() {
    return ['selected']
  }
  attributeChangedCallback(name, oldValue, newValue) {
    switch(name) {
      case 'selected':
        if(newValue) {
          this.setAttribute('draggable', true)
        } else {
          this.removeAttribute('draggable')
        }
      break
    }
  }
  constructor() {
    super()
    this.attachShadow({mode: 'open'})
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }
  connectedCallback() {
  }
}