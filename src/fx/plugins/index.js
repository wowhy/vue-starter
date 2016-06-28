import Vue from 'vue';
import UI from 'material-ui-vue';

export default {
  init: function handler() {
    const $ = window.$;

    setTimeout(() => {
      $('body').addClass('loaded');
    }, 200);

    /* eslint no-restricted-syntax: "off" */
    for (const prop in UI) {
      if ({}.hasOwnProperty.call(UI, prop)) {
        register(`ui-${prop}`, UI[prop]);
      }
    }

    function register(name, component) {
      Vue.component(name, component);
    }
  }
};
