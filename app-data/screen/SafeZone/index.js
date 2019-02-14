import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Header from './components/Header';
import MapComponent from './components/MapComponent';
import { strings } from '../../shared/config';
import styles from './styles';

const SafeZone = () => {
  console.log('SAFE ZONE');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Text>PRIDAŤ</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.mapContainer}>
        <MapComponent />
      </View>
    </View>
  );
};

SafeZone.navigationOptions = {
  header: ({ navigation }) => {
    const { header: { title: { safeZone } } } = strings;

    return <Header navigation={navigation} title={safeZone} />;
  },
};

export default SafeZone;
