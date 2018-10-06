import React, {Component} from 'react';
import Body from './../Components/Body';
import Header from './../Components/Header';
import { Grid, Button } from 'react-bootstrap';
import NavBar from './../Components/Navbar';
import Landing from './../Components/Landing';
import Campaign from './../Components/Campaign';


class App extends Component{
    constructor(props){
        super(props);
        
        this.changeComponents = this.changeComponents.bind(this);
        this.launchClient = this.launchClient.bind(this);
        this.state={
            appName: 'PokaBlock',
            landing: true,
            client: false,
            campaigns: [
                {id: 1, url: 'tega023@gmail.com', ammount: 5.232233, contributors: 200},
                {id: 2, url: 'oseiyoke@icloud.com', ammount: 8.000331, contributors: 650}
            ]
        }
    }

    changeComponents(){
        this.state.landing ? (
            this.setState({landing: false})
        ) : (
            this.setState({landing: true, client: false})
        )
    }

    launchClient(){
        //
    }

    render(){
        return(
            <div>
                <NavBar appName={this.state.appName} changeComponents={this.changeComponents.bind(this)} />
                {
                    this.state.landing ? 
                    <div>
                        <Landing appName={this.state.appName} campaigns={this.state.campaigns} 
                        changeComponents={this.changeComponents.bind(this)} /> 
                        <p style={{textAlign: 'center'}}>
                            <Button bsStyle="primary" bsSize="large" onClick={this.changeComponents}>Start a Campaign</Button>
                        </p>
                    </div>  : 
                    <Campaign appName={this.state.appName} campaigns={this.state.campaigns} 
                    changeComponents={this.changeComponents.bind(this)}/>
                }
            </div>
        );
    }
}

export default App;