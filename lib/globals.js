Workpackages = new Mongo.Collection('workpackages');

RoleAllowedValues = ["Project Manager", "System Architect", "Module Architect", "Technical Lead"];

ContributorSchema = new SimpleSchema({
  "role": {
    type: String,
    allowedValues: RoleAllowedValues,
    label: "Role",
    optional: true
  },
  "name": {
    type: String,
    label: "Name",
    optional: true
  }
});

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
  "contributors": {
    type: [ContributorSchema],
    label: "Contributors",
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