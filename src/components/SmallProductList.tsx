import React, { Component } from 'react';

import { GetProducts as GetProductsQuery } from '../graphql/queries/GetProducts';
import { GetProducts } from '../graphql/queries/__generated__/GetProducts';
import Loading from './Loading';
import { Query } from 'react-apollo';
import SmallProductItem from './SmallProductItem';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  flex-direction: row;
`;

const SmallProductList: React.FC = () => (
  <Query<GetProducts>
    query={GetProductsQuery}
    variables={{
      first: 2
    }}
  >
    {({ loading, data, error }) => {
      if (loading) {
        return <Loading />;
      }

      if (error || !data) {
        return <p>Gagal mengambil produk :/</p>;
      }

      const { products } = data;
      return (
        <Div>
          {products.map(product => (
            <SmallProductItem
              key={product.id}
              {...product}
              pictureUrl={product.pictures[0].pictureUrl}
            />
          ))}
        </Div>
      );
    }}
  </Query>
);

export default SmallProductList;
