<template>
  <yandex-map
      ref="map"
      :settings="settings"
      :coords="coords"
      :zoom="zoom"
      :cluster-options="clusterOptions"
      :scroll-zoom="false"
      @balloonclose="balloonClose"
  >
    <ymap-marker
        v-for="marker in $store.state.address"
        :marker-id="marker.id"
        :coords="marker.coords"
        :hint-content="marker.title"
        :balloon-template="balloonTemplate(marker)"
        cluster-name="1"
        :icon="{color: 'violet'}"
        @balloonopen="balloonOpen(marker)"
    />
  </yandex-map>
</template>

<script>
import {yandexMap, ymapMarker} from 'vue-yandex-maps/dist/vue-yandex-maps.esm.js'

export default {
  name: "YaMap",
  components: {yandexMap, ymapMarker},
  props: {
    coords: {
      type: Array,
      default() {
        return [53.90661088442334, 27.554496390898798];
      }
    },
    zoom: {
      type: Number,
      default() {
        return 11;
      }
    },
  },
  setup() {
    const settings = {
      apiKey: '7001f6a9-4ce3-4c47-b366-ac07a4ebc4d3',
      lang: 'ru_RU',
      coordorder: 'latlong',
      enterprise: false,
      version: '2.1',
    }

    return {
      settings,
      bounds: [[53.83110255690845, 27.404464363354656], [53.96986795900842, 27.702468478865526]],
      markerFill: {color: '#896741', opacity: .5},
      markerStroke: {color: '#ff0000', width: 5},
      clusterOptions: {1: {preset: 'islands#invertedVioletClusterIcons'}},
    }
  },
  computed: {},
  methods: {
    balloonTemplate(marker) {
      return `
        <div class="ymap-balloon">
          <h5>${marker.title}</h5>
          <div class="d-flex">
            <p>Режим работы:</p>
            <p>${marker.workTime}</p>
          </div>
          <img src="${marker.image}?q=${marker.id}" alt="${marker.title}">
        </div>
      `
    },

    markerEvent(marker) {
      this.$refs.map.myMap.balloon.open(marker.coords, this.balloonTemplate(marker));
    },

    balloonOpen(marker) {
      this.$emit('active-marker', marker.id);
    },

    balloonClose() {
      this.$emit('active-marker', null);
    },
  }
}
</script>

<style lang="scss">
@import "../styles/variables";

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
</style>
