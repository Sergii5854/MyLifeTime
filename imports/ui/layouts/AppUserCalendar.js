import React, {Component, PropTypes} from "react";
import {createContainer} from 'meteor/react-meteor-data';
import {Meteor} from "meteor/meteor";
import {Modal, FormGroup, ControlLabel, Button, Col, FormControl, Checkbox} from "react-bootstrap";


class AppUserCalendar extends React.Component {
    constructor() {
        super();  
    }

          
    render() {
    /*  if(this.props.isLoading){*/
        return (
            <div className="app-root">
                <div className="container">
         
                        <heder>
                        <h2>My Life Time </h2>
                      {/* <h3 id="username"> {this.props.user.username}  </h3>*/}
                        <h3 id="username"> {this.props.user.username}  </h3>
                        
                        <Button id="logout" href="/logout" >Logout</Button>    
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
          /*}else{
            return(
                <div>Loading ...</div>
            )
        }*/
    }
} 
export default AppUserContainerCalendar = createContainer(() => {
    const subscribe =  Meteor.subscribe("user");
    return {
        isLoading: subscribe.ready(),
        user: Meteor.users.findOne() || {}
    };
}, AppUserCalendar);

/*export default AppUserCalendar;*/