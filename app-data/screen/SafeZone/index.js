import React, { Component } from 'react';
import {
  Text, TextInput, TouchableOpacity, View,
} from 'react-native';
import Header from './components/Header';
import MapComponent from './components/MapComponent';
import { strings } from '../../shared/config';
import styles from './styles';

const initialState = {
  data: { email: '' },
};

class SafeZone extends Component {
  static navigationOptions = {
    header: ({ navigation }) => {
      const { header: { title: { safeZone } } } = strings;

      return <Header navigation={navigation} title={safeZone} />;
    },
  }

  constructor(props) {
    super(props);

    this.state = initialState;

    this.handleUserData = this.handleUserData.bind(this);
  }

  handleUserData(data) {
    this.setState({ data });
  }

  render() {
    const { data: { email } } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.mapContainer}>
          <MapComponent />
        </View>
        <View style={styles.addUserWrapper}>
          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(emailText) => {
                const { data } = this.state;

                data.email = emailText;
                this.handleUserData(data);
              }}
              value={email}
              placeholder="Zadajte svoj e-mail"
              keyboardType="email-address"
            />
          </View>
          <View style={[styles.textInputContainer, { alignItems: 'center' }]}>
            <TouchableOpacity style={styles.addButton}>
              <Text style={styles.textWhite}>PRIDAŤ</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default SafeZone;
