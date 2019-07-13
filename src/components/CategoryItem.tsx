import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 23px 10px 23px;

  img {
    width: 64px;
    height: 64px;
    border-radius: 32px;
    margin-bottom: 4px;
  }

  p {
    text-transform: uppercase;
    font-size: 12px;
  }
`;

interface IProps {
  id: string;
  name: string;
  pictureUrl: string;
}

const CategoryItem: React.FC<IProps> = ({ id, name, pictureUrl }) => (
  <Link
    to={{
      pathname: `/products/${id}`,
      state: {
        title: name
      }
    }}
  >
    <Div>
      <img src={pictureUrl} alt="gambar kategori" />
      <p>{name}</p>
    </Div>
  </Link>
);

export default CategoryItem;
