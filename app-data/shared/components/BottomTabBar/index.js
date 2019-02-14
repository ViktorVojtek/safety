import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import AntPlusIcon from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import { styles as stylesConfig } from '../../config';

const { colors: { lightBlue, darkGrey } } = stylesConfig;

export default (props) => {
  const { navigation } = props;
  const { state } = navigation;
  const { routes } = state;

  return (
    <View style={styles.container}>
      {
        routes.map((item, i) => {
          const iconSize = 20;

          return (
            <TouchableOpacity
              onPress={() => {
                const { routeName } = navigation.state.routes[navigation.state.index];
                const resetAction = StackActions.reset({
                  index: 0,
                  key: null,
                  actions: [NavigationActions.navigate({ routeName })],
                });

                navigation.dispatch(resetAction);
                navigation.navigate({ routeName: item.routeName });
              }}
              key={item.key}
            >
              {
                i > 0 ? (
                  i < 2 ? (
                    <AntPlusIcon
                      color="#fff"
                      name="plus"
                      size={iconSize}
                      style={[
                        styles.plusIcon,
                        { backgroundColor: state.index === 1 ? lightBlue : darkGrey },
                      ]}
                    />
                  ) : <Icon color={state.index === 2 ? lightBlue : darkGrey} name="map" size={iconSize} />
                ) : <Icon color={state.index === 0 ? lightBlue : darkGrey} name="home" size={iconSize + 5} />
              }
            </TouchableOpacity>
          );
        })
      }
    </View>
  );
};
