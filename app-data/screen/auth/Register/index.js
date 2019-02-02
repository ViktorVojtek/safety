import React, { Component } from 'react';
import {
  Image,
  ScrollView,
  TouchableOpacity,
  Text,
  TextInput,
  View,
} from 'react-native';
import { graphql } from 'react-apollo';
import { createUserMutation } from '../../../graphql/mutations';
import Header from './components/Header';
import Modal from '../../../shared/components/Modal';
import styles from './styles';

const initialState = {
  data: {
    email: '',
    firstName: '',
    lastName: '',
    password: '',
  },
  errorVisible: false,
};

class Register extends Component {
  static navigationOptions = {
    header: ({ navigation }) => <Header navigation={navigation} />,
  }

  constructor(props, ctx) {
    super(props, ctx);

    this.state = initialState;

    this.registerAsync = this.registerAsync.bind(this);
    this.handleUserData = this.handleUserData.bind(this);
    this.toggleError = this.toggleError.bind(this);
  }

  handleUserData(data) {
    this.setState({ data });
  }

  async registerAsync() {
    try {
      const { mutate } = this.props;
      const {
        data: {
          email, firstName, lastName, password,
        },
      } = this.state;
      const user = {
        email, firstName, lastName, password,
      };

      await mutate({ variables: { user } });
    } catch (err) {
      this.toggleError();
    }
  }

  toggleError() {
    const { errorVisible } = this.state;

    this.setState({ errorVisible: errorVisible !== true });
  }

  render() {
    const {
      data: {
        email, firstName, lastName, password,
      },
      errorVisible,
    } = this.state;

    return (
      <View style={styles.container}>
        <Modal
          close={this.toggleError}
          text="Užívateľ s danou e-mailovou adresou už existuje."
          visible={errorVisible}
        />

        <View style={styles.backgroundImageContainer}>
          <Image
            source={require('../../../shared/assets/images/2.jpg')}
            style={styles.backgroundImage}
          />
        </View>
        <View style={styles.erbContainer}>
          <Image
            source={require('../../../shared/assets/images/erb.png')}
            style={styles.erbImage}
          />
        </View>

        <View style={styles.subContainer}>
          <Text style={styles.loginTitleText}>Registrácia</Text>
          <ScrollView>
            <TextInput
              autofocus
              onChangeText={(firstNameText) => {
                const { data } = this.state;

                data.firstName = firstNameText;
                this.handleUserData(data);
              }}
              placeholder="Zadajte svoje krstné meno"
              returnKeyLabel="next"
              returnKeyType="next"
              style={styles.textInput}
              value={firstName}
            />
            <TextInput
              autofocus
              onChangeText={(lastNameText) => {
                const { data } = this.state;

                data.lastName = lastNameText;
                this.handleUserData(data);
              }}
              placeholder="Zadajte svoje priezvysko"
              returnKeyLabel="next"
              returnKeyType="next"
              style={styles.textInput}
              value={lastName}
            />
            <TextInput
              autofocus
              autoCapitalize="none"
              keyboardType="email-address"
              onChangeText={(emailText) => {
                const { data } = this.state;

                data.email = emailText;
                this.handleUserData(data);
              }}
              returnKeyLabel="next"
              returnKeyType="next"
              placeholder="Zadajte svoj e-mail"
              style={styles.textInput}
              value={email}
            />
            <TextInput
              autofocus
              onChangeText={(passwordText) => {
                const { data } = this.state;

                data.password = passwordText;
                this.handleUserData(data);
              }}
              placeholder="Zadajte heslo"
              returnKeyLabel="send"
              returnKeyType="send"
              style={styles.textInput}
              secureTextEntry
              value={password}
            />
          </ScrollView>

          <TouchableOpacity style={styles.button} onPress={this.registerAsync}>
            <Text style={styles.textWhite}>Registrovať</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default graphql(createUserMutation)(Register);
