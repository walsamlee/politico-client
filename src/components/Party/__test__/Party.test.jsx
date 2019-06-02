import React from 'react';
import { shallow } from 'enzyme';
import mock from '../../../utils/mock';
import Party from '../Party';

const { partiesData } = mock;
const { parties } = partiesData;

describe('<Party />', () => {
  it('should render Party component', () => {
    const wrapper = shallow(
      <Party party={parties.parties[0]} />,
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('div'));
  });
});
