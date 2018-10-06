import React, {Component} from 'react';
import {
    Row, Jumbotron, Button
} from 'react-bootstrap';

class Header extends Component{
    render(){
        return(
            <Row>
                <div className="landingHeader">
                    <Jumbotron style={{textAlign: 'center', background: 'None'}}>
                        <span style={{fontSize: "90px"}}>Share and Recieve Tokens</span>
                        <p>
                            Crowdsourcing, Turn-Based Sharing and Loans
                        </p>
                    </Jumbotron>
                </div>
            </Row>
        );
    }
}

export default Header;