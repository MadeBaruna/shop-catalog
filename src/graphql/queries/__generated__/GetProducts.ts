/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetProducts
// ====================================================

export interface GetProducts_products_pictures {
  __typename: "Picture";
  id: string;
  pictureUrl: string;
}

export interface GetProducts_products {
  __typename: "Product";
  id: string;
  name: string;
  pictures: GetProducts_products_pictures[];
  size: string;
  price: number;
  purchaseCount: number;
  material: string;
  color: string;
  sizeGuide: string | null;
  detail: string | null;
  createdAt: string;
}

export interface GetProducts {
  products: GetProducts_products[];
}
