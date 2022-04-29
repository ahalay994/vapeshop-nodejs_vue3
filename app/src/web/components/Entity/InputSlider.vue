<template>
  <b class="d-block text-end mb-1">{{ valueModel[0] }} - {{ valueModel[1] }} BYN</b>
  <Slider
      :id="id"
      :step="step"
      :min="value[0]"
      :max="value[1]"
      show-tooltip="drag"
      :format="{suffix: ' руб', thousand: ' '}"
      v-model="valueModel"
      :rules="['integer']"
  />
</template>

<script>
import Slider from '@vueform/slider';

export default {
  name: "InputSlider",
  components: {
    Slider,
  },
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
    value: {
      type: Array,
      default() {
        return [];
      }
    },
    step: {
      type: Number,
      default() {
        return 0.1;
      }
    }
  },
  data() {
    return {
      valueModel: this.value,

    }
  },
}
</script>

<style lang="scss">
@import "@vueform/slider/themes/default";
@import "../../styles/variables";

.slider {
  &__input {
    width: 60px;
    padding: 5px 10px;
    -moz-appearance: textfield;

    &::-webkit-outer-spin-button, &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  &-connect {
    background-color: $primary-color;
  }

  &-tooltip {
    border: 1px solid $primary-color;
    background-color: $primary-color;
  }
}

</style>
