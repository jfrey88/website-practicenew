import { createPinia } from 'pinia';
import { createApp } from 'vue';
import router from './router';
import App from './App.vue';

import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import '@mdi/font/css/materialdesignicons.css';



// on instancy Vuetify
const vuetify = createVuetify({
    components,
    directives,
    icons:{
        defaultSet:'mdi',
    },
  });

const pinia=createPinia();

createApp(App)
.use(pinia)
.use(router)
.use(vuetify) //on l'attache a notre application
.mount('#app');
