import React from 'react';
import Address from '../components/Address';
import addresses from '../components/address-list';
import { ReactBasics } from '../components/App';
import { mount } from 'enzyme';
import ElfTestDebug from "../../ElfEnzymeDebug";

const elfTestDebug = new ElfTestDebug(true);

describe('React Jest Suite - Address', function ()
{
    it('renders and displays the default firstName', () =>
    {
        const wrapper = mount(<Address address={addresses[0]}/>);
        const welcome = <p className="App-intro">firstName: unknown</p>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders button click firstName', () =>
    {
        const wrapper = mount(<Address address={addresses[0]}/>);
        const welcome = <p className="App-intro">firstName: Patty</p>;
        wrapper.find('button').simulate('click');
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders and displays the default lastName', () =>
    {
        const wrapper = mount(<Address address={addresses[0]}/>);
        const welcome = <p className="App-intro">lastName: unknown</p>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders button click lastName', () =>
    {
        const wrapper = mount(<Address address={addresses[0]}/>);
        const welcome = <p className="App-intro">lastName: Murray</p>;
        wrapper.find('button').simulate('click');
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders and displays the default street', () =>
    {
        const wrapper = mount(<Address address={addresses[0]}/>);
        const welcome = <p className="App-intro">street: unknown</p>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders button click street', () =>
    {
        const wrapper = mount(<Address address={addresses[0]}/>);
        const welcome = <p className="App-intro">street: 915 2nd Ave #2988</p>;
        wrapper.find('button').simulate('click');
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders and displays the default city', () =>
    {
        const wrapper = mount(<Address address={addresses[0]}/>);
        const welcome = <p className="App-intro">city: unknown</p>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders button click city', () =>
    {
        const wrapper = mount(<Address address={addresses[0]}/>);
        const welcome = <p className="App-intro">city: Seattle</p>;
        wrapper.find('button').simulate('click');
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders and displays the default state', () =>
    {
        const wrapper = mount(<Address address={addresses[0]}/>);
        const welcome = <p className="App-intro">state: unknown</p>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders button click state', () =>
    {
        const wrapper = mount(<Address address={addresses[0]}/>);
        const welcome = <p className="App-intro">state: WA</p>;
        wrapper.find('button').simulate('click');
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders and displays the default zip', () =>
    {
        const wrapper = mount(<Address address={addresses[0]}/>);
        const welcome = <p className="App-intro">zip: unknown</p>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders button click zip', () =>
    {
        const wrapper = mount(<Address address={addresses[0]}/>);
        const welcome = <p className="App-intro">zip: 98174</p>;
        wrapper.find('button').simulate('click');
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders and displays the default phone', () =>
    {
        const wrapper = mount(<Address address={addresses[0]}/>);
        const welcome = <p className="App-intro">phone: unknown</p>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders button click phone', () =>
    {
        const wrapper = mount(<Address address={addresses[0]}/>);
        const welcome = <p className="App-intro">phone: 206-553-5545</p>;
        wrapper.find('button').simulate('click');
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders and displays the default website', () =>
    {
        const wrapper = mount(<Address address={addresses[0]}/>);
        const welcome = <p className="App-intro">website: unknown</p>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders button click website', () =>
    {
        const wrapper = mount(<Address address={addresses[0]}/>);
        const welcome = <p className="App-intro">website: https://www.murray.senate.gov/public</p>;
        wrapper.find('button').simulate('click');
        expect(wrapper.contains(welcome)).toEqual(true);
    });
    it('renders and displays the default email', () =>
    {
        const wrapper = mount(<Address address={addresses[0]}/>);
        const welcome = <p className="App-intro">email: unknown</p>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders button click email', () =>
    {
        const wrapper = mount(<Address address={addresses[0]}/>);
        const welcome = <p className="App-intro">email: unknown</p>;
        wrapper.find('button').simulate('click');
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders and displays the default contact', () =>
    {
        const wrapper = mount(<Address address={addresses[0]}/>);
        const welcome = <p className="App-intro">contact: unknown</p>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders button click contact', () =>
    {
        const wrapper = mount(<Address address={addresses[0]}/>);
        const welcome = <p className="App-intro">contact: https://www.murray.senate.gov/public/index.cfm/contactme</p>;
        wrapper.find('button').simulate('click');
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    // AddressEdit section

    it('renders and displays the default firstName', () =>
    {
        const wrapper = mount(<Address address={addresses[0]}/>);
        elfTestDebug.getFirst(wrapper, 'input');
        const welcome = <p className="App-intro">firstName: unknown</p>;
        expect(wrapper.containsMatchingElement(welcome)).toEqual(true);
    });

    it('renders button click firstName', () =>
    {
        const wrapper = mount(<Address address={addresses[0]}/>);
        elfTestDebug.getFirst(wrapper, 'input');
        const welcome = <p className="App-intro">firstName: Patty</p>;
        wrapper.find('button').simulate('click');
        expect(wrapper.containsMatchingElement(welcome)).toEqual(true);
    });

    it('renders and displays the default lastName', () =>
    {
        const wrapper = mount(<Address address={addresses[0]}/>);
        elfTestDebug.getFirst(wrapper, 'input');
        const welcome = <p className="App-intro">lastName: unknown</p>;
        expect(wrapper.containsMatchingElement(welcome)).toEqual(true);
    });

    it('renders button click lastName', () =>
    {
        const wrapper = mount(<Address address={addresses[0]}/>);
        elfTestDebug.getFirst(wrapper, 'input');
        const welcome = <p className="App-intro">lastName: Murray</p>;
        wrapper.find('button').simulate('click');
        expect(wrapper.containsMatchingElement(welcome)).toEqual(true);
    });

    it('renders and displays the default street', () =>
    {
        const wrapper = mount(<Address address={addresses[0]}/>);
        elfTestDebug.getFirst(wrapper, 'input');
        const welcome = <p className="App-intro">street: unknown</p>;
        expect(wrapper.containsMatchingElement(welcome)).toEqual(true);
    });

    it('renders button click street', () =>
    {
        const wrapper = mount(<Address address={addresses[0]}/>);
        elfTestDebug.getFirst(wrapper, 'input');
        const welcome = <p className="App-intro">street: 915 2nd Ave #2988</p>;
        wrapper.find('button').simulate('click');
        expect(wrapper.containsMatchingElement(welcome)).toEqual(true);
    });

    it('renders and displays the default city', () =>
    {
        const wrapper = mount(<Address address={addresses[0]}/>);
        elfTestDebug.getFirst(wrapper, 'input');
        const welcome = <p className="App-intro">city: unknown</p>;
        expect(wrapper.containsMatchingElement(welcome)).toEqual(true);
    });

    it('renders button click city', () =>
    {
        const wrapper = mount(<Address address={addresses[0]}/>);
        elfTestDebug.getFirst(wrapper, 'input');
        const welcome = <p className="App-intro">city: Seattle</p>;
        wrapper.find('button').simulate('click');
        expect(wrapper.containsMatchingElement(welcome)).toEqual(true);
    });

    it('renders and displays the default state', () =>
    {
        const wrapper = mount(<Address address={addresses[0]}/>);
        elfTestDebug.getFirst(wrapper, 'input');
        const welcome = <p className="App-intro">state: unknown</p>;
        expect(wrapper.containsMatchingElement(welcome)).toEqual(true);
    });

    it('renders button click state', () =>
    {
        const wrapper = mount(<Address address={addresses[0]}/>);
        elfTestDebug.getFirst(wrapper, 'input');
        const welcome = <p className="App-intro">state: WA</p>;
        wrapper.find('button').simulate('click');
        expect(wrapper.containsMatchingElement(welcome)).toEqual(true);
    });

    it('renders and displays the default zip', () =>
    {
        const wrapper = mount(<Address address={addresses[0]}/>);
        elfTestDebug.getFirst(wrapper, 'input');
        const welcome = <p className="App-intro">zip: unknown</p>;
        expect(wrapper.containsMatchingElement(welcome)).toEqual(true);
    });

    it('renders button click zip', () =>
    {
        const wrapper = mount(<Address address={addresses[0]}/>);
        elfTestDebug.getFirst(wrapper, 'input');
        const welcome = <p className="App-intro">zip: 98174</p>;
        wrapper.find('button').simulate('click');
        expect(wrapper.containsMatchingElement(welcome)).toEqual(true);
    });

    it('renders and displays the default phone', () =>
    {
        const wrapper = mount(<Address address={addresses[0]}/>);
        elfTestDebug.getFirst(wrapper, 'input');
        const welcome = <p className="App-intro">phone: unknown</p>;
        expect(wrapper.containsMatchingElement(welcome)).toEqual(true);
    });

    it('renders button click phone', () =>
    {
        const wrapper = mount(<Address address={addresses[0]}/>);
        elfTestDebug.getFirst(wrapper, 'input');
        const welcome = <p className="App-intro">phone: 206-553-5545</p>;
        wrapper.find('button').simulate('click');
        expect(wrapper.containsMatchingElement(welcome)).toEqual(true);
    });

    it('renders and displays the default website', () =>
    {
        const wrapper = mount(<Address address={addresses[0]}/>);
        elfTestDebug.getFirst(wrapper, 'input');
        const welcome = <p className="App-intro">website: unknown</p>;
        expect(wrapper.containsMatchingElement(welcome)).toEqual(true);
    });

    it('renders button click website', () =>
    {
        const wrapper = mount(<Address address={addresses[0]}/>);
        elfTestDebug.getFirst(wrapper, 'input');
        const welcome = <p className="App-intro">website: https://www.murray.senate.gov/public</p>;
        wrapper.find('button').simulate('click');
        expect(wrapper.containsMatchingElement(welcome)).toEqual(true);
    });
    it('renders and displays the default email', () =>
    {
        const wrapper = mount(<Address address={addresses[0]}/>);
        elfTestDebug.getFirst(wrapper, 'input');
        const welcome = <p className="App-intro">email: unknown</p>;
        expect(wrapper.containsMatchingElement(welcome)).toEqual(true);
    });

    it('renders button click email', () =>
    {
        const wrapper = mount(<Address address={addresses[0]}/>);
        elfTestDebug.getFirst(wrapper, 'input');
        const welcome = <p className="App-intro">email: unknown</p>;
        wrapper.find('button').simulate('click');
        expect(wrapper.containsMatchingElement(welcome)).toEqual(true);
    });

    it('renders and displays the default contact', () =>
    {
        const wrapper = mount(<Address address={addresses[0]}/>);
        elfTestDebug.getFirst(wrapper, 'input');
        const welcome = <p className="App-intro">contact: unknown</p>;
        expect(wrapper.containsMatchingElement(welcome)).toEqual(true);
    });

    it('renders button click contact', () =>
    {
        const wrapper = mount(<Address address={addresses[0]}/>);
        elfTestDebug.getFirst(wrapper, 'input');
        const welcome = <p className="App-intro">contact: https://www.murray.senate.gov/public/index.cfm/contactme</p>;
        wrapper.find('button').simulate('click');
        expect(wrapper.containsMatchingElement(welcome)).toEqual(true);
    });
});
