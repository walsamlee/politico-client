import React from 'react';
import { shallow } from 'enzyme';
import Menu from '../Menu';

describe('<Menu />', () => {
  it('should render Menu component', () => {
    const wrapper = shallow(
      <Menu />,
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('div'));
  });
});
