<template>
  <div class="overlay" :style="showState">
    <div class="container-fluid">
      <div class="overlay-close" @click="close">X</div>
    </div>
    <div class="overlay-content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-7 px-2">
            <img :src="feedbackObject.image" class="image" />
          </div>
          <div class="col-md-5">
            <div class="bg-white p-4 ">
              <h5 class="text-black mb-0">{{ feedbackObject.name }}</h5>
              <p class="mb-1 text-sm">
                Verifizierter Kauf
                <span class="verified"><font-awesome-icon icon="check"/></span>
              </p>
              <div class="text-black my-2">
                <font-awesome-icon
                  v-for="idx in feedbackObject.rate"
                  :key="idx"
                  icon="star"
                />
              </div>
              <div class="card-text">
                1:1 unsere Choco schneller Versand, schnelle Antwort auf
                Rückfragen egal ob Instagram oder Mail. Gratis Bild, weil zwei
                Versionen
              </div>
            </div>
            <div class="bg-white p-4 mt-3">
              <div class="d-flex">
                <img
                  width="60px"
                  height="60px"
                  src="https://cdn.shopify.com/s/files/1/0258/1918/5238/products/hunde-portrait-poster-bild-personalisiert-grau_826aec25-0225-4cb1-85f0-6209a9c7a41b_x100.jpg?v=1578236467"
                />
                <div class="pl-3">
                  <h5 class=" text-black mb-1">PORTRAIT DEINES TIERES</h5>
                  <p class=" text-black">
                    Kunstdruck (A4) + Portrait als Bilddatei / Weiß
                  </p>
                  <button class="btn btn-outline-primary btn-lg">
                    Design product
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState({
      isShown: (state) => state.OverlayFeedback.showState,
      feedbackObject: (state) => state.OverlayFeedback.feedbackObject,
    }),
    showState() {
      return this.isShown
        ? {
            display: 'block',
          }
        : {
            display: 'none',
          };
    },
  },
  methods: {
    ...mapMutations("OverlayFeedback", ["close"]),
  },
};
</script>

<style></style>
