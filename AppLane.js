const template = document.createElement('template')
template.innerHTML = `
<style>
:host {
    background: white;
    padding: var(--padding);
    box-shadow: var(--shadow);
    border-radius: var(--border-radius);
    display: flex;
    flex-direction: column;
}

app-card[selected] {
  box-shadow: 0 0 0 2px var(--primary) inset;
}

header {
    border-bottom: 2px solid rgba(0,0,0,0.5);
    display: flex;
    margin-bottom: var(--padding);
    justify-content: space-between;
    min-height: min-content;
}

h2 {
    margin: var(--padding);
}

header:hover > button {
    visibility: visible;
    opacity: 1;
}

button {
    cursor: pointer;
    background: none;
    border: none;
    visibility: hidden;
    opacity: 0;
    transition: opacity 200ms ease-in;
}
section {
    overflow-y: auto;
}
</style>
<header>
    <h2>
        <editable-input placeholder="Title"></editable-input>
    </h2>
    <button>Add</button>
</header>
<section>
</section>
`
export default class AppLane extends HTMLElement {
  static get is() {
    return 'app-lane'
  }
  static get observedAttributes() {
    return ['title']
  }
  get selected() {
      return this._list.querySelectorAll('app-card[selected]')
  }
  constructor() {
    super()
    this.attachShadow({mode: 'open'})
    this.shadowRoot.appendChild(template.content.cloneNode(true))
    this._title = this.shadowRoot.querySelector('editable-input')
    this._list = this.shadowRoot.querySelector('section')
    this._addBtn = this.shadowRoot.querySelector('button')
    AppLane.observedAttributes.forEach(attr => {
      if(this.hasAttribute(attr))
        this.attributeChangedCallback(attr, null, this.getAttribute(attr))
    })
  }
  addCard(card) {
      if(!(card instanceof Node))
        card = document.createElement('app-card')
      this._list.appendChild(card)
  }
  _toggleSelect(e) {
    const card = e.path.find(el => el.localName === 'app-card')
    if(!card) {
        this.selected.forEach(c => c.removeAttribute('selected'))
    } else {
        card.setAttribute('selected', true)
    }
  }
  connectedCallback() {
    this._toggleSelect = this._toggleSelect.bind(this)
    this.addCard = this.addCard.bind(this)
    this.addEventListener('click', this._toggleSelect)
    this._addBtn.addEventListener('click', this.addCard)
    this._title.addEventListener('blur', 
        e => this.setAttribute('title', e.detail)
    )
  }
  attributeChangedCallback(name, oldValue, newValue) {
    switch(name) {
      case 'title':
        this._title.setAttribute('value', newValue)
      break
    }
  }
}