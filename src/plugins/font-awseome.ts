import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar, faCheck, faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faStar)
library.add(faCheck)
library.add(faUser, faShoppingCart)

Vue.component('font-awesome-icon', FontAwesomeIcon)
