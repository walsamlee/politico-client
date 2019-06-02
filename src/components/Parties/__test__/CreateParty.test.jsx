import React from 'react';
import { shallow } from 'enzyme';
import mock from '../../../utils/mock';
import CreateParty from '../CreateParty';

const { token, partyData } = mock;

describe('<CreateParty />', () => {
  it('should render CreateParty component', () => {
    const wrapper = shallow(
      <CreateParty
        partyData={partyData}
        token={token}
        createParty={jest.fn()}
        imageFormData={jest.fn()}
      />,
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
    wrapper.instance().submitHandler(event);
    wrapper.instance().changeHandler(event);
    wrapper.instance().resetHandler();
  });
});
