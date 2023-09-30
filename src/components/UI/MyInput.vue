<script>
export default {
  name: "MyInput",
  props: {
    modelValue: {
      type: [String, Number]
    }
  },
  methods: {
    sendData(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<template>
  <input
      :value="modelValue"
      @input="sendData"
      class="input"
      type="text"
      placeholder="Поиск..."
  />
</template>

<style scoped>
.input {
  margin-bottom: 15px;
  padding: 10px 15px;
  border: 1px solid teal;
  width: 100%;
}
</style>