import React, {Component} from 'react';
import '../css/App.css';
import addresses from './address-list';
import AddressShow from "./AddressShow";
import AddressEdit from "./AddressEdit";

class Address extends Component
{

    constructor(props)
    {
        super(props);

        // Set global variable
        this.addressIndex = 0;

        // Set default state
        this.state =
        {
            address: this.getAddressState()
        };
    }

    onNameChange = (event) =>
    {
        this.log("ON NAME CHANGE");

        const address = addresses[this.addressIndex];

        switch (event.target.id)
        {
            case "inpt_firstName":
                address.firstName = event.target.value;
                break;
            case "inpt_lastName":
                address.lastName = event.target.value;
                break;
            case "inpt_street":
                address.street = event.target.value;
                break;
            case "inpt_city":
                address.city = event.target.value;
                break;
            case "inpt_state":
                address.state = event.target.value;
                break;
            case "inpt_zip":
                address.zip = event.target.value;
                break;
            case "inpt_phone":
                address.phone = event.target.value;
                break;
            case "inpt_website":
                address.website = event.target.value;
                break;
            case "inpt_email":
                address.email = event.target.value;
                break;
            case "inpt_contact":
                address.contact = event.target.value;
                break;
        }

        this.setState(
        {
            address: this.getAddressState()
        });
    }

    onAddressChange = (event) =>
    {
        this.addressIndex = 1;

        this.setState(
        {
            address: this.getAddressState()
        });
    }

    getAddressState()
    {
        // Return a state var for use with this.state and this.setState()

        const address = addresses[this.addressIndex];

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
        }

        return state;
    }

    render()
    {
        return (
            <div className="App">
                <AddressEdit
                    address={this.state.address}
                    onAddressChange={this.onAddressChange}
                    onNameChange={this.onNameChange}
                />
                <AddressShow
                    address={this.state.address}
                    onAddressChange={this.onAddressChange}
                />
            </div>
        );
    }
}

export default Address;
