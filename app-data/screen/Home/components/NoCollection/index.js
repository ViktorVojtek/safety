import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import styles from './styles';

export default ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.partContainer}>
      <FastImage
        style={styles.erbImage}
        source={require('../../../../shared/assets/images/erb.png')}
        resizeMode="contain"
      />
    </View>
    <View style={styles.partContainer}>
      <Text
        style={[styles.textCenter, { fontSize: 20 }]}
      >
        MOMENTÁLNE NIE JE PRIDANÁ ŽIADNA UDALOSŤ
      </Text>
    </View>
    <View style={styles.partContainer}>
      <Text>
        Neváhaj, pridaj svoj prvý príspevok a pomôž Trebišovu!
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          console.log('NAVIGATE TO REPORT');
          navigation.navigate({ routeName: 'Report' });
        }}
      >
        <Text style={styles.textWhite}>+ PRIDAŤ PRVÉ OZNÁMENIE</Text>
      </TouchableOpacity>
    </View>
  </View>
);
