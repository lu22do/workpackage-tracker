Workpackages = new Mongo.Collection('workpackages');

WorkpackageSchema = new SimpleSchema({
  "name": {
    type: String,
    label: "Workpackage Name"
  },
  "location": {
    type: String,
    label: "Location",
    optional: true
  },
  "system_architect": {
    type: String,
    label: "Current status",
    optional: true
  },
  "module_architect": {
    type: String,
    label: "Current status",
    optional: true
  },
  "tech_lead": {
    type: String,
    label: "Tech lead",
    optional: true
  },
  "test_lead": {
    type: String,
    label: "Test lead",
    optional: true
  },
  "status": {
    type: String,
    label: "Current status"
  },
  "owner": {
    type: String,
    label: "Creator"
  },  
  "created": {
    type: Date,
    label: "Creation date",
    denyUpdate: true,
    autoValue: function() {
      if ( this.isInsert ) {
        return new Date();
      } 
    }
  },
  "updated": {
    type: Date,
    label: "Updated date",
    autoValue: function() {
      if ( this.isUpdate ) {
        return new Date();
      } 
    },
    optional: true
  }
});

Workpackages.attachSchema(WorkpackageSchema);