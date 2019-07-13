import React, { Component } from 'react';
import styled from 'styled-components';
import { Query } from 'react-apollo';
import { GetProduct as GetProductQuery } from '../graphql/queries/GetProduct';
import { GetProduct } from '../graphql/queries/__generated__/GetProduct';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import Loading from '../components/Loading';
import { Button, Icon } from 'semantic-ui-react';

const Picture = styled.img`
  width: 100%;
  height: auto;
`;

const Container = styled.div`
  background: white;
  border-bottom: 1px solid #eee;
  padding: 16px;

  h3 {
    margin-top: 4px;
    margin-bottom: 0;
  }

  p {
    font-size: 16px;
    margin-bottom: 8px;
  }
`;

const ToggleContainer = styled.div`
  background: white;
  border-bottom: 1px solid #eee;
  padding: 16px;
  margin-top: 8px;
  display: flex;

  p {
    flex: 1;
    font-size: 16px;
    margin: 0;
  }
`;

const SubTitle = styled.p`
  text-transform: uppercase;
  font-size: 14px;
  margin: 0;
  color: #777;
`;

class ProductDetail extends Component<RouteComponentProps<{ id: string }>> {
  public componentDidMount() {
    window.scrollTo(0, 0);
  }

  public render() {
    const { match } = this.props;

    return (
      <Query<GetProduct>
        query={GetProductQuery}
        variables={{
          id: match.params.id
        }}
      >
        {({ loading, data, error }) => {
          if (loading) {
            return <Loading />;
          }

          if (error || !data) {
            return <p>Gagal mengambil kategori :/</p>;
          }

          const { product } = data;
          return (
            <div>
              <Picture src={product.pictures[0].pictureUrl} />
              <Container>
                <h3>{product.name}</h3>
                <h3 style={{ color: 'red' }}>
                  {new Intl.NumberFormat('id-ID').format(product.price)}
                </h3>
              </Container>
              <Container>
                <SubTitle>BAHAN UTAMA</SubTitle>
                <p>{product.material}</p>
              </Container>
              <Container>
                <p>Warna: {product.color}</p>
                <p>Ukuran: {product.size}</p>
              </Container>
              <Container style={{ display: 'flex' }}>
                <Button>SIMPAN</Button>
                <Button color="red" fluid>
                  BELI SEKARANG
                </Button>
              </Container>
              <ToggleContainer>
                <p>Detail & Ukuran</p>
                <Icon name="chevron down" />
              </ToggleContainer>
              <Container>
                <SubTitle>DETAIL</SubTitle>
                <p>
                  {product.detail &&
                    product.detail.split('\n').map((text, i) => (
                      <React.Fragment key={i}>
                        <span>{text}</span>
                        <br />
                      </React.Fragment>
                    ))}
                </p>
              </Container>
              <Container>
                <SubTitle>PANDUAN UKURAN</SubTitle>
                <p>
                  {product.sizeGuide &&
                    product.sizeGuide
                      .trim()
                      .split('\n')
                      .map((text, i) => (
                        <React.Fragment key={i}>
                          <span>{text}</span>
                          <br />
                        </React.Fragment>
                      ))}
                </p>
              </Container>
              <Container>
                <SubTitle>PRODUK BISA DICOBA DAN DIKEMBALIKAN</SubTitle>
                <p>YA</p>
              </Container>
              <br />
            </div>
          );
        }}
      </Query>
    );
  }
}

export default withRouter(ProductDetail);
