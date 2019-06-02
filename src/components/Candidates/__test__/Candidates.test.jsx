import React from 'react';
import { shallow } from 'enzyme';
import mock from '../../../utils/mock';
import Candidates from '../Candidates';

const { data, candidate } = mock;

describe('<Candidates />', () => {
  it('should render candidates component', () => {
    const wrapper = shallow(
      <Candidates data={data} fetchCandidates={jest.fn()} item={candidate} />,
    );
    const event = {
      preventDefault: jest.fn(),
      data: {},
      candidate: {},
      candidates: [],
      target: {
        value: '10',
      },
    };
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('div'));
    wrapper.instance().selectChangeHandler(event);
  });
});
