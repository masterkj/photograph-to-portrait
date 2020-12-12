<template>
  <div class=" bg-grey">
    <div class="container-fluid">
      <div class="row">
        <div :class="`col-md-6 p-0 ${reversed ? 'order-2' : ''}`">
          <div :class="`center-xy p-1 ${reversed ? 'order-1' : ''}`">
            <h4>
              paragraph title
            </h4>
            <p class="p-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In eaque at id quam animi aliquid aliquam voluptatum porro, repellendus enim facere ab cum quidem, provident, reprehenderit consequatur numquam facilis nemo?
            </p>
          </div>
        </div>
        <div class="col-md-6 p-0">
          <slider ratio="1:1" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import slider from './slider.vue'
export default {
  components: { slider },
  props: {
    reversed: {
      dafault: false,
      type: Boolean
    }
  }

}
</script>

<style>
</style>