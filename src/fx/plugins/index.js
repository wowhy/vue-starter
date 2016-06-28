export default {
  init: function handler() {
    const $ = window.$;
    $('.dropdown-button').dropdown();
    $('.collapsible').collapsible();

    setTimeout(() => {
      $('body').addClass('loaded');
    }, 200);
  },
};
