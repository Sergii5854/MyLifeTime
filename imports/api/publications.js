Meteor.publish('user', function () {
    if (this.userId) {
        return Meteor.users.find({_id: this.userId});
    } else {
        throw new Meteor.Error('You must authorize!!!')
    }
});