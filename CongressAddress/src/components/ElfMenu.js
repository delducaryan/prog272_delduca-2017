import React, {Component} from 'react';
import Address from './Address';
import AddressChanger from './AddressChanger';
import SmallNumbers from './SmallNumbers';
import
{
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import '../css/App.css';

class ElfMenu extends Component
{
    render()
    {
        return (
            <Router>
                <Route exact path="/" component={Address} />
                <Route path="/edit" component={AddressChanger} />
                <Route path="/small" component={SmallNumbers} />
            </Router>
        );
    }
}

export default ElfMenu;