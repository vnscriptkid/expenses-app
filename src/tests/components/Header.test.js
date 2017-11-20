// import ReactShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import Header from '../../components/Header';
import { shallow } from 'enzyme';
// import toJSON from 'enzyme-to-json';

// test('should render Header correctly', () => {
//     const renderer = new ReactShallowRenderer();
//     renderer.render(<Header />);
//     expect(renderer.getRenderOutput()).toMatchSnapshot();
// })

test('should render Header correctly', () => {
    const wrapper = shallow(<Header />);
    // expect(wrapper.find('h1').text()).toBe('Expensify');
    // expect(toJSON(wrapper)).toMatchSnapshot();
    expect(wrapper).toMatchSnapshot();
})