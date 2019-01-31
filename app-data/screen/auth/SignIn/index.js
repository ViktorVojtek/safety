import React, { Component } from 'react';
import {
  AsyncStorage,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { graphql } from 'react-apollo';
import Modal from '../../../shared/components/Modal';
import Header from './components/Header';
import loginUser from './graphql/loginUser.mutation';
import styles from './styles';

const initialState = {
  data: {
    email: '',
    password: '',
  },
  errorVisible: false,
};

class SignIn extends Component {
  static navigationOptions = {
    header: ({ navigation }) => <Header navigation={navigation} />,
  }

  constructor(props, ctx) {
    super(props, ctx);

    this.state = initialState;

    this.checkFields = this.checkFields.bind(this);
    this.handleUserData = this.handleUserData.bind(this);
    this.signInAsync = this.signInAsync.bind(this);
    this.toggleError = this.toggleError.bind(this);
  }

  checkFields = (data) => {
    const { email, password } = data;

    if (!email || email.length < 1) {
      return false;
    }
    if (!password || password.length < 1) {
      return false;
    }

    return true;
  }

  handleUserData(data) {
    this.setState({ data });
  }

  async signInAsync(mutate, navigation) {
    try {
      const { data: { email, password } } = this.state;
      const user = { email, password };

      const checked = this.checkFields(user);

      if (checked) {
        const resp = await mutate({ variables: { user } });
        const {
          data: {
            loginUser: {
              firstName, id, jwt, lastName, role,
            },
          },
        } = resp;

        await AsyncStorage.multiSet([
          ['firstName', firstName],
          ['id', id],
          ['jwt', jwt],
          ['lastName', lastName],
          ['role', String(role)],
        ], (error) => {
          if (error) {
            return;
          }

          navigation.navigate('App');
        });
      } else {
        throw new Error('Skontrolujte zadané informácie');
      }
    } catch (err) {
      // console.log(err);
      this.toggleError();
    }
  }

  toggleError() {
    const { errorVisible } = this.state;

    this.setState({ errorVisible: errorVisible !== true });
  }

  render() {
    const { mutate, navigation } = this.props;
    const {
      data: {
        email, password,
      },
      errorVisible,
    } = this.state;

    return (
      <View style={styles.container}>
        <Modal
          close={this.toggleError}
          text="Skontrolujte prihlasovacie údaje."
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
          <Text style={styles.loginTitleText}>Prihlásenie</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.link}>Nemáte účeť? Zaregistrujte sa.</Text>
          </TouchableOpacity>
          <TextInput
            autoCapitalize="none"
            style={styles.textInput}
            onChangeText={(emailText) => {
              const { data } = this.state;

              data.email = emailText;
              this.handleUserData(data);
            }}
            value={email}
            placeholder="Zadajte svoj e-mail"
            keyboardType="email-address"
          />
          <TextInput
            secureTextEntry
            style={styles.textInput}
            onChangeText={(passwordText) => {
              const { data } = this.state;

              data.password = passwordText;
              this.handleUserData(data);
            }}
            value={password}
            placeholder="Zadajte heslo"
          />

          <TouchableOpacity
            style={styles.button}
            onPress={() => this.signInAsync(mutate, navigation)}
          >
            <Text style={styles.textWhite}>Prihlásiť</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default graphql(loginUser)(SignIn);
