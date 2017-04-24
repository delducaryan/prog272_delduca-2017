import React, {Component} from 'react';
import '../App.css';

class Address extends Component
{
    addresses = "";

    constructor(props)
    {
        super(props);

        // Set global variable
        this.addresses = props.addressList;

        // Set default state
        this.state = this.setAddressState(this.addresses[0]);
    }

    setAddress = () =>
    {
        // Change state
        this.setState(this.setAddressState(this.addresses[1]));
    };

    setAddressState(address)
    {
        // Return a state var for use with this.state and this.setState()
        var state =
        {
            firstName: address.firstName,
            lastName: address.lastName,
            buildingNumber: address.buildingNumber,
            street: address.street,
            suite: address.suite,
            city: address.city,
            zipcode: address.zipcode,
            state: address.state,
            phone: address.phone,
            website: address.website
        }

        return state;
    }

    render()
    {
        return (
            <div className="App">
                <p className="App-intro">
                    firstName: { this.state.firstName }
                </p>
                <p className="App-intro">
                    lastName: { this.state.lastName }
                </p>
                <p className="App-intro">
                    buildingNumber: { this.state.buildingNumber }
                </p>
                <p className="App-intro">
                    street: { this.state.street }
                </p>
                <p className="App-intro">
                    suite: { this.state.suite }
                </p>
                <p className="App-intro">
                    city: { this.state.city }
                </p>
                <p className="App-intro">
                    zipcode: { this.state.zipcode }
                </p>
                <p className="App-intro">
                    state: { this.state.state }
                </p>
                <p className="App-intro">
                    phone: { this.state.phone }
                </p>
                <p className="App-intro">
                    website: { this.state.website }
                </p>

                <button className="setAddress" onClick={this.setAddress}>Set Address</button>
            </div>
        );
    }
}

export default Address;
