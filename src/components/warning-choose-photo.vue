<template>
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
</template>

<script>
import expandableSection from "@/components/expandable-section";

export default {
  components: {
    expandableSection,
  }
}
</script>

<style>
</style>