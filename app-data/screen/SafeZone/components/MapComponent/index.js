import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import MapView from 'react-native-maps';
import { setGpsDeviceMutation } from '../../../../graphql/mutations';
import { gpsLocation } from '../../../../shared/lib';
import styles from './styles';

const LATITUDE_DELTA = 0.01;
const LONGITUDE_DELTA = 0.01;

const initialRegion = {
  latitude: 48.629155,
  longitude: 21.719719,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

class SafeZone extends Component {
  constructor(props) {
    super(props);

    this.map = undefined;
    this.state = {
      region: {
        latitude: 48.629155,
        longitude: 21.719719,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      ready: false,
    };

    this.getCurrentPosition = this.getCurrentPosition.bind(this);
    this.handleMapInit = this.handleMapInit.bind(this);
    this.onMapReady = this.onMapReady.bind(this);
  }

  onMapReady() {
    const { ready } = this.state;

    if (!ready) {
      this.setState({ ready: true }, () => {
        this.getCurrentPosition();
      });
    }
  }

  setRegion(region) {
    const { ready } = this.state;

    if (ready) {
      setTimeout(() => this.map.root.animateToRegion(region, 1000), 10);
    }
    // this.setState({ region });
  }

  getCurrentPosition = async () => {
    const { mutate } = this.props;
    const region = await gpsLocation();

    console.log(region);
    await mutate({ variables: { gpsCoords: region } });

    region.latitudeDelta = LATITUDE_DELTA;
    region.longitudeDelta = LONGITUDE_DELTA;

    this.setRegion(region);
  }

  onRegionChange = (region) => {
    // console.log('onRegionChange', region);
  };

  onRegionChangeComplete = (region) => {
    // console.log('onRegionChangeComplete', region);
  };

  handleMapInit(map) {
    this.map = map;
  }

  render() {
    const { region } = this.state;

    return (
      <MapView
        initialRegion={initialRegion}
        loadingEnabled
        onMapReady={this.onMapReady}
        ref={map => this.handleMapInit(map)}
        onRegionChange={this.onRegionChange}
        onRegionChangeComplete={this.onRegionChangeComplete}
        region={region}
        showsBuildings={false}
        showsIndoors={false}
        showsMyLocationButton
        showsUserLocation
        showsTraffic={false}
        style={styles.map}
      />
    );
  }
}

export default graphql(setGpsDeviceMutation)(SafeZone);
