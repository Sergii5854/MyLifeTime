import React, { Component, PropTypes } from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import {Modal, FormGroup, ControlLabel, Button, Col, FormControl, Checkbox} from "react-bootstrap";


import SignInForm from "./components/forms/SignInForm"
import SignUpForm from "./components/forms/SignUpForm"



class App extends React.Component {
    constructor() {
        super();

        this.state = {
            showModal: false,
            showModalUp: false,
            modalState: 'signIn'
        }
      
         this.open = this.open.bind(this);
         this.openForm = this.openForm.bind(this);       
    }

    openForm (e) {
        e.preventDefault();

        this.open();
        this.state.modalState = e.target.getAttribute("data-info");
    }

   /* Sign in*/ 
    close() {
        this.setState({showModal: false});
    }

    open() {
        this.setState({showModal: true});
    }
      
    render() {
       
        return (
            <div className="app-root">
                <div className="container">
         
                        <heder>
                        <h2>My Life Time </h2>
                        
                        <div id="sign">
                        <Button  data-info="signIn" onClick={this.openForm}>Sign In</Button> 
                        <Button  data-info="signUp" onClick={this.openForm}>Sign Up</Button>  
                     {/*   <Button href="/logout" >Logout</Button> */}
                      
                        </div> 

                            <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
                                {this.state.modalState === "signIn" ? (<SignInForm/>) : (<SignUpForm/>)}
                            </Modal>

                        <hr></hr>                             
                        </heder>

                            {this.props.yieldTwo}

                        <footer>
                            <hr></hr> 
                            <h6>all good with your time ? </h6>
                        </footer>                
                </div>  
            </div>

        )
      
    }
}
export default createContainer(() => {
    return {
        currentUser: Meteor.user(),
    };
},App);