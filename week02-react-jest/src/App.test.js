import React from 'react';
import ReactDOM from 'react-dom';
import ElfHeader from './components/ElfHeader';
import App from './App';
import Address from './components/Address';
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
        const wrapper = shallow(<ElfHeader />);
        const welcome = <h2>Welcome to React</h2>;
        expect(wrapper.contains(welcome)).toEqual(true);
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

    it('renders and displays the default first name', () =>
    {
        const wrapper = shallow(<Address />);
        const welcome = <p className="App-intro">firstName: unknown</p>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders button click message', () =>
    {
        const wrapper = shallow(<Address />);
        const welcome = <p className="App-intro">firstName: foo</p>;
        wrapper.find('button').simulate('click');
        expect(wrapper.contains(welcome)).toEqual(true);
    });
});
