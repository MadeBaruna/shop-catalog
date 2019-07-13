import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Icon, Button } from 'semantic-ui-react';

const Div = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  padding: 8px;

  img {
    width: 100%;
    height: auto;
  }
`;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 8px 0;
  margin-bottom: 8px;
`;

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;

  p {
    font-size: 16px;
    margin-bottom: 4px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-right: 8px;
  }

  h3 {
    margin-top: 8px;
  }
`;

interface IProps {
  id: string;
  name: string;
  pictureUrl: string;
  size: string;
  price: number;
}

const priceFormat = new Intl.NumberFormat('id-ID');

const SmallProductItem: React.FC<IProps> = ({
  id,
  name,
  size,
  price,
  pictureUrl
}) => (
  <Link
    style={{ width: '50%' }}
    to={{
      pathname: `/product/${id}`,
      state: {
        title: name
      }
    }}
  >
    <Div>
      <img src={pictureUrl} alt="gambar produk" />
      <DetailContainer>
        <Detail>
          <p>{name}</p>
          <p>{priceFormat.format(price)}</p>
        </Detail>
        <Icon name="heart outline" color="grey" size="large" />
      </DetailContainer>
    </Div>
  </Link>
);

export default SmallProductItem;
