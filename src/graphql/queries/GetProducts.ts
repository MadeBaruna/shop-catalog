import gql from 'graphql-tag';

export const GetProducts = gql`
  query GetProducts($first: Int, $skip: Int) {
    products(first: $first, skip: $skip) {
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
