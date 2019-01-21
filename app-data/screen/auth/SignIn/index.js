import React, {Component} from 'react';
import {
  Animated,
  AsyncStorage,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {graphql} from 'react-apollo';
import Header from './components/Header';
import loginUser from './graphql/loginUser.mutation';
import styles from './styles';

const initialState = {
  data: {
    email: '',
    password: '',
  },
  fadeAnim: new Animated.Value(0),
  errorVisible: false,
};

class SignIn extends Component {
  constructor(props, ctx) {
    super(props, ctx);

    this.state = initialState;

    this._signInAsync = this._signInAsync.bind(this);
    this.handleUserData = this.handleUserData.bind(this);
    this.startAnimation = this.startAnimation.bind(this);
    this.toggleError = this.toggleError.bind(this);
  }

  static navigationOptions = {
    header: ({navigation}) => <Header navigation={navigation} />,
  }

  render () {
    const {mutate, navigation} = this.props;
    const {data: {email, password}, fadeAnim} = this.state;

    return (
      <View style={styles.container}>
        <Animated.View style={[styles.errorContainer, {opacity: fadeAnim}]}>
          <Text style={styles.textWhite}>Chyba! Skontrolujte prihlasovacie údaje.</Text>
        </Animated.View>
        <View style={[styles.subContainer, {justifyContent: 'flex-end'}]}>
          <TextInput
            autoCapitalize={'none'}
            style={styles.textInput}
            onChangeText={(emailText) => {
              const data = this.state.data;

              data.email = emailText;
              this.handleUserData(data);
            }}
            value={email}
            placeholder={'Zadajte svoj e-mail'}
            keyboardType={'email-address'}
          />
          <TextInput
            secureTextEntry
            style={styles.textInput}
            onChangeText={(passwordText) => {
              const data = this.state.data;

              data.password = passwordText;
              this.handleUserData(data);
            }}
            value={password}
            placeholder={'Zadajte heslo'}
          />
        </View>
        <View style={[styles.subContainer, {justifyContent: 'center'}]}>
          <TouchableOpacity style={styles.button} onPress={() => this._signInAsync(mutate, navigation)}>
            <Text style={styles.textWhite}>Prihlásiť</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.link}>Nemáte účeť? Zaregistrujte sa.</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  async _signInAsync (mutate, navigation) {
    try {
      const {data: {email, password}} = this.state;
      const user = {email, password};
      
      const resp = await mutate({variables: {user}});
      const {data: {loginUser: {firstName, id, jwt, lastName, role}}} = resp;

      await AsyncStorage.multiSet([
        ['firstName', firstName],
        ['id', id],
        ['jwt', jwt],
        ['lastName', lastName],
        ['role', String(role)],
      ], (error) => {
        if (error) {
          console.log(error);
          return;
        }

        navigation.navigate('App');
      });
    } catch (err) {
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

const withGraphql = graphql(loginUser)(SignIn);

export default withGraphql;
