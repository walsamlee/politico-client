import React from 'react';
import { shallow } from 'enzyme';
import mock from '../../../utils/mock';
import CreateOffice from '../CreateOffice';

const { token } = mock;

describe('<CreateOffice />', () => {
  it('should render CreateOffice component', () => {
    const wrapper = shallow(
      <CreateOffice token={token} createOffice={jest.fn()} />,
    );
    const event = {
      preventDefault: jest.fn(),
      target: {
        name: '',
        value: '',
      },
    };
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('div'));
    wrapper.instance().submitHandler(event);
    wrapper.instance().changeHandler(event);
    wrapper.instance().resetHandler();
  });
});
