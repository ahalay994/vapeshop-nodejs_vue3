<template>
  <div class="d-flex gap-10">
    <a class="d-block link-social" href="https://www.linkedin.com/in/nikolay-gudyno-b46a78180/" target="_blank">
      <img class="link-social__image" :class="{'link-social__image_small': isSmall}" src="../assets/linkedin.svg" alt="">
    </a>
    <a class="d-block link-social" href="https://github.com/ahalay994" target="_blank">
      <img class="link-social__image" :class="{'link-social__image_small': isSmall}" src="../assets/github.svg" alt="">
    </a>
  </div>
</template>

<script>
export default {
  name: "SocialList",
  props: {
    isSmall: {
      type: Boolean,
      default() {
        return false;
      }
    }
  }
}
</script>

<style lang="scss">
.link-social {
  &__image {
    height: auto;
    width: 36px;

    &_small {
      width: 24px;
    }
  }
}
</style>
