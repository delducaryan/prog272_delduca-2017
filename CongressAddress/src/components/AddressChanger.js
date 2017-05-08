import React, {Component} from 'react';
import '../css/App.css';
import addresses from './address-list';
import AddressEdit from "./AddressEdit";
import Address from "./Address";

class AddressChanger extends Address
{
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

    render()
    {
        return (
            <div className="App">
                <AddressEdit
                    address={this.state.address}
                    onAddressChange={this.onAddressChange}
                    onNameChange={this.onNameChange}
                />
            </div>
        );
    }
}

export default AddressChanger;
