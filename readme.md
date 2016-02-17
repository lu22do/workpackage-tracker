This is a meteor project based on lu22do/accounts-boilerplate to collaboratively track workpackages. What we call workpackages at my company are small projects that are merged into the big code base of the product. 

Main features:
- A workpackage is created.
- List of  workpackages can be seen along with visualization.
- Individual workpackage can be seen / edited.
- Each workpackage has a bunch of attributes or list of things that can themselves be edited.
- Status/progress can be done.
- History of all changes (per wp).



Login is required to use the app.
Only owner can delete/edit his own workpackage.
Admin password can be set in the settings.json file.

Templates:
- Main
- Topbar
- Auth
    - Login 
    - Register
- Workpackages
    - Workpackage list
    - Create workpackage
    - Edit workpackage
    - View workpackage
    - Editable lists:
        - requirement list
        - contributor list
        - task list
        - output documents list 
- Users
    - User list

This project was created by the following packages:
- from accounts-boilerplate:
    - accounts-base
    - accounts-password
    - iron:router (+ ejson)
    - twbs:bootstrap
- aldeed:collection2 for schemas
- momentjs:moment for display of date 

