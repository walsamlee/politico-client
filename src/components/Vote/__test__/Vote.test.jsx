import React from 'react';
import { shallow } from 'enzyme';
import mock from '../../../utils/mock';
import Vote from '../Vote';

const { voteData } = mock;

describe('<Vote />', () => {
  it('should render vote component', () => {
    const wrapper = shallow(
      <Vote voteData={voteData} castVote={jest.fn()} />,
    );
    const event = {
      preventDefault: jest.fn(),
    };
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('div'));
    wrapper.instance().voteHandler(event);
  });
});
