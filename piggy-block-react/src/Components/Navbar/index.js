import React, {Component} from 'react';
import {
    Navbar, Nav, NavItem, NavDropdown, MenuItem, Button, Glyphicon
} from 'react-bootstrap';

class NavBar extends Component{
    render(){
        return(
            <Navbar fixedTop={true}>
                <Navbar.Header>
                <Navbar.Brand>
                    <a style={{cursor: 'pointer'}} onClick={this.props.changeComponents}>{this.props.appName}</a>
                </Navbar.Brand>
                <Nav>
                    <NavDropdown title="Our Services" id="basic-nav-dropdown">
                        <MenuItem>Crowdsourcing</MenuItem>
                        <MenuItem divider />
                        <MenuItem disabled>Loans</MenuItem>
                        <MenuItem disabled>PokaPool</MenuItem>
                    </NavDropdown>
                </Nav>
                <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                <Navbar.Text pullRight>Christopher</Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default NavBar;