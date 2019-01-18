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
    - Home screen
    - Add/Report incident screen
    - Map screen