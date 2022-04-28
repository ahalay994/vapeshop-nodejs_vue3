<template>
  <div class="container bgr-primary__mobile">
    <div class="header__nav-bottom row">
      <div class="col-12">
        <HeaderMenu />
      </div>
    </div>
  </div>
</template>

<script>
import HeaderMenu from "@/web/views/Components/Header/HeaderMenu";

export default {
  name: "HeaderBottom",
  components: {
    HeaderMenu
  }
}
</script>

<style lang="scss">
.header {
  &__nav {
    &-bottom {
      > .col-12 {
        @media (max-width: 575px) {
          padding: 0;
        }
      }
    }
  }
}
</style>
