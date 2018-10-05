import React, {Component} from 'react';
import {
    PageHeader, Row
} from 'react-bootstrap';

class Header extends Component{
    render(){
        return(
            <Row>
                <PageHeader>
                    Piggyblock
                </PageHeader>
            </Row>
        );
    }
}

export default Header;