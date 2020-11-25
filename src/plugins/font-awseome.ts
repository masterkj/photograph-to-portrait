import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar, faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faStar)
library.add(faCheck)

Vue.component('font-awesome-icon', FontAwesomeIcon)
