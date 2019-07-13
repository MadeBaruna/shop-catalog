import React from 'react';
import styled from 'styled-components';
import { Button } from 'semantic-ui-react';
import { Query } from 'react-apollo';
import { GetCategories as GetCategoriesQuery } from '../graphql/queries/GetCategories';
import { GetCategories } from '../graphql/queries/__generated__/GetCategories';
import CategoryItem from '../components/CategoryItem';

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
        <Button basic color="red">
          Lihat Semua
        </Button>
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
              return null;
            }

            if (error || !data) {
              return null;
            }

            return data.categories.map(category => (
              <CategoryItem {...category} />
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
        <Button fluid size="big" color="red">
          Dibawah Rp 150.000
        </Button>
        <Button fluid size="big" color="red">
          150.000 - 250.000
        </Button>
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
    <br />
  </div>
);

export default Catalog;
