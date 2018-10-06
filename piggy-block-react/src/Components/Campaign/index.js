import React, {Component} from 'react';
import {
    Button, Grid, Row, Jumbotron, Glyphicon, FormGroup,
    Col, FormControl, Checkbox, ControlLabel, InputGroup, 
    Form
} from 'react-bootstrap';
import Header from './../Header';

class Campaign extends Component{
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);   
        this.state = {
            value: '',
            disabled: false,
            loader: ''
        };        
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    handleSubmit(event){
        event.preventDefault();
        this.setState({disabled: true, loader: 'loader'});
        setTimeout(()=>{
            this.setState({disabled: false, loader: ''})
        }, 5000)
    }
    
    render(){
        const campaignHeader = (
            <Row>
                <div className="landingHeader">
                    <Jumbotron style={{textAlign: 'center'}}>
                        <span style={{fontSize: "50px"}}>Create a campaign</span>
                    </Jumbotron>
                </div>
            </Row>
        );

        return(
            <div>
                {campaignHeader}
                <p style={{textAlign: 'center'}}>
                    <Button bsStyle="default" bsSize="large" onClick={this.props.changeComponents}>
                        <Glyphicon glyph="home" />
                    </Button>
                </p>

                <Grid>
                    <Form horizontal onSubmit={this.handleSubmit}>
                        <Col mdOffset={4}>
                            {/* <input className="form-control" type="text"/> */}
                            <FormGroup>
                                <Col md={6}>
                                    <InputGroup>
                                        <FormControl type="integer" placeholder="Time of Campaign in hours" disabled={this.state.disabled}/>
                                        <InputGroup.Addon>
                                            <Glyphicon glyph="time" />
                                        </InputGroup.Addon>
                                    </InputGroup>
                                </Col>
                            </FormGroup>

                            <FormGroup>
                                <Col md={6}>
                                    <InputGroup>
                                        <FormControl type="text" placeholder="Address of the Receipient" disabled={this.state.disabled}/>
                                        <InputGroup.Addon>
                                            <Glyphicon glyph="globe" />
                                        </InputGroup.Addon>
                                    </InputGroup>
                                </Col>
                            </FormGroup>

                            <Col  mdOffset={2}>
                                <div className={this.state.loader}/>
                            </Col>

                            <FormGroup>
                                <Col md={6}>
                                    <InputGroup>
                                        <FormControl type="number" placeholder="Amount to Raise" disabled={this.state.disabled}/>
                                        <InputGroup.Addon>.00</InputGroup.Addon>
                                    </InputGroup>
                                </Col>
                            </FormGroup>

                            <FormGroup>
                                <Col md={6}>
                                    <InputGroup>
                                        <FormControl type="text" placeholder="URL for your Campaign" disabled={this.state.disabled}/>
                                        <InputGroup.Addon>
                                            <Glyphicon glyph="link" />
                                        </InputGroup.Addon>
                                    </InputGroup>
                                </Col>
                            </FormGroup>
                            
                            <FormGroup>
                                <Col sm={10}>
                                <Button type="submit">Submit</Button>
                                </Col>
                            </FormGroup>
                        </Col>
                    </Form>
                </Grid>
            </div>
        );
    }
}

export default Campaign;