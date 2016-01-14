This is a meteor project based on lu22do/accounts-boilerplate to track what we call workpackages at my company i.e. small projects that are merged into the big code base of the product. 

A workpackage is created.
List of  workpackage can be seen.
Individual workpackage can be edited.
It has a bunch of attributes.



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
- Users
    - User list

This project was created by the following packages:
- from accounts-boilerplate:
    - accounts-base
    - accounts-password
    - iron:router (+ ejson)
    - twbs:bootstrap
- aldeed:collection2

