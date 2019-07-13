import gql from 'graphql-tag';

export const GetCategories = gql`
  query GetCategories {
    categories {
      id
      name
      pictureUrl
      order
    }
  }
`;
