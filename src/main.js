import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import {BootstrapVue} from 'bootstrap-vue';
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
// Install BootstrapVue
Vue.use(BootstrapVue);


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

new Vue({
    render: h => h(App),
}).$mount('#app')
