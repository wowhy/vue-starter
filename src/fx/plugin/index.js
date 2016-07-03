import Vue from 'vue'
import Loading from 'vue-loading'

class PluginHelper {
  constructor() {
    this.registerComponents();
    this.registerDirectives();
  }

  initJSComponents() {
  }

  registerComponents() {
  }

  registerDirectives() {
    Vue.directive('loading', Loading);
  }
}

export default new PluginHelper();
