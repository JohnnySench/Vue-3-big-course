<script>
export default {
  name: "MyDialog",
  props: {
    localVisible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    hideDialog() {
      this.$emit('update:localVisible', false)
    }
  }
}
</script>

<template>
  <div
      class="dialog"
      v-if="localVisible"
      @click.stop="hideDialog">
    <div
        class="dialog__content"
        @click.stop>
      <slot/>
    </div>
  </div>
</template>

<style scoped>
.dialog {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, .5);
  position: fixed;
  display: flex;
}

.dialog__content {
  padding: 10px;
  margin: auto;
  border-radius: 12px;
  background-color: white;
  min-height: 50px;
  min-width: 300px;
}
</style>