import React from 'react';
import { shallow } from 'enzyme';
import Logout from '../Logout';

describe('<Login />', () => {
  it('should render Login component', () => {
    const wrapper = shallow(
      <Logout logoutHandler={jest.fn()} />,
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('div'));
    wrapper.instance().logoutHandler();
  });
});
