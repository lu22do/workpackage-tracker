Template.workpackages.helpers({
  workpackages: function() {
    return Workpackages.find({}).map(function(workpackage) {
      var user = Meteor.users.findOne(workpackage.owner);

      var isMyWorkpackage = false;
      if (Meteor.userId() === workpackage.owner || (Meteor.user() && Meteor.user().username === 'admin')) {
        isMyWorkpackage = true;
      }

      return {name: workpackage.name, 
              location: workpackage.location,      
              status: workpackage.status,
              created: moment(workpackage.created).calendar(),
              updated: moment(workpackage.updated).calendar(),      
              id: workpackage._id,      
              ownername: user ? user.username : "unknown",
              isMyWorkpackage: isMyWorkpackage};
    });
  },
  workpackageCount: function() {
    return Workpackages.find({}).count();
  }
});

Template.workpackages.events({
  'click #delete-workpackage': function(e) {
    //alert('delete ' + e.target.getAttribute('data-id'));
    var id = e.target.getAttribute('data-id');
    Workpackages.remove(id, function(err) {
      if (err) {
        alert('Could not delete');
      }
    });
  }
});