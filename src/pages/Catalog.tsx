import React from 'react';
import styled from 'styled-components';
import { Button } from 'semantic-ui-react';

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
    </Container>
    <Container>
      <div className="header">
        <h3>Berdasarkan Harga</h3>
      </div>
    </Container>
    <Container>
      <div className="header">
        <h3>Editorial</h3>
      </div>
    </Container>
    <Container>
      <div className="header">
        <h3>Rekomendasi Produk</h3>
      </div>
    </Container>
  </div>
);

export default Catalog;
