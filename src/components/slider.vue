<template>
  <swiper
    class="swiper"
    :options="swiperOption"
  >
    <swiper-slide
      v-for="(image, idx) in images"
      :key="idx"
      :class="`swiper-top-image `"
    >
      <div :class="responsiveRatioClass">
        <img
          :class="`${ratio ? 'responsive-container-content' : ''} ${sliderHeight} slider-image`"
          :src="image"
        >
      </div>
    </swiper-slide>
    <div
      class="swiper-button-prev"
      slot="button-prev"
    ></div>
    <div
      class="swiper-button-next"
      slot="button-next"
    ></div>
    <div
      class="swiper-pagination"
      slot="pagination"
    ></div>

  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
  name: 'swiper-example-navigation',
  title: 'Navigation',
  // tall: 
  props: ['height', 'ratio'],
  components: {
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      swiperOption: {
        effect: 'fade',
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }

      },
      images: ['https://picsum.photos/1024/480/?image=55', 'https://cdn.gethypervisual.com/images/shopify/7543b1c5-7df2-4378-b74b-93784cbe6790/w1200_c2d5_beispiel-hund-1.jpg',
        'https://picsum.photos/1024/480/?image=55']
    }
  },
  computed: {
    sliderHeight () {
      switch (this.height) {
        case 'tall':
          return 'slider-image--tall'
          break
      }
    },
    responsiveRatioClass () {
      switch (this.ratio) {
        case '1:1':
          return 'responsive-container--square'
          break
        default:
          return ''
      }
    }
  }
}
</script>
