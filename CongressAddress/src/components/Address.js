import React, {Component} from 'react';
import '../css/App.css';
import addresses from './address-list';
import AddressShow from "./AddressShow";

class Address extends Component
{

    constructor(props)
    {
        super(props);

        // Set global variable
        this.addressIndex = 0;

        // Set default state
        this.state = this.setAddressState();
    }

    onAddressChange = (event) =>
    {
        this.addressIndex = 1;

        this.setState(this.setAddressState());
    }

    setAddressState()
    {
        // Return a state var for use with this.state and this.setState()
        var state =
        {
            firstName: addresses[this.addressIndex].firstName,
            lastName: addresses[this.addressIndex].lastName,
            buildingNumber: addresses[this.addressIndex].buildingNumber,
            street: addresses[this.addressIndex].street,
            suite: addresses[this.addressIndex].suite,
            city: addresses[this.addressIndex].city,
            zipcode: addresses[this.addressIndex].zipcode,
            state: addresses[this.addressIndex].state,
            phone: addresses[this.addressIndex].phone,
            website: addresses[this.addressIndex].website
        }

        return state;
    }

    render()
    {
        return (
            <div className="App">
                <AddressShow
                    address={this.state}
                    onAddressChange={this.onAddressChange}
                />
            </div>
        );
    }
}

export default Address;
