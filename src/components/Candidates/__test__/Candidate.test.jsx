import React from 'react';
import { shallow } from 'enzyme';
import mock from '../../../utils/mock';
import Candidates from '../Candidate';

const { details } = mock;

describe('<Candidates />', () => {
  it('should render candidates component', () => {
    const wrapper = shallow(
      <Candidates details={details} />,
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('div'));
  });
});
