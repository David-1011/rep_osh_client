import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faEdit,
  faWindowClose,
  faSave,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import {
  FontAwesomeIcon,
  FontAwesomeLayers,
} from '@fortawesome/vue-fontawesome';

library.add(faEdit);
library.add(faWindowClose);
library.add(faSave);
library.add(faSpinner);

createApp(App)
  .use(router)
  .use(store)
  .component('font-awesome-icon', FontAwesomeIcon)
  .component('font-awesome-layers', FontAwesomeLayers)
  .mount('#app');
