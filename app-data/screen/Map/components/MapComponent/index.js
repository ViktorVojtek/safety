import React, { Component } from 'react';
import {
  ActivityIndicator, Dimensions, Text, TouchableOpacity, View,
} from 'react-native';
import { compose, graphql } from 'react-apollo';
import MapView from 'react-native-map-clustering';// 'react-native-map-clustering'; // 'react-native-maps';
// import { Marker } from 'react-native-maps';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import DeviceMarker from '../DeviceMarker';
import ReportMarker from '../ReportMarker';
import { setGpsDeviceMutation } from '../../../../graphql/mutations';
import { getGpsDeviceQuery, getGpsReportMarkerQuery, getReportsQuery } from '../../../../graphql/queries';
import { gpsLocation } from '../../../../shared/lib';
import { styles as stylesConfig } from '../../../../shared/config';
import styles from './styles';

const { height, width } = Dimensions.get('screen');

const { colors: { darkGrey } } = stylesConfig;
const initialState = { resetGps: false };

class MapComponent extends Component {
  static propTypes = {
    data: PropTypes.shape({
      error: PropTypes.string,
      loading: PropTypes.bool.isRequired,
      reports: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    }).isRequired,
    gpsDevice: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
    }).isRequired,
    gpsReportMarker: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
    }).isRequired,
  };

  constructor(props) {
    super(props);

    this.state = initialState;
  }

  handleGps = async (mutate) => {
    try {
      const gpsCoords = await gpsLocation();

      // console.log(gpsCoords);
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

    const { latitude, longitude } = gpsDevice;

    if (latitude === 0 && longitude === 0) {
      this.handleGps(mutate);
      return null;
    }

    const latitudeDelta = 0.0025;
    const ASPECT_RATIO = (width / height) * 0.5;
    const longitudeDelta = ASPECT_RATIO * latitudeDelta;

    const region = {
      latitude,
      longitude,
      latitudeDelta,
      longitudeDelta,
    };

    if (gpsReportMarker.latitude !== 0 && gpsReportMarker.longitude !== 0) {
      region.latitude = gpsReportMarker.latitude;
      region.longitude = gpsReportMarker.longitude;
    }

    return (
      region.latitude > 0 ? (
        <View style={styles.mapContainer}>
          <MapView
            style={styles.map}
            initialRegion={region}
            region={region}
          >
            <DeviceMarker coordinate={{ latitude, longitude }} />
            {
              reports.map(item => <ReportMarker coordinate={item.gpsCoords} key={item.id} />)
            }
          </MapView>
          <View style={styles.resetToDevicePosition}>
            <TouchableOpacity onPress={() => this.handleGps(mutate)}>
              <Icon name="gps-fixed" color={darkGrey} size={20} />
            </TouchableOpacity>
          </View>
        </View>
      ) : <ActivityIndicator />
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
