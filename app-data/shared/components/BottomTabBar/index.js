import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const BottomTabBar = (props) => {
  const {navigation} = props;
  const {state: {routes}} = navigation;

  return (
    <View style={styles.container}>
      {
        routes.map((item, i) => {
          const iconSize = 20;

          return (
            <TouchableOpacity onPress={() => navigation.navigate({routeName: item.routeName})} key={item.key}>
              {
                i > 0 ?
                (i < 2?
                  <Icon color={'#fff'} name={'plus'} size={iconSize} style={styles.plusIcon} /> : <Icon color={'#fff'} name={'map'} size={iconSize} />
                ) : <Icon color={'#fff'} name={'home'} size={iconSize} />
              }
            </TouchableOpacity>
          );
        })
      }
    </View>
  );
};

export default BottomTabBar;
