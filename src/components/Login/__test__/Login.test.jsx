import React from 'react';
import { shallow } from 'enzyme';
import mock from '../../../utils/mock';
import Login from '../Login';

const { login } = mock;
const data = login;

describe('<Login />', () => {
  it('should render Login component', () => {
    const wrapper = shallow(
      <Login data={data} fetchUser={jest.fn()} />,
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
    wrapper.instance().changeHandler(event);
  });
});
