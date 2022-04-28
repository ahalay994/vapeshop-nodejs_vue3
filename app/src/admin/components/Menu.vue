<template>
  <div>
    <ul>
      <MenuItem v-for="(item, id) in list" :item="item" :key="id" />
    </ul>
  </div>
</template>

<script>
import MenuItem from "@/admin/components/MenuItem";

export default {
  name: "Menu",
  components: {
    MenuItem
  },
  data() {
    return {
      list: [
        {
          name: 'Dashboard',
          link: 'dashboard',
        },
        {
          name: 'Пользователи',
          link: 'users',
        }
      ]
    }
  },

}
</script>
