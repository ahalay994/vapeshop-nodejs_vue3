<template>
  <div class="breadcrumbs">
    <ul class="breadcrumbs-list d-flex gap-10 py-2">
      <li class="breadcrumbs-item">
        <router-link :to="{ name: 'Home' }" class="breadcrumbs-link">Главная</router-link>
      </li>
      <li>/</li>
      <li class="breadcrumbs-item">
        <span class="breadcrumbs-current">Каталог</span>
      </li>
    </ul>
  </div>

  <h1 class="mb-3">Каталог</h1>

  <div class="container-photo">
    <template v-for="(menuItem, key) in $store.state.menu">
      <router-link
          :to="{ name: 'Category', params: { slug: menuItem.slug } }"
          class="align-items-center d-flex justify-content-center photo"
      >
        <div class="photo-placeholder align-items-center d-flex justify-content-center" :style="`background-image: url('https://picsum.photos/500/300?q=${key}')`">
          <div class="photo-title">{{ menuItem.name }}</div>
        </div>
      </router-link>

      <router-link
          v-for="(subMenuItem, id) in menuItem.children"
          :to="{ name: 'Category', params: { slug: menuItem.slug, subSlug: subMenuItem.slug }}"
          v-if="!!menuItem.children && menuItem.children.length > 0"
          class="photo"
      >
        <div class="photo-placeholder align-items-center d-flex justify-content-center" :style="`background-image: url('https://picsum.photos/500/300?q=${key}${id}')`">
          <div class="photo-title">{{ subMenuItem.name }}</div>
        </div>
      </router-link>
    </template>
  </div>
</template>

<script>
import Image from "@/web/components/Image";

export default {
  name: "Catalog",
  components: {Image}
}
</script>

<style lang="scss">
@import "../styles/variables";

.container-photo {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

.photo {
  background-size: cover;
  grid-column: span 2;
  height: 200px;
  overflow: hidden;
  text-decoration: none;

  &-title {
    color: $white-color;
    opacity: 0;
    transition: all .5s ease-in-out;
    z-index: 0;
    font-size: 36px;
  }

  &-placeholder {
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
    transition: all .5s ease-in-out;

    &:before {
      content: "";
      opacity: 0;
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-color: $primary-opacity;
      transition: all .5s ease-in-out;
    }

    &:hover {
      cursor: pointer;
      transform: scale(1.2);

      &:before {
        opacity: 1;
      }

      .photo-title {
        opacity: 1;
      }

    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:nth-child(6n+1){
    grid-column: span 2;
    grid-row: span 2;
    height: 400px;
  }

  &:nth-child(6n+4){
    grid-column: 3 / span 3;
    grid-row: span 3 / span 3;
    height: 400px;
  }
}
</style>
