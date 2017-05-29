import React, {Component} from 'react';
import
{
    BrowserRouter as Router,
    Route
} from "react-router-dom";
import Address from './Address';
import AddressEdit from './AddressEdit';
import SmallNumbers from './SmallNumbers';
import ElfHeader from './ElfHeader';
import ElfMenu from './ElfMenu';
import DataLoader from "../assets/DataLoader";
const dataLoader = new DataLoader();
import ElfLogger from "../assets/ElfLogger";
const elfLogger = new ElfLogger();
import { getByIndex } from "../assets/ElfLocalStorage";

class DataMaven extends Component
{
    constructor(props) {
        super(props);

        // Set global variable
        this.addressIndex = 0;

        const that = this;
        dataLoader.loadAddresses(function (addressCount) {
            if (!addressCount) {
                throw new Error('Cannot get address count in address.js');
            }
            that.addressCount = addressCount;
        });

        this.onAddressChange = this.onAddressChange.bind(this);

        // Set default state
        this.state =
            {
                address: this.getAddressState()
            };
    }

    onAddressChange(event)
    {
        ElfLogger.log('onAddressChange called with', event.target.id);
        if (event.target.id.startsWith('dec'))
        {
            if (this.addressIndex > 0)
            {
                this.addressIndex -= 1;
            }
        }
        else
        {
            if (this.addressIndex < this.addressCount)
            {
                this.addressIndex += 1;
            }
        }
        ElfLogger.log('addressIndex', this.addressIndex);

        this.setState(
            {
                address: this.getAddressState()
            });
    }

    getAddressState()
    {
        // Return a state var for use with this.state and this.setState()

        const address = getByIndex(this.addressIndex);
        //const address = addresses[this.addressIndex];

        var state =
            {
                firstName: address.firstName,
                lastName: address.lastName,
                street: address.street,
                city: address.city,
                state: address.state,
                zip: address.zip,
                phone: address.phone,
                website: address.website,
                email: address.email,
                contact: address.contact
            };

        return state;
    }

    render()
    {
        return(
            <Router>
                <div className="container">
                    <ElfHeader />
                    <ElfMenu />

                    <Route exact path="/" component={Address} />
                    <Route path="/edit" render={(props) => (
                        <AddressEdit {...props}
                                     address={this.state.address}
                                     onAddressChange={this.onAddressChange}
                                     onNameChange={this.onNameChange}
                        />
                    )}/>
                    <Route path="/small" component={SmallNumbers} />
                </div>
            </Router>
        );
    }
}

export default DataMaven;