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
                    buildingNumber: { this.props.address.buildingNumber }
                </p>
                <p className="App-intro">
                    street: { this.props.address.street }
                </p>
                <p className="App-intro">
                    suite: { this.props.address.suite }
                </p>
                <p className="App-intro">
                    city: { this.props.address.city }
                </p>
                <p className="App-intro">
                    zipcode: { this.props.address.zipcode }
                </p>
                <p className="App-intro">
                    state: { this.props.address.state }
                </p>
                <p className="App-intro">
                    phone: { this.props.address.phone }
                </p>
                <p className="App-intro">
                    website: { this.props.address.website }
                </p>

                <button className="setAddress" onClick={this.props.onAddressChange}>Show Address</button>
            </div>
        );
    }
}

export default AddressShow;
