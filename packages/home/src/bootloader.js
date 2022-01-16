import { createApp } from "vue";

import "./index.scss";

import MainLayout from "home/MainLayout";
import router from "home/router";

createApp(MainLayout).use(router).mount("#app");
