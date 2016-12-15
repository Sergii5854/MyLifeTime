import React, { Component, PropTypes } from 'react';
import {Modal, FormGroup, ControlLabel, Button, Col, FormControl} from "react-bootstrap";


class SingInForm extends React.Component {
    constructor() {
        super();
  this.handlerForm = this.handlerForm.bind(this);
    }

    close() {
        this.setState({showModal: false});
    }

    handlerForm(e) {
        e.preventDefault();

        let email = this.refs.email.value,
            password = this.refs.password.value;

            Meteor.loginWithPassword(email, password, (error) =>{
                if(error) {
                    console.log(error.reason);
                }else{

                    FlowRouter.go('/calendar'); // дописать куда перебрасывать после
                }
            }
        )
    } 

    render() {

        return (
                                  
            <div id="signmodal">
               
                <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-lg">Sign In</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <form onSubmit={this.handlerForm} className="register">                               
                    <Col componentClass={ControlLabel} sm={2}>
                    Email
                    </Col>                                                                  
                    <p> <input id="email_in" type="email" ref="email" name="email" placeholder="  Email "/></p>

                    <Col componentClass={ControlLabel} sm={2}>
                    Password
                    </Col>
                    <p> <input id="pass_in" type="password" ref="password" name="password" placeholder="  Password"/></p>
                    
                    <Col smOffset={0} sm={12}>                                    
                    <Button  type="submit" value="Register">Sign In </Button> 
                    </Col>
                    </form>                

                </Modal.Body>   
                                
             </div>    

        )

    }
};

export default SingInForm;