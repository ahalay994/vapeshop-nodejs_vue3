<template>
  <div class="card hover">
    <div class="card-side card-side__front">

      <div class="card-header">
        <div v-if="item.labels.length > 0" class="card__labels p-3 flex-wrap">
          <span v-for="label in item.labels" :class="['card__label', `card__label-${label.type}`]">{{
              label.name
            }}</span>
        </div>
        <Image :src="item.image" :title="item.title" />
      </div>
      <div class="card-body d-flex flex-column">
        <div class="card__title" :title="item.title">{{ item.title }}</div>
        <div class="card__manufacturer">Производитель: {{ item.manufacturer }}</div>
        <div class="card__description">{{ item.description }}</div>

        <div class="card__price d-flex">
          <div class="card__price-current">{{ item.price }} BYN</div>
          <del v-if="!!Number(item.priceOld)" class="card__price-old ml-2">{{ item.priceOld }} BYN</del>
        </div>
      </div>
    </div>

    <div class="card-side card-side__back d-flex flex-column justify-content-center p-3" style="gap: 10px">
      <button class="btn btn-primary mt-auto">{{ isCompare }}</button>
      <button class="btn btn-primary">{{ isFavorite }}</button>
      <button class="btn btn-primary">{{ isCart }}</button>

      <router-link
          :to="{ name: 'Product', params: { slug: item.category, subSlug: item.subCategory, slugProduct: item.slug } }"
          class="btn btn-primary mt-auto"
      >
        Подробнее
      </router-link>
    </div>

  </div>
</template>

<script>
import Image from "@/web/components/Image";
export default {
  name: "ProductItems",
  components: {Image},
  props: {
    item: {
      type: Object,
      default() {
        return null;
      }
    }
  },
  computed: {
    isFavorite() {
      return !!this.item.config.favorite ? 'Удалить из закладок' : 'Добавить в закладки';
    },
    isCart() {
      return !!this.item.config.cart ? 'Удалить из корзины' : 'Добавить в корзину';
    },
    isCompare() {
      return !!this.item.config.compare ? 'Удалить из сравнения' : 'Добавить в сравнение';
    },
  }
}
</script>

<style lang="scss">
@import "../../styles/variables";

.card {
  height: 100%;
  background-color: $white-color;

  &-header {
    padding: 0;
    border-radius: 0;
    border: none;
    background-color: $white-color;

    &:first-child {
      border-radius: 0;
    }

    img {
      object-fit: cover;
      object-position: center;
      width: 100%;
      height: 180px;
      margin-top: 32px;
    }
  }

  &__labels {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    display: flex;
    gap: 5px;
  }

  &__label {
    font-size: 12px;
    padding: 2px 4px;

    &-hot {
      background-color: yellow;
    }

    &-new {
      background-color: $primary-label-color;
    }

    &-top {
      background-color: #ff0000;
    }
  }

  &__title {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

    font-size: 20px;
    line-height: 1.2;
    font-weight: 700;
    margin-bottom: 10px;
    height: 48px;
  }

  &__description {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;

    font-size: 16px;
    line-height: 20px;
    margin-bottom: 10px;
    height: 60px;
  }

  &__manufacturer {
    margin-bottom: 10px;
    font-size: 16px;
    font-style: italic;
    line-height: 20px;
  }

  &__price {
    font-weight: bold;

    &-current {
      font-size: 20px;
    }

    &-old {
      margin-left: 8px;
      font-size: 14px;
    }
  }
}

.card {
  &.hover {
    perspective: 150rem;
    position: relative;
    height: 432px;
    max-height: 432px;

    @media (min-width: 992px) and (max-width: 1199px) {
      height: 452px;
      max-height: 452px;
    }

    .card-side {
      height: 432px;
      border-radius: 15px;
      transition: all 0.8s ease;
      backface-visibility: hidden;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;

      @media (min-width: 992px) and (max-width: 1199px) {
        height: 452px;
      }

      &__back {
        transform: rotateY(-180deg);
      }

      &__front {
      }
    }

    &:hover {
      .card-side {
        &__front {
          transform: rotateY(180deg);
        }

        &__back {
          transform: rotateY(0deg);
        }
      }
    }
  }
}
</style>
