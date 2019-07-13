import gql from 'graphql-tag';

export const GetProduct = gql`
  query GetProduct($id: String!) {
    product(id: $id) {
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
