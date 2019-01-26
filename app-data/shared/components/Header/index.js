import React from 'react';
import {
  AsyncStorage,
  Image,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconMenu from 'react-native-vector-icons/Ionicons';
// import LottieView from 'lottie-react-native';
import styles from './styles';

const Header = (props) => {
  const {navigation, title} = props;

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'default'} />
      <TouchableOpacity onPress={() => {
        navigation.navigate({ routeName: 'QuickDial' });
      }}>
        <Icon color={'#4a4a4a'} name={'phone'} size={20} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity onPress={() => {
        if (typeof navigation.openDrawer === 'function') {
          navigation.openDrawer();
        }
      }}>
        <IconMenu color={'#4a4a4a'} name={'ios-menu'} size={30} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
