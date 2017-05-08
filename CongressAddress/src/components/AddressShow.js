import React, {Component} from 'react';
import '../css/App.css';

class AddressShow extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return (
            <div className="App">
                <p className="App-intro">
                    firstName: { this.props.address.firstName }
                </p>
                <p className="App-intro">
                    lastName: { this.props.address.lastName }
                </p>
                <p className="App-intro">
                    street: { this.props.address.street }
                </p>
                <p className="App-intro">
                    city: { this.props.address.city }
                </p>
                <p className="App-intro">
                    state: { this.props.address.state }
                </p>
                <p className="App-intro">
                    zip: { this.props.address.zip }
                </p>
                <p className="App-intro">
                    phone: { this.props.address.phone }
                </p>
                <p className="App-intro">
                    website: { this.props.address.website }
                </p>
                <p className="App-intro">
                    email: { this.props.address.email }
                </p>
                <p className="App-intro">
                    contact: { this.props.address.contact }
                </p>

                <button className="setAddress" onClick={this.props.onAddressChange}>Show Address</button>
            </div>
        );
    }
}

export default AddressShow;
