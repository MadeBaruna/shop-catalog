/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetProduct
// ====================================================

export interface GetProduct_product_pictures {
  __typename: "Picture";
  id: string;
  pictureUrl: string;
}

export interface GetProduct_product {
  __typename: "Product";
  id: string;
  name: string;
  pictures: GetProduct_product_pictures[];
  size: string;
  price: number;
  purchaseCount: number;
  material: string;
  color: string;
  sizeGuide: string | null;
  detail: string | null;
  createdAt: string;
}

export interface GetProduct {
  product: GetProduct_product;
}

export interface GetProductVariables {
  id: string;
}
