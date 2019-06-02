import React from 'react';
import { shallow } from 'enzyme';
import mock from '../../../utils/mock';
import Candidates from '../Candidates';

const { data } = mock;

describe('<Candidates />', () => {
  it('should render candidates component', () => {
    const wrapper = shallow(
      <Candidates data={data} fetchCandidates={jest.fn()} />,
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('div'));
  });
});
