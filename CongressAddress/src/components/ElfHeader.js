import React, {Component} from 'react';
import logo from '../images/flower.svg';
import { Jumbotron } from "react-bootstrap";

class ElfHeader extends Component
{
    render()
    {
        return (
            <div>
                <Jumbotron>
                    <div>
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h2>Welcome to Prog272</h2>
                    </div>
                </Jumbotron>
            </div>
        );
    }
}

export default ElfHeader;
