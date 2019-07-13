import React from 'react';
import { mount } from 'enzyme';
import { Icon } from 'semantic-ui-react';
import { MemoryRouter } from 'react-router-dom';

import Header from '../Header';

it('renders <Header /> components with a title', async () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={['/']} initialIndex={1}>
      <Header title="title" />
    </MemoryRouter>
  );

  await new Promise(resolve => setTimeout(resolve));
  wrapper.update();

  const title = wrapper.find("h3");
  expect(title.text()).toEqual("title");
});

it('renders <Header /> without back button on homepage', async () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={['/']} initialIndex={1}>
      <Header title="title" />
    </MemoryRouter>
  );

  await new Promise(resolve => setTimeout(resolve));
  wrapper.update();

  const icons = wrapper.find(Icon);
  expect(icons).toHaveLength(0);
});

it('renders <Header /> with back button on other page', async () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={['/products']} initialIndex={1}>
      <Header title="title" />
    </MemoryRouter>
  );

  await new Promise(resolve => setTimeout(resolve));
  wrapper.update();

  const icons = wrapper.find(Icon);
  expect(icons).toHaveLength(1);
});