import React from 'react';

import SmallProductItem from '../SmallProductItem';
import { shallow } from 'enzyme';

it('renders <SmallProductItem />', () => {
  const wrapper = shallow(
    <SmallProductItem
      id="asd"
      name="This is a rather long product name"
      size="M, S, XL"
      pictureUrl="https://image.jpg"
      price={120000}
    />
  );

  expect(wrapper).toMatchSnapshot();
});
