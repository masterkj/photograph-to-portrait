<template>
  <div id="app" :style="scrollState">
    <navbar />
    <router-view />
    <page-footer />
    <overlay-feedback />
  </div>
</template>
<script>
import navbar from "./components/navbar";
import PageFooter from "./components/page-footer.vue";
import overlayFeedback from "./components/overlay-feedback";
import { mapState } from "vuex";
export default {
  components: {
    navbar,
    PageFooter,
    overlayFeedback,
  },
  computed: {
    ...mapState({
      isOverlayShown: (state) => state.OverlayFeedback.showState,
    }),
    scrollState() {
      return this.isOverlayShown
        ? {
            position: "sticky",
            overflow: "hidden",
          }
        : {
            position: 'static',
            overflow: 'auto',
          };
    },
  },
};
</script>
