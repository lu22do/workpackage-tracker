Template.newworkpackage.events({
  'submit #new-workpackage-form': function(e, t) {
    e.preventDefault();
    var name = t.find('#name').value;
    var location = t.find('#location').value;
    if (!Workpackages.find({name: name}).count()) {
      Workpackages.insert({name: name,
                           location: location,
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
    }
    return false;
  }
});

Template.editworkpackage.helpers({
  wp: function() {
    return Workpackages.findOne(this._id);
  },
  roles: function() {
    return RoleAllowedValues;
  }
});

Template.contributorslist.helpers({
  contributors: function() {
    var wp = Workpackages.findOne(this.id);
    return wp.contributors ? wp.contributors : [];
  }
});

Template.editworkpackage.events({
  'submit #edit-workpackage-form': function(e, t) {
    e.preventDefault();
    var name = t.find('#name').value;
    var location = t.find('#location').value;
    var status = t.find('#status').value;
    Workpackages.update(this._id,
                        {$set: {name: name,
                                location: location,
                                status: status}}, 
                        function(err, _id) {
      if (err) {
        alert('Unexpected error updating this workpackage! ' + err.message);
      } 
      else {
        Router.go('/workpackages');
      }
    });
    return false;
  },
  'click #add-role-button': function(e, t) {
    e.preventDefault();
    var role = t.find('#role-selector').value;
    var name = t.find('#role-name').value;
    Workpackages.update(this._id,
                  {$push: {contributors: {role: role, name: name}}}, 
                  function(err, _id) {
      if (err) {
        alert('Unexpected error updating this workpackage contributors!')
      } 
      else {
        t.find('#role-name').value = "";
      }
    });
    return false;
  }
});

Template.workpackage.helpers({
  fields: function() {
    var wp = Workpackages.findOne(this._id);
    var res = [];

    for (var field in wp) {
      if (field === '_id') {
        continue;
      }

      var value = wp[field];

      if (field === 'owner') {
        var user = Meteor.users.findOne(value);
        value = user ? user.username : 'unknown';
      } 
      else if (field === 'created' || field === 'updated') {
        value = moment(value).calendar();
      }

      if (field === 'contributors') {
        value.forEach(function(contributor) {
          res.push({label: contributor.role, value: contributor.name});
        }); 
        continue;
      }

      res.push({label: WorkpackageSchema.label(field), value: value});
    }

    return res;
  }
});

