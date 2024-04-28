import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.scss'
// import 'reset-css'
// import '@unocss/reset/normalize.css'
import 'virtual:uno.css'
import '@unocss/reset/tailwind.css'
import 'virtual:unocss-devtools'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// 提交一下

app.mount('#app')
