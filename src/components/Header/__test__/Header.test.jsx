import React from 'react';
import { shallow } from 'enzyme';
import mock from '../../../utils/mock';
import Header from '../Header';

const { token } = mock;

describe('<Header />', () => {
  it('should render Header component', () => {
    const wrapper = shallow(
      <Header token={token} />,
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('div'));
  });
});
