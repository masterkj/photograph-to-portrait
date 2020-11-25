<template>
  <div class="card" @click="showOverlay">
    <img :src="img" class="card-img-top" />
    <div class="card-avatar">
      <span class="card-avatar-text">AS</span>
      <span class="card-avatar-tick"
        ><b><font-awesome-icon icon="check"/></b
      ></span>
    </div>
    <div class="card-body">
      <h5 class="card-title">{{ name }}</h5>

      <p class="card-text">
        {{ DescriptionBrief + "..." }}
      </p>

      <div class="text-center">
        <font-awesome-icon v-for="idx in rate" :key="idx" icon="star" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["img", "name", "description", "rate"],
  methods: {
    showOverlay() {
      this.showFeedbackOverlay({
        image: this.img,
        name: this.name,
        description: this.description,
        rate: this.rate,
      });
    },
    ...mapActions("OverlayFeedback", ["showFeedbackOverlay"]),
  },
  computed: {
    DescriptionBrief() {
      return this.screenWidth == "xs"
        ? this.$textBrief(this.description, 15)
        : this.$textBrief(this.description, 20);
    },
  },
};
</script>

<style></style>
