Workpackages = new Mongo.Collection('workpackages');

WorkpackageSchema = new SimpleSchema({
  "name": {
    type: String,
    label: "Workpackage Name"
  },
  "location": {
    type: String,
    label: "Where work is done",
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
    label: "Current status",
    optional: true
  },
  "test_lead": {
    type: String,
    label: "Current status",
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
    label: "Date Workpackage Added to System",
    denyUpdate: true,
    autoValue: function() {
      if ( this.isInsert ) {
        return new Date;
      } 
    }
  },
  "updated": {
    type: Date,
    label: "Date Workpackage Updated in System",
    autoValue: function() {
      if ( this.isUpdate ) {
        return new Date;
      } 
    },
    optional: true
  }
});

Workpackages.attachSchema(WorkpackageSchema);