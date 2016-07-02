import Vue from 'vue';
import UI from 'material-ui-vue';
import Loading from 'vue-loading';

class PluginHelper {
  constructor() {
    this.init();
  }

  init() {
    this.registerComponents();
    this.registerDirectives();
  }

  initJSComponents() {
    // window.$.material.init();
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
    Vue.directive('loading', Loading);
  }
}

export default new PluginHelper();
