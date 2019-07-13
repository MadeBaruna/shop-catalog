import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Icon, Button } from 'semantic-ui-react';

const Div = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
`;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 8px 16px;
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

  span {
    background: #e8e8e8;
    align-self: flex-start;
    padding: 3px 8px;
  }

  h3 {
    margin-top: 8px;
  }
`;

const ButtonContainer = styled.div`
  margin-right: -8px;
`;

const BuyButton = styled(Button)`
  margin-left: 8px !important;
`;

interface IProps {
  id: string;
  name: string;
  pictureUrl: string;
  size: string;
  price: number;
}

const priceFormat = new Intl.NumberFormat('id-ID');

const ProductItem: React.FC<IProps> = ({
  id,
  name,
  size,
  price,
  pictureUrl
}) => (
  <Link to={`/product/${id}`}>
    <Div>
      <img src={pictureUrl} alt="gambar produk" />
      <DetailContainer>
        <Detail>
          <p>{name}</p>
          <span>{size}</span>
          <h3>{priceFormat.format(price)}</h3>
        </Detail>
        <ButtonContainer>
          <Icon name="heart outline" color="grey" size="large" />
          <BuyButton color="red">BELI</BuyButton>
        </ButtonContainer>
      </DetailContainer>
    </Div>
  </Link>
);

export default ProductItem;
