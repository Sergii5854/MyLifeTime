import React from 'react';
import {mount} from 'react-mounter';
import {FlowRouter} from "meteor/kadira:flow-router";

import App from '../imports/ui/layouts/App';


// // === Корень=== //
FlowRouter.route( '/', {
    name: 'home',
    action() {
        mount(App);
    }
});

// === logout === //
FlowRouter.route('/logout', {
    name: "logout",
    action: (params, queryParams) => {
        Meteor.logout(() => {
                mount( App );
        })
    }
});




