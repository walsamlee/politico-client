import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../Footer';

describe('<Footer />', () => {
  it('should render Footer component', () => {
    const wrapper = shallow(
      <Footer />,
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('div'));
  });
});
