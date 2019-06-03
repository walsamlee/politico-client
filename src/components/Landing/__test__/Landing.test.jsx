import React from 'react';
import { shallow } from 'enzyme';
import Landing from '../Landing';

describe('<Landing />', () => {
  it('should render Login component', () => {
    const wrapper = shallow(
      <Landing />,
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('div'));
  });
});
