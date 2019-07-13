/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetCategories
// ====================================================

export interface GetCategories_categories {
  __typename: "Category";
  id: string;
  name: string;
  pictureUrl: string;
  order: number;
}

export interface GetCategories {
  categories: GetCategories_categories[];
}
