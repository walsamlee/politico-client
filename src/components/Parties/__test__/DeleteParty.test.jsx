import React from 'react';
import { shallow } from 'enzyme';
import mock from '../../../utils/mock';
import DeleteParty from '../DeleteParty';

const { token } = mock;

describe('<DeleteParty />', () => {
  it('should render DeleteParty component', () => {
    const wrapper = shallow(
      <DeleteParty
        partyId={1}
        token={token}
        deleteParty={jest.fn()}
      />,
    );
    const event = {
      preventDefault: jest.fn(),
    };
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('div'));
    wrapper.instance().deleteHandler(event);
  });
});
