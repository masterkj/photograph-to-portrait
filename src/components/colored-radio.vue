<template>
  <div>
    <div
      @click="chooseColor(color)"
      v-for="(color, idx) in colorOptions"
      :key="idx"
      :class="['color-choice', {'color-choice-clicked': value == color}]"
      :style="{backgroundColor: color.hex}"
    />
  </div>
</template>

<script>
export default {
  props: ['colorOptions', 'value'],
  methods: {
    chooseColor (color) {
      this.$emit('input', color)
    }
  }
}
</script>

<style lang="sass">
.color-choice
  width: 55px
  height: 55px
  border-radius: 3px
  margin-left: 2px
  margin-right: 2px
  display: inline-block
  &-clicked
    border: 2px solid #000 !important
  &:hover
    cursor: pointer
    border: 1px solid #000

</style>