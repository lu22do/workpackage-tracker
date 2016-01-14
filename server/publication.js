// call everytime someone subscribes (or unsubscribes (logout)) 
Meteor.publish("workpackages", function () {
  return Workpackages.find(); 

/* ---> to return only workpackage owned by user:
  var user = Meteor.users.findOne(this.userId);

  if (user) {
		if (user.username === 'admin') {
		  return Workpackages.find(); 
		}
		else {
		  return Workpackages.find({owner: this.userId}); 	
		}  	
  }
*/
});

Workpackages.allow({
  insert: function (userId, doc) {
    // the user must be logged in, and the document must be owned by the user
    return (userId && doc.owner === userId);
  },
  update: function (userId, doc, fields, modifier) {
    // can only change your own documents
    return doc.owner === userId;
  },
  remove: function (userId, doc) {
    var currentUser = Meteor.user();

    // can only remove your own documents
    return doc.owner === userId || 
           (currentUser && currentUser.username === 'admin');
  },
  fetch: ['owner']
});

Workpackages.deny({
  update: function (userId, doc, fields, modifier) {
    // can't change owners
    return _.contains(fields, 'owner');
  }
});

// user data
Meteor.publish("userData", function () {
  return Meteor.users.find({},
                           {fields: {'username': 1}});
});

Meteor.users.allow({
  insert: function (userId, doc) {
    return true;
  },
  update: function (userId, doc, fields, modifier) {
    // can only change your own documents
    return doc.owner === userId;
  },
  remove: function (userId, doc) {
    var currentUser = Meteor.user();

		return currentUser && currentUser.username === 'admin';
  }
});
