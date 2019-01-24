# Safety - cross platform mobile App.

## Description

Cross platform mobile application that will track incidents in the city. Users can view a list of these incidents in the application's home screen and on the map screen as well. Incidents will be in marked in categories like (new, resolved, etc.) Users are able to call a local reinforcements or auxiliary forces.

## Used dependencies

- [Graphql](https://www.npmjs.com/package/graphql)
- [React Apollo](https://www.npmjs.com/package/react-apollo)
- ~~[React Facebook SDK Wrapper](https://www.npmjs.com/package/react-native-fbsdk)~~
- [React Navigation](https://www.npmjs.com/package/react-navigation)
- [React Native Maps](https://github.com/react-native-community/react-native-maps)

## App structure

- Splash screen
- Authentication loading screen
  - SignIn stack
    - Register screen
    - SignIn screen
  - Application stack
    - Emergency lines screen
    - Home screen
    - Add/Report screen
    - Map screen
    - Settings screen
      - Emergency lines screen
      - Parent lock/protection

## TODO

- Figure out and finish successfull registered user app state/message (consider to use [Modal](https://facebook.github.io/react-native/docs/modal))
- Emergency lines screen
  - Implement quick emergency dialers like buttons for Ambulance, Police, Fire fighters 
- Home screen
  - Implement list view of actual reported items
  - Implement detail view of selected reported item
- Map screen
  - ~~Implement actual device positioning with graphic (rounded blue point or something like that)~~
  - Implement actual reported issues from reports, something like red (or some graphical) dots with detail view of selected report
  - Implement dynamic list of items that will change regarding to map view/position
- Parent lock/protection
  - Implement user groups logic for adding/removing other users to user account that will control these users position
  - Implement special map view, where user could specify radius of some spots e.g: Home, School, etc. for other users in his group
- Report screen
  - Implement report screen
    - Categories/Subcategories
    - Take/Use photo
    - Input report information form
