<template>
  <div class="breadcrumbs">
    <ul class="breadcrumbs-list d-flex gap-10 py-2">
      <li class="breadcrumbs-item">
        <router-link :to="{ name: 'Home' }" class="breadcrumbs-link">Главная</router-link>
      </li>
      <li>/</li>
      <li class="breadcrumbs-item">
        <router-link :to="{ name: 'Catalog' }" class="breadcrumbs-link">Каталог</router-link>
      </li>
      <li>/</li>
      <template v-for="(breadcrumb, key) in getBreadcrumbs">
        <template v-if="!!breadcrumb.slug">
          <li class="breadcrumbs-item">
            <router-link :to="{ name: 'Category', params: { slug: breadcrumb.slug } }" class="breadcrumbs-link">
              {{ breadcrumb.title }}
            </router-link>
          </li>
          <li>/</li>
        </template>

        <li v-else class="breadcrumbs-item">
          <span class="breadcrumbs-current">{{ breadcrumb.title }}</span>
        </li>
      </template>
    </ul>
  </div>

  <h1>{{ title }}</h1>

  <div class="container mt-2">
    <div class="row">
      <div class="col-lg-3 col-12">
        <div class="filter d-flex flex-column">
          <div class="filter__list" v-for="(filter, id) in $store.state.filter">
            <div class="filter__title mb-1">{{ filter.title }}</div>

            <div class="filter__values d-flex flex-column gap-5">
              <Checkbox v-if="filter.type === 'select'" v-for="(title, key) in filter.values" :title="title" />
              <InputSlider v-else-if="filter.type === 'slider'" title="Цена" :value="filter.values" :step="5" />
            </div>
          </div>

          <input class="btn btn-primary mt-2" type="submit" value="Применить">

        </div>

      </div>
      <div class="col-lg-9 col-12">
        <Products :items="$store.state.products" :column="3"/>
      </div>
    </div>
  </div>
</template>

<script>
import Products from "@/web/views/Components/Products";
import InputSlider from "@/web/components/Entity/InputSlider";
import Checkbox from "@/web/components/Entity/Checkbox";

export default {
  name: "Category",
  components: {
    Checkbox,
    InputSlider,
    Products,
  },
  mounted() {

  },
  computed: {
    getProducts() {
      return this.$store.getters.products;
    },
    getBreadcrumbs() {
      return this.$store.getters.breadcrumbs;
    },
    title() {
      return this.getBreadcrumbs[this.getBreadcrumbs.length - 1].title
    }
  },
  data() {
    return {
      value: [5, 30],
    }
  }
}
</script>

<style lang="scss">
.filter {
  gap: 10px;

  &__list {

  }

  &__title {
    font-weight: bold;
    font-size: 20px;
  }

  &__values {
  }
}
</style>
