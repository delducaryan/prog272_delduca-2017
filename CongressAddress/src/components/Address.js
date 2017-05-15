import React, {Component} from "react";
import "../css/App.css";
import addresses from "./address-list";
import "../../GetAddress/get-address";
import AddressShow from "./AddressShow";

class Address extends Component
{
    constructor(props)
    {
        super(props);

        // Set global variable
        this.addressIndex = 0;

        this.onAddressChange = this.onAddressChange.bind(this);

        // Set default state
        this.state =
        {
            address: this.getAddressState()
        };
    }

    onAddressChange(event)
    {
        this.addressIndex += 1;

        this.setState(
        {
            address: this.getAddressState()
        });
    }

    getAddressState()
    {
        // Return a state var for use with this.state and this.setState()

        const address = getFullAddress(this.addressIndex);
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
        return (
            <div className="App">
                <AddressShow
                    address={this.state.address}
                    onAddressChange={this.onAddressChange}
                />
            </div>
        );
    }
}

export default Address;
