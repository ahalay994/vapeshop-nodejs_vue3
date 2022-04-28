<template>
  <div class="footer__title mb-3">{{ title }}</div>
  <div class="footer__menu-list d-flex flex-column gap-3">
    <router-link
        v-for="menuItem in menu"
        :to="!!nameComponent ? { name: nameComponent, params: !!isParam ? { slug: menuItem.slug } : '' } : `/${menuItem.slug}`"
        class="footer__menu-link link"
    >
      {{ menuItem.name }}
    </router-link>
  </div>
</template>

<script>
export default {
  name: "MenuList",
  props: {
    title: {
      type: String,
      default() {
        return '';
      }
    },
    menu: {
      type: Array,
      default() {
        return [];
      }
    },
    nameComponent : {
      type: String,
      default() {
        return '';
      }
    },
    isParam: {
      type: Boolean,
      default() {
        return false;
      }
    },
  }
}
</script>

<style scoped>

</style>
