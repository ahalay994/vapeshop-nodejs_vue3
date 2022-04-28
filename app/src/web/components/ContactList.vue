<template>
    <div>
      <a class="link" v-for="phone in $store.state.contactPhones" :href="`tel:${phone.replace(/[^+\d]/g, '')}`">{{ phone }}</a>
      <a class="link" v-for="mail in $store.state.contactEmails" :href="`mailto:info@${mail}`">{{ mail }}</a>
    </div>
</template>

<script>
export default {
  name: "ContactList",
  props: {}
}
</script>

<style scoped>

</style>
