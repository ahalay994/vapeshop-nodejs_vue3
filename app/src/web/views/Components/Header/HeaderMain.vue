<template>
  <div class="container">
    <div class="header__nav row py-3">
      <div class="col-12 d-flex align-items-center justify-content-between">
        <div class="header__logo">
          <router-link :to="{ name: 'Home' }">
            <img src="../../../assets/logo.svg" alt="ahalay994">
          </router-link>
        </div>

        <Search class="w-100 d-none d-sm-block"/>

        <div class="header__buttons">
          <router-link class="link__compare" to="/compare" title="Сравнение">
            <ScaleBalance class="link__icon"/>
          </router-link>

          <router-link class="link__favorite" to="/favorite" title="Избранные">
            <HeartOutline class="link__icon"/>
          </router-link>

          <router-link class="link__cart" to="/cart" title="Корзина">
            <CartOutline class="link__icon"/>
          </router-link>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import Search from "@/web/views/Components/Header/Search";

import {CartOutline, HeartOutline, ScaleBalance,} from 'mdue';

export default {
  name: "HeaderMain",
  components: {
    Search,
    CartOutline,
    HeartOutline,
    ScaleBalance,
  }
}
</script>

<style lang="scss">
@import "../../../styles/variables";

.header {
  &__logo {
    img {
      height: 30px;
    }
  }

  &__buttons {
    display: flex;
    gap: 10px;

    a {
      display: inline-block;
    }
  }
}

.link {
  &__icon {
    color: $primary-color;
    font-size: 28px;
    transition: all .2s ease-in-out;

    &:hover {
      color: $primary-active-color;
    }
  }

  &__compare {

  }

  &__favorite {

  }

  &__cart {

  }
}
</style>
