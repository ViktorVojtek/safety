import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

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

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#1060a6',
    borderTopColor: '#0d5594',
    borderTopWidth: 2,
    flexDirection: 'row',
    height: 60,
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  plusIcon: {
    backgroundColor: '#1586ea',
    borderColor: '#0d5594',
    borderRadius: 25,
    borderWidth: 4,
    marginBottom: 45,
    // padding: 10,
    height: 50,
    overflow: 'hidden',
    paddingTop: 10,
    // position: 'relative',
    textAlign: 'center',
    width: 50,
  },
});

export default BottomTabBar;
