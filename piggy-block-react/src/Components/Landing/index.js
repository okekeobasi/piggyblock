import React, {Component} from 'react';
import Header from './../Header';
import { Grid, Button } from 'react-bootstrap';
// import NavBar from './../Navbar';
import Body from './../Body';


class Landing extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <Grid className="landingGrid">
                    <Header />
                    <Body campaigns={this.props.campaigns} launchClient={this.props.launchClient}/>
                </Grid>
            </div>
        );
    }
}

export default Landing;