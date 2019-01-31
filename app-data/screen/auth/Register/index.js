import React, { Component } from 'react';
import {
  Image,
  TouchableOpacity,
  Text,
  TextInput,
  View,
} from 'react-native';
import { graphql } from 'react-apollo';
import createUserMutation from './graphql/createUser.mutation';
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
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <Modal
          close={this.toggleError}
          text="Užívateľ s danou e-mailovou adresou už existuje."
          visible={errorVisible}
        />

        <View style={styles.backgroundImageContainer}>
          <Image
            blurRadius={6}
            source={require('../../../shared/assets/images/Infrastructure.jpeg')}
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
          <TextInput
            onChangeText={(firstNameText) => {
              const { data } = this.state;

              data.firstName = firstNameText;
              this.handleUserData(data);
            }}
            placeholder="Zadajte svoje krstné meno"
            style={styles.textInput}
            value={firstName}
          />
          <TextInput
            onChangeText={(lastNameText) => {
              const { data } = this.state;

              data.lastName = lastNameText;
              this.handleUserData(data);
            }}
            placeholder="Zadajte svoje priezvysko"
            style={styles.textInput}
            value={lastName}
          />
          <TextInput
            autoCapitalize="none"
            keyboardType="email-address"
            onChangeText={(emailText) => {
              const { data } = this.state;

              data.email = emailText;
              this.handleUserData(data);
            }}
            placeholder="Zadajte svoj e-mail"
            style={styles.textInput}
            value={email}
          />
          <TextInput
            onChangeText={(passwordText) => {
              const { data } = this.state;

              data.password = passwordText;
              this.handleUserData(data);
            }}
            placeholder="Zadajte heslo"
            style={styles.textInput}
            secureTextEntry
            value={password}
          />

          <TouchableOpacity style={styles.button} onPress={this.registerAsync}>
            <Text style={styles.textWhite}>Registrovať</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default graphql(createUserMutation)(Register);
