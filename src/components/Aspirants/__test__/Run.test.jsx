import React from 'react';
import { shallow } from 'enzyme';
import mock from '../../../utils/mock';
import Run from '../Run';

const { aspirantData } = mock;

describe('<GetOffices />', () => {
  it('should render GetOffices component', () => {
    const wrapper = shallow(
      <Run aspirantData={aspirantData} runForOffice={jest.fn()} />,
    );
    const event = {
      preventDefault: jest.fn(),
      target: {
        name: '',
      },
    };
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('div'));
    wrapper.instance().submitHandler(event);
  });
});
