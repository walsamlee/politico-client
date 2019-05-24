import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import App from '../App';

configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('renders one <App /> component', () => {
    const component = shallow(<App />);
    expect(component).toHaveLength(1);
  });
});
