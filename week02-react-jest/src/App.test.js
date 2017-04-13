import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ReactBasics } from './App';
import { shallow } from 'enzyme';

describe('React Jest Suite', function ()
{
    it('renders without our App component without crashing', () =>
    {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
    });

    it('renders and reads H1 text', () =>
    {
        const wrapper = shallow(<App />);
        const welcome = <h2>Welcome to React</h2>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders and displays the word Nine', () =>
    {
        const wrapper = shallow(<App />);
        const welcome = <p>'Nine: 0'</p>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders button click message', () =>
    {
        const wrapper = shallow(<App />);
        const nineSign = <p>Nine: 9</p>;
        wrapper.find('button').simulate('click');
        expect(wrapper.contains(nineSign)).toEqual(true);
    });
});
