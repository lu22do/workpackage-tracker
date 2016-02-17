Meteor.subscribe('workpackages');
Meteor.subscribe("userData");

Router.onBeforeAction(function () {
	  if (!Meteor.userId()) {
	    this.render('Login');
	  } else {
	    this.next();
	  }
  },
  {
  	except: ['register']
  }
);

Router.route('/', function() {
  this.render('main');
});

Router.route('/workpackages');
Router.route('/workpackage/:_id', {
  template: 'workpackage',
  data: function(){
    return Workpackages.findOne(this.params._id);
  }
});
Router.route('/newworkpackage');
Router.route('/editworkpackage/:_id', {
	template: 'editworkpackage',
  data: function(){
    return Workpackages.findOne(this.params._id);
  }
});
Router.route('/users');
Router.route('/register');

 