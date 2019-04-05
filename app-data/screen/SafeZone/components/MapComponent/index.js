import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { graphql } from 'react-apollo';
import MapView, { Polygon } from 'react-native-maps';
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
let id = 0;

class SafeZone extends Component {
  constructor(props) {
    super(props);

    this.map = undefined;
    this.state = {
      draw: false,
      region: {
        latitude: 48.629155,
        longitude: 21.719719,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      polygons: [],
      editing: null,
      creatingHole: false,
      ready: false,
    };

    this.getCurrentPosition = this.getCurrentPosition.bind(this);
    this.handleDraw = this.handleDraw.bind(this);
    this.handleMapInit = this.handleMapInit.bind(this);
    this.onMapReady = this.onMapReady.bind(this);
  }

  onRegionChange = (region) => {
    // console.log('onRegionChange', region);
  };

  onRegionChangeComplete = (region) => {
    // console.log('onRegionChangeComplete', region);
  };

  onMapReady() {
    const { ready } = this.state;

    if (!ready) {
      this.setState({ ready: true }, () => {
        this.getCurrentPosition();
      });
    }
  }

  onPress(e) {
    const { draw, editing, creatingHole } = this.state;

    if (!draw) return;

    if (!editing) {
      this.setState({
        editing: {
          id: id += 1,
          coordinates: [e.nativeEvent.coordinate],
          holes: [],
        },
      });
    } else if (!creatingHole) {
      this.setState({
        editing: {
          ...editing,
          coordinates: [
            ...editing.coordinates,
            e.nativeEvent.coordinate,
          ],
        },
      });
    } else {
      const holes = [...editing.holes];
      holes[holes.length - 1] = [
        ...holes[holes.length - 1],
        e.nativeEvent.coordinate,
      ];
      this.setState({
        editing: {
          ...editing,
          id: id += 1, // keep incrementing id to trigger display refresh
          coordinates: [
            ...editing.coordinates,
          ],
          holes,
        },
      });
    }
  }

  setRegion(region) {
    const { ready } = this.state;

    if (ready) {
      if (this.map) {
        setTimeout(() => this.map.animateToRegion(region, 1000), 100);
      } else {
        setTimeout(this.setRegion(region), 500);
      }
    }
    // this.setState({ region });
  }

  getCurrentPosition = async () => {
    const { mutate } = this.props;
    const region = await gpsLocation();

    // console.log(region);
    await mutate({ variables: { gpsCoords: region } });

    region.latitudeDelta = LATITUDE_DELTA;
    region.longitudeDelta = LONGITUDE_DELTA;

    this.setRegion(region);
  }

  finish() {
    const { polygons, editing } = this.state;

    this.setState({
      polygons: [...polygons, editing],
      editing: null,
      creatingHole: false,
    });
  }

  handleDraw() {
    const { draw } = this.state;

    this.setState({ draw: !draw });
  }

  createHole() {
    const { editing, creatingHole } = this.state;

    if (!creatingHole) {
      this.setState({
        creatingHole: true,
        editing: {
          ...editing,
          holes: [
            ...editing.holes,
            [],
          ],
        },
      });
    } else {
      const holes = [...editing.holes];

      if (holes[holes.length - 1].length === 0) {
        holes.pop();
        this.setState({
          editing: {
            ...editing,
            holes,
          },
        });
      }
      this.setState({ creatingHole: false });
    }
  }

  handleMapInit(map) {
    this.map = map;
  }

  render() {
    const {
      creatingHole, editing, draw, polygons, // region,
    } = this.state;

    return (
      <View style={styles.mapContainer}>
        <MapView
          initialRegion={initialRegion}
          loadingEnabled
          onMapReady={this.onMapReady}
          ref={map => this.handleMapInit(map)}
          onPress={e => this.onPress(e)}
          onRegionChange={this.onRegionChange}
          onRegionChangeComplete={this.onRegionChangeComplete}
          // region={region}
          showsBuildings={false}
          showsIndoors={false}
          showsMyLocationButton
          showsUserLocation
          showsTraffic={false}
          style={styles.map}
        >
          {
            polygons.map(polygon => (
              <Polygon
                key={polygon.id}
                coordinates={polygon.coordinates}
                lineCap="round"
                holes={polygon.holes}
                strokeColor="#F00"
                fillColor="rgba(255,0,0,0.5)"
                strokeWidth={3}
              />
            ))
          }
          {
              editing && (
                <Polygon
                  key={editing.id}
                  coordinates={editing.coordinates}
                  lineCap="round"
                  holes={editing.holes}
                  strokeColor="#000"
                  fillColor="rgba(255,0,0,0.5)"
                  strokeWidth={3}
                />
              )
          }
        </MapView>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={this.handleDraw}
            style={[styles.button, { marginLeft: 10, marginTop: 10 }]}
          >
            <Text style={styles.textWhite}>
              { !draw ? 'VYTVORIŤ ZÓNU' : 'ZRUŠIŤ'}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          {editing && (
            <TouchableOpacity
              onPress={() => this.finish()}
              style={[styles.button, { left: 10 }]}
            >
              <Text style={styles.textWhite}>DOKONČIŤ</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  }
}

export default graphql(setGpsDeviceMutation)(SafeZone);
