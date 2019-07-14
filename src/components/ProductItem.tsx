import React, { useGlobal } from 'reactn';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Icon, Button } from 'semantic-ui-react';
import { GetProduct_product } from '../graphql/queries/__generated__/GetProduct';

const Div = styled.div`
  display: flex;
  flex-direction: column;
  background: white;

  img {
    width: 100%;
    height: auto;
  }
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

const priceFormat = new Intl.NumberFormat('id-ID');

const ProductItem: React.FC<GetProduct_product> = product => {
  const [, setBuyPopupVisible] = useGlobal('buyPopupVisible');
  const [, setBuyPopupProduct] = useGlobal('buyPopupProduct');
  const { id, pictures, name, size, price } = product;

  return (
    <Div>
      <Link
        to={{
          pathname: `/product/${id}`,
          state: {
            title: name
          }
        }}
      >
        <img src={pictures[0].pictureUrl} alt="gambar produk" />
      </Link>
      <DetailContainer>
        <Detail>
          <p>{name}</p>
          <span>{size}</span>
          <h3>{priceFormat.format(price)}</h3>
        </Detail>
        <ButtonContainer>
          <Icon name="heart outline" color="grey" size="large" />
          <BuyButton
            color="red"
            onClick={() => {
              setBuyPopupProduct(product);
              setBuyPopupVisible(true);
            }}
          >
            BELI
          </BuyButton>
        </ButtonContainer>
      </DetailContainer>
    </Div>
  );
};

export default ProductItem;
