<template>
  <div>
    <div class="section">
      <div class="row">
        <div class="col-md-6">
          <syncing-slider :images="images" />
        </div>
        <div class="col-md-6 p-2">
          <div class="section--center">
            <h2 class="mb-0">
              Portrait of your animal
            </h2>
            <p class="mt-1 mb-1">incl. VAT excl. shipping</p>
            <p class="font-md mb-0">€22,90</p>
            <font-awesome-icon
              v-for="idx in 5"
              :key="idx"
              class=" text-black"
              icon="star"
            />
            ({{rateNumber}})
            <p class="mt-4 mb-1 text-sm">size:</p>
            <b-form-select
              class="w-md-75 mb-3"
              v-model="selectedSize"
              :options="sizeOptions"
            ></b-form-select>

            <div class="m-2">
              <p class="m-1">color:</p>
              <colored-radio
                v-model="selectedColor"
                :color-options="colorOptions"
              />
            </div>
            <b-form-group :label="selectedCountText">
              <b-form-radio-group
                id="btn-radios-1"
                v-model="selectedCount"
                button-variant="outline-primary"
                :options="countOptions"
                buttons
                name="radios-btn-default"
              ></b-form-radio-group>
            </b-form-group>
            <p class="text-sm">Bild deines Tieres
            </p>

            <p
              class="mb-1 font-sm"
              v-if="selectedCount == 2"
            >Your two favorites will be immortalized together on an art print. </p>
            <div class="centerize inline-block w-md-50">
              <b-form-file
                v-for="idx in selectedCount"
                :key="idx"
                v-model="uploadedPicture[idx]"
                class="my-4"
                plain
              ></b-form-file>
            </div>
            <expandable-section
              primary
              class="mb-4"
            >
              <template v-slot:header>
                <div>
                  WICHTIG❗ How to choose the right photo
                </div>
              </template>
              <template v-slot:body>
                <p class="font-sm">
                  In order for us to draw the portrait of your pet as detailed as possible, it is important that you send us a photo in good quality. The camera angle, brightness and distance also play an important role. Make sure your photo meets the requirements before you upload it.
                </p>
                <img
                  class="image"
                  src="https://cdn.shopify.com/s/files/1/0258/1918/5238/files/das-richtige-bild-auswaehlen_Zeichenflaeche_1.jpg?v=1567855152"
                >
                <p class="font-sm">
                  You're still not sure? Then just send us your photo via Whatsapp or Instagram and we'll tell you if you can use it.
                </p>
                <a href="#">Whatsapp</a>
                <a href="#">insta</a>
              </template>
            </expandable-section>
            <button class="btn btn-lg btn-primary">
              order design
            </button>
          </div>
        </div>
      </div>
    </div>
    <slider-paragraph />
    <div class="section section--center ">
      <p class="w-md-75 centerize text-md">
        You will receive your TierBeiMir Portrait as a high-resolution PNG file with a transparent background via e-mail. You can use this file to create cushions, cups, blankets and other products with your pet's portrait in no time at all. Or you can opt for a personalised art print in gallery quality, which we will produce for you in our small studio. </p>
    </div>
    <slider-paragraph reversed />

    <!-- <div class="section section--center ">
      <div class="w-md-75 centerize">
        <h5>
          ⭐ What our customers say ⭐
        </h5>
        <p class="text-md">
          It is really important to us to give you a pleasure with our small works of art. In this way we want to thank you for the wonderful feedback we receive from you. This really means a lot to us ❤
        </p>
      </div>

    </div> -->
    <div class="section ">
      <div class="w-md-75 centerize">
        <expandable-section
          qa
          v-for="n in 5"
          :key="n"
        >
          <template v-slot:header>
            <div class="expandable-head-text">
              How long will it take you to create my portrait?
              <span style="display: inline-block; float: right; font-size: 30px">+</span>
            </div>
          </template>
          <template v-slot:body>
            Since we make each portrait individually for you and your darling, the production time is 3-5 working days. We want to take our time for every single picture in order to be able to capture even small details. But as they say - anticipation is the most beautiful joy ❤

            If you decide to buy a high quality art print, you will receive it within 4-8 working days.

            If you decide to buy our blanket, you will receive it within 8-12 working days.

            We send the art print as well as the ceiling as DHL or DPD parcel.
          </template>
        </expandable-section>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import ColoredRadio from "@/components/colored-radio.vue";
import SliderParagraph from "@/components/slider-paragraph.vue";
import expandableSection from "@/components/expandable-section";
import SyncingSlider from "@/components/syncing-slider.vue";
export default {
  components: {
    ColoredRadio,
    expandableSection,
    SyncingSlider,
    SliderParagraph,
  },
  data() {
    return {
      rateNumber: 221,
      selectedSize: null,
      sizeOptions: [
        {
          text: "a4",
          value: 1,
        },
        {
          text: "a3",
          value: 2,
        },
        {
          text: "a5",
          value: 3,
        },
      ],
      selectedCountText: "Anzahl der zu zeichnenden Tiere:1",
      uploadedPicture: [],
      selectedCount: 1,
      countOptions: [
        {
          text: 1,
          value: 1,
        },
        {
          text: 2,
          value: 2,
        },
      ],
      colorOptions: [
        {
          hex: "#eea",
        },
        {
          hex: "#cca",
        },
        {
          hex: "#aae",
        },
        {
          hex: "#ddc",
        },
      ],
      selectedColor: {},
      images: [
        "https://cdn.shopify.com/s/files/1/0258/1918/5238/products/katze-kitty-portrait-poster-bild-personalisiert-rosa-zeichnung_c566bd59-ae3a-4fb9-9cae-f87c01e10c7f_2048x.jpg?v=1578236467",
        "https://cdn.shopify.com/s/files/1/0258/1918/5238/products/hunde-portrait-poster-bild-print-personalisiert_c78eee0b-f44f-4e2b-b121-4e9a8920b524_2048x.jpg?v=1578236467",
        "https://cdn.shopify.com/s/files/1/0258/1918/5238/products/hase-kanninchen-portrait-poster-bild-personalisiert-gelb_ac099822-4ef0-49cb-9757-eeb20a5a438c_2048x.jpg?v=1578236467",
        "https://cdn.shopify.com/s/files/1/0258/1918/5238/products/hunde-portrait-poster-bild-personalisiert-weiss_233e19d1-c46f-4a1f-9b86-846c495d78d6_2048x.jpg?v=1578236467",
        "https://cdn.shopify.com/s/files/1/0258/1918/5238/products/portrait-vogel-persoenlich-einzigartig-bild_Zeichenflaeche_1_2048x.jpg?v=1578236467",
      ],
    };
  },
  methods: {
    chooseColor(color: object) {
      this.selectedColor = color;
    },
  },
};
</script>

<style>
</style>