import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import * as ECharts from 'echarts'
import VueECharts from 'vue-echarts'

// import './styles/reset.css'

// Vue.config.productionTip = false

// 创建Vue应用
const app = createApp(App)
app.component('vue-echarts', VueECharts)
app.use(store)
app.use(router)
// 将$echarts注册为全局属性
app.config.globalProperties.$echarts = ECharts
// app.config.globalProperties.$bmap = window.BMapGL
// app.config.globalProperties.$bmap2 = window.BMap
// app.config.globalProperties.$initMap = window.initMap
// app.config.globalProperties.$mapvgl = window.mapvgl
// app.config.globalProperties.$mapv = window.mapv
// app.config.globalProperties.$purpleStyle = window.purpleStyle
// app.config.globalProperties.$darkStyle = window.darkStyle
// 挂载应用
app.mount('#app')
