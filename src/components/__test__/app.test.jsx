import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

describe('<App />', () => {
  it('renders one <App /> component', () => {
    const component = shallow(<App />);
    expect(component).toHaveLength(1);
    expect(component).toMatchSnapshot();
  });
});
