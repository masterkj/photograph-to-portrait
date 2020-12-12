<template>
  <div>
    <slider
    height="tall" />
    <div class="section section--center">
      <p class="font-md">
        Whether dog, cat, horse or hamster - we draw your very personal animal
        portrait
      </p>
      <button class="btn btn-primary btn-lg">view products</button>
    </div>
    <slider height="tall"  />

    <!-- section title paragraph -->
    <div class="section section--center">
      <h2 class="section-title section-title--underlined">
        section title
      </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
        consectetur eveniet et, esse dolores quasi voluptatibus cupiditate,
        beatae quibusdam ipsam corporis ad similique pariatur explicabo iure,
        tenetur nam velit ipsa.
      </p>
    </div>

    <!-- section title paragraph photo -->
    <div class="section">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-6 order-md-2">
            <img
              class="image"
              src="https://static.toiimg.com/thumb/msid-67586673,width-800,height-600,resizemode-75,imgsize-3918697,pt-32,y_pad-40/67586673.jpg"
            />
          </div>
          <div class="col-md-6 order-md-1">
            <div class="section-center mt-4">
              <h2 class="section-title section-title--underlined">
                section title
              </h2>
              <p class="section__text section__text--spaced">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                consectetur eveniet et, esse dolores quasi voluptatibus
                cupiditate, beatae quibusdam ipsam corporis ad similique
                pariatur explicabo iure, tenetur nam velit ipsa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <feedbacks />
    </div>
    <div class="section section--center">
      <img
        class="image image-center-bg w-md-50"
        src="https://s7.gifyu.com/images/so-wirds-gemacht-klein.gif?v=1585643348"
      />
    </div>
    <order-now />
  </div>
</template>

<script>
import slider from "@/components/slider";
import feedbacks from "@/components/feedbacks-slider";
import OrderNow from "@/components/orderNow.vue";
export default {
  components: {
    slider,
    feedbacks,
    OrderNow,
  },
};
</script>

<style></style>
