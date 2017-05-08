import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/SmallNumbers';
import { ReactBasics } from '../components/SmallNumbers';
import { shallow } from 'enzyme';

describe('React Jest Suite - App', function ()
{
    it('renders without our App component without crashing', () =>
    {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
    });

    it('renders and displays the word Nine', () =>
    {
        const wrapper = shallow(<App />);
        const welcome = <p className="App-intro">Nine: 0</p>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders button click message', () =>
    {
        const wrapper = shallow(<App />);
        const nineSign = <p className="App-intro">Nine: 9</p>;
        wrapper.find('button').simulate('click');
        expect(wrapper.contains(nineSign)).toEqual(true);
    });
});
