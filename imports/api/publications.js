Meteor.publish('user', function () {
    if (this.userId) {
        return Meteor.users.find({_id: this.userId}).fetch();
    } else {
        throw new Meteor.Error('You must authorize!!!')
    }
});