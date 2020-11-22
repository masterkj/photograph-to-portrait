<template>
  <b-carousel
    id="carousel-1"
    :interval="4000"
    controls
    indicators
    img-width="1024"
    img-height="480"
    background="#ababab"
    style="text-shadow: 1px 1px 2px #333;"
  >
    <!-- Text slides with image -->
    <!-- <b-carousel-slide
      class="slide"
      img-src="https://picsum.photos/1024/480/?image=52"
    ></b-carousel-slide> -->

    <b-carousel-slide>
      <template #img>
        <img
          width="1024"
          height="480"
          class="d-block img-fluid w-100 slide"
          src="https://picsum.photos/1024/480/?image=55"
          alt="image slot"
        />
      </template>
    </b-carousel-slide>

    <b-carousel-slide>
      <template #img>
        <img
          width="1024"
          height="480"
          class="d-block img-fluid w-100 slide"
          src="https://picsum.photos/1024/480/?image=55"
          alt="image slot"
        />
      </template>
    </b-carousel-slide>

    <b-carousel-slide>
      <template #img>
        <img
          width="1024"
          height="480"
          class="d-block img-fluid w-100 slide"
          src="https://picsum.photos/1024/480/?image=55"
          alt="image slot"
        />
      </template>
    </b-carousel-slide>

    <!-- Slide with blank fluid image to maintain slide aspect ratio -->
    <b-carousel-slide
      width="1024"
      height="480"
      class="slide"
      caption="Blank Image"
      img-blank
      img-alt="Blank image"
    >
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        eros felis, tincidunt a tincidunt eget, convallis vel est. Ut
        pellentesque ut lacus vel interdum.
      </p>
    </b-carousel-slide>
  </b-carousel>
</template>

<script>
export default {};
</script>

<style></style>
