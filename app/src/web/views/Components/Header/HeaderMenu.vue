<template>
  <nav class="navbar navbar-expand-lg bgr-primary__desktop p-0">
    <div class="d-flex d-lg-none w-100">

      <button class="navbar-toggler d-flex d-lg-none flex-column p-3 gap-6" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-line"></span>
        <span class="navbar-toggler-line"></span>
        <span class="navbar-toggler-line"></span>
      </button>

      <Search class="w-100 me-3 my-auto d-sm-none"/>
    </div>

    <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">

      <ul class="navbar-nav d-flex justify-content-between w-100">

        <li class="nav-item" v-for="(item, id) in $store.state.menu" :key="id">
          <router-link
              class="nav-link link"
              v-if="!item.children || item.children.length === 0"
              :to="{ name: 'Category', params: { slug: item.slug }}"
          >
            {{ item.name }}
          </router-link>

          <a
              v-else
              class="nav-link link dropdown-toggle"
              :id="`navbarDarkDropdownMenuLink-${id}`"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
          >
            <!--              :class="{'router-link-active': subIsActive(`/catalog/${item.slug}`)}"-->
            {{ item.name }}
          </a>

          <ul v-if="!!item.children && item.children.length > 0" class="dropdown-menu nav-submenu" :aria-labelledby="`navbarDarkDropdownMenuLink-${id}`">
            <li class="nav-item" v-for="(childItem, key) in item.children" :key="`${key}-${key}`">
              <router-link
                  class="nav-link link"
                  :to="{ name: 'Category', params: { slug: item.slug, subSlug: childItem.slug }}"
              >
                {{ childItem.name }}
              </router-link>
            </li>
          </ul>
        </li>

      </ul>

    </div>
  </nav>
</template>

<script>
import Search from "@/web/views/Components/Header/Search";
export default {
  name: "HeaderMenu",
  components: {Search},
  data() {
    return {}
  },
  methods: {
    subIsActive(input) {
      const paths = Array.isArray(input) ? input : [input];
      return paths.some(path => this.$route.path.indexOf(path) === 0)
    },
  }
}
</script>

<style lang="scss">
@import "../../../styles/variables";

.navbar {
  &-nav {
    > .nav-item {
      &:hover {
        background-color: $primary-active-color;
      }
    }
  }

  &-toggler {
    &-line {
      width: 30px;
      height: 1px;
      background-color: white;
      display: block;
    }
  }
}

.nav {
  &-item {
    position: relative;
    flex: auto;
  }

  &-link {
    padding: 15px 10px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover, &:focus, &:active {
      background-color: $primary-active-color;
    }

    &.router-link-active {
      background-color: $primary-active-color;
    }
  }

  &-submenu {
    width: 100%;
    padding: 0;
    background-color: $primary-color;
    border: none;
    border-radius: 0;

    &[data-bs-popper] {
      margin-top: -1px;
    }
  }
}
</style>
