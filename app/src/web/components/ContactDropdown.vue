<template>
  <div class="dropdown">
    <button class="btn link dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
      {{ $store.state.contactPhones[0] }}
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
      <li v-for="phone in $store.state.contactPhones"><a class="dropdown-item" :href="`tel:${phone.replace(/[^+\d]/g, '')}`">{{ phone }}</a></li>
      <li v-for="mail in $store.state.contactEmails"><a class="dropdown-item" :href="`mailto:info@${mail}`">{{ mail }}</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ContactDropdown"
}
</script>

<style scoped>

</style>
