import React from 'react';
import {mount} from 'react-mounter';
import {FlowRouter} from "meteor/kadira:flow-router";

import App from '../imports/ui/layouts/App';
import AppUserCalendar from '../imports/ui/layouts/AppUserCalendar';


// // === Корень=== //
FlowRouter.route( '/', {
    name: 'home',
    action() {
        mount(App);
    }
});

// === calendar=== //
FlowRouter.route( '/calendar', {
    name: 'calendar',
    action() {
        mount( AppUserContainerCalendar );
    }
});

// === logout === //
FlowRouter.route('/logout', {
    name: "logout",
    action: (params, queryParams) => {
        Meteor.logout(() => {
                mount( App ); /*, { yieldTwo: <SignInForm/> }*/
        })
    }
});




