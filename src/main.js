import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import * as ECharts from 'echarts'
import VueECharts from 'vue-echarts'

import './styles/reset.css'

// Vue.config.productionTip = false

// 创建Vue应用
const app = createApp(App)
app.component('vue-echarts', VueECharts)
app.use(store)
app.use(router)
// 将$echarts注册为全局属性
app.config.globalProperties.$echarts = ECharts
// 挂载应用
app.mount('#app')
