import Vue from 'vue';
import UI from 'material-ui-vue';

class PluginHelper {
  constructor() {
    this.init();
  }

  init() {
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

  initComponent(el) {
    const query = window.$(el || 'body');

    query.find('.dropdown-button').dropdown();
    query.find('.collapsible').collapsible();
  }
}

export default new PluginHelper();
