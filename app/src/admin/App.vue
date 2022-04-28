<template>
  <div class="d-flex">

    <Menu/>

    <div>
      <div class="header d-flex justify-content-between">
        <img src="./assets/logo.png" width="50" alt="">
      </div>

      <router-view/>
    </div>

  </div>
</template>

<script>
import Menu from "@/admin/components/Menu";

export default {
  components: {
    Menu
  }
}
</script>

<style lang="scss" src="./styles/app.scss"/>
