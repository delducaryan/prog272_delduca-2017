import React from 'react';
import ReactDOM from 'react-dom';
import ElfHeader from './components/ElfHeader';
import App from './App';
import Address from './components/Address';
import addresses from './components/address-list';
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

    it('renders and displays the default firstName', () =>
    {
        const wrapper = shallow(<Address addressList={addresses}/>);
        const welcome = <p className="App-intro">firstName: unknown</p>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders button click firstName', () =>
    {
        const wrapper = shallow(<Address addressList={addresses}/>);
        const welcome = <p className="App-intro">firstName: Patty</p>;
        wrapper.find('button').simulate('click');
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders and displays the default lastName', () =>
    {
        const wrapper = shallow(<Address addressList={addresses}/>);
        const welcome = <p className="App-intro">lastName: unknown</p>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders button click lastName', () =>
    {
        const wrapper = shallow(<Address addressList={addresses}/>);
        const welcome = <p className="App-intro">lastName: Murray</p>;
        wrapper.find('button').simulate('click');
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders and displays the default buildingNumber', () =>
    {
        const wrapper = shallow(<Address addressList={addresses}/>);
        const welcome = <p className="App-intro">buildingNumber: unknown</p>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders button click buildingNumber', () =>
    {
        const wrapper = shallow(<Address addressList={addresses}/>);
        const welcome = <p className="App-intro">buildingNumber: 915</p>;
        wrapper.find('button').simulate('click');
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders and displays the default street', () =>
    {
        const wrapper = shallow(<Address addressList={addresses}/>);
        const welcome = <p className="App-intro">street: unknown</p>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders button click street', () =>
    {
        const wrapper = shallow(<Address addressList={addresses}/>);
        const welcome = <p className="App-intro">street: 2nd Ave</p>;
        wrapper.find('button').simulate('click');
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders and displays the default suite', () =>
    {
        const wrapper = shallow(<Address addressList={addresses}/>);
        const welcome = <p className="App-intro">suite: unknown</p>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders button click suite', () =>
    {
        const wrapper = shallow(<Address addressList={addresses}/>);
        const welcome = <p className="App-intro">suite: #2988</p>;
        wrapper.find('button').simulate('click');
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders and displays the default city', () =>
    {
        const wrapper = shallow(<Address addressList={addresses}/>);
        const welcome = <p className="App-intro">city: unknown</p>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders button click city', () =>
    {
        const wrapper = shallow(<Address addressList={addresses}/>);
        const welcome = <p className="App-intro">city: Seattle</p>;
        wrapper.find('button').simulate('click');
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders and displays the default zipcode', () =>
    {
        const wrapper = shallow(<Address addressList={addresses}/>);
        const welcome = <p className="App-intro">zipcode: unknown</p>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders button click zipcode', () =>
    {
        const wrapper = shallow(<Address addressList={addresses}/>);
        const welcome = <p className="App-intro">zipcode: 98174</p>;
        wrapper.find('button').simulate('click');
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders and displays the default state', () =>
    {
        const wrapper = shallow(<Address addressList={addresses}/>);
        const welcome = <p className="App-intro">state: unknown</p>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders button click state', () =>
    {
        const wrapper = shallow(<Address addressList={addresses}/>);
        const welcome = <p className="App-intro">state: WA</p>;
        wrapper.find('button').simulate('click');
        expect(wrapper.contains(welcome)).toEqual(true);
    });
    it('renders and displays the default phone', () =>
    {
        const wrapper = shallow(<Address addressList={addresses}/>);
        const welcome = <p className="App-intro">phone: unknown</p>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders button click phone', () =>
    {
        const wrapper = shallow(<Address addressList={addresses}/>);
        const welcome = <p className="App-intro">phone: (206) 553-5545</p>;
        wrapper.find('button').simulate('click');
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders and displays the default website', () =>
    {
        const wrapper = shallow(<Address addressList={addresses}/>);
        const welcome = <p className="App-intro">website: unknown</p>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders button click website', () =>
    {
        const wrapper = shallow(<Address addressList={addresses}/>);
        const welcome = <p className="App-intro">website: https://www.murray.senate.gov/public/index.cfm/contactme</p>;
        wrapper.find('button').simulate('click');
        expect(wrapper.contains(welcome)).toEqual(true);
    });


});
