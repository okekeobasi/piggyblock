import React, {Component} from 'react';
import Body from './../Components/Body';
import Header from './../Components/Header';
import { Grid } from 'react-bootstrap';
import NavBar from './../Components/Navbar';

class Landing extends Component{
    render(){
        return(
            <div>
                <NavBar />
                <Grid>
                    <Header />
                    <Body />
                </Grid>
            </div>
        );
    }
}

export default Landing;