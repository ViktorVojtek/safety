import React, { Component } from 'react';
import {
  ActivityIndicator, Dimensions, Text, TouchableOpacity, View,
} from 'react-native';
import { compose, graphql } from 'react-apollo';
import MapView from 'react-native-maps';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DeviceMarker from '../DeviceMarker';
import ReportMarker from '../ReportMarker';
import { setGpsDeviceMutation } from '../../../../graphql/mutations';
import { getGpsDeviceQuery, getGpsReportMarkerQuery, getReportsQuery } from '../../../../graphql/queries';
import { gpsLocation } from '../../../../shared/lib';
import { styles as stylesConfig } from '../../../../shared/config';
import styles from './styles';

const { colors: { darkGrey } } = stylesConfig;
const initialState = {
  resetGps: false,
};
class MapComponent extends Component {
  constructor(props) {
    super(props);

    this.state = initialState;
  }

  handleGps = async (mutate) => {
    try {
      const gpsCoords = await gpsLocation();

      console.log(gpsCoords);
      await mutate({ variables: { gpsCoords } });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const {
      data: {
        error, loading, reports,
      },
      gpsDevice, gpsReportMarker, mutate,
    } = this.props;
    const { latitude, longitude } = gpsDevice;

    if (latitude === 0 && longitude === 0) {
      this.handleGps(mutate);
    }

    if (error) {
      return (
        <View style={[styles.container, { justifyContent: 'center' }]}>
          <Text>{error.message}</Text>
        </View>
      );
    }
    if (loading) {
      return <ActivityIndicator style={[styles.container, { justifyContent: 'center' }]} />;
    }

    const { height, width } = Dimensions.get('screen');
    const latitudeDelta = 0.0025;
    const ASPECT_RATIO = (width / height) * 0.5;
    const longitudeDelta = ASPECT_RATIO * latitudeDelta;

    let region;

    if (gpsReportMarker.latitude !== 0 && gpsReportMarker.longitude !== 0) {
      region = {
        latitude: gpsReportMarker.latitude,
        longitude: gpsReportMarker.longitude,
        latitudeDelta,
        longitudeDelta,
      };
    } else {
      region = {
        latitude,
        longitude,
        latitudeDelta,
        longitudeDelta,
      };
    }

    return (
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          region={region}
        >
          <DeviceMarker coordinate={{ latitude, longitude }} />
          {
            reports.map(item => ( // TODO Implement Map clusters
              <ReportMarker coordinate={item.gpsCoords} key={item.id} />
            ))
          }
        </MapView>
        <View style={styles.resetToDevicePosition}>
          <TouchableOpacity onPress={() => this.handleGps(mutate)}>
            <Icon name="gps-fixed" color={darkGrey} size={20} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default compose(
  graphql(setGpsDeviceMutation),
  graphql(getGpsDeviceQuery, {
    props: ({ data: { gpsDevice } }) => ({ gpsDevice }),
  }),
  graphql(getGpsReportMarkerQuery, {
    props: ({ data: { gpsReportMarker } }) => ({ gpsReportMarker }),
  }),
  graphql(getReportsQuery),
)(MapComponent);
