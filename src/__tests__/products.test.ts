import {
  type ProductProjection,
  type ProductProjectionPagedQueryResponse
} from '@commercetools/platform-sdk';
import { getExtremums } from '../pages/catalogPage/utils/getExtremums';
import { getProductParams } from '../pages/catalogPage/utils/getProductParams';

export const productsDataTest: ProductProjectionPagedQueryResponse = {
  limit: 20,
  offset: 0,
  count: 16,
  total: 16,
  results: [
    {
      id: '56aa4cae-7f6f-41cb-b65e-1e69e9d33284',
      version: 143,
      productType: {
        typeId: 'product-type',
        id: '68046b49-b934-4449-8fc6-4478a6f998ee'
      },
      name: {
        'en-US': 'Modular robot KEYi Tech Starter Kit'
      },
      description: {
        'en-US': 'Modular Programmable Robot for STEM Education'
      },
      categories: [
        {
          typeId: 'category',
          id: '4913e529-c3ab-4232-8420-ee634592325d'
        }
      ],
      categoryOrderHints: {},
      slug: {
        'en-US': 'modular-robot-keyi-tech-starter-kit'
      },
      metaTitle: {
        'en-US': '',
        'ru-BY': ''
      },
      metaDescription: {
        'en-US': '',
        'ru-BY': ''
      },
      masterVariant: {
        id: 1,
        sku: '',
        key: '1001',
        prices: [
          {
            id: '03639a8c-8ce1-4177-a03e-3da39220911a',
            value: {
              type: 'centPrecision',
              currencyCode: 'EUR',
              centAmount: 39900,
              fractionDigits: 2
            },
            key: 'modular',
            country: 'CY',
            validFrom: '2023-08-27T21:00:00.000Z',
            validUntil: '2023-10-30T21:00:00.000Z'
          }
        ],
        images: [
          {
            url: 'https://755e0f1aa1999ba4f1c3-15401b2d188e8f81af17bec76ab4e8bc.ssl.cf3.rackcdn.com/660110078d3bc3ce292d-Kw34TyxD.jpg',
            dimensions: {
              w: 1200,
              h: 1200
            }
          },
          {
            url: 'https://755e0f1aa1999ba4f1c3-15401b2d188e8f81af17bec76ab4e8bc.ssl.cf3.rackcdn.com/660110078d3bc3ce292d-Hub3Wv6w.jpg',
            dimensions: {
              w: 1200,
              h: 1200
            }
          },
          {
            url: 'https://755e0f1aa1999ba4f1c3-15401b2d188e8f81af17bec76ab4e8bc.ssl.cf3.rackcdn.com/c3b95f5b4e7a15ca5b51-XVzf1qoX.jpg',
            dimensions: {
              w: 1200,
              h: 1200
            }
          },
          {
            url: 'https://755e0f1aa1999ba4f1c3-15401b2d188e8f81af17bec76ab4e8bc.ssl.cf3.rackcdn.com/78618b2e4c23d20395b8-33PNBCm3.png',
            dimensions: {
              w: 720,
              h: 720
            }
          },
          {
            url: 'https://755e0f1aa1999ba4f1c3-15401b2d188e8f81af17bec76ab4e8bc.ssl.cf3.rackcdn.com/30180a37df4fd064697c-Qns8wv7C.jpg',
            dimensions: {
              w: 1200,
              h: 1200
            }
          },
          {
            url: 'https://755e0f1aa1999ba4f1c3-15401b2d188e8f81af17bec76ab4e8bc.ssl.cf3.rackcdn.com/423fc7e088e5dcaf8e54-oNSkksXN.jpg',
            dimensions: {
              w: 2400,
              h: 1600
            }
          },
          {
            url: 'https://755e0f1aa1999ba4f1c3-15401b2d188e8f81af17bec76ab4e8bc.ssl.cf3.rackcdn.com/c3b95f5b4e7a15ca5b51-V6rvTNzV.jpg',
            label: 'card-logo',
            dimensions: {
              w: 190,
              h: 190
            }
          }
        ],
        attributes: [
          {
            name: 'details',
            value: 12
          },
          {
            name: 'rating',
            value: 3.8
          },
          {
            name: 'model',
            value: 'FT-6567'
          },
          {
            name: 'color',
            value: ['white', 'gray', 'black']
          }
        ],
        assets: []
      },
      variants: [],
      searchKeywords: {},
      hasStagedChanges: false,
      published: true,
      key: '',
      taxCategory: {
        typeId: 'tax-category',
        id: '8382e9dd-9486-4cb8-aae3-d21c9f393dba'
      },
      priceMode: 'Embedded',
      createdAt: '2023-08-23T08:27:14.024Z',
      lastModifiedAt: '2023-09-01T11:05:44.574Z'
    },
    {
      id: '4fa96801-b6a1-48a5-9e0f-4bb7355fbb83',
      version: 43,
      productType: {
        typeId: 'product-type',
        id: '28e07d8a-b0c1-492a-a256-959f0731c869'
      },
      name: {
        'en-US': 'Xiaomi Mi Robot Vacuum-Mop 2 PRO+',
        'ru-BY': 'Пылесос-робот Xiaomi Mi Robot Mop 2 PRO+'
      },
      description: {
        'en-US': 'Versatile robot cleaner with vacuuming and mopping functions for efficient home cleaning',
        'ru-BY':
          'Mi Robot Vacuum-Mop 2 Pro+ входит в экосистему Mi Home. Модель развивает инновационные идеи, робота-пылесоса Xiaomi Mijia 1С, продолжая удивлять пользователей своими возможностями:\nусовершенствованная система навигации с двумя камерами, одна из которых распознает препятствия на полу.\nмощный двигатель, благодаря которому пылесос развивает силу всасывания до 3000 Па.\nширокое всасывающее отверстие; усовершенствованная щетка из плотного волокна, обеспечивающая высокую эффективность очистки пола; улучшенная влажная уборка.'
      },
      categories: [
        {
          typeId: 'category',
          id: '6142a45b-6256-492b-adaf-1b80f4a6db29'
        }
      ],
      categoryOrderHints: {},
      slug: {
        'en-US': 'xiaomi-mi-robot-vacuum-mop',
        'ru-BY': 'xiaomi-mi-robot-vacuum-mop'
      },
      metaTitle: {
        'en-US': '',
        'ru-BY': ''
      },
      metaDescription: {
        'en-US': '',
        'ru-BY': ''
      },
      masterVariant: {
        id: 1,
        sku: 'BHR5044EU',
        key: '3001',
        prices: [
          {
            id: 'aac1cf72-bdf5-409a-a971-207532683a43',
            value: {
              type: 'centPrecision',
              currencyCode: 'EUR',
              centAmount: 35000,
              fractionDigits: 2
            },
            country: 'CY',
            discounted: {
              value: {
                type: 'centPrecision',
                currencyCode: 'EUR',
                centAmount: 29750,
                fractionDigits: 2
              },
              discount: {
                typeId: 'product-discount',
                id: 'f98fc1b2-46de-42e2-8820-e18be1ffbc05'
              }
            }
          }
        ],
        images: [
          {
            url: 'https://755e0f1aa1999ba4f1c3-15401b2d188e8f81af17bec76ab4e8bc.ssl.cf3.rackcdn.com/2023-08-23_16-54-09-zMUcCav4.png',
            dimensions: {
              w: 1838,
              h: 1083
            }
          },
          {
            url: 'https://755e0f1aa1999ba4f1c3-15401b2d188e8f81af17bec76ab4e8bc.ssl.cf3.rackcdn.com/mi_robot_vacuum_mop_-w_4YcO_v.jpg',
            dimensions: {
              w: 1200,
              h: 675
            }
          },
          {
            url: 'https://755e0f1aa1999ba4f1c3-15401b2d188e8f81af17bec76ab4e8bc.ssl.cf3.rackcdn.com/2023-08-23_19-22-16-1VwsI1NI.png',
            dimensions: {
              w: 1369,
              h: 902
            }
          },
          {
            url: 'https://755e0f1aa1999ba4f1c3-15401b2d188e8f81af17bec76ab4e8bc.ssl.cf3.rackcdn.com/2023-08-23_19-23-30-k9NpKuWU.png',
            dimensions: {
              w: 1401,
              h: 672
            }
          },
          {
            url: 'https://755e0f1aa1999ba4f1c3-15401b2d188e8f81af17bec76ab4e8bc.ssl.cf3.rackcdn.com/d942ulgtdwg01m8rf88n-qUQZrud2.png',
            label: 'card-logo',
            dimensions: {
              w: 810,
              h: 810
            }
          }
        ],
        attributes: [
          {
            name: 'rating',
            value: 3.2
          },
          {
            name: 'color',
            value: ['blue', 'white', 'black']
          }
        ],
        assets: []
      },
      variants: [],
      searchKeywords: {},
      hasStagedChanges: false,
      published: true,
      key: 'BHR5044EU',
      taxCategory: {
        typeId: 'tax-category',
        id: '8382e9dd-9486-4cb8-aae3-d21c9f393dba'
      },
      priceMode: 'Embedded',
      createdAt: '2023-08-23T13:47:46.839Z',
      lastModifiedAt: '2023-09-01T11:05:44.567Z'
    },
    {
      id: 'be106a82-3d60-493f-ba30-d2c4f593eac3',
      version: 55,
      productType: {
        typeId: 'product-type',
        id: '28e07d8a-b0c1-492a-a256-959f0731c869'
      },
      name: {
        'en-US': 'Roborock Vacuum Cleaner S8 Pro Ultra',
        'ru-BY': 'Робот-пылесос Roborock Vacuum Cleaner S8 Pro Ultra S8PU02-02 White'
      },
      description: {
        'en-US': 'High-performance robot vacuum cleaner for thorough cleaning',
        'ru-BY':
          'Робот-пылесос Roborock Vacuum Cleaner S8 Pro Ultra White выполняет сухую и влажную уборку. Сила всасывания 6000 Па обеспечивает высокую эффективность. В конструкции предусмотрена многофункциональная база самоочистки. Она автоматически удаляет собранную пыль и прочий мусор из пылесборника (400 мл) после каждой уборки и перегружает в мешок, рассчитанный примерно на 7 недель, заливает воду в соответствующий резервуар (200 мл)'
      },
      categories: [
        {
          typeId: 'category',
          id: '6142a45b-6256-492b-adaf-1b80f4a6db29'
        }
      ],
      categoryOrderHints: {},
      slug: {
        'en-US': 'robot-vacuum-cleaner-roborock-vacuum-cleaner-s8-pro-ultra-s8pu02-02-white',
        'ru-BY': 'roborock-vacuum-cleaner-s8-pro-ultra-s8pu02-02-white'
      },
      metaTitle: {
        'en-US': 'Robot Vacuum Cleaner Roborock Vacuum Cleaner S8 Pro Ultra S8PU02-02 White',
        'ru-BY': ''
      },
      metaDescription: {
        'en-US': 'Robot Vacuum Cleaner Roborock Vacuum Cleaner S8 Pro Ultra S8PU02-02 White',
        'ru-BY': ''
      },
      masterVariant: {
        id: 1,
        sku: 'S8PU02-02',
        prices: [
          {
            id: '526d35a4-f8fa-4072-a817-86b30bff1edf',
            value: {
              type: 'centPrecision',
              currencyCode: 'USD',
              centAmount: 100500,
              fractionDigits: 2
            },
            discounted: {
              value: {
                type: 'centPrecision',
                currencyCode: 'USD',
                centAmount: 85425,
                fractionDigits: 2
              },
              discount: {
                typeId: 'product-discount',
                id: 'f98fc1b2-46de-42e2-8820-e18be1ffbc05'
              }
            }
          }
        ],
        images: [
          {
            url: 'https://755e0f1aa1999ba4f1c3-15401b2d188e8f81af17bec76ab4e8bc.ssl.cf3.rackcdn.com/2023-08-23_19-34-38-0f2se5ns.png',
            dimensions: {
              w: 1244,
              h: 1118
            }
          },
          {
            url: 'https://755e0f1aa1999ba4f1c3-15401b2d188e8f81af17bec76ab4e8bc.ssl.cf3.rackcdn.com/2023-08-23_19-35-12-XFk8pxrb.png',
            dimensions: {
              w: 1202,
              h: 1120
            }
          },
          {
            url: 'https://755e0f1aa1999ba4f1c3-15401b2d188e8f81af17bec76ab4e8bc.ssl.cf3.rackcdn.com/2023-08-23_19-35-28-nEPLd_dg.png',
            dimensions: {
              w: 1213,
              h: 1128
            }
          },
          {
            url: 'https://755e0f1aa1999ba4f1c3-15401b2d188e8f81af17bec76ab4e8bc.ssl.cf3.rackcdn.com/2023-08-23_19-34-57-7av184cf.png',
            dimensions: {
              w: 1159,
              h: 1145
            }
          },
          {
            url: 'https://755e0f1aa1999ba4f1c3-15401b2d188e8f81af17bec76ab4e8bc.ssl.cf3.rackcdn.com/2023-08-23_19-34-38--JinEWBio.png',
            label: 'card-logo',
            dimensions: {
              w: 540,
              h: 540
            }
          }
        ],
        attributes: [
          {
            name: 'color',
            value: ['green', 'white', 'black']
          },
          {
            name: 'rating',
            value: 2.8
          }
        ],
        assets: []
      },
      variants: [],
      searchKeywords: {},
      hasStagedChanges: false,
      published: true,
      key: 'S8PU02-02',
      taxCategory: {
        typeId: 'tax-category',
        id: '8382e9dd-9486-4cb8-aae3-d21c9f393dba'
      },
      priceMode: 'Embedded',
      createdAt: '2023-08-23T16:33:41.721Z',
      lastModifiedAt: '2023-09-01T11:05:44.648Z'
    },
    {
      id: 'e996ba5d-4c7d-4a2e-8635-1d68bdfb21df',
      version: 58,
      productType: {
        typeId: 'product-type',
        id: '28e07d8a-b0c1-492a-a256-959f0731c869'
      },
      name: {
        'en-US': 'Robot vacuum cleaner Dyson 360 heurist',
        'ru-BY': 'Робот-пылесос Dyson 360 heurist'
      },
      description: {
        'en-US': 'Advanced robot vacuum with intelligent navigation and powerful cleaning'
      },
      categories: [
        {
          typeId: 'category',
          id: '6142a45b-6256-492b-adaf-1b80f4a6db29'
        }
      ],
      categoryOrderHints: {},
      slug: {
        'en-US': 'robot-vacuum-cleaner-dyson-360-heurist',
        'ru-BY': 'dyson-360-heurist'
      },
      metaTitle: {
        'en-US': '',
        'ru-BY': ''
      },
      metaDescription: {
        'en-US': 'Advanced robot vacuum with intelligent navigation and powerful cleaning'
      },
      masterVariant: {
        id: 1,
        prices: [
          {
            id: 'c5359aa4-b892-4b94-847c-0fd5f3f4e448',
            value: {
              type: 'centPrecision',
              currencyCode: 'USD',
              centAmount: 13500,
              fractionDigits: 2
            }
          }
        ],
        images: [
          {
            url: 'https://755e0f1aa1999ba4f1c3-15401b2d188e8f81af17bec76ab4e8bc.ssl.cf3.rackcdn.com/2023-08-23_19-48-18-VDwBs72u.png',
            dimensions: {
              w: 1134,
              h: 783
            }
          },
          {
            url: 'https://755e0f1aa1999ba4f1c3-15401b2d188e8f81af17bec76ab4e8bc.ssl.cf3.rackcdn.com/2023-08-23_19-48-48-v2ymw-Wd.png',
            dimensions: {
              w: 1179,
              h: 665
            }
          },
          {
            url: 'https://755e0f1aa1999ba4f1c3-15401b2d188e8f81af17bec76ab4e8bc.ssl.cf3.rackcdn.com/2023-08-23_19-49-05-8WGPlHOt.png',
            dimensions: {
              w: 1620,
              h: 1061
            }
          },
          {
            url: 'https://755e0f1aa1999ba4f1c3-15401b2d188e8f81af17bec76ab4e8bc.ssl.cf3.rackcdn.com/IC21767-0009-00-Q0XQWrD7.jpg',
            label: 'card-logo',
            dimensions: {
              w: 333,
              h: 333
            }
          }
        ],
        attributes: [
          {
            name: 'color',
            value: ['yellow', 'red', 'blue']
          },
          {
            name: 'rating',
            value: 3.7
          }
        ],
        assets: []
      },
      variants: [],
      searchKeywords: {},
      hasStagedChanges: false,
      published: true,
      key: 'D-56',
      taxCategory: {
        typeId: 'tax-category',
        id: '8382e9dd-9486-4cb8-aae3-d21c9f393dba'
      },
      priceMode: 'Embedded',
      createdAt: '2023-08-23T16:52:09.990Z',
      lastModifiedAt: '2023-09-01T11:05:44.628Z'
    },
    {
      id: '9dce2565-cc8f-4933-aa23-793a310f981a',
      version: 45,
      productType: {
        typeId: 'product-type',
        id: '68046b49-b934-4449-8fc6-4478a6f998ee'
      },
      name: {
        'en-US': 'Modular robot KEYi Tech Maker Kit'
      },
      description: {
        'en-US': 'Modular Programmable Robot for STEM Education'
      },
      categories: [
        {
          typeId: 'category',
          id: '4913e529-c3ab-4232-8420-ee634592325d'
        }
      ],
      categoryOrderHints: {},
      slug: {
        'en-US': 'modular-robot-keyi-tech-maker-kit-ky002ck04'
      },
      metaTitle: {
        'en-US': '',
        'ru-BY': ''
      },
      metaDescription: {
        'en-US': '',
        'ru-BY': ''
      },
      masterVariant: {
        id: 1,
        sku: 'KY002CK04',
        prices: [
          {
            id: '7e1bd35e-1679-4211-a06d-80a789165b2a',
            value: {
              type: 'centPrecision',
              currencyCode: 'EUR',
              centAmount: 240000,
              fractionDigits: 2
            },
            key: 'modular',
            country: 'CY',
            validFrom: '2023-08-30T21:00:00.000Z',
            validUntil: '2023-10-30T21:00:00.000Z',
            discounted: {
              value: {
                type: 'centPrecision',
                currencyCode: 'EUR',
                centAmount: 204000,
                fractionDigits: 2
              },
              discount: {
                typeId: 'product-discount',
                id: 'f98fc1b2-46de-42e2-8820-e18be1ffbc05'
              }
            }
          }
        ],
        images: [
          {
            url: 'https://755e0f1aa1999ba4f1c3-15401b2d188e8f81af17bec76ab4e8bc.ssl.cf3.rackcdn.com/3_520165-MhT3WlEl.jpg',
            dimensions: {
              w: 1000,
              h: 1000
            }
          },
          {
            url: 'https://755e0f1aa1999ba4f1c3-15401b2d188e8f81af17bec76ab4e8bc.ssl.cf3.rackcdn.com/64341296709662-RPakDq6i.jpg',
            dimensions: {
              w: 1136,
              h: 777
            }
          },
          {
            url: 'https://755e0f1aa1999ba4f1c3-15401b2d188e8f81af17bec76ab4e8bc.ssl.cf3.rackcdn.com/64341293629470-70hsZqsg.jpg',
            dimensions: {
              w: 1124,
              h: 817
            }
          },
          {
            url: 'https://755e0f1aa1999ba4f1c3-15401b2d188e8f81af17bec76ab4e8bc.ssl.cf3.rackcdn.com/64341289500702-HYK4adc8.jpg',
            dimensions: {
              w: 1920,
              h: 983
            }
          },
          {
            url: 'https://755e0f1aa1999ba4f1c3-15401b2d188e8f81af17bec76ab4e8bc.ssl.cf3.rackcdn.com/clicbot_maker.600x60-wnCJxq_5.jpg',
            dimensions: {
              w: 600,
              h: 600
            }
          },
          {
            url: 'https://755e0f1aa1999ba4f1c3-15401b2d188e8f81af17bec76ab4e8bc.ssl.cf3.rackcdn.com/64341296709-R8xFdd8P.jpg',
            label: 'card-logo',
            dimensions: {
              w: 413,
              h: 282
            }
          }
        ],
        attributes: [
          {
            name: 'details',
            value: 54
          },
          {
            name: 'rating',
            value: 3.9
          },
          {
            name: 'model',
            value: 'FS-44'
          },
          {
            name: 'color',
            value: ['white']
          }
        ],
        assets: []
      },
      variants: [],
      searchKeywords: {},
      hasStagedChanges: false,
      published: true,
      key: 'KY002CK04',
      taxCategory: {
        typeId: 'tax-category',
        id: '8382e9dd-9486-4cb8-aae3-d21c9f393dba'
      },
      priceMode: 'Embedded',
      createdAt: '2023-08-30T21:08:28.870Z',
      lastModifiedAt: '2023-09-01T11:05:44.644Z'
    },
    {
      id: '4925df7e-18db-4c2a-915d-2d6205e43312',
      version: 42,
      productType: {
        typeId: 'product-type',
        id: '68046b49-b934-4449-8fc6-4478a6f998ee'
      },
      name: {
        'en-US': 'Modular robot KEYi Tech Standard Kit'
      },
      description: {
        'en-US': 'Modular Programmable Robot for STEM Education'
      },
      categories: [
        {
          typeId: 'category',
          id: '4913e529-c3ab-4232-8420-ee634592325d'
        }
      ],
      categoryOrderHints: {},
      slug: {
        'en-US': 'modular-robot-keyi-tech-standard-kit-ky002ck02'
      },
      metaTitle: {
        'en-US': '',
        'ru-BY': ''
      },
      metaDescription: {
        'en-US': '',
        'ru-BY': ''
      },
      masterVariant: {
        id: 1,
        sku: 'KY002CK02',
        prices: [
          {
            id: 'b0fc5f8c-8e66-4e7a-889d-8e94bc87b893',
            value: {
              type: 'centPrecision',
              currencyCode: 'EUR',
              centAmount: 79000,
              fractionDigits: 2
            },
            key: 'modular',
            country: 'CY',
            validFrom: '2023-08-30T21:00:00.000Z',
            validUntil: '2023-10-30T21:00:00.000Z'
          }
        ],
        images: [
          {
            url: 'https://755e0f1aa1999ba4f1c3-15401b2d188e8f81af17bec76ab4e8bc.ssl.cf3.rackcdn.com/efd3b97e9c11ef1bec86-Jfuje-Jv.jpg',
            dimensions: {
              w: 1200,
              h: 1200
            }
          },
          {
            url: 'https://755e0f1aa1999ba4f1c3-15401b2d188e8f81af17bec76ab4e8bc.ssl.cf3.rackcdn.com/36c90b277c5b08ad8bf3-0tiX3c8C.jpeg',
            dimensions: {
              w: 1080,
              h: 1080
            }
          },
          {
            url: 'https://755e0f1aa1999ba4f1c3-15401b2d188e8f81af17bec76ab4e8bc.ssl.cf3.rackcdn.com/c3b95f5b4e7a15ca5b51-Zwyxta9i.jpg',
            dimensions: {
              w: 1200,
              h: 1200
            }
          },
          {
            url: 'https://755e0f1aa1999ba4f1c3-15401b2d188e8f81af17bec76ab4e8bc.ssl.cf3.rackcdn.com/98176d9213e847fee3a7-2Yaib-_4.jpeg',
            dimensions: {
              w: 1080,
              h: 1080
            }
          },
          {
            url: 'https://755e0f1aa1999ba4f1c3-15401b2d188e8f81af17bec76ab4e8bc.ssl.cf3.rackcdn.com/f9cb4c025c1e09c3202c-s0oucUuv.jpg',
            dimensions: {
              w: 720,
              h: 720
            }
          },
          {
            url: 'https://755e0f1aa1999ba4f1c3-15401b2d188e8f81af17bec76ab4e8bc.ssl.cf3.rackcdn.com/1284e08904253e99201c-p2mt_GGe.jpg',
            dimensions: {
              w: 2400,
              h: 1600
            }
          },
          {
            url: 'https://755e0f1aa1999ba4f1c3-15401b2d188e8f81af17bec76ab4e8bc.ssl.cf3.rackcdn.com/FT1NVIA-JPXWRDOs.jpg',
            label: 'card-logo',
            dimensions: {
              w: 450,
              h: 447
            }
          }
        ],
        attributes: [
          {
            name: 'details',
            value: 24
          },
          {
            name: 'rating',
            value: 4.8
          },
          {
            name: 'model',
            value: 'G44'
          },
          {
            name: 'color',
            value: ['white']
          }
        ],
        assets: []
      },
      variants: [],
      searchKeywords: {},
      hasStagedChanges: false,
      published: true,
      key: 'KY002CK02',
      taxCategory: {
        typeId: 'tax-category',
        id: '8382e9dd-9486-4cb8-aae3-d21c9f393dba'
      },
      priceMode: 'Embedded',
      createdAt: '2023-08-31T07:49:51.160Z',
      lastModifiedAt: '2023-09-01T11:05:44.620Z'
    },
    {
      id: '118c8476-a546-4acf-a624-af8c99d13a52',
      version: 31,
      productType: {
        typeId: 'product-type',
        id: '68046b49-b934-4449-8fc6-4478a6f998ee'
      },
      name: {
        'en-US': 'Modular robot KEYi Tech Full Kit'
      },
      description: {
        'en-US': 'Modular Programmable Robot for STEM Education'
      },
      categories: [
        {
          typeId: 'category',
          id: '4913e529-c3ab-4232-8420-ee634592325d'
        }
      ],
      categoryOrderHints: {},
      slug: {
        'en-US': 'modular-robot-keyi-tech-full-kit-ky002ck03'
      },
      metaTitle: {
        'en-US': '',
        'ru-BY': ''
      },
      metaDescription: {
        'en-US': '',
        'ru-BY': ''
      },
      masterVariant: {
        id: 1,
        sku: 'KY002CK03',
        prices: [
          {
            id: '463c7ba7-9b08-4002-9afc-c09735fe6861',
            value: {
              type: 'centPrecision',
              currencyCode: 'EUR',
              centAmount: 109000,
              fractionDigits: 2
            },
            key: 'modular',
            country: 'CY',
            validFrom: '2023-08-30T21:00:00.000Z',
            validUntil: '2023-10-30T21:00:00.000Z'
          }
        ],
        images: [
          {
            url: 'https://755e0f1aa1999ba4f1c3-15401b2d188e8f81af17bec76ab4e8bc.ssl.cf3.rackcdn.com/615Ll6GUi6L._AC_SL15-PZw_h4Qj.jpg',
            dimensions: {
              w: 1500,
              h: 1436
            }
          },
          {
            url: 'https://755e0f1aa1999ba4f1c3-15401b2d188e8f81af17bec76ab4e8bc.ssl.cf3.rackcdn.com/64084210581534-N2tOXGAK.jpg',
            dimensions: {
              w: 1094,
              h: 786
            }
          },
          {
            url: 'https://755e0f1aa1999ba4f1c3-15401b2d188e8f81af17bec76ab4e8bc.ssl.cf3.rackcdn.com/71hlzBaXWwL._AC_SL15-MhrYDXTu.jpg',
            dimensions: {
              w: 1500,
              h: 1436
            }
          },
          {
            url: 'https://755e0f1aa1999ba4f1c3-15401b2d188e8f81af17bec76ab4e8bc.ssl.cf3.rackcdn.com/64084171784222-RxfiQygz.jpg',
            dimensions: {
              w: 1920,
              h: 785
            }
          },
          {
            url: 'https://755e0f1aa1999ba4f1c3-15401b2d188e8f81af17bec76ab4e8bc.ssl.cf3.rackcdn.com/640842105815-8NS-coF5.jpg',
            label: 'card-logo',
            dimensions: {
              w: 328,
              h: 235
            }
          }
        ],
        attributes: [
          {
            name: 'details',
            value: 36
          },
          {
            name: 'rating',
            value: 2
          },
          {
            name: 'model',
            value: 'GP-45+'
          },
          {
            name: 'color',
            value: ['white']
          }
        ],
        assets: []
      },
      variants: [],
      searchKeywords: {},
      hasStagedChanges: false,
      published: true,
      key: 'KY002CK03',
      taxCategory: {
        typeId: 'tax-category',
        id: '8382e9dd-9486-4cb8-aae3-d21c9f393dba'
      },
      priceMode: 'Embedded',
      createdAt: '2023-08-31T09:07:20.963Z',
      lastModifiedAt: '2023-09-01T11:05:44.619Z'
    },
    {
      id: '511f02d9-b9e1-4610-b485-758be2583953',
      version: 51,
      productType: {
        typeId: 'product-type',
        id: '6d8e4e0e-fd2c-4367-a165-1be12bc69eef'
      },
      name: {
        'en-US': 'Smart Robot'
      },
      description: {
        'en-US': "She's so playful you'll forget she's a robot. Now Loona integrated with ChatGPT!"
      },
      categories: [
        {
          typeId: 'category',
          id: 'ad4fdccc-21c4-41fa-8399-1f87dd273a80'
        }
      ],
      categoryOrderHints: {},
      slug: {
        'en-US': 'loona-smart-robot'
      },
      metaTitle: {
        'en-US': '',
        'ru-BY': ''
      },
      metaDescription: {
        'en-US': '',
        'ru-BY': ''
      },
      masterVariant: {
        id: 1,
        sku: 'Loona',
        prices: [
          {
            id: 'fbe307fe-5016-4664-869f-ac960e9e1db0',
            value: {
              type: 'centPrecision',
              currencyCode: 'EUR',
              centAmount: 48900,
              fractionDigits: 2
            },
            key: 'pet',
            country: 'CY',
            validFrom: '2023-08-30T21:00:00.000Z',
            validUntil: '2023-10-30T21:00:00.000Z'
          }
        ],
        images: [
          {
            url: 'https://755e0f1aa1999ba4f1c3-15401b2d188e8f81af17bec76ab4e8bc.ssl.cf3.rackcdn.com/robottoyloonasmartpe-svdhu50a.jpg',
            label: '',
            dimensions: {
              w: 324,
              h: 324
            }
          },
          {
            url: 'https://755e0f1aa1999ba4f1c3-15401b2d188e8f81af17bec76ab4e8bc.ssl.cf3.rackcdn.com/loona-3-600x600-cM-K9si4.jpg',
            dimensions: {
              w: 600,
              h: 600
            }
          },
          {
            url: 'https://755e0f1aa1999ba4f1c3-15401b2d188e8f81af17bec76ab4e8bc.ssl.cf3.rackcdn.com/loona-5-600x600-r5ikzkvl.jpg',
            dimensions: {
              w: 600,
              h: 600
            }
          },
          {
            url: 'https://755e0f1aa1999ba4f1c3-15401b2d188e8f81af17bec76ab4e8bc.ssl.cf3.rackcdn.com/loona-4-600x600-bSZHi4Ss.jpg',
            dimensions: {
              w: 600,
              h: 600
            }
          },
          {
            url: 'https://755e0f1aa1999ba4f1c3-15401b2d188e8f81af17bec76ab4e8bc.ssl.cf3.rackcdn.com/loona-6-600x600-x4QIultc.jpg',
            dimensions: {
              w: 600,
              h: 600
            }
          },
          {
            url: 'https://755e0f1aa1999ba4f1c3-15401b2d188e8f81af17bec76ab4e8bc.ssl.cf3.rackcdn.com/loona-main-600x600-BeCkktTu.jpg',
            label: 'card-logo',
            dimensions: {
              w: 600,
              h: 600
            }
          }
        ],
        attributes: [
          {
            name: 'rating',
            value: 4.1
          },
          {
            name: 'color',
            value: ['red', 'black']
          },
          {
            name: 'type',
            value: 'dog'
          }
        ],
        assets: []
      },
      variants: [],
      searchKeywords: {},
      hasStagedChanges: false,
      published: true,
      key: 'loona',
      taxCategory: {
        typeId: 'tax-category',
        id: '8382e9dd-9486-4cb8-aae3-d21c9f393dba'
      },
      priceMode: 'Embedded',
      createdAt: '2023-08-31T09:56:10.183Z',
      lastModifiedAt: '2023-09-01T11:05:44.627Z'
    },
    {
      id: '626ae956-0787-4406-b5cf-e8d3b269cb61',
      version: 27,
      productType: {
        typeId: 'product-type',
        id: 'c44d3c73-57b8-4edc-b5de-7df35c91d527'
      },
      name: {
        'en-US': 'Courier Delivery robot 5th generation'
      },
      description: {
        'en-US':
          'A small all-terrain vehicle with six wheels. Parcels weighing up to 20 kg are packed inside the robot. The robot is equipped with many sensors, lidar and is completely autonomous. It weighs 70 kg and has a top speed of up to 8 km/h.'
      },
      categories: [
        {
          typeId: 'category',
          id: '8f7bb6d4-bef7-483a-87b0-f26dd44e361f'
        }
      ],
      categoryOrderHints: {},
      slug: {
        'en-US': 'courier-delivery-robot-5th-generation-r14-45-gh'
      },
      metaTitle: {
        'en-US': ''
      },
      metaDescription: {
        'en-US': ''
      },
      masterVariant: {
        id: 1,
        sku: 'R14-45-GH',
        key: 'R14-45-GH',
        prices: [
          {
            id: 'c5410a79-8e75-4e13-a2d9-9572becc6504',
            value: {
              type: 'centPrecision',
              currencyCode: 'EUR',
              centAmount: 250000,
              fractionDigits: 2
            }
          }
        ],
        images: [
          {
            url: 'https://755e0f1aa1999ba4f1c3-15401b2d188e8f81af17bec76ab4e8bc.ssl.cf3.rackcdn.com/2023-08-31_19-50-58-_ZXejWJx.png',
            label: 'card-logo',
            dimensions: {
              w: 1587,
              h: 1187
            }
          },
          {
            url: 'https://755e0f1aa1999ba4f1c3-15401b2d188e8f81af17bec76ab4e8bc.ssl.cf3.rackcdn.com/2023-08-31_19-50-15-19vpJNwl.png',
            dimensions: {
              w: 1620,
              h: 1077
            }
          },
          {
            url: 'https://755e0f1aa1999ba4f1c3-15401b2d188e8f81af17bec76ab4e8bc.ssl.cf3.rackcdn.com/2023-08-31_19-50-33-sAbn8ZVh.png',
            dimensions: {
              w: 1616,
              h: 1078
            }
          },
          {
            url: 'https://755e0f1aa1999ba4f1c3-15401b2d188e8f81af17bec76ab4e8bc.ssl.cf3.rackcdn.com/2023-08-31_19-49-58-HUoz2Ni7.png',
            dimensions: {
              w: 1623,
              h: 1078
            }
          }
        ],
        attributes: [
          {
            name: 'rating',
            value: 2.8
          },
          {
            name: 'color',
            value: ['white', 'black']
          },
          {
            name: 'type',
            value: 'dog'
          }
        ],
        assets: []
      },
      variants: [],
      searchKeywords: {},
      hasStagedChanges: false,
      published: true,
      key: 'R14-45-GH',
      priceMode: 'Embedded',
      createdAt: '2023-08-31T16:57:26.898Z',
      lastModifiedAt: '2023-09-01T11:05:44.616Z'
    },
    {
      id: '5d7524e0-d15f-457e-ac19-195ee5b93817',
      version: 45,
      productType: {
        typeId: 'product-type',
        id: 'c44d3c73-57b8-4edc-b5de-7df35c91d527'
      },
      name: {
        'en-US': 'Сolony of robot ants Type-W'
      },
      description: {
        'en-US':
          'Robotic ants are able to communicate with each other, for example, by joint efforts to move large objects, the weight and size of which exceeds their own.\nArtificial ants demonstrate how autonomous individual elements cope with the task, working together, like a single networked system.\nThey communicate with each other, coordinate actions and movements, focusing on all members of the group.'
      },
      categories: [
        {
          typeId: 'category',
          id: '8f7bb6d4-bef7-483a-87b0-f26dd44e361f'
        },
        {
          typeId: 'category',
          id: 'a6f25e4e-4be2-405a-9d48-95784fbb30cc'
        }
      ],
      categoryOrderHints: {},
      slug: {
        'en-US': 'olony-of-robot-ants-type-w-8n-64-85'
      },
      metaTitle: {
        'en-US': ''
      },
      metaDescription: {
        'en-US': ''
      },
      masterVariant: {
        id: 1,
        sku: '8n-64-85',
        key: '8n-64-85',
        prices: [
          {
            id: '460e5ef2-7763-48a4-8017-f01183ecb38a',
            value: {
              type: 'centPrecision',
              currencyCode: 'EUR',
              centAmount: 899900,
              fractionDigits: 2
            }
          }
        ],
        images: [
          {
            url: 'https://755e0f1aa1999ba4f1c3-15401b2d188e8f81af17bec76ab4e8bc.ssl.cf3.rackcdn.com/2023-08-31_19-40-44-ZtkihmNl.png',
            label: 'card-logo',
            dimensions: {
              w: 1762,
              h: 998
            }
          },
          {
            url: 'https://755e0f1aa1999ba4f1c3-15401b2d188e8f81af17bec76ab4e8bc.ssl.cf3.rackcdn.com/2023-08-31_19-41-13-wwtuhewN.png',
            label: '',
            dimensions: {
              w: 1128,
              h: 748
            }
          },
          {
            url: 'https://755e0f1aa1999ba4f1c3-15401b2d188e8f81af17bec76ab4e8bc.ssl.cf3.rackcdn.com/2023-08-31_19-41-29-3SR6GLT0.png',
            dimensions: {
              w: 1501,
              h: 943
            }
          },
          {
            url: 'https://755e0f1aa1999ba4f1c3-15401b2d188e8f81af17bec76ab4e8bc.ssl.cf3.rackcdn.com/2023-08-31_19-41-53-g5qHBP7c.png',
            dimensions: {
              w: 1626,
              h: 994
            }
          },
          {
            url: 'https://755e0f1aa1999ba4f1c3-15401b2d188e8f81af17bec76ab4e8bc.ssl.cf3.rackcdn.com/2023-08-31_19-42-12-UyUWP64k.png',
            dimensions: {
              w: 1505,
              h: 994
            }
          },
          {
            url: 'https://755e0f1aa1999ba4f1c3-15401b2d188e8f81af17bec76ab4e8bc.ssl.cf3.rackcdn.com/2023-08-31_19-42-50-4a1o9PaQ.png',
            dimensions: {
              w: 1619,
              h: 1079
            }
          }
        ],
        attributes: [
          {
            name: 'rating',
            value: 4.8
          },
          {
            name: 'type',
            value: 'ants'
          },
          {
            name: 'color',
            value: ['black', 'yellow']
          }
        ],
        assets: []
      },
      variants: [],
      searchKeywords: {},
      hasStagedChanges: false,
      published: true,
      key: '8n-64-85',
      priceMode: 'Embedded',
      createdAt: '2023-08-31T17:10:39.238Z',
      lastModifiedAt: '2023-09-01T11:05:44.614Z'
    },
    {
      id: '11d6359f-1962-4a9f-ad19-4807002ed4c5',
      version: 41,
      productType: {
        typeId: 'product-type',
        id: 'c44d3c73-57b8-4edc-b5de-7df35c91d527'
      },
      name: {
        'en-US': 'RoboBee X-Wing+ universal'
      },
      description: {
        'en-US':
          'Pizza delivery bee. She has four wings, allowing the robot to fly long enough distances. The mass is 259 mg, the height is about 5 cm, and the wingspan is 3.5 cm.'
      },
      categories: [
        {
          typeId: 'category',
          id: '8f7bb6d4-bef7-483a-87b0-f26dd44e361f'
        }
      ],
      categoryOrderHints: {},
      slug: {
        'en-US': 'robobee-x-wing-universal-g52-re-uy'
      },
      metaTitle: {
        'en-US': ''
      },
      metaDescription: {
        'en-US': ''
      },
      masterVariant: {
        id: 1,
        sku: 'G52-RE-UY',
        key: 'G52-RE-UY',
        prices: [
          {
            id: 'ea5ba6c7-4e72-4b03-87b3-88f6671d8b9b',
            value: {
              type: 'centPrecision',
              currencyCode: 'EUR',
              centAmount: 500000,
              fractionDigits: 2
            }
          }
        ],
        images: [
          {
            url: 'https://755e0f1aa1999ba4f1c3-15401b2d188e8f81af17bec76ab4e8bc.ssl.cf3.rackcdn.com/2023-08-31_20-52-37-2OX2YDhE.png',
            label: '',
            dimensions: {
              w: 1593,
              h: 1072
            }
          },
          {
            url: 'https://755e0f1aa1999ba4f1c3-15401b2d188e8f81af17bec76ab4e8bc.ssl.cf3.rackcdn.com/2023-08-31_22-24-24-sTs32uI0.png',
            label: 'card-logo',
            dimensions: {
              w: 1238,
              h: 916
            }
          },
          {
            url: 'https://755e0f1aa1999ba4f1c3-15401b2d188e8f81af17bec76ab4e8bc.ssl.cf3.rackcdn.com/2023-08-31_22-23-55-Lf3FUqJN.png',
            dimensions: {
              w: 1714,
              h: 1124
            }
          }
        ],
        attributes: [
          {
            name: 'rating',
            value: 5
          },
          {
            name: 'type',
            value: 'bee'
          },
          {
            name: 'color',
            value: ['black', 'yellow']
          }
        ],
        assets: []
      },
      variants: [],
      searchKeywords: {},
      hasStagedChanges: false,
      published: true,
      key: 'G52-RE-UY',
      priceMode: 'Embedded',
      createdAt: '2023-08-31T18:21:29.058Z',
      lastModifiedAt: '2023-09-01T11:05:44.621Z'
    },
    {
      id: '0f085868-db83-4034-ac24-df0e5d43df3d',
      version: 35,
      productType: {
        typeId: 'product-type',
        id: '7fe51304-6a57-416a-a32a-5769ec58c0a0'
      },
      name: {
        'en-US': 'Moley Robotics'
      },
      description: {
        'en-US':
          'British start-up Moley Robotics has developed a prototype of a fully robotic kitchen that independently controls the cooking process. The team has been working on improving the project for six years and is now ready to install automated kitchen systems in ordinary residential buildings.\nRobotic arms that move around the kitchen thanks to a rail system built into the ceiling. They are able to control a touch-sensitive induction cooker, pour and mix ingredients, operate custom-made pots, pans and Moley Robotics smart appliances, as well as serve dishes and clean up. Optical cameras and sensors help robotic arms to understand exactly which food or utensils to use.'
      },
      categories: [
        {
          typeId: 'category',
          id: '6bcc9cbe-c2fa-41b9-b68a-fb355c53a853'
        }
      ],
      categoryOrderHints: {},
      slug: {
        'en-US': 'moley-robotics-br-11'
      },
      metaTitle: {
        'en-US': ''
      },
      metaDescription: {
        'en-US': ''
      },
      masterVariant: {
        id: 1,
        sku: 'BR-11',
        key: 'BR-11',
        prices: [
          {
            id: '8fcd311f-a570-4c0c-a7be-1aa47bb7b66f',
            value: {
              type: 'centPrecision',
              currencyCode: 'EUR',
              centAmount: 999900,
              fractionDigits: 2
            }
          }
        ],
        images: [
          {
            url: 'https://755e0f1aa1999ba4f1c3-15401b2d188e8f81af17bec76ab4e8bc.ssl.cf3.rackcdn.com/2023-08-31_22-44-50-UplaHG5p.png',
            label: 'card-logo',
            dimensions: {
              w: 2042,
              h: 1303
            }
          },
          {
            url: 'https://755e0f1aa1999ba4f1c3-15401b2d188e8f81af17bec76ab4e8bc.ssl.cf3.rackcdn.com/2023-08-31_22-44-29-A96hk0kh.png',
            dimensions: {
              w: 2045,
              h: 1327
            }
          },
          {
            url: 'https://755e0f1aa1999ba4f1c3-15401b2d188e8f81af17bec76ab4e8bc.ssl.cf3.rackcdn.com/2023-08-31_22-43-59-Ma8oW6Ut.png',
            dimensions: {
              w: 2094,
              h: 1264
            }
          },
          {
            url: 'https://755e0f1aa1999ba4f1c3-15401b2d188e8f81af17bec76ab4e8bc.ssl.cf3.rackcdn.com/2023-08-31_22-43-39-jlhj6bE2.png',
            dimensions: {
              w: 2224,
              h: 1343
            }
          },
          {
            url: 'https://755e0f1aa1999ba4f1c3-15401b2d188e8f81af17bec76ab4e8bc.ssl.cf3.rackcdn.com/2023-08-31_22-42-29-QQP3d3Sw.png',
            dimensions: {
              w: 1985,
              h: 1307
            }
          },
          {
            url: 'https://755e0f1aa1999ba4f1c3-15401b2d188e8f81af17bec76ab4e8bc.ssl.cf3.rackcdn.com/2023-08-31_22-43-00-DlsyhtTD.png',
            dimensions: {
              w: 2046,
              h: 1333
            }
          }
        ],
        attributes: [
          {
            name: 'rating',
            value: 5
          },
          {
            name: 'color',
            value: ['blue', 'gray', 'black']
          }
        ],
        assets: []
      },
      variants: [],
      searchKeywords: {},
      hasStagedChanges: false,
      published: true,
      key: 'BR-11',
      priceMode: 'Embedded',
      createdAt: '2023-08-31T19:50:22.886Z',
      lastModifiedAt: '2023-09-01T11:05:44.689Z'
    },
    {
      id: 'bfe1b8a9-843d-4605-a5a8-2b2b91b274a8',
      version: 14,
      productType: {
        typeId: 'product-type',
        id: '7fe51304-6a57-416a-a32a-5769ec58c0a0'
      },
      name: {
        'en-US': 'Kitchen robot 19 in 1 KitchenBot M1'
      },
      description: {
        'en-US':
          'The Atvel KitchenBot M1 kitchen robot is an innovative multi-cooker that combines 19 different appliances for preparing delicious dishes, such as a food processor, steamer, soup cooker, meat grinder, blender, mixer, slow cooker, sous-vide, coffee grinder, scales, yogurt maker and others . It is equipped with a self-cleaning function and a step-by-step recipe book to help you create a variety of dishes. Thanks to the latest electronic algorithm, the KitchenBot M1 automatically calculates the cooking time and temperature, saving you time and money.'
      },
      categories: [
        {
          typeId: 'category',
          id: '6bcc9cbe-c2fa-41b9-b68a-fb355c53a853'
        }
      ],
      categoryOrderHints: {},
      slug: {
        'en-US': 'kitchen-robot-19-in-1-kitchenbot-m1'
      },
      metaTitle: {
        'en-US': ''
      },
      metaDescription: {
        'en-US': ''
      },
      masterVariant: {
        id: 1,
        sku: '43201',
        key: '43201',
        prices: [
          {
            id: '2c1b6978-60eb-46f0-88a8-300e730af81c',
            value: {
              type: 'centPrecision',
              currencyCode: 'EUR',
              centAmount: 20000,
              fractionDigits: 2
            }
          }
        ],
        images: [
          {
            url: 'https://755e0f1aa1999ba4f1c3-15401b2d188e8f81af17bec76ab4e8bc.ssl.cf3.rackcdn.com/6716765591-Gp4wno1P.jpg',
            dimensions: {
              w: 1200,
              h: 1200
            }
          },
          {
            url: 'https://755e0f1aa1999ba4f1c3-15401b2d188e8f81af17bec76ab4e8bc.ssl.cf3.rackcdn.com/4-KpgAfas3.png',
            dimensions: {
              w: 1680,
              h: 1680
            }
          },
          {
            url: 'https://755e0f1aa1999ba4f1c3-15401b2d188e8f81af17bec76ab4e8bc.ssl.cf3.rackcdn.com/2-oyT_aH62.png',
            label: 'card-logo',
            dimensions: {
              w: 1680,
              h: 1680
            }
          }
        ],
        attributes: [
          {
            name: 'rating',
            value: 4.6
          },
          {
            name: 'color',
            value: ['blue', 'white']
          }
        ],
        assets: []
      },
      variants: [],
      searchKeywords: {},
      hasStagedChanges: false,
      published: true,
      key: '43201',
      priceMode: 'Embedded',
      createdAt: '2023-08-31T20:11:28.768Z',
      lastModifiedAt: '2023-09-01T11:05:44.561Z'
    },
    {
      id: 'e2820a72-a59d-456b-9150-5bdd3e8a7721',
      version: 22,
      productType: {
        typeId: 'product-type',
        id: '9edf70f3-610e-4de1-af35-06605b717328'
      },
      name: {
        'en-US': 'Robot lawnmower Robomow'
      },
      description: {
        'en-US':
          'The robotic lawn mower Robomow RS630 PRD6000A is an independent machine that mows the lawn and, if necessary, returns to the base to recharge the battery. The device is equipped with ultra-sharp knives, the length of which reaches the edges of the body. The scope of delivery includes a wire-limiter, which indicates the mowing area. You can start and control the machine using Bluetooth and a mobile phone, you only need to download the application from the network. Low noise level will not cause discomfort to others.'
      },
      categories: [
        {
          typeId: 'category',
          id: 'a6f25e4e-4be2-405a-9d48-95784fbb30cc'
        }
      ],
      categoryOrderHints: {},
      slug: {
        'en-US': 'robot-lawnmower-robomow-rs630'
      },
      metaTitle: {
        'en-US': ''
      },
      metaDescription: {
        'en-US': ''
      },
      masterVariant: {
        id: 1,
        sku: 'RS630',
        key: 'RS630',
        prices: [
          {
            id: 'b0c2ccd9-b90f-48da-ae6d-0c26a0341265',
            value: {
              type: 'centPrecision',
              currencyCode: 'EUR',
              centAmount: 40800,
              fractionDigits: 2
            }
          }
        ],
        images: [
          {
            url: 'https://755e0f1aa1999ba4f1c3-15401b2d188e8f81af17bec76ab4e8bc.ssl.cf3.rackcdn.com/src_img_2250_1-S_NPD02s.jpg',
            dimensions: {
              w: 1024,
              h: 683
            }
          },
          {
            url: 'https://755e0f1aa1999ba4f1c3-15401b2d188e8f81af17bec76ab4e8bc.ssl.cf3.rackcdn.com/2023-08-31_23-37-45-E6o10G_O.png',
            dimensions: {
              w: 1204,
              h: 796
            }
          },
          {
            url: 'https://755e0f1aa1999ba4f1c3-15401b2d188e8f81af17bec76ab4e8bc.ssl.cf3.rackcdn.com/2023-08-31_23-38-52-k2iYcneT.png',
            dimensions: {
              w: 1201,
              h: 1198
            }
          },
          {
            url: 'https://755e0f1aa1999ba4f1c3-15401b2d188e8f81af17bec76ab4e8bc.ssl.cf3.rackcdn.com/2023-08-31_23-39-58-9Xh_iJp0.png',
            dimensions: {
              w: 1408,
              h: 985
            }
          },
          {
            url: 'https://755e0f1aa1999ba4f1c3-15401b2d188e8f81af17bec76ab4e8bc.ssl.cf3.rackcdn.com/2023-08-31_23-35-39-jd3LyJOq.png',
            label: 'card-logo',
            dimensions: {
              w: 1989,
              h: 1221
            }
          }
        ],
        attributes: [
          {
            name: 'rating',
            value: 3.4
          },
          {
            name: 'color',
            value: ['green', 'red', 'black']
          }
        ],
        assets: []
      },
      variants: [],
      searchKeywords: {},
      hasStagedChanges: false,
      published: true,
      key: 'RS630',
      priceMode: 'Embedded',
      createdAt: '2023-08-31T20:46:01.098Z',
      lastModifiedAt: '2023-09-01T11:05:44.567Z'
    },
    {
      id: 'f44bdd42-f4dc-4543-8c7e-32eb46caf9d9',
      version: 35,
      productType: {
        typeId: 'product-type',
        id: '6d8e4e0e-fd2c-4367-a165-1be12bc69eef'
      },
      name: {
        'en-US': 'Transformer-Dog protector Walter'
      },
      description: {
        'en-US':
          'This is indeed a very smart and talented dog. She can carry out a whole list of commands: lie down, stand up, voice. The dog has two modes:\n1) cute gentle pet dog\n2) angry dog protector\nThe modes are switched using the remote control or on the phone. The second mode transforms the dog from a kind and sweet dog into an evil protector dog.'
      },
      categories: [
        {
          typeId: 'category',
          id: 'ad4fdccc-21c4-41fa-8399-1f87dd273a80'
        },
        {
          typeId: 'category',
          id: '4913e529-c3ab-4232-8420-ee634592325d'
        }
      ],
      categoryOrderHints: {},
      slug: {
        'en-US': 'transformer-dog-protector-walter'
      },
      metaTitle: {
        'en-US': ''
      },
      metaDescription: {
        'en-US': ''
      },
      masterVariant: {
        id: 1,
        sku: 'V-78',
        key: 'V-78',
        prices: [
          {
            id: 'f2051918-1e62-4675-bb57-4d0dd0a69da5',
            value: {
              type: 'centPrecision',
              currencyCode: 'EUR',
              centAmount: 400000,
              fractionDigits: 2
            }
          }
        ],
        images: [
          {
            url: 'https://755e0f1aa1999ba4f1c3-15401b2d188e8f81af17bec76ab4e8bc.ssl.cf3.rackcdn.com/21f8cd97463219515338-MQTjEAZS.jpg',
            dimensions: {
              w: 960,
              h: 720
            }
          },
          {
            url: 'https://755e0f1aa1999ba4f1c3-15401b2d188e8f81af17bec76ab4e8bc.ssl.cf3.rackcdn.com/2023-09-01_08-43-32-nrb0O6pG.png',
            label: '',
            dimensions: {
              w: 1740,
              h: 1087
            }
          },
          {
            url: 'https://755e0f1aa1999ba4f1c3-15401b2d188e8f81af17bec76ab4e8bc.ssl.cf3.rackcdn.com/2023-09-01_08-58-16-OAVcFwZr.png',
            dimensions: {
              w: 1704,
              h: 1009
            }
          },
          {
            url: 'https://755e0f1aa1999ba4f1c3-15401b2d188e8f81af17bec76ab4e8bc.ssl.cf3.rackcdn.com/2023-09-01_08-42-57-pKbfnaS7.png',
            label: '',
            dimensions: {
              w: 1740,
              h: 967
            }
          },
          {
            url: 'https://755e0f1aa1999ba4f1c3-15401b2d188e8f81af17bec76ab4e8bc.ssl.cf3.rackcdn.com/2023-09-01_08-39-07-fnMTYTyF.png',
            label: 'card-logo',
            dimensions: {
              w: 1883,
              h: 1104
            }
          }
        ],
        attributes: [
          {
            name: 'rating',
            value: 4.2
          },
          {
            name: 'color',
            value: ['white', 'gray', 'black']
          },
          {
            name: 'type',
            value: 'dog'
          }
        ],
        assets: []
      },
      variants: [],
      searchKeywords: {},
      hasStagedChanges: false,
      published: true,
      key: 'V-78',
      priceMode: 'Embedded',
      createdAt: '2023-09-01T05:55:27.847Z',
      lastModifiedAt: '2023-09-01T11:05:44.626Z'
    },
    {
      id: '418dcdab-14c8-4a09-8e8a-34aecb41f1c8',
      version: 6,
      productType: {
        typeId: 'product-type',
        id: '9edf70f3-610e-4de1-af35-06605b717328'
      },
      name: {
        'en-US': 'Grasshopper YAMAHA'
      },
      description: {
        'en-US':
          'A grasshopper robot is useful for scaring away insects in a summer cottage. Moving around your garden, it gives off smoke that repels small insects: mosquitoes, flies, etc. It is absolutely safe for humans.'
      },
      categories: [
        {
          typeId: 'category',
          id: 'a6f25e4e-4be2-405a-9d48-95784fbb30cc'
        }
      ],
      categoryOrderHints: {},
      slug: {
        'en-US': 'grasshopper-yamaha'
      },
      metaTitle: {
        'en-US': ''
      },
      metaDescription: {
        'en-US': ''
      },
      masterVariant: {
        id: 1,
        sku: 'R1K1',
        key: 'R1K1',
        prices: [
          {
            id: '262517e8-6ad3-469d-b313-4aa2bc32cbe2',
            value: {
              type: 'centPrecision',
              currencyCode: 'EUR',
              centAmount: 70000,
              fractionDigits: 2
            }
          }
        ],
        images: [
          {
            url: 'https://755e0f1aa1999ba4f1c3-15401b2d188e8f81af17bec76ab4e8bc.ssl.cf3.rackcdn.com/2023-09-02_12-27-05-qMZShg4U.png',
            label: 'card-logo',
            dimensions: {
              w: 1546,
              h: 963
            }
          }
        ],
        attributes: [
          {
            name: 'rating',
            value: 3.5
          },
          {
            name: 'color',
            value: ['black', 'green']
          }
        ],
        assets: []
      },
      variants: [],
      searchKeywords: {},
      hasStagedChanges: false,
      published: true,
      key: 'R1K1',
      priceMode: 'Embedded',
      createdAt: '2023-09-02T09:32:17.229Z',
      lastModifiedAt: '2023-09-02T09:33:43.108Z'
    }
  ]
};

export const productDataTest: ProductProjection = {
  id: '12345',
  version: 143,
  productType: {
    typeId: 'product-type',
    id: '12345'
  },
  name: {
    'en-US': 'Product Name'
  },
  description: {
    'en-US': 'Product Description'
  },
  categories: [
    {
      typeId: 'category',
      id: '4913e529-c3ab-4232-8420-ee634592325d'
    }
  ],
  categoryOrderHints: {},
  slug: {
    'en-US': 'modular-robot-keyi-tech-starter-kit'
  },
  metaTitle: {
    'en-US': '',
    'ru-BY': ''
  },
  metaDescription: {
    'en-US': '',
    'ru-BY': ''
  },
  masterVariant: {
    id: 1,
    sku: '',
    key: '1001',
    prices: [
      {
        id: '03639a8c-8ce1-4177-a03e-3da39220911a',
        value: {
          type: 'centPrecision',
          currencyCode: 'EUR',
          centAmount: 40,
          fractionDigits: 2
        },
        key: 'modular',
        country: 'CY',
        validFrom: '2023-08-27T21:00:00.000Z',
        validUntil: '2023-10-30T21:00:00.000Z'
      }
    ],
    images: [
      {
        url: '',
        label: 'card-logo',
        dimensions: {
          w: 190,
          h: 190
        }
      }
    ],
    attributes: [
      {
        name: 'details',
        value: 12
      },
      {
        name: 'rating',
        value: 3.8
      },
      {
        name: 'model',
        value: 'FT-6567'
      },
      {
        name: 'color',
        value: ['white', 'gray', 'black']
      }
    ],
    assets: []
  },
  variants: [],
  searchKeywords: {},
  hasStagedChanges: false,
  published: true,
  key: '',
  taxCategory: {
    typeId: 'tax-category',
    id: '8382e9dd-9486-4cb8-aae3-d21c9f393dba'
  },
  priceMode: 'Embedded',
  createdAt: '2023-08-23T08:27:14.024Z',
  lastModifiedAt: '2023-09-01T11:05:44.574Z'
};

describe('getExtremums', () => {
  test('should return the correct extremums', () => {
    const extremumsTest = getExtremums(productsDataTest);
    expect(extremumsTest).toEqual([135, 9999]);
  });
});

describe('getProductParams', () => {
  test('with test data', () => {
    const result = getProductParams(productDataTest, productDataTest.masterVariant);
    expect(result).toEqual({
      url: '',
      name: 'Product Name ',
      description: 'Product Description',
      priceTag: { price: 0.4, discount: 0 },
      id: '12345',
      images: [
        {
          url: '',
          label: 'card-logo',
          dimensions: {
            w: 190,
            h: 190
          }
        }
      ],
      attributes: [
        {
          name: 'details',
          value: 12
        },
        {
          name: 'rating',
          value: 3.8
        },
        {
          name: 'model',
          value: 'FT-6567'
        },
        {
          name: 'color',
          value: ['white', 'gray', 'black']
        }
      ]
    });
  });
});
