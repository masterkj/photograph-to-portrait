<template>
  <div class="section">
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
</template>

<script>
import expandableSection from './expandable-section.vue'
export default {
  components: { expandableSection },

}
</script>

<style>
</style>