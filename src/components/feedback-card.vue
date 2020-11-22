<template>
  <div class="card" style="width: 18rem;">
    <img :src="img" class="card-img-top" />
    <div class="card-avatar">AS</div>
    <div class="card-body">
      <h5 class="card-title">{{ name }}</h5>

      <p class="card-text">
        {{ $textBrief(description, 20) + "..." }}
      </p>

      <div class="text-center" >
        <font-awesome-icon icon="star"/>
        <font-awesome-icon icon="star" />
        <font-awesome-icon icon="star" />
        <font-awesome-icon icon="star" />
        <font-awesome-icon icon="star" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["img", "name", "description", "rate"],
};
</script>

<style></style>
