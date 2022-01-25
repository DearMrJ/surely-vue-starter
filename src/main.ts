import { createApp } from "vue";
import STable from "@surely-vue/table";
import App from "./App.vue";
import "@surely-vue/table/dist/index.css";

const app = createApp(App);
app.use(STable as any);
app.mount("#app");
