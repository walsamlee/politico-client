import React from 'react';
import { shallow } from 'enzyme';
import mock from '../../../utils/mock';
import Profile from '../Profile';

const { profileData } = mock;

describe('<Profile />', () => {
  it('should render Profile component', () => {
    const wrapper = shallow(
      <Profile party={profileData} />,
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('div'));
  });
});
