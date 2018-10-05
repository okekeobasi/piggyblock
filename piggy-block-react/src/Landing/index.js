import React, {Component} from 'react';
import Body from './../Components/Body';
import Header from './../Components/Header';
import { Grid } from 'react-bootstrap';

class Landing extends Component{
    render(){
        return(
            <Grid>
                <Header />
                <Body />
            </Grid>
        );
    }
}

export default Landing;