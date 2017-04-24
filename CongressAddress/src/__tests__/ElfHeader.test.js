import React from 'react';
import ElfHeader from '../components/ElfHeader';
import { ReactBasics } from '../App';
import { shallow } from 'enzyme';

describe('React Jest Suite - ElfHeader', function ()
{
    it('renders and reads H1 text', () =>
    {
        const wrapper = shallow(<ElfHeader />);
        const welcome = <h2>Welcome to React</h2>;
        expect(wrapper.contains(welcome)).toEqual(true);
    });
});
