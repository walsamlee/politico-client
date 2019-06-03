import React from 'react';
import { shallow } from 'enzyme';
import Loader from '../Loader';

describe('<spinLoader />', () => {
  it('should render spinLoader component', () => {
    const wrapper = shallow(
      <Loader />,
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('div'));
  });
});
