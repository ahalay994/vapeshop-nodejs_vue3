<template>
  <div class="row">

    <div class="col-lg-4 col-12 pr-0">
      <div class="address-container d-lg-flex d-none flex-column">
        <template v-for="(marker, key) in $store.state.address" :key="marker.id">
          <div :class="['address-card', activeMarker === marker.id ? 'address-card__active' : '']" @click="markerEvent(marker)">
            <div class="address-card__title">{{ marker.title }}</div>
            <div class="address-card__work-time">Режим работы: {{ marker.workTime }}</div>
          </div>
          <hr />
        </template>
      </div>
    </div>

    <div class="col-lg-8 col-12">
      <YandexMap ref="map" @active-marker="activeMarkerFun" :coords="coords" />
    </div>

  </div>
</template>

<script>
import YandexMap from '@/web/components/YaMap';

export default {
  name: "MapsAddress",
  components: {
    YandexMap,
  },
  data() {
    return {
      coords: [53.90661088442334, 27.554496390898798],
      zoom: 11,
      activeMarker: null,
    }
  },
  computed: {},
  methods: {
    markerEvent(marker) {
      this.coords = marker.coords;
      this.activeMarker = marker.id;
      this.$refs.map.markerEvent(marker);
      console.log('this.activeMarker', this.activeMarker);
    },

    activeMarkerFun(value) {
      console.log('value', value);
      this.activeMarker = value;
    },
  }
}
</script>

<style lang="scss">
@import "../../styles/variables";

.ymap {
  &-container {
    height: 500px;
  }

  &-balloon {
    width: 320px;

    div {
      p:first-of-type {
        white-space: nowrap;
        margin-right: 8px;
      }
    }
  }
}

.address {
  &-container {
    max-height: 500px;
    overflow-y: scroll;

    @media (max-width: 991px) {
      display: none;
      max-height: none;
      overflow: auto;
      margin-bottom: 16px;
    }

    hr {
      background-color: rgba(0, 0, 0, 0.2);
      border-bottom: 1px solid rgba(0, 0, 0, 0.2);
      margin: 0;
      display: block;
    }
  }

  &-card {
    padding: 10px 8px;
    transition: all .2s ease-in-out;
    line-height: 1.2;

    &:hover {
      cursor: pointer;
      background-color: $white-color;
    }

    &__active {
      background-color: $white-color;
    }


    &__title {
      font-size: 20px;
      font-weight: bold;
    }

    &__work-time {
      font-size: 16px;
      margin-top: 8px;
    }
  }
}
</style>
