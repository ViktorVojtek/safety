import React from 'react';
import {
  // Animated,
  AsyncStorage,
  // Easing,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
// import LottieView from 'lottie-react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import IconLogOut from 'react-native-vector-icons/Feather';
import styles from './styles';

const signOutAsync = async (navigation) => {
  await AsyncStorage.clear();
  navigation.navigate('Auth');
};

export default ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.header}>
      <TouchableOpacity
        onPress={() => {
          if (typeof navigation.closeDrawer === 'function') {
            navigation.closeDrawer();
          }
        }}
      >
        <Icon color="#4a4a4a" name="close" size={25} />
      </TouchableOpacity>
    </View>
    <View style={styles.content}>
      {/*
      <TouchableOpacity style={styles.menuItem}>
        <Text style={styles.menuItemText}>Rodičovská ochrana</Text>
      </TouchableOpacity>
      */
      }
      <TouchableOpacity
        onPress={() => navigation.navigate('QuickDial')}
        style={styles.menuItem}
      >
        <Text style={styles.menuItemText}>Tiesňové linky</Text>
      </TouchableOpacity>
      {/*
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Nastavenie účtu</Text>
        </TouchableOpacity>
        */
      }
      <TouchableOpacity
        onPress={() => signOutAsync(navigation)}
        style={[styles.menuItem, { alignItems: 'center', flexDirection: 'row' }]}
      >
        <IconLogOut color="#4a4a4a" name="log-out" size={20} style={styles.logOutIcon} />
        <Text style={styles.menuItemText}>Odhlásiť</Text>
      </TouchableOpacity>
    </View>
  </View>
);

/*
<LottieView
  loop={false}
  ref={(anim) => {
    this.animation = anim;
  }}
  source={require('../../assets/animations/menu-1.json')}
  speed={0.6}
  style={styles.menuIcon}
  onAnimationFinish={() =>{
    console.log('Animation finished');
  }}
/>
*/
