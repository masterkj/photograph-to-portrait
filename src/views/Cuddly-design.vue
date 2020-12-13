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
            <warning-choose-photo />
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

   <faq />

  </div>
</template>

<script lang="ts">
import ColoredRadio from "@/components/colored-radio.vue";
import SliderParagraph from "@/components/slider-paragraph.vue";
import warningChoosePhoto from '@/components/warning-choose-photo'
import SyncingSlider from "@/components/syncing-slider.vue";
import faq from '@/components/faq'
export default {
  components: {
    ColoredRadio,
    SyncingSlider,
    SliderParagraph,
    warningChoosePhoto,
    faq
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