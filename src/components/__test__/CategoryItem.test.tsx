import React from 'react';

import CategoryItem from '../CategoryItem';
import { shallow } from 'enzyme';

it('renders <CategoryItem />', () => {
  const wrapper = shallow(
      <CategoryItem id="1" name="Midi Dress" pictureUrl="http://a.jpg" />
  );

  expect(wrapper).toMatchSnapshot();
});
