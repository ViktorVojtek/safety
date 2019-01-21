import React, {Component} from 'react';
import {
  Animated,
  TouchableOpacity,
  Text,
  TextInput,
  View
} from 'react-native';
import {graphql} from 'react-apollo';
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
  constructor(props, ctx) {
    super(props, ctx);

    this.state = initialState;

    this._registerAsync = this._registerAsync.bind(this);
    this.handleUserData = this.handleUserData.bind(this);
    this.startAnimation = this.startAnimation.bind(this);
    this.toggleError = this.toggleError.bind(this);
  }

  static navigationOptions = {
    header: ({navigation}) => <Header navigation={navigation} />,
  }

  render () {
    const {data: {email, firstName, lastName, password}, fadeAnim} = this.state;

    return (
      <View style={styles.container}>
        <Animated.View style={[styles.errorContainer, {opacity: fadeAnim}]}>
          <Text style={styles.textWhite}>Chyba! Užívateľ s danou e-mailovou adresou už existuje.</Text>
        </Animated.View>
        <View style={styles.subContainerTwoThird}>
          <TextInput
            onChangeText={(firstNameText) => {
              const data = this.state.data;

              data.firstName = firstNameText;
              this.handleUserData(data);
            }}
            placeholder={'Zadajte svoje krstné meno'}
            style={styles.textInput}
            value={firstName}
          />
          <TextInput
            onChangeText={(lastNameText) => {
              const data = this.state.data;

              data.lastName = lastNameText;
              this.handleUserData(data);
            }}
            placeholder={'Zadajte svoje priezvysko'}
            style={styles.textInput}
            value={lastName}
          />
          <TextInput
            autoCapitalize={'none'}
            keyboardType={'email-address'}
            onChangeText={(emailText) => {
              const data = this.state.data;

              data.email = emailText;
              this.handleUserData(data);
            }}
            placeholder={'Zadajte svoj e-mail'}
            style={styles.textInput}
            value={email}
          />
          <TextInput
            onChangeText={(passwordText) => {
              const data = this.state.data;

              data.password = passwordText;
              this.handleUserData(data);
            }}
            placeholder={'Zadajte heslo'}
            style={styles.textInput}
            secureTextEntry
            value={password}
          />
        </View>
        <View style={styles.subContainerOneThird}>
          <TouchableOpacity style={styles.button} onPress={this._registerAsync}>
            <Text style={styles.textWhite}>Registrovať</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  async _registerAsync () {
    const {mutate} = this.props;
    const {data: {email, firstName, lastName, password}} = this.state;
    const user = {email, firstName, lastName, password};

    try {
      const resp = await mutate({variables: {user}});
      console.log(resp);
    } catch (err) {
      // const error = err.graphQLErrors.map((i) => ({message: i.message, statusCode: i.statusCode}));
      
      this.toggleError();
    }
  }

  handleUserData (data) {
    this.setState({data});
  }

  startAnimation () {
    Animated.timing(
      this.state.fadeAnim,
      {
        toValue: this.state.errorVisible ? 0 : 1,
        duration: 1000,
      },
    ).start(() => {
      if (!this.state.errorVisible) {
        this.setState({errorVisible: true}, () => {
          if (this.state.errorVisible) {
            setTimeout(() => {
              this.startAnimation();
            }, 3000);
          }
        });
      } else {
        this.setState({errorVisible: false});
      }
    });
  }

  toggleError () {
    this.startAnimation();
  }
}

const withGraphql = graphql(createUserMutation)(Register);

export default withGraphql;
