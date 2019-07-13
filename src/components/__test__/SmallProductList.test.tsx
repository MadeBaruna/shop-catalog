import React from 'react';

import { mount } from 'enzyme';
import { MockedProvider } from 'react-apollo/test-utils';

import { GetProducts as GetProductsQuery } from '../../graphql/queries/GetProducts';
import SmallProductList from '../SmallProductList';
import SmallProductItem from '../SmallProductItem';
import { MemoryRouter } from 'react-router-dom';

it('Show small product list', async () => {
  const mocks = [
    {
      request: {
        query: GetProductsQuery,
        variables: {
          first: 2
        }
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
          ]
        }
      }
    }
  ];

  const wrapper = mount(
    <MemoryRouter initialEntries={['/']} initialIndex={1}>
      <MockedProvider mocks={mocks} addTypename={false}>
        <SmallProductList />
      </MockedProvider>
    </MemoryRouter>
  );

  await new Promise(resolve => setTimeout(resolve));
  wrapper.update();

  expect(wrapper.find(SmallProductItem)).toHaveLength(2);
});
