import 'reactn';
import { GetProduct_product } from './graphql/queries/__generated__/GetProduct';

declare module 'reactn/default' {
  export interface Reducers {
    setBuyPopupVisible: (
      global: State,
      dispatch: Dispatch,
      buyPopupVisible: boolean,
    ) => Pick<State, 'buyPopupVisible'>;

    setBuyPopupProduct: (
      global: State,
      dispatch: Dispatch,
      buyPopupProduct: GetProduct_product,
    ) => Pick<State, 'buyPopupProduct'>;
  }

  export interface State {
    buyPopupVisible: boolean;
    buyPopupProduct: GetProduct_product;
  }
}
