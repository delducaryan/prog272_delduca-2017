import React, {Component} from 'react';
import '../App.css';

class Address extends Component
{
    constructor()
    {
        super();
        this.state =
        {
            firstName: "unknown",
            lastName: "unknown"
        }
    }

    setAddress = () =>
    {
        this.setState(
        {
            firstName: "foo",
            lastName: "bar"
        });
    };

    render()
    {
        return (
            <div className="App">
                <p className="App-intro">
                    firstName: { this.state.firstName }
                </p>

                <button className="setAddress" onClick={this.setAddress}>Set Address</button>
            </div>
        );
    }
}

export default Address;
