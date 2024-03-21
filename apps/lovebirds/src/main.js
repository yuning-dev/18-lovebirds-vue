import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from 'axios'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

library.add(faHeart, fasHeart, faChevronLeft, faChevronRight)


import App from './App.vue'
import router from './router'

// axios.defaults.baseURL = 'http://localhost:5173'
// axios.defaults.baseURL = ''

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.use(createPinia())
app.use(router)

app.mount('#app')
