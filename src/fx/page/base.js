export default {
  ready() {
    this.$dispatch('pageTitleChange', this.title);
  },
  route: {}
};
