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
