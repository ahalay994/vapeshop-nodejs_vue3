<template>
  <div class="container bgr-primary__mobile">
    <div class="header__nav-top d-flex justify-content-between align-items-center py-1 px-sm-3 bgr-primary__desktop">

      <ContactList class="header-contact d-md-flex d-none" />
      <ContactDropdown class="d-md-none d-flex" />
      <SocialList class="header-social" :is-small="true" />

    </div>
  </div>
</template>

<script>
import ContactDropdown from "@/web/components/ContactDropdown";
import ContactList from "@/web/components/ContactList";
import SocialList from "@/web/components/SocialList";

export default {
  name: "HeaderTop",
  components: {SocialList, ContactList, ContactDropdown},
}
</script>

<style lang="scss">
@import "../../../styles/variables";

.header {
  &-contact {
    gap: 20px;

    a {
      font-size: 14px;
    }
  }

  /*&-social {
    a {
      img {
        width: 24px;
      }
    }
  }*/
}
</style>
