import { createPinia } from 'pinia';
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import i18n from './i18n';
import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);

const supportedLocales = ['pt_BR', 'en_US'];
const browserLocale = navigator.language.replace('-', '_');
const fallback = 'en_US';
const selectedLocale = supportedLocales.includes(browserLocale) ? browserLocale : fallback;
app.use(i18n.init(selectedLocale));

app.mount('#app');