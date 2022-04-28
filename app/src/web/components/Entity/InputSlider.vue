<template>
  <div class="d-flex">
    <input type="text" v-model="valueModel[0]">
    <input type="text" v-model="valueModel[1]">
  </div>

  <Slider
      id="i1"
      :step="5"
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
    }
  },
  data() {
    return {
      valueModel: this.value,

    }
  }
}
</script>

<style lang="scss">
@import "@vueform/slider/themes/default";

</style>
