<template>
  <picture>
    <source :srcset="!!srcset ? srcset : src" :title="title">
    <img v-lazy="{ src: src, loading: 'your loading image url', error: 'your error image url' }" />
  </picture>
</template>

<script>
export default {
  name: "Image",
  props: {
    title: {
      type: String,
      default() {
        return '';
      }
    },
    src: {
      required: true,
      type: String,
      default() {
        return '';
      }
    },
    srcset: {
      type: String,
      default() {
        return '';
      }
    },
  }
}
</script>
