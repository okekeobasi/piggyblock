import React, {Component} from 'react';
import {
    Grid, Row, Col, Panel, PageHeader
} from 'react-bootstrap';

class Body extends Component{
    render(){
        return(
            <Row>
                <Col md={8} mdPush={2}>
                    <Panel>
                        <Panel.Heading>
                        <Panel.Title componentClass="h3"></Panel.Title>
                        </Panel.Heading>
                        <Panel.Body>Panel content</Panel.Body>
                    </Panel>
                </Col>
            </Row>
        );
    }
}

export default Body;