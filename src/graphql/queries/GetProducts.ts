import gql from 'graphql-tag';

export const GetProducts = gql`
  query GetProducts($first: Int, $after: String) {
    products(first: $first, after: $after) {
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
