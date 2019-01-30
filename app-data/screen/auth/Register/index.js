import React, { Component } from 'react';
import {
  Animated,
  TouchableOpacity,
  Text,
  TextInput,
  View,
} from 'react-native';
import { graphql } from 'react-apollo';
import createUserMutation from './graphql/createUser.mutation';
import Header from './components/Header';
import styles from './styles';

const initialState = {
  data: {
    email: '',
    firstName: '',
    lastName: '',
    password: '',
  },
  fadeAnim: new Animated.Value(0),
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
    this.startAnimation = this.startAnimation.bind(this);
    this.toggleError = this.toggleError.bind(this);
  }

  handleUserData(data) {
    this.setState({ data });
  }

  async registerAsync() {
    const { mutate } = this.props;
    const {
      data: {
        email, firstName, lastName, password,
      },
    } = this.state;
    const user = {
      email, firstName, lastName, password,
    };

    try {
      const resp = await mutate({ variables: { user } });
      console.log(resp);
    } catch (err) {
      /* const error = err.graphQLErrors.map((i) => ({
        message: i.message, statusCode: i.statusCode})); */
      this.toggleError();
    }
  }

  startAnimation() {
    const { errorVisible, fadeAnim } = this.state;
    Animated.timing(
      fadeAnim,
      {
        toValue: errorVisible ? 0 : 1,
        duration: 1000,
      },
    ).start(() => {
      if (!errorVisible) {
        this.setState({ errorVisible: true }, () => {
          if (errorVisible) {
            setTimeout(() => {
              this.startAnimation();
            }, 3000);
          }
        });
      } else {
        this.setState({ errorVisible: false });
      }
    });
  }

  toggleError() {
    this.startAnimation();
  }

  render() {
    const {
      data: {
        email, firstName, lastName, password,
      }, fadeAnim,
    } = this.state;

    return (
      <View style={styles.container}>
        <Animated.View style={[styles.errorContainer, { opacity: fadeAnim }]}>
          <Text style={styles.textWhite}>
            Chyba! Užívateľ s danou e-mailovou adresou už existuje.
          </Text>
        </Animated.View>
        <View style={styles.subContainerTwoThird}>
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
        </View>
        <View style={styles.subContainerOneThird}>
          <TouchableOpacity style={styles.button} onPress={this.registerAsync}>
            <Text style={styles.textWhite}>Registrovať</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const withGraphql = graphql(createUserMutation)(Register);

export default withGraphql;
