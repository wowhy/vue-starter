import Vue from 'vue';
import UI from 'material-ui-vue';
import Loading from 'vue-loading';

class PluginHelper {
  constructor() {
    this.init();
  }

  init() {
    const $ = window.$;

    setTimeout(() => {
      $('body').addClass('loaded');
    }, 200);

    this.registerComponents();
    this.registerDirectives();
  }

  initComponent(el) {
    const query = window.$(el || 'body');

    query.find('.dropdown-button').dropdown();
    query.find('.collapsible').collapsible();
  }

  registerComponents() {
    // 注册组件
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

  registerDirectives() {
    console.log(Loading);
    Vue.directive('loading', Loading);
  }
}

export default new PluginHelper();
