<script>
export default {
  name: "MyPagination",
  props: {
    totalPages: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number
    }
  },
  methods: {
    changePage(page) {
      this.$emit('update:currentPage', page)
    }
  }
}
</script>

<template>
  <div class="page__wrapper">
    <div
        v-for="pageNumber in totalPages"
        :key="pageNumber"
        class="page"
        :class="{'current-page': pageNumber === currentPage}"
        @click="changePage(pageNumber)"
    >
      {{ pageNumber }}
    </div>
  </div>
</template>

<style scoped>
.page__wrapper {
  display: flex;
  margin-top: 15px;
  justify-content: center;
}

.page {
  cursor: pointer;
  margin-right: 5px;
  border: 1px solid black;
  padding: 10px;
}

.current-page {
  border: 2px solid teal;
}
</style>