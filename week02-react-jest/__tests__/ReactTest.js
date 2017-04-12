/**
 * Created by bcuser on 4/12/17.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/App';

describe ('Jest Create React Tests', function()
{
    it ('renders without crashing', () =>
    {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
    });

    if ('renders and reads H1 text', () =>
    {
        const wrapper = shallow(<App />);
        const welcome = <h2>Welcome to React</h2>;
        expect(wrapper.constains(welcome)).toEqual(true);
    });
});