import React from 'react';
import styled from 'styled-components';
import { Button } from 'semantic-ui-react';
import { Query } from 'react-apollo';
import { GetCategories as GetCategoriesQuery } from '../graphql/queries/GetCategories';
import { GetCategories } from '../graphql/queries/__generated__/GetCategories';
import { GetProducts as GetProductsQuery } from '../graphql/queries/GetProducts';
import { GetProducts } from '../graphql/queries/__generated__/GetProducts';
import CategoryItem from '../components/CategoryItem';
import Loading from '../components/Loading';
import ProductList from '../components/ProductList';
import { Link } from 'react-router-dom';

const Container = styled.div`
  background-color: white;
  padding: 8px;
  margin-bottom: 8px;

  div.header {
    display: flex;
    align-items: center;
    padding-left: 14px;
    height: 56px;

    h3 {
      flex: 1;
      margin: 0;
    }
  }
`;

const RowContent = styled.div`
  display: flex;
  flex-direction: row;
`;

const EditorialImage = styled.img`
  width: 100%;
  height: auto;
`;

const Catalog: React.FC = () => (
  <div>
    <Container>
      <div className="header">
        <h3>Terbaru</h3>
        <Link
          to={{
            pathname: '/products',
            state: {
              title: 'Semua Produk'
            }
          }}
        >
          <Button basic color="red">
            Lihat Semua
          </Button>
        </Link>
      </div>
    </Container>
    <Container>
      <div className="header">
        <h3>Kategori</h3>
      </div>
      <RowContent>
        <Query<GetCategories> query={GetCategoriesQuery}>
          {({ loading, data, error }) => {
            if (loading) {
              return <Loading />;
            }

            if (error || !data) {
              return <p>Gagal mengambil kategori :/</p>;
            }

            return data.categories.map(category => (
              <CategoryItem key={category.id} {...category} />
            ));
          }}
        </Query>
      </RowContent>
    </Container>
    <Container>
      <div className="header">
        <h3>Berdasarkan Harga</h3>
      </div>
      <RowContent>
        <Link
          style={{ flex: 1, marginRight: 4 }}
          to={{
            pathname: '/price/0',
            state: {
              title: 'Dibawah Rp 150.000'
            }
          }}
        >
          <Button fluid size="big" color="red">
            Dibawah Rp 150.000
          </Button>
        </Link>
        <Link
          style={{ flex: 1, marginLeft: 4 }}
          to={{
            pathname: '/price/1',
            state: {
              title: '150.000 - 250.000'
            }
          }}
        >
          <Button fluid size="big" color="red">
            150.000 - 250.000
          </Button>
        </Link>
      </RowContent>
    </Container>
    <Container>
      <div className="header">
        <h3>Editorial</h3>
      </div>
      <EditorialImage src="https://imager-next.freetls.fastly.net/images/resized/480/assets-category-banner/250619_Sub-Category_DRESS.jpg" />
    </Container>
    <Container style={{ marginBottom: 0 }}>
      <div className="header">
        <h3>Rekomendasi Produk</h3>
      </div>
    </Container>
    <Query<GetProducts>
      query={GetProductsQuery}
      variables={{
        first: 4
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

export default Catalog;
