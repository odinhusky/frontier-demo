import { createApp } from 'vue'

// ? Components | Comtainer | Page
import App from './App.vue'

// = styles
import './assets/tailwind.css'

// $ FontAwesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faBorderAll, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faBars, faBorderAll, faCircleXmark);

// # axios
import Axios from 'axios'

const app = createApp(App)

// & Global
app.config.globalProperties.$axios = Axios
app.component('fa', FontAwesomeIcon)

// - Render
app.mount('#app')
