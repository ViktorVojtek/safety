import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AntPlusIcon from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const BottomTabBar = (props) => {
  const { navigation } = props;
  const { state } = navigation;
  const { routes } = state;
  
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
                  <AntPlusIcon
                    color={'#fff'}
                    name={'plus'}
                    size={iconSize}
                    style={[styles.plusIcon, {backgroundColor: state.index === 1 ? '#00bdd8' : '#515253'}]}
                  /> : <Icon color={state.index === 2 ? '#00bdd8' : '#515253'} name={'map'} size={iconSize} />
                ) : <Icon color={state.index === 0 ? '#00bdd8' : '#515253'} name={'home'} size={iconSize+5} />
              }
            </TouchableOpacity>
          );
        })
      }
    </View>
  );
};

export default BottomTabBar;
