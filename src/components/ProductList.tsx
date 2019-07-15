import React, { Component } from 'react';
import { debounce } from 'debounce';

import { GetProducts_products } from '../graphql/queries/__generated__/GetProducts';
import ProductItem from './ProductItem';
import Loading from './Loading';

interface IProps {
  products: GetProducts_products[];
  loading: boolean;
  onLoadMore: () => {};
}

class ProductList extends Component<IProps> {
  public componentDidMount() {
    window.addEventListener('scroll', this.onScroll, false);
  }

  public componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false);
  }

  onScroll = debounce(() => {
    const height = Math.max(
      document.body.scrollHeight,
      document.body.clientHeight,
      document.body.offsetHeight,
      document.documentElement.scrollHeight,
      document.documentElement.offsetHeight,
      document.documentElement.clientHeight
    );

    if (window.innerHeight + document.documentElement.scrollTop <= height - 200)
      return;
    this.props.onLoadMore();
  }, 200);

  public render() {
    const { loading, products } = this.props;

    if (!products && loading) {
      return <Loading />;
    }

    return (
      <div>
        {products.map(product => (
          <ProductItem key={product.id} {...product} />
        ))}
        {loading && <Loading />}
      </div>
    );
  }
}

export default ProductList;
