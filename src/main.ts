import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/tailwind.css";
import axios from "axios"

axios.defaults.baseURL = 'http://127.0.0.1:8000/api/';

import DashboardLayout from './components/DashboardLayout.vue';
import EmptyLayout from './components/EmptyLayout.vue';

import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const app = createApp(App);

app.component('default-layout', DashboardLayout);
app.component('empty-layout', EmptyLayout);

app.use(createPinia());
app.use(router);

app.mount("#app");
