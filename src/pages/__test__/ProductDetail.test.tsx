import React from 'react';

import { mount } from 'enzyme';
import { MockedProvider } from 'react-apollo/test-utils';
import { MemoryRouter } from 'react-router-dom';

import { GetProducts as GetProductsQuery } from '../../graphql/queries/GetProducts';
import ProductDetail from '../ProductDetail';

it('Show product detail', async () => {
  const mocks = [
    {
      request: {
        query: GetProductsQuery,
        variables: {
          id: 'cjy1bbrns02bk0707e0s73p14'
        }
      },
      result: {
        data: {
          product: {
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
          }
        }
      }
    }
  ];

  window.scrollTo = jest.fn();

  const wrapper = mount(
    <MemoryRouter
      initialEntries={['/product/cjy1bbrns02bk0707e0s73p14']}
      initialIndex={1}
      keyLength={0}
    >
      <MockedProvider mocks={mocks} addTypename={false}>
        <ProductDetail />
      </MockedProvider>
    </MemoryRouter>
  );

  await new Promise(resolve => setTimeout(resolve));
  wrapper.update();
  expect(wrapper).toMatchSnapshot();
});
