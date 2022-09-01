import { createApp } from 'vue'
import App from './App.vue'
import './layout/layout.css';
import '@/layout/style.css';
import router from './router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

import { faFacebook } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faUserSecret)
library.add(faFacebook)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')
