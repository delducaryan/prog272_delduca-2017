import React, {Component} from 'react';
import '../css/App.css';

class AddressEdit extends Component
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
                <input
                    id="inpt_lastName"
                    className="App-intro"
                    onChange={this.props.onNameChange}
                    value={this.props.address.lastName} />
                <input
                    id="inpt_street"
                    className="App-intro"
                    onChange={this.props.onNameChange}
                    value={this.props.address.street} />
                <input
                    id="inpt_city"
                    className="App-intro"
                    onChange={this.props.onNameChange}
                    value={this.props.address.city} />
                <input
                    id="inpt_state"
                    className="App-intro"
                    onChange={this.props.onNameChange}
                    value={this.props.address.state} />
                <input
                    id="inpt_zip"
                    className="App-intro"
                    onChange={this.props.onNameChange}
                    value={this.props.address.zip} />
                <input
                    id="inpt_phone"
                    className="App-intro"
                    onChange={this.props.onNameChange}
                    value={this.props.address.phone} />
                <input
                    id="inpt_website"
                    className="App-intro"
                    onChange={this.props.onNameChange}
                    value={this.props.address.website} />
                <input
                    id="inpt_email"
                    className="App-intro"
                    onChange={this.props.onNameChange}
                    value={this.props.address.email} />
                <input
                    id="inpt_contact"
                    className="App-intro"
                    onChange={this.props.onNameChange}
                    value={this.props.address.contact} />

                {/*
                * This button is removed until AddressShow and AddressEdit pages are separated
                * Duplicate buttons causes errors
                * <button className="setAddress" onClick={this.props.onAddressChange}>Show Address</button>
                */}
            </div>
        );
    }
}

export default AddressEdit;
