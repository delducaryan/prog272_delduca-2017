import React from 'react';
import Address from '../components/Address';
import addresses from '../components/address-list';
import { ReactBasics } from '../App';
import { mount } from 'enzyme';

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

    it('renders and displays the default buildingNumber', () =>
    {
        const wrapper = mount(<Address address={addresses[0]}/>);
        const welcome = <p className="App-intro">buildingNumber: unknown</p>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders button click buildingNumber', () =>
    {
        const wrapper = mount(<Address address={addresses[0]}/>);
        const welcome = <p className="App-intro">buildingNumber: 915</p>;
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
        const welcome = <p className="App-intro">street: 2nd Ave</p>;
        wrapper.find('button').simulate('click');
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders and displays the default suite', () =>
    {
        const wrapper = mount(<Address address={addresses[0]}/>);
        const welcome = <p className="App-intro">suite: unknown</p>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders button click suite', () =>
    {
        const wrapper = mount(<Address address={addresses[0]}/>);
        const welcome = <p className="App-intro">suite: #2988</p>;
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

    it('renders and displays the default zipcode', () =>
    {
        const wrapper = mount(<Address address={addresses[0]}/>);
        const welcome = <p className="App-intro">zipcode: unknown</p>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders button click zipcode', () =>
    {
        const wrapper = mount(<Address address={addresses[0]}/>);
        const welcome = <p className="App-intro">zipcode: 98174</p>;
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
    it('renders and displays the default phone', () =>
    {
        const wrapper = mount(<Address address={addresses[0]}/>);
        const welcome = <p className="App-intro">phone: unknown</p>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });

    it('renders button click phone', () =>
    {
        const wrapper = mount(<Address address={addresses[0]}/>);
        const welcome = <p className="App-intro">phone: (206) 553-5545</p>;
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
        const welcome = <p className="App-intro">website: https://www.murray.senate.gov/public/index.cfm/contactme</p>;
        wrapper.find('button').simulate('click');
        expect(wrapper.contains(welcome)).toEqual(true);
    });
});
