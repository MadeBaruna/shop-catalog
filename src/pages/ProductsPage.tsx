import React from 'react';
import { Query } from 'react-apollo';
import { GetProducts as GetProductsQuery } from '../graphql/queries/GetProducts';
import { GetProducts } from '../graphql/queries/__generated__/GetProducts';
import ProductList from '../components/ProductList';
import { withRouter, RouteComponentProps } from 'react-router';

const ProductsPage: React.FC<RouteComponentProps<{category: string}>> = ({ match }) => (
  <div>
    <Query<GetProducts>
      query={GetProductsQuery}
      variables={{
        first: 4,
        category: match.params.category,
      }}
    >
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
                    products: [...prev.products, ...fetchMoreResult.products]
                  });
                }
              })
            }
          />
        );
      }}
    </Query>
    <br />
  </div>
);

export default withRouter(ProductsPage);
