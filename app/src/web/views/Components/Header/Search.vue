<template>
<div class="header__search">
  <input class="field-search" type="text" placeholder="Поиск...">
  <a class="btn-search link-icon" @click.prevent>
    <BIconSearch class="icon-search" />
  </a>
</div>
</template>

<script>
import { BIconSearch } from 'bootstrap-icons-vue';

export default {
  name: "Search",
  components: {
    BIconSearch
  }
}
</script>

<style lang="scss">
@import "../../../styles/variables";

.header {
  &__search {
    position: relative;
    margin-right: 28px;
  }
}

.field-search {
  border-radius: 0;
  border-width: 1px;
  padding: 5px 10px;
  font-size: 14px;

  &:focus {
    border-color: $primary-color;
  }
}

.btn {
  &-search {
    position: absolute;
    height: 100%;
    top: 0;
    right: 0;
    width: 33px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
}
</style>
