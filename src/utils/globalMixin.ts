const windowWidth: number = window.innerWidth;
export default {
  computed: {
    screenWidth() {
      return windowWidth < 575.98
        ? 'xs'
        : windowWidth < 768
        ? 'sm'
        : windowWidth < 992
        ? 'lg'
        : 'xl';
    },
  },
  filters: {
    toUpperCase(text: string) {
      return text.toUpperCase();
    },
  },
};
