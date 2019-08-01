// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VeeValidate from 'vee-validate';
import { Validator } from 'vee-validate';
import App from './App'

Vue.config.productionTip = false
Vue.use(VeeValidate);

//los mensajes de error deben estar on otro file e importarlos aquí
const dictionary = {
  en: {
    messages:{
      email: 'email no válido',
      required: 'este campo es requerido',
      alpha: 'solo se pueden escribir letras',
      digits: 'este campo debe ser numérico y debe contener maximo 9 digitos',
      alpha_spaces: 'en este campo solo se pueden escribir letras',
    }
  },
};

// Override and merge the dictionaries
Validator.localize(dictionary);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
