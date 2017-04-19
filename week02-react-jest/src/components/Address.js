import React, {Component} from 'react';
import '../App.css';

class Address extends Component
{
    constructor(props)
    {
        super();
        console.log(props);
        if (props.address === undefined)
        {
            this.state =
            {
                firstName: "unknown",
                lastName: "unknown",
                buildingNumber: "unknown",
                street: "unknown",
                suite: "unknown",
                city: "unknown",
                zipcode: "unknown",
                state: "unknown"
            }
        }
        else
        {
            this.state =
            {
                firstName: props.address.firstName,
                lastName: props.address.lastName,
                buildingNumber: props.address.buildingNumber,
                street: props.address.street,
                suite: props.address.suite,
                city: props.address.city,
                zipcode: props.address.zipcode,
                state: props.address.state
            }
        }
    }

    setAddress = () =>
    {
        this.setState(
        {
            firstName: "Patty",
            lastName: "Murray",
            buildingNumber: "915",
            street: "2nd Ave",
            suite: "#2988",
            city: "Seattle",
            zipcode: "98174",
            state: "WA"
        });
    };

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

                <button className="setAddress" onClick={this.setAddress}>Set Address</button>
            </div>
        );
    }
}

export default Address;
