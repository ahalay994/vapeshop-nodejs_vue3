<template>
  <header class="header">
    <HeaderTop/>
    <HeaderMain/>
    <HeaderBottom/>
  </header>

  <main class="container">
    <div class="row">
      <router-view/>
    </div>
  </main>

  <footer class="footer container bgr-primary__mobile">
    <div class="bgr-primary__desktop pt-4 pb-2">
      <div class="mx-sm-3">
        <div class="footer__top row mb-3">
          <div class="col-12 col-md-6 col-lg-4">
            <MenuList title="Категории" :menu="$store.state.menu" name-component="Category" :is-param="true"  />
          </div>

          <div class="col-12 col-md-6 col-lg-4 d-flex flex-column">
            <MenuList :menu="$store.state.subMenu" />
          </div>

          <div class="col-12 col-md-12 col-lg-4">

            <div class="footer__title mb-3">Наши контакты</div>
            <ContactList class="d-flex flex-wrap flex-column gap-2"/>

            <div class="footer__title mb-3 mt-4">Наши социальные сети</div>
            <SocialList class="footer__social-container"/>

          </div>

        </div>
      </div>

      <div class="footer__bottom px-sm-3">
        <p>2021 - {{ new Date().getFullYear() }} © OCTOPUSVAPING</p>
        <p>ООО "OCTOPUSVAPING" УНП 000000000 СВИДЕТЕЛЬСТВО О ГОС. РЕГИСТРАЦИИ №000000000 ОТ 00.00.0000 ВЫДАНО МИНСКИМ
          ГОРИСПОЛКОМОМ РЕГИТРАЦИЯ В ТОРГОВОМ РЕЕСТРЕ РБ ОТ 20.04.2021 №000000</p>
      </div>
    </div>
  </footer>
</template>

<script>
import HeaderTop from "@c/Header/HeaderTop";
import HeaderMain from "@c/Header/HeaderMain";
import HeaderBottom from "@c/Header/HeaderBottom";
import SocialList from "@/web/components/SocialList";
import ContactList from "@/web/components/ContactList";
import MenuList from "@/web/components/MenuList";

export default {
  name: 'App',
  components: {
    MenuList,
    ContactList,
    SocialList,
    HeaderBottom,
    HeaderMain,
    HeaderTop,
  }
}
</script>

<style lang="scss">
@import "./styles/variables";
@import "./styles/mixins";

html, body {
  width: 100%;
  height: 100%;
}

#app {
  display: flex;
  flex-direction: column;
  //height: 100%;
  background-color: rgb(71 40 120 / 10%);
}

header {
  flex: 0 0 auto;
}

main {
  flex: 1 0 auto;
}

footer {
  flex: 0 0 auto;
}

a {
  transition: all .2s ease-in-out;
}

.link {
  color: $white-color;
  text-decoration: none;

  &:hover, &:focus, &:active {
    color: $active-text-color;
  }

  &-icon {
    color: $primary-color;
    cursor: pointer;

    &:hover, &:focus, &:active {
      color: $primary-active-color;
    }
  }

  &-btn {
    color: $primary-color;
    padding: .375rem .75rem;
    border-radius: .25rem;
    border: 1px solid $primary-color;
    text-decoration: none;
    //background-color: $white-color;

    &:hover, &:focus, &:active {
      color: $primary-active-color;
      border: 1px solid $primary-active-color;
    }
  }

  &-social {
    filter: invert(100%) sepia(21%) saturate(0%) hue-rotate(46deg) brightness(103%) contrast(103%);

    &:hover {
      filter: invert(99%) sepia(93%) saturate(584%) hue-rotate(287deg) brightness(129%) contrast(71%);
    }
  }
}

button {
  &:focus {
    outline: 0 !important;
    box-shadow: none !important;
  }
}

.btn {
  &-primary {
    background-color: $primary-color;

    &:hover, &:active, &:focus {
      background-color: $primary-active-color;
    }
  }
}

.bgr-primary {
  background-color: $primary-color;

  &__desktop {
    @media (min-width: 576px) {
      background-color: $primary-color;
    }
  }

  &__mobile {
    @media (max-width: 575px) {
      background-color: $primary-color;
    }
  }
}

.footer {
  &__title {
    color: $white-color;
    font-size: 20px;
    font-weight: bold;
  }

  &__bottom {
    p {
      margin: 0;
      color: $active-text-color;
      font-size: 10px;
    }
  }
}

.breadcrumbs {
  &-list {
    padding: 0;
    list-style: none;
    margin: 0;
  }
  &-item {

  }
  &-link {
    color: $primary-color;
    text-decoration: none;

    &:hover, &:active, &:focus {
      color: $primary-active-color;
    }
  }

  &-current {

  }
}
</style>
