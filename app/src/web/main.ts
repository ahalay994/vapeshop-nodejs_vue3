import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap";
import { createApp } from "vue";
import App from "./App.vue";
import VueLazyLoad from 'vue3-lazyload'
// import "./registerServiceWorker";
import router from "./router";
import store from "./store";

const app = createApp(App);

app.use(router);
app.use(store);
app.use(VueLazyLoad, {
    // options...
});

app.mount("#app");
