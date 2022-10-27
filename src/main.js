import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import axios from 'axios';
import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/analytics';
import 'firebase/performance';
import router from "./routes/index";
import i18n from "@/i18n";
import store from "./store";
import VueMeta from "vue-meta";
import browserDetect from "vue-browser-detect-plugin";
import titleMixin from "@/mixins/titleMixin";

window.axios = axios;
axios.defaults.baseURL = process.env.VUE_APP_API;
Vue.config.productionTip = false;
Vue.mixin(titleMixin)
Vue.use(VueMeta);
Vue.use(browserDetect);

const configOptions = {
    apiKey: "AIzaSyDcVltS9VYG1RN2ivNtiVmH_ZaLumeglDA",
    authDomain: "doagency-160014.firebaseapp.com",
    databaseURL: "https://doagency-160014.firebaseio.com",
    projectId: "doagency-160014",
    storageBucket: "doagency-160014.appspot.com",
    messagingSenderId: "593117446771",
    appId: "1:593117446771:web:2406aa44cdc324f90aa006"
};

firebase.initializeApp(configOptions);
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
firebase.analytics();
firebase.performance();

new Vue({
    i18n,
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app');
