import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import firebase from 'firebase';

import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './theme/style.css';

const firebaseConfig= {
  apiKey: "AIzaSyB3ejRHJz6w6QLQY70-oHDYUDShOAz6Ab0",
  authDomain: "smith-hooking-f5c38.firebaseapp.com",
  databaseURL: "https://smith-hooking-f5c38-default-rtdb.firebaseio.com",
  projectId: "smith-hooking-f5c38",
  storageBucket: "smith-hooking-f5c38.appspot.com",
  messagingSenderId: "233684815940",
  appId: "1:233684815940:web:c98f09c17745d5bfd92c11",
  measurementId: "G-V9SMYJH9PY"
};

firebase.initializeApp(firebaseConfig);

const app = createApp(App)
  .use(IonicVue)
  .use(router);
  
router.isReady().then(() => {
  app.mount('#app');
});