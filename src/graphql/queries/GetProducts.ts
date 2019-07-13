import gql from 'graphql-tag';

export const GetProducts = gql`
  query GetProducts {
    products {
      id
      name
      pictures {
        id
        pictureUrl
      }
      size
      price
      purchaseCount
      material
      color
      sizeGuide
      detail
      createdAt
    }
  }
`;
