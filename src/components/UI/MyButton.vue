<script>
export default {
  name: "MyButton"
}
</script>

<template>
  <button type="button" class="btn-create">
    <slot/>
  </button>
</template>

<style scoped>
.btn-create {
  align-self: flex-end;
  border: 1px solid teal;
  padding: 10px 15px;
}
</style>