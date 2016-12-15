import React, { Component, PropTypes } from 'react';
import {Modal, FormGroup, ControlLabel, Button, Col, FormControl} from "react-bootstrap";


class SignUpForm extends React.Component {
    constructor() {
        super();
    
        this.handlerForm = this.handlerForm.bind(this);
    }

    close() {
        this.setState({showModal: false});
    }

    handlerForm(e) {
        e.preventDefault();

        let username = this.refs.username.value,
            email = this.refs.email.value,
            password = this.refs.password.value,
            confirmpassword = this.refs.confirmpassword.value;

            Accounts.createUser({
            username:username,
            email:email,
            password:password,
            confirmpassword:confirmpassword
        });

        console.log(1);
        FlowRouter.go('/calendar');
        
    } /* end of Sign up*/ 

    render() {

        return (   
       
           <div   id="signUpModal">
         
                <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-lg">Sign Up</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <form onSubmit={this.handlerForm} className="register"  >                               
                    <Col componentClass={ControlLabel} sm={2}>
                    Username
                    </Col>                                                                  
                    <p> <input id="user_in"  type="text" ref="username" name="username" placeholder="  Username "/></p>
                                               
                    <Col componentClass={ControlLabel} sm={2}>
                    Email
                    </Col>                                                                  
                    <p> <input id="email_in" type="email" ref="email" name="email" placeholder="  Email "/></p>
                  
                    <Col componentClass={ControlLabel} sm={2}>
                    Password
                    </Col>
                    <p> <input id="pass_in" type="password" ref="password" name="password" placeholder="  Password"/></p>
                  
                    <Col componentClass={ControlLabel} sm={2}>
                    Password
                    </Col>
                    <p> <input id="cpass_in" type="password" ref="confirmpassword" name="password" placeholder="  Confirm Password"/></p>
                    
                    <Col smOffset={0} sm={12}>                                    
                    <Button  type="submit" value="Register">Sing Up  </Button> 
                    </Col>
                    </form>                

                </Modal.Body>              
                
        </div>

        );
    }
};

export default SignUpForm;