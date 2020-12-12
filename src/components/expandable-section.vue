<template>
  <div class="expandable-section">
    <div
      :class="`expandable-section-header-${theme}`"
      @click="toggleExpand"
    >
      <slot name="header" />
    </div>
    <div :class="['expandable-section-body', {'expanded': expanded}]">
      <slot name="body" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    primary: {
      type: Boolean,
      default: false
    },
    qa: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      expanded: false
    }
  },
  methods: {
    toggleExpand () {
      this.expanded = !this.expanded
    }
  },
  computed: {
    theme () {
      return this.primary ? 'primary' : this.qa ? 'qa' : 'primary'
    }
  }
}
</script>

<style lang="sass">
.expandable-section
  cursor: pointer

.expandable-section-header
  &-primary
    border-top: 1px solid grey
    border-bottom: 1px solid grey
    text-align: center
    padding: 10px
    margin-bottom: 10px
    &:hover
      cursor: pointer
  &-qa
    border-bottom: 1px solid grey
    padding-top: 25px
    padding-bottom: 25px
    font-size: 24px

.expandable-section-body
  max-height: 0
  opacity: 0
  overflow: hidden
  transition: all 0.4s ease
  font-size: 14px

.expandable-section-body.expanded
  max-height: 100%
  margin-top: 20px
  opacity: 1
</style>