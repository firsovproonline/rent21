import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'
const app = createApp(App);
import components from '@/components/ui/index.js'
components.forEach(component =>{
    app.component(component.name,component);
})

app.use(store).use(router).mount('#app')
