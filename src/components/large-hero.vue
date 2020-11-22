<template>
  <div class="large-hero">
    <img :src="image" class="large-hero__image" />
    <div class="large-hero__content">
      <p class="large-hero__title font-lg font-play-fair">
        {{ title }}
      </p>
      <p class="large-hero__text">{{ text }}</p>
      <button class="btn btn-lg btn-primary large-hero__button" :to="buttonText">
        {{ buttonText | toUpperCase }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["image", "title", "text", "buttonText", "link"],
};
</script>

<style></style>
