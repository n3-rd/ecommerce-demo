import { createApp } from 'vue'
import store from './store/store'
import './style.css'
import App from './App.vue'
import Notifications from '@kyvg/vue3-notification'

createApp(App).use(store).use(Notifications).mount('#app')
