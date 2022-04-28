<template>
  <div class="agile-slider">
    <agile ref="carousel" :options="options">
      <div class="slide" v-for="key in numberSlides" :key="key">
        <img v-lazy="{ src: `${urlImages()}?q=${key}`, loading: 'your loading image url', error: 'your error image url' }" />
      </div>
    </agile>
    <div class="agile__nav-buttons d-flex align-items-center justify-content-between">
      <button class="agile__nav-button agile__nav-button__prev" @click="$refs.carousel.goToPrev()">
        <div class="arrows prev"></div>
      </button>
      <button class="agile__nav-button agile__nav-button__next" @click="$refs.carousel.goToNext()">
        <div class="arrows next"></div>
      </button>
    </div>
  </div>
</template>

<script>
import {VueAgile} from 'vue-agile';

export default {
  name: "Slider",
  components: {
    agile: VueAgile,
  },
  props: {
    numberSlides: {
      type: Number,
      default() {
        return 1;
      }
    },
  },
  setup() {
    const urlImages = () => {
      const container = document.querySelector('.container'),
          containerWidth = container.clientWidth;

      return `https://picsum.photos/${containerWidth}/500`;
    }

    return {
      urlImages,
    }
  },
  data() {
    return {
      options: {
        navButtons: false,
        autoplay: true,
        autoplaySpeed: 5000,
      }
    }
  },
}
</script>

<style lang="scss">
@import "~@/web/styles/variables";

.agile-slider {
  position: relative;
}

.agile {
  height: 500px;

  &__list {
    img {
      object-position: center;
      object-fit: cover;
      width: 100%;
      height: 500px;
    }
  }

  &__actions {
    margin-top: -20px;
    position: relative;
  }

  &__dot {
    button {
      border: none;
      display: block;
      width: 20px;
      height: 5px;
      border-radius: 50px;
      background-color: #472877;
      margin: 0 5px;
    }

    &--current {
      button {
        background-color: #dadada;
      }
    }
  }
}

.agile-slider {
  &:not(&__small) {
    .agile {
      &__nav-buttons {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        padding: 0 12px;
        pointer-events: none;
      }

      &__nav-button {
        pointer-events: all;
        border: none;
        border-radius: 0;
        background-color: $primary-color;
        position: absolute;
        top: 0;
        bottom: 0;
        width: 70px;
        outline: none;
        opacity: 0;
        transition: opacity .2s ease-in-out;
        overflow: hidden;

        &:hover {
          opacity: 0.4;
        }

        &__prev {
          left: 0;
        }

        &__next {
          right: 0;
        }
      }
    }

    .arrows {
      width: 48px;
      height: 48px;
      position: absolute;
      top: 50%;
      margin-top: -31px;

      &.prev {
        border-bottom: 4px solid $active-text-color;
        border-left: 4px solid $active-text-color;
        transform: rotate(45deg);
        left: 24px;
      }

      &.next {
        border-bottom: 4px solid $active-text-color;
        border-left: 4px solid $active-text-color;
        transform: rotate(-135deg);
        right: 24px;
      }
    }
  }
}

</style>
