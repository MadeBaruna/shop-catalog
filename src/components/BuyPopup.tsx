import React, { useGlobal } from 'reactn';
import styled from 'styled-components';
import { Icon, Button } from 'semantic-ui-react';

const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(82, 82, 82, 0.9);
`;

const Container = styled.div`
  position: fixed;
  bottom: 0;
  margin: 0 auto;
  width: 100%;
  max-width: 480px;
`;

const Header = styled.div`
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  width: 100%;
  background: white;
  display: flex;
  padding: 16px;
  border-bottom: 1px solid #eee;

  div {
    flex: 1;
  }

  img {
    width: 64px;
    height: 64px;
    border-radius: 4px;
    margin-right: 16px;
  }

  p {
    margin-bottom: 4px;
    font-size: 16px;
  }

  h3 {
    margin-top: 0px;
  }

  span {
    background: #30ac30;
    color: white;
    padding: 2px 6px;
    border-radius: 9px;
    font-size: 11px;
  }
`;

const Content = styled.div`
  background: #fcfcfc;
  padding: 16px;

  div {
    display: flex;
    padding: 8px 0;
  }

  p {
    margin: 0;
    font-size: 16px;
  }
`;

const BuyPopup: React.FC = () => {
  const [buyPopupVisible, setbuyPopupVisible] = useGlobal('buyPopupVisible');
  const [buyPopupProduct] = useGlobal('buyPopupProduct');

  if (!buyPopupProduct) return null;

  return (
    <div style={{ display: buyPopupVisible ? 'block' : 'none' }}>
      <Backdrop />
      <Container>
        <Header>
          <img src={buyPopupProduct.pictures[0].pictureUrl} />
          <div>
            <span>Coba Dulu</span>
            <p>{buyPopupProduct.name}</p>
            <h3>
              {new Intl.NumberFormat('id-ID').format(buyPopupProduct.price)}
            </h3>
          </div>
          <Icon
            name="close"
            size="large"
            color="grey"
            onClick={() => setbuyPopupVisible(false)}
          />
        </Header>
        <Content>
          <p>Pilih warna yang tersedia</p>
          <div>
            {buyPopupProduct.color.split(',').map(color => (
              <Button basic color="black">
                {color}
              </Button>
            ))}
          </div>
          <p>Pilih ukuran yang tersedia</p>
          <div>
            {buyPopupProduct.size.split(',').map(size => (
              <Button basic color="black">
                {size}
              </Button>
            ))}
          </div>
        </Content>
      </Container>
    </div>
  );
};

export default BuyPopup;
