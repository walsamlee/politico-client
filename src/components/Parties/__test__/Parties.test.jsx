import React from 'react';
import { shallow } from 'enzyme';
import mock from '../../../utils/mock';
import Parties from '../Parties';

const { partiesData } = mock;


describe('<Parties />', () => {
  it('should render Parties component', () => {
    const wrapper = shallow(
      <Parties data={partiesData} fetchParties={jest.fn()} />,
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('div'));
  });
});
