<template>
  <div class="agile-slider agile-slider__small">
    <agile ref="carousel" :options="options">
      <div class="slide" v-for="key in numberSlides" :key="key">
        <img v-lazy="{ src: `${urlImages()}?q=${key}`, loading: 'your loading image url', error: 'your error image url' }" />
      </div>
    </agile>
    <div class="agile__nav-buttons d-flex align-items-center justify-content-between">
      <a class="agile__nav-button agile__nav-button__prev d-flex justify-content-center align-items-center" @click="$refs.carousel.goToPrev()">
        <div class="arrows prev"></div>
      </a>
      <a class="agile__nav-button agile__nav-button__next d-flex justify-content-center align-items-center" @click="$refs.carousel.goToNext()">
        <div class="arrows next"></div>
      </a>
    </div>
  </div>
</template>

<script>
import {VueAgile} from 'vue-agile';

export default {
  name: "SliderSmall",
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

      return `https://picsum.photos/${containerWidth}/75`;
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
        slidesToShow: 1,
        dots: false,
        responsive: [
          {
            breakpoint: 460,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 4,
            }
          },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 6,
            }
          }
        ]
      }
    }
  },
}
</script>

<style lang="scss">
@import "~@/web/styles/variables";

.agile-slider.agile-slider__small {
  .agile {
    height: 75px;

    &__list {
      img {
        height: 75px;
      }
    }

    &__slide {
      padding: 0 30px;
    }

  }
}

.agile-slider__small {
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
      position: relative;
      width: 20px;
      height: 20px;
      transition: opacity .2s ease-in-out;
      cursor: pointer;

      &:hover {
        .arrows {
          border-bottom-color: $primary-active-color;
          border-left-color: $primary-active-color;
        }
      }
    }
  }

  .arrows {
    width: 12px;
    height: 12px;
    border-bottom: 2px solid $primary-color;
    border-left: 2px solid $primary-color;

    &.prev {
      transform: rotate(45deg);
    }

    &.next {
      transform: rotate(-135deg);
    }
  }
}

</style>
