<template>
  <div class="products row">
    <div v-for="item in items" class="col-12 col-md-6 products-item" :class="column === 3 ? 'col-xl-4' : 'col-lg-3'">
      <ProductCard :item="item"/>
    </div>
  </div>
</template>

<script>
import ProductCard from '@c/ProductCard';

export default {
  name: "Products",
  components: {
    ProductCard,
  },
  props: {
    items: {
      type: Array,
      default() {
        return [];
      }
    },
    column: {
      type: Number,
      default() {
        return 4;
      }
    }
  },
  data() {},
}
</script>

<style lang="scss">
.products {
  &-item {
    margin-bottom: 24px;
  }
}
</style>
