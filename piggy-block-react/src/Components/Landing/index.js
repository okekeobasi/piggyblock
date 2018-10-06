import React, {Component} from 'react';
import Header from './../Header';
import { Grid, Button } from 'react-bootstrap';
// import NavBar from './../Navbar';
import Body from './../Body';
import Campaign from './../Campaign';
import Client from './../Clients';


class Landing extends Component{
    constructor(props){
        super(props);
        this.state = {
            'component': Header
        }
    }

    launchClient(){
        // this.setState({component: Client});
    }

    render(){
        return(
            <div>
                <Grid className="landingGrid">
                    <this.state.component campaigns={this.props.campaigns}/>
                    <Body campaigns={this.props.campaigns} launchClient={this.launchClient.bind(this)}/>
                </Grid>
            </div>
        );
    }
}

export default Landing;