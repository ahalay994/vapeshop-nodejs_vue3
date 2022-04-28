import { createStore } from "vuex";
import router from '../router'

export default createStore({
  state: {
    menu: [
      {
        name: 'PODs',
        slug: 'pods'
      },
      {
        name: 'POD-MODs',
        slug: 'pod-mods'
      },
      {
        name: 'Атомайзеры',
        slug: 'atomajzery',
        children: [
          {
            name: 'Баки',
            slug: 'baki'
          },
          {
            name: 'Дрипки',
            slug: 'dripki'
          },
          {
            name: 'Дрипобаки',
            slug: 'dripobaki'
          },
        ]
      },
      {
        name: 'Комплектующие',
        slug: 'komplektuyushie',
        children: [
          {
            name: 'Вата',
            slug: 'vata'
          },
          {
            name: 'Картриджи',
            slug: 'kartridzhi'
          },
          {
            name: 'Испарители',
            slug: 'ispariteli'
          },
          {
            name: 'Койлы',
            slug: 'kojly'
          },
          {
            name: 'Адаптеры',
            slug: 'adaptery'
          },
          {
            name: 'Зарядные устройства',
            slug: 'zaryadnye-ustrojstva'
          },
        ]
      },
      {
        name: 'Одноразки',
        slug: 'odnorazki'
      },
      {
        name: 'Жидкости',
        slug: 'zhidkosti',
        children: [
          {
            name: 'Солевые',
            slug: 'solevye'
          },
          {
            name: 'Не солевые',
            slug: 'ne-solevye'
          },
        ]
      },
      {
        name: 'АКБ',
        slug: 'akb'
      },
    ],
    subMenu: [
      {
        name: 'О нас',
        slug: 'about-us'
      },
      {
        name: 'Доставка',
        slug: 'delivery'
      },
      {
        name: 'Магазины',
        slug: 'shops'
      },
      {
        name: 'Гарантия',
        slug: 'warranty'
      },
    ],
    address: [
      {
        id: 0,
        title: 'ТЦ "Рига", (ул. Сурганова 50, второй этаж)',
        coords: [53.92920332895366, 27.587482193503128],
        workTime: 'Пн-Вс: 10.00 - 20.00 Без выходных',
        image: 'https://picsum.photos/320/150'
      },
      {
        id: 1,
        title: 'ТЦ "Galleria Minsk", (просп. Победителей 9,второй этаж)',
        coords: [53.90851181930867, 27.548753334490478],
        workTime: 'Пн-Вс: 10.00 - 22.00 Без выходных',
        image: 'https://picsum.photos/320/150'
      },
      {
        id: 2,
        title: 'ТЦ "Скала" (ул. Петра Глебки 5, первый этаж)',
        coords: [53.90873773964382, 27.46984201546389],
        workTime: 'Пн-Вс: 10.00 - 20.00 Без выходных',
        image: 'https://picsum.photos/320/150'
      },
      {
        id: 3,
        title: 'ТЦ "Green city" (ул. Притыцкого 156, первый этаж)',
        coords: [53.90848490133947, 27.432434995479074],
        workTime: 'Пн-Вс: 10.00 - 22.00 Без выходных',
        image: 'https://picsum.photos/320/150'
      },
      {
        id: 4,
        title: 'ТЦ "Green" (Партизанский просп. 182 , Шабаны)',
        coords: [53.84907001902498, 27.699218487807745],
        workTime: 'Пн-Вс: 10.00 - 23.00 Без выходных',
        image: 'https://picsum.photos/320/150'
      },
      {
        id: 5,
        title: 'ТЦ "Green" (ул. Уборевича 176, Чижовка)',
        coords: [53.835454522823575, 27.606082538765786],
        workTime: 'Пн-Вс: 08.00 - 23.00 Без выходных',
        image: 'https://picsum.photos/320/150'
      },
      {
        id: 6,
        title: 'Пр-т Независимости 60',
        coords: [53.9187798543098, 27.59142315595096],
        workTime: 'Пн-Вс: 10.00 - 20.00 Без выходных',
        image: 'https://picsum.photos/320/150'
      },
      {
        id: 7,
        title: 'Пр-т Независимости 40',
        coords: [53.90869290057413, 27.576166440611548],
        workTime: 'Пн-Вс: 10.00 - 20.00 Без выходных',
        image: 'https://picsum.photos/320/150'
      },
    ],
    contactPhones: [
      '+375(25)000-00-00',
      '+375(29)000-00-00',
      '+375(33)000-00-00',
    ],
    contactEmails: [
      'info@ahalay994.com',
    ],
    /*products: [
      {
        id: 1,
        title: 'VOOPOO Drag s PRO Kit',
        description: 'VOOPOO Drag s PRO Kit от компании VOOPOO - интересный девайс с стильными вставками под кожу корпус средних. Ёмкость аккумулятора в размере 3000 мА позволяет на целый день забыть о зарядном устройстве . Благодаря новому чипсету GENE.Fan 3.0 VOOPOO Drag s PRO Kit стал работaть еще стaбильнeе и корректнее, причeм его функциoнальность нeмного увеличилaсь. На данный момент эта модель выпускается в 7 стильных цветовых решениях . Каждый человек благодаря этому сможет подобрать расцветку девайса именно под себя.',
        manufacturer: 'VOOPOO',
        image: 'http://octopusvaping.ahalay994.info/images/catalog/VOOPOO-Drag-S-Pro-Pod-Kit-1_TWpkp__15510.1634226877.jpg',
        images: [
            'http://octopusvaping.ahalay994.info/images/catalog/VOOPOO-Drag-S-Pro-Pod-Kit-1_TWpkp__15510.1634226877.jpg'
        ],
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
        characteristics: [
          {
            title: '',
            value: '',
            count: ''
          }
        ],
        inStock: {
          0: 4,
          1: 1,
          2: 10,
          3: 5,
          4: 0,
          5: 8,
          6: 0,
          7: 50
        }
      }
    ],*/
    filter: [
      {
        type: 'slider',
        title: 'Цена',
        values: [20, 150]
      },
      {
        type: 'select',
        title: 'Производитель',
        values: {
          0: 'VOOPOO',
          1: 'Vaporesso'
        }
      },
      {
        type: 'select',
        title: 'Цвет',
        values: {
          0: 'Чёрный',
          1: 'Оранжевый',
          2: 'Красный',
          3: 'Синий',
          4: 'Сине-зелёный',
          5: 'Серый',
          6: 'Коричневый',
          7: 'Бордовый',
          8: 'Зелёный',
        }
      },
      {
        type: 'select',
        title: 'Формфактор',
        values: {
          0: 'POD'
        },
      },
      {
        type: 'select',
        title: 'Встроенный аккумулятор',
        values: {
          0: 'Да'
        },
      },
      {
        type: 'select',
        title: 'Регулировка мощности',
        values: {
          0: 'Есть'
        },
      },
      {
        type: 'select',
        title: 'Дисплей',
        values: {
          0: 'Есть'
        },
      },
    ],
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
    ],
  },
  getters: {
    breadcrumbs(state) {
      const { slug, subSlug } = router.currentRoute.value.params;
      let data: any = {},
          breadcrumbs: any = [];

      if (!!subSlug) {
        data = state.menu.find((menuItem) => menuItem.slug === slug);
        breadcrumbs.push({ title: data.name, slug: data.slug });

        data = data.children.find((menuItem: any) => menuItem.slug === subSlug);
        breadcrumbs.push({ title: data.name });
      } else {
        data = state.menu.find((menuItem) => menuItem.slug === slug);
        breadcrumbs.push({ title: data.name });
      }

      return breadcrumbs;
    },

    products(state) {
      /*const { slug, subSlug } = router.currentRoute.value.params;
      let data: any = {};

      if (!!subSlug) {
        data = state.menu.find((menuItem) => menuItem.slug === slug);
        data = data.children.find((menuItem: any) => menuItem.slug === subSlug);
      } else {
        data = state.menu.find((menuItem) => menuItem.slug === slug);
      }*/

      return {
        // ...data
      };
    }
  },
  mutations: {},
  actions: {},
  modules: {},
});
