import React, {Component} from 'react';
import {
    Grid, Row, Col, Panel, PageHeader, Table
} from 'react-bootstrap';
import CampaignLists from './campaing_list';

const Body = (props) => {   
    const campaignItems = props.campaigns.map((campaign) => {
        return <CampaignLists campaignItem={campaign} launchClient={props.launchClient} />
    });

    return(
        <Row>
            <Col md={8} mdPush={2}>
                <Panel>
                    <Panel.Heading style={{backgroundColor: '#8df8fc'}}>
                    <Panel.Title componentClass="h3">Trending Campaigns</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>
                        <Table responsive bordered={true}>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>URL</th>
                                    <th>AMOUNT(ETH)</th>
                                    <th>Contributors</th>
                                </tr>
                            </thead>
                            <tbody> 
                                {campaignItems}
                            </tbody>
                        </Table>
                    </Panel.Body>
                </Panel>
            </Col>
        </Row>
    );
};

export default Body;