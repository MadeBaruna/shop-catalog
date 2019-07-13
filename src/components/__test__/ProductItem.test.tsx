import React from 'react';

import ProductItem from '../ProductItem';
import { shallow } from 'enzyme';

it('renders <ProductItem />', () => {
  const wrapper = shallow(
    <ProductItem
      id="asd"
      name="This is a rather long product name"
      size="M, S, XL"
      pictureUrl="https://image.jpg"
      price={120000}
    />
  );

  expect(wrapper).toMatchSnapshot();
});
