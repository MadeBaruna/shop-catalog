import gql from 'graphql-tag';

export const GetProducts = gql`
  query GetProducts(
    $first: Int
    $after: String
    $category: String
    $priceRange: Int
  ) {
    products(
      first: $first
      after: $after
      category: $category
      priceRange: $priceRange
    ) {
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
