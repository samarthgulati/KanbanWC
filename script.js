'use strict'

import AppHeader from './AppHeader.js'
import AppMain from './AppMain.js'
import AppFooter from './AppFooter.js'
import App from './AppWC.js'
import AppCard from './AppCard.js'
import AppLane from './AppLane.js'
customElements.define(AppLane.is, AppLane)
customElements.define(AppCard.is, AppCard)
customElements.define(App.is, App)
customElements.define(AppFooter.is, AppFooter)
customElements.define(AppMain.is, AppMain)
customElements.define(AppHeader.is, AppHeader)