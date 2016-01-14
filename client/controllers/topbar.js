Template.topbar.helpers({
  workpackagesactive: function() {    
    return Router.current().route.getName() === 'workpackages' ? 'active' : '';
  }, 
  newworkpackageactive: function() {    
    return Router.current().route.getName() === 'newworkpackage' ? 'active' : '';
  },  
  usersactive: function() {    
    return Router.current().route.getName() === 'users' ? 'active' : '';
  },
  isAdmin: function() {
    return Meteor.user() && Meteor.user().username === 'admin';
  }  
});

Template.topbar.events({
  'click #logout': function() {
    Meteor.logout(function() {
      Router.go('/');
    })
  }
});
