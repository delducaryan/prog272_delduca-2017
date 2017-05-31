import React, {Component} from "react";
import "../css/App.css";
//import addresses from "./address-list";
import AddressShow from "./AddressShow";
import 'whatwg-fetch';
import DataLoader from "../assets/DataLoader";
import ElfLogger from "../assets/ElfLogger";
import { getByIndex } from "../assets/ElfLocalStorage";

const dataLoader = new DataLoader();
const elfLogger = new ElfLogger();

class Address extends Component
{
    constructor(props)
    {
        super(props);

        // Set global variable
        this.addressIndex = 0;

        var unknown = "loading";

        this.state =
        {
            address:
            {
                "firstName": unknown,
                "lastName": unknown,
                "street": unknown,
                "city": unknown,
                "state": unknown,
                "zip": unknown,
                "phone": unknown,
                "website": unknown,
                "email": unknown,
                "contact": unknown
            }
        };

        this.onAddressChange = this.onAddressChange.bind(this);
    }

    componentDidMount()
    {
        elfLogger.log("DID MOUNT");
        const that = this;
        dataLoader.loadAddresses(function (addressCount)
        {
            if (!addressCount)
            {
                throw new Error('Cannot get address count in address.js');
            }
            that.addressCount = addressCount;
        });

        this.onAddressChange = this.onAddressChange.bind(this);
        elfLogger.log("LOADED ADDRESS");

        // Set default state
        this.setState(
            {
                address: this.getAddressState()
            });
    }

    onAddressChange(event)
    {
        elfLogger.log('onAddressChange called with', event.target.id);
        if (event.target.id.startsWith('dec'))
        {
            if (this.addressIndex > 0)
            {
                this.addressIndex -= 1;
            }
        }
        else
        {
            if (this.addressIndex < this.addressCount)
            {
                this.addressIndex += 1;
            }
        }
        elfLogger.log('addressIndex', this.addressIndex);

        this.setState(
        {
            address: this.getAddressState()
        });
    }

    getAddressState()
    {
        // Return a state var for use with this.state and this.setState()

        const address = getByIndex(this.addressIndex);
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
