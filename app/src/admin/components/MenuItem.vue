<template>
  <li>
    <router-link :to="{ name: item.link }">{{ item.name }}</router-link>
  </li>
</template>

<script>
export default {
  name: "MenuItem",
  props: {
    item: {
      type: Object,
      default() {
        return {};
      }
    },
  }
}
</script>
