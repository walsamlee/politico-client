import React from 'react';
import { shallow } from 'enzyme';
import GetOffices from '../GetOffices';
import mock from '../../../utils/mock';

const { partiesData, data, party } = mock;
const dispatch = '';

describe('<GetOffices />', () => {
  it('should render GetOffices component', () => {
    const wrapper = shallow(
      <GetOffices
        data={data}
        parties={partiesData}
        party={party}
        getOffices={jest.fn()}
        dispatch={dispatch}
      />,
    );
    const event = {
      preventDefault: jest.fn(),
      target: {
        name: '',
      },
    };
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('div'));
    wrapper.instance().changeHandler(event);
  });
});
