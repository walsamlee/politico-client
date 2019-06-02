import React from 'react';
import { shallow } from 'enzyme';
import mock from '../../../utils/mock';
import Register from '../Register';

const { registerData } = mock;

describe('<Register />', () => {
  it('should render Register component', () => {
    const wrapper = shallow(
      <Register userData={registerData} registerUser={jest.fn()} imageFormData={jest.fn()} />,
    );
    const event = {
      preventDefault: jest.fn(),
      target: {
        name: '',
        value: '',
        files: [],
      },
    };
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('div'));
    wrapper.instance().registerHandler(event);
    wrapper.instance().changeHandler(event);
  });
});
