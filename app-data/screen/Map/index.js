import React, { Component } from 'react';
import { View } from 'react-native';
import { graphql } from 'react-apollo';
import { setGpsDeviceMutation } from '../../graphql/mutations';
import ReportListComponent from './components/ReportListComponent';
import Header from '../../shared/components/Header';
import MapComponent from './components/MapComponent';
import { gpsLocation } from '../../shared/lib';
import { strings } from '../../shared/config';
import styles from './styles';

const LATITUDE_DELTA = 0.01;
const LONGITUDE_DELTA = 0.01;

const initialRegion = {
  latitude: 48.646900,
  longitude: 21.575310,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

class Map extends Component {
  constructor(props) {
    super(props);

    this.map = null;
    this.state = {
      region: {
        latitude: 48.646900,
        longitude: 21.575310,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      ready: false,
    };

    this.handleFindMe = this.handleFindMe.bind(this);
    this.handleMapInit = this.handleMapInit.bind(this);
    this.getCurrentPosition = this.getCurrentPosition.bind(this);
    this.getMarkerPosition = this.getMarkerPosition.bind(this);
    this.onMapReady = this.onMapReady.bind(this);
    this.setRegion = this.setRegion.bind(this);
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

    await mutate({ variables: { gpsCoords: region } });

    region.latitudeDelta = LATITUDE_DELTA;
    region.longitudeDelta = LONGITUDE_DELTA;

    this.setRegion(region);
  }

  getMarkerPosition = (region) => {
    this.setRegion(region);
  };

  onRegionChange = (region) => {
    // console.log('onRegionChange', region);
  };

  onRegionChangeComplete = (region) => {
    // console.log('onRegionChangeComplete', region);
  };

  handleFindMe() {
    this.getCurrentPosition();
  }

  handleMapInit(map) {
    this.map = map;
  }

  render() {
    const { region } = this.state;
    return (
      <View style={styles.container}>
        <MapComponent
          handleFindMe={this.handleFindMe}
          handleMapInit={this.handleMapInit}
          initialRegion={initialRegion}
          onMapReady={this.onMapReady}
          onRegionChange={this.onRegionChange}
          onRegionChangeComplete={this.onRegionChangeComplete}
          region={region}
        />
        <ReportListComponent
          getMarkerPosition={this.getMarkerPosition}
        />
      </View>
    );
  }
}

Map.navigationOptions = {
  header: ({ navigation }) => {
    const { header: { title: { map } } } = strings;

    return <Header navigation={navigation} title={map} />;
  },
};

export default graphql(setGpsDeviceMutation)(Map);
