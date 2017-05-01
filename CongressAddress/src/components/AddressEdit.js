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
                <input
                    id="inpt_firstName"
                    className="App-intro"
                    onChange={this.props.onNameChange}
                    value={this.props.address.firstName} />
                <input id="inpt_lastName" className="App-intro">
                    lastName: { this.props.address.lastName }
                </input>
                <input id="inpt_buildingNumber" className="App-intro">
                    buildingNumber: { this.props.address.buildingNumber }
                </input>
                <input id="inpt_street" className="App-intro">
                    street: { this.props.address.street }
                </input>
                <input id="inpt_suite" className="App-intro">
                    suite: { this.props.address.suite }
                </input>
                <input id="inpt_city" className="App-intro">
                    city: { this.props.address.city }
                </input>
                <input id="inpt_zipcode" className="App-intro">
                    zipcode: { this.props.address.zipcode }
                </input>
                <input id="inpt_state" className="App-intro">
                    state: { this.props.address.state }
                </input>
                <input id="inpt_phone" className="App-intro">
                    phone: { this.props.address.phone }
                </input>
                <input id="inpt_website" className="App-intro">
                    website: { this.props.address.website }
                </input>

                <button className="setAddress" onClick={this.props.onAddressChange}>Show Address</button>
            </div>
        );
    }
}

export default AddressShow;
