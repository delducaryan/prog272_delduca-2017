import React, {Component} from 'react';
import
{
    BrowserRouter as Router,
    Route
} from "react-router-dom";
import Address from './Address';
import AddressEdit from './AddressEdit';
import SmallNumbers from './SmallNumbers';
import ElfHeader from './components/ElfHeader';
import ElfMenu from './components/ElfMenu';

class DataMaven extends Component
{
    render()
    {
        return(
            <Router>
                <div>
                    <ElfHeader />
                    <ElfMenu />

                    <Route exact path="/" component={Address} />
                    <Route path="/edit" component={AddressEdit} />
                    <Route path="/small" component={SmallNumbers} />
                </div>
            </Router>
        );
    }
}

export default DataMaven;