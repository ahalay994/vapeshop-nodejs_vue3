<template>
  <div class="d-flex align-items-center">
    <label class="mb-0">
      <input class="checkbox me-1" type="checkbox">
      {{ title }}
    </label>
  </div>
</template>

<script>
export default {
  name: "Checkbox",
  props: {
    id: {
      type: String,
      default() {
        return '';
      }
    },
    title: {
      type: String,
      default() {
        return '';
      }
    },
  }
}
</script>

<style lang="scss">
@import "../../styles/variables";

.checkbox {
  -webkit-appearance: none;
  appearance: none;
  background-color: transparent;
  margin: 0;

  color: currentColor;
  width: 20px;
  height: 20px;
  border: 1px solid #000000;
  border-radius: 0.15em;
  transform: translateY(-0.075em);
  display: inline-grid;
  place-content: center;
  padding: 0;

  &::before {
    content: "";
    width: 0.65em;
    height: 0.65em;
    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
    transform: scale(0);
    transform-origin: bottom left;
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em $primary-color;
    background-color: $primary-color;
  }

  &:focus {
    outline: none;
    outline-offset: 0;
  }

  &:checked {
    border: 1px solid $primary-color;
    &::before {
      transform: scale(1);
    }
  }
}
</style>
