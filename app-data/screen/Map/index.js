import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Header from '../../shared/components/Header';
import MapView from 'react-native-maps';

const Map = () => (
  <View style={styles.container}>
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    />
  </View>
);

Map.navigationOptions = {
  header: ({navigation}) => <Header navigation={navigation} />,
};

const {height, width} = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  map: {
    height: height - 140,
    width,
  },
});

export default Map;
