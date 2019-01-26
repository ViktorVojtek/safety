import React, { PureComponent } from 'react';
import {
  // Animated,
  AsyncStorage,
  // Easing,
  TouchableOpacity,
  Text,
  View
} from 'react-native';
// import LottieView from 'lottie-react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import IconLogOut from 'react-native-vector-icons/Feather';
import styles from './styles';

class DrawerNavigation extends PureComponent {
  constructor(props) {
    super(props);

    this.animation;
  }

  componentDidMount() {
    // this.animation.play(0, 60); // 60, 120
  }

  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => {
            if (typeof navigation.closeDrawer === 'function') {
              navigation.closeDrawer();
            }
          }}>
            <Icon color={'#4a4a4a'} name={'close'} size={25} />
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuItemText}>Rodičovská ochrana</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuItemText}>Tiesňové linky</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuItemText}>Nastavenie účtu</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this._signOutAsync(navigation)}
            style={[styles.menuItem, { alignItems: 'center', flexDirection: 'row' }]}>
            <IconLogOut color={'#4a4a4a'} name={'log-out'} size={20} style={{marginRight: 5}} />
            <Text style={styles.menuItemText}>Odhlásiť</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  async _signOutAsync(navigation) {
    await AsyncStorage.clear();
    navigation.navigate('Auth');
  }
}

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

export default DrawerNavigation;
