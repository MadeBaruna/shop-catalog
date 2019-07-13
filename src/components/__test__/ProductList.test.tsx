import React from 'react';

import { mount } from 'enzyme';
import { Query } from 'react-apollo';
import { MockedProvider } from 'react-apollo/test-utils';
import { MemoryRouter } from 'react-router-dom';

import { GetProducts } from '../../graphql/queries/__generated__/GetProducts';
import { GetProducts as GetProductsQuery } from '../../graphql/queries/GetProducts';
import ProductList from '../ProductList';
import ProductItem from '../ProductItem';

it('Show product list', async () => {
  const mocks = [
    {
      request: {
        query: GetProductsQuery
      },
      result: {
        data: {
          products: [
            {
              id: 'cjy1bbrns02bk0707e0s73p14',
              name: 'Shahaby Plain A Line Mini Dress',
              pictures: [
                {
                  id: 'cjy1bbrnt02bl0707rk8eu4ov',
                  pictureUrl:
                    'https://imager-next.freetls.fastly.net/images/resized/480/5d9ff312-9477-4a49-827a-bb9e072f6363',
                  __typename: 'Picture'
                },
                {
                  id: 'cjy1bbrnv02bm07070qig1yni',
                  pictureUrl:
                    'https://imager-next.freetls.fastly.net/images/resized/480/ceb77a0e-fbdc-46ce-b47d-f3ecfc36ca9b',
                  __typename: 'Picture'
                },
                {
                  id: 'cjy1bbrnw02bn0707gpbh9b4x',
                  pictureUrl:
                    'https://imager-next.freetls.fastly.net/images/resized/480/d5c5a59f-6a68-47f8-9bf5-abd96ece8175',
                  __typename: 'Picture'
                },
                {
                  id: 'cjy1bbrnx02bo0707fprrjy0g',
                  pictureUrl:
                    'https://imager-next.freetls.fastly.net/images/resized/480/d01da635-24d6-4438-9d8f-a4892262426e',
                  __typename: 'Picture'
                }
              ],
              size: 'L, S, XL',
              price: 129000,
              purchaseCount: 1,
              material: 'Balotelli',
              color: 'Maroon, Dusty Pink, Mustard',
              sizeGuide:
                'Warna : Maroon, Mustard dan Nude (kiri ke kanan)\n\nSize S\nLingkar dada 90 cm\nLebar bahu 36 cm\nPanjang lengan 20 cm\nLingkar lengan 45 cm\nPanjang 90 cm\nLingkar pinggang 92 cm\nLingkar pinggul 96 cm\n\nSize M\nLingkar dada 94 cm\nLebar bahu 37 cm\nPanjang lengan 20 cm\nLingkar lengan 47 cm\nPanjang 90 cm\nLingkar pinggang 96 cm\nLingkar pinggul 100 cm\n\nSize L\nLingkar dada 100 cm\nLebar bahu 39 cm\nPanjang lengan 21 cm\nLingkar lengan 49 cm\nPanjang 92 cm\nLingkar pinggang 102 cm\nLingkar pinggul 106 cm\n\nSize XL\nLingkar dada 110 cm\nLebar bahu 41 cm\nPanjang lengan 23 cm\nLingkar lengan 53 cm\nPanjang 95 cm\nLingkar pinggang 112 cm\nLingkar pinggul 116 cm\n\nStandar Sorabel\nModel Menggunakan Size M dan Warna Mustard\n\n',
              detail:
                '2 Saku samping, 5 Kancing depan hidup, 2 Kancing ujung lengan variasi',
              createdAt: '2019-07-13T09:13:28.261Z',
              __typename: 'Product'
            },
            {
              id: 'cjy1bbrny02bp0707cyhz513a',
              name: 'Mokzilla Stripe V-Neck Mini Dress',
              pictures: [
                {
                  id: 'cjy1bbrnz02bq0707f02lb2ul',
                  pictureUrl:
                    'https://imager-next.freetls.fastly.net/images/resized/480/d30dd206-70ab-4814-aa0c-68c1711ce749',
                  __typename: 'Picture'
                },
                {
                  id: 'cjy1bbro002br0707ruusj5ca',
                  pictureUrl:
                    'https://imager-next.freetls.fastly.net/images/resized/480/82f3272e-72b4-4545-b7d3-af383afdf07d',
                  __typename: 'Picture'
                },
                {
                  id: 'cjy1bbro102bs0707yleeuizq',
                  pictureUrl:
                    'https://imager-next.freetls.fastly.net/images/resized/480/5c210377-4bf6-449d-b1f6-0579c50e812d',
                  __typename: 'Picture'
                },
                {
                  id: 'cjy1bbro202bt07070mp6k8cr',
                  pictureUrl:
                    'https://imager-next.freetls.fastly.net/images/resized/480/0fd8ca07-cf18-4b75-be22-7e708b67ff1f',
                  __typename: 'Picture'
                },
                {
                  id: 'cjy1bbro302bu0707p4er4ax8',
                  pictureUrl:
                    'https://imager-next.freetls.fastly.net/images/resized/480/e9a0c31e-939b-43f4-b4fa-511998053c74',
                  __typename: 'Picture'
                }
              ],
              size: 'L, S, XL',
              price: 139000,
              purchaseCount: 1,
              material: 'Cotton',
              color: 'Black, Navy',
              sizeGuide:
                'Warna : Black dan Navy\nSize S\nLingkar dada 90 cm\nLebar bahu 36 cm\nPanjang lengan 45 cm\nLingkar lengan 45 cm\nPanjang 90 cm\nSize M\nLingkar dada 94 cm\nLebar bahu 37 cm\nPanjang lengan 45 cm\nLingkar lengan 47 cm\nPanjang 90 cm\nSize L\nLingkar dada 100 cm\nLebar bahu 39 cm\nPanjang lengan 46 cm\nLingkar lengan 49 cm\nPanjang 92 cm\nSize XL\nLingkar dada 110 cm\nLebar bahu 41 cm\nPanjang lengan 47 cm\nLingkar lengan 53 cm\nPanjang 95 cm\nUkuran Sorabel\nModel Menggunakan Size M',
              detail: null,
              createdAt: '2019-07-13T09:13:28.261Z',
              __typename: 'Product'
            },
            {
              id: 'cjy1bbro402bv0707bfjs6hbu',
              name: 'Y&F Crislaz Salur Kerut Mini Dress',
              pictures: [
                {
                  id: 'cjy1bbro502bw0707i0ykyr6m',
                  pictureUrl:
                    'https://imager-next.freetls.fastly.net/images/resized/480/23d5a155-f3b4-4fa2-a40d-63c2d1414081',
                  __typename: 'Picture'
                },
                {
                  id: 'cjy1bbro702bx070701q6ego2',
                  pictureUrl:
                    'https://imager-next.freetls.fastly.net/images/resized/480/e4af663e-1a97-406b-bcfb-59bd0a16ddd0',
                  __typename: 'Picture'
                },
                {
                  id: 'cjy1bbro802by07073fw6i4o2',
                  pictureUrl:
                    'https://imager-next.freetls.fastly.net/images/resized/480/eda51344-6394-48db-be36-b2006a2f4113',
                  __typename: 'Picture'
                },
                {
                  id: 'cjy1bbro902bz0707j7gwmki8',
                  pictureUrl:
                    'https://imager-next.freetls.fastly.net/images/resized/480/07fc97c9-10d3-4992-93ef-893bab3441fc',
                  __typename: 'Picture'
                },
                {
                  id: 'cjy1bbroa02c007079ykecplj',
                  pictureUrl:
                    'https://imager-next.freetls.fastly.net/images/resized/480/7c2d7191-1172-448c-99e1-928a32aac479',
                  __typename: 'Picture'
                },
                {
                  id: 'cjy1bbrob02c10707we9xs6ty',
                  pictureUrl:
                    'https://imager-next.freetls.fastly.net/images/resized/480/ad3dd9c0-803d-4da8-9d69-485fa9ee5824',
                  __typename: 'Picture'
                }
              ],
              size: 'L, M, S',
              price: 159000,
              purchaseCount: 1,
              material: 'Flannel',
              color: 'Blue, Khaki, Navy',
              sizeGuide:
                'Warna: Black, Blue, Khaki, dan Navy\n\nSize S\nLingkar dada 90 cm\nLebar bahu 36 cm\nPanjang lengan 18 cm\nLingkar lengan 45 cm\nPanjang 95 cm\nSize M\nLingkar dada 94 cm\nLebar bahu 37 cm\nPanjang lengan 18 cm\nLingkar lengan 47 cm\nPanjang 95 cm\nSize L\nLingkar dada 100 cm\nLebar bahu 39 cm\nPanjang lengan 19 cm\nLingkar lengan 49 cm\nPanjang 97 cm\nSize XL\nLingkar dada 110 cm\nLebar bahu 41 cm\nPanjang lengan 20 cm\nLingkar lengan 53 cm\nPanjang 100 cm\nUkuran Sorabel\nModel Menggunakan Size:  M\n\n',
              detail: 'Kancing depan, Saku depan',
              createdAt: '2019-07-13T09:13:28.261Z',
              __typename: 'Product'
            },
            {
              id: 'cjy1bbroc02c20707l2o3af56',
              name: 'Y&F Avnee Polkadot Flare Mini Dress',
              pictures: [
                {
                  id: 'cjy1bbrod02c30707nij7da8w',
                  pictureUrl:
                    'https://imager-next.freetls.fastly.net/images/resized/480/89972787-eb20-4234-abfb-36b64a95144d',
                  __typename: 'Picture'
                },
                {
                  id: 'cjy1bbroe02c40707ybio6se2',
                  pictureUrl:
                    'https://imager-next.freetls.fastly.net/images/resized/480/a1a26a1d-dced-4cd7-a435-a9c32ca619a5',
                  __typename: 'Picture'
                },
                {
                  id: 'cjy1bbrof02c50707nraiyebb',
                  pictureUrl:
                    'https://imager-next.freetls.fastly.net/images/resized/480/955e5816-ffc9-447e-9b97-a2d206c4440b',
                  __typename: 'Picture'
                },
                {
                  id: 'cjy1bbrog02c60707v10n1uip',
                  pictureUrl:
                    'https://imager-next.freetls.fastly.net/images/resized/480/6c7e8488-a137-43d2-baa8-e5719041ee15',
                  __typename: 'Picture'
                },
                {
                  id: 'cjy1bbrog02c707077se0c2xk',
                  pictureUrl:
                    'https://imager-next.freetls.fastly.net/images/resized/480/4b51b2ce-c7f7-423b-923c-fefe61310d49',
                  __typename: 'Picture'
                },
                {
                  id: 'cjy1bbroh02c80707123whrsr',
                  pictureUrl:
                    'https://imager-next.freetls.fastly.net/images/resized/480/41263e6f-0010-4b33-a25c-bf98febf6044',
                  __typename: 'Picture'
                }
              ],
              size: 'L, M, S, XL',
              price: 159000,
              purchaseCount: 1,
              material: 'Crepe',
              color: 'Mint, Peach, Grey',
              sizeGuide:
                'Warna: Peach / Grey / Mint / Black\n\nSize S\nPanjang lengan 20 cm\nLingkar lengan 35 cm\nPanjang 90 cm\nSize M\nPanjang lengan 21 cm\nLingkar lengan 37 cm\nPanjang 90 cm\nSize L\nPanjang lengan 22 cm\nLingkar lengan 39 cm\nPanjang 92 cm\nSize XL\nPanjang lengan 25 cm\nLingkar lengan 43 cm\nPanjang 95 cm\nUkuran Sorabel\nSize yang digunakan Model: M\n\n',
              detail: null,
              createdAt: '2019-07-13T09:13:28.261Z',
              __typename: 'Product'
            }
          ]
        }
      }
    }
  ];

  const wrapper = mount(
    <MemoryRouter initialEntries={['/']} initialIndex={1}>
      <MockedProvider mocks={mocks} addTypename={false}>
        <Query<GetProducts> query={GetProductsQuery}>
          {({ loading, data, error, fetchMore }) => {
            if (error || !data) {
              return <p>Gagal mengambil produk :/</p>;
            }

            return (
              <ProductList
                loading={loading}
                products={data.products}
                onLoadMore={() =>
                  fetchMore({
                    variables: {
                      after: data.products
                        ? data.products[data.products.length - 1].id
                        : undefined
                    },
                    updateQuery: (prev, { fetchMoreResult }) => {
                      if (!fetchMoreResult) return prev;
                      return Object.assign({}, prev, {
                        products: [
                          ...prev.products,
                          ...fetchMoreResult.products
                        ]
                      });
                    }
                  })
                }
              />
            );
          }}
        </Query>
      </MockedProvider>
    </MemoryRouter>
  );

  await new Promise(resolve => setTimeout(resolve));
  wrapper.update();

  expect(wrapper.find(ProductItem)).toHaveLength(4);
});
