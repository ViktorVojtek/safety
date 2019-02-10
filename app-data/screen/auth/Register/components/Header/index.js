import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import styles from './styles';
import { styles as stylesConfig } from '../../../../../shared/config';

const { colors: { darkGrey } } = stylesConfig;

const Header = (props) => {
  const { navigation } = props;

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack(null)}>
        <Icon name="chevron-left" color={darkGrey} size={25} style={styles.chevronLeft} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
