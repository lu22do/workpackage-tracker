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
    return {_id: this.params._id}; // inject into template, retrieved with this._id in helpers
  }
});
Router.route('/newworkpackage');
Router.route('/editworkpackage/:_id', {
	template: 'editworkpackage',
  data: function(){
    return {_id: this.params._id}; // inject into template, retrieved with this._id in helpers
//    return Workpackages.findOne(this.params._id);
  }
});
Router.route('/users');
Router.route('/register');

 