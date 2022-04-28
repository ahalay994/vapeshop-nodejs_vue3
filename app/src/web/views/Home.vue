<template>
  <section class="slider">
    <Slider :number-slides="5" />
  </section>

  <section class="mt-5">
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h2 class="mb-0">Лучшие предложения</h2>
      <router-link class="link-btn" :to="{ name: 'Catalog' }">Весь каталог</router-link>
    </div>

    <Products :items="$store.state.products" />
  </section>

  <section class="my-4">
    <div class="d-flex justify-content-between align-items-center">
      <h2 class=mb-4>Бренды</h2>
    </div>

    <SliderSmall :numberSlides="20" />
  </section>

  <section class="my-4">
    <div class="d-flex justify-content-between align-items-center">
      <h2 class=mb-4>Наши адреса</h2>
    </div>

    <MapsAddress />
  </section>

</template>

<script>
import Slider from '@c/Slider'
import Products from '@c/Products'
import SliderSmall from "@/web/views/Components/SliderSmall";
import MapsAddress from "@/web/views/Components/MapsAddress";

export default {
  name: 'Home',
  components: {
    MapsAddress,
    SliderSmall,
    Slider,
    Products,
  },
  setup() {
    return {};
  },
  data() {
    return {
      options: {
        navButtons: false,
      },
      products: [
        {
          id: 1,
          title: 'VOOPOO Drag s PRO Kit',
          description: 'VOOPOO Drag s PRO Kit от компании VOOPOO - интересный девайс с стильными вставками под кожу корпус средних размеров . Ёмкость аккумулятора в размере 3000 мА позволяет на целый день забыть о зарядном устройстве . Благодаря новому чипсету GENE.Fan 3.0 VOOPOO Drag s PRO Kit стал работaть еще стaбильнeе и корректнее, причeм его функциoнальность нeмного увеличилaсь. На данный момент эта модель выпускается в 7 стильных цветовых решениях . Каждый человек благодаря этому сможет подобрать расцветку девайса именно под себя.',
          manufacturer: 'VOOPOO',
          image: 'http://octopusvaping.ahalay994.info/images/catalog/VOOPOO-Drag-S-Pro-Pod-Kit-1_TWpkp__15510.1634226877.jpg',
          price: '130.00',
          priceOld: '135.00',
          slug: 'voopoo-drag-s-pro-kit',
          category: 'pods',
          subCategory: '',
          labels: [
            {
              type: 'new',
              name: 'Новинка'
            },
            {
              type: 'top',
              name: 'Топ продаж'
            },
            {
              type: 'hot',
              name: 'Горячее предложение'
            }
          ],
          config: {
            favorite: true,
            cart: true,
            compare: true
          }
        },
        {
          id: 2,
          title: 'Vaporesso Swag PX80 Pod Kit',
          description: 'Vaporesso Swag PX80 Pod Kit от компании Vaporesso - отличается от остальных девайсах удобством, компактностью, высоким качеством сборки и неплохими возможностями, особенно если взять во внимание его небольшой размер. Данный pod прост в обслуживании, что позволяет ему быть отличным выбором для людей , которые только начали свой путь в использовании вейпов. Vaporesso Swag PX80 Pod Kit на данный момент выпускается в 5 стильных расцветках. Благодаря этому можно будет подобрать девайс именно под вас.',
          manufacturer: 'Vaporesso',
          image: 'http://octopusvaping.ahalay994.info/images/catalog/vaporessoswagpx80kit20201224_1_2048x.768x560.jpg',
          price: '130.00',
          priceOld: '0.00',
          slug: 'vaporesso-swag-px80-pod-kit',
          category: 'pods',
          subCategory: '',
          labels: [
            {
              type: 'new',
              name: 'Новинка'
            },
          ],
          config: {
            favorite: false,
            cart: false,
            compare: false
          }
        },
        {
          id: 3,
          title: 'VOOPOO Drag s PRO Kit',
          description: 'VOOPOO Drag s PRO Kit от компании VOOPOO - интересный девайс с стильными вставками под кожу корпус средних размеров . Ёмкость аккумулятора в размере 3000 мА позволяет на целый день забыть о зарядном устройстве . Благодаря новому чипсету GENE.Fan 3.0 VOOPOO Drag s PRO Kit стал работaть еще стaбильнeе и корректнее, причeм его функциoнальность нeмного увеличилaсь. На данный момент эта модель выпускается в 7 стильных цветовых решениях . Каждый человек благодаря этому сможет подобрать расцветку девайса именно под себя.',
          manufacturer: 'VOOPOO',
          image: 'http://octopusvaping.ahalay994.info/images/catalog/VOOPOO-Drag-S-Pro-Pod-Kit-1_TWpkp__15510.1634226877.jpg',
          price: '130.00',
          priceOld: '135.00',
          slug: 'voopoo-drag-s-pro-kit',
          category: 'pods',
          subCategory: '',
          labels: [
            {
              type: 'new',
              name: 'Новинка'
            },
            {
              type: 'top',
              name: 'Топ продаж'
            },
            {
              type: 'hot',
              name: 'Горячее предложение'
            }
          ],
          config: {
            favorite: true,
            cart: true,
            compare: true
          }
        },
        {
          id: 4,
          title: 'Vaporesso Swag PX80 Pod Kit',
          description: 'Vaporesso Swag PX80 Pod Kit от компании Vaporesso - отличается от остальных девайсах удобством, компактностью, высоким качеством сборки и неплохими возможностями, особенно если взять во внимание его небольшой размер. Данный pod прост в обслуживании, что позволяет ему быть отличным выбором для людей , которые только начали свой путь в использовании вейпов. Vaporesso Swag PX80 Pod Kit на данный момент выпускается в 5 стильных расцветках. Благодаря этому можно будет подобрать девайс именно под вас.',
          manufacturer: 'Vaporesso',
          image: 'http://octopusvaping.ahalay994.info/images/catalog/vaporessoswagpx80kit20201224_1_2048x.768x560.jpg',
          price: '130.00',
          priceOld: '0.00',
          slug: 'vaporesso-swag-px80-pod-kit',
          category: 'pods',
          subCategory: '',
          inStock: 0,
          labels: [
            {
              type: 'new',
              name: 'Новинка'
            },
          ],
          config: {
            favorite: false,
            cart: false,
            compare: false
          }
        },
      ]
    }
  },
}
</script>

<style lang="scss">
.slider {
  @media (max-width: 575px) {
    padding: 0;
  }
}
</style>
