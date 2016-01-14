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
              tech_lead: workpackage.tech_lead,      
              status: workpackage.status,
              created: workpackage.created,
              updated: workpackage.updated,      
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

Template.newworkpackage.events({
  'submit #new-workpackage-form': function(e, t) {
    e.preventDefault();
    var name = t.find('#name').value;
    var location = t.find('#location').value;
    var tech_lead = t.find('#tech_lead').value;
    if (!Workpackages.find({name: name}).count()) {
      Workpackages.insert({name: name,
                           location: location,
                           tech_lead: tech_lead,
                           status: 'Init',
                           owner: Meteor.userId()}, function(err, _id) {
        if (err) {
          alert('Unexpected error creating this workpackage!')
          Router.go('/');
        } 
        else {
          Router.go('/workpackages');
        }
      });
    }
    else {
      alert('This workpackage already exists! Could not create it.')
      t.find('#newworkpackage-form').reset();
    }
    return false;
  }
});

Template.editworkpackage.events({
  'submit #edit-workpackage-form': function(e, t) {
    e.preventDefault();
    var id = e.target.getAttribute('data-id');
    var name = t.find('#name').value;
    var location = t.find('#location').value;
    var tech_lead = t.find('#tech_lead').value;
    var status = t.find('#status').value;
    Workpackages.update(id,
                  {$set: {name: name,
                   location: location,
                   tech_lead: tech_lead,
                   status: status}}, function(err, _id) {
      if (err) {
        alert('Unexpected error updating this workpackage!')
        t.find('#newworkpackage-form').reset();
      } 
      else {
        Router.go('/workpackages');
      }
    });
    return false;
  }
});