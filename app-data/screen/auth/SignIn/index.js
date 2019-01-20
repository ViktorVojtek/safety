import React, {Component} from 'react';
import {
  AsyncStorage,
  Button,
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import Header from './components/Header';

const initialState = {
  login: '', // 'Zadajte prihlasovacie meno',
  password: '', // 'Zadajte heslo',
};

class SignIn extends Component {
  constructor(props, ctx) {
    super(props, ctx);

    this.state = initialState;

    this.handleLoginText = this.handleLoginText.bind(this);
    this.handlePasswordText = this.handlePasswordText.bind(this);
  }

  static navigationOptions = {
    header: ({navigation}) => <Header navigation={navigation} />,
  }

  render () {
    const {navigation} = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.text}>Siginng Screen</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(login) => this.handleLoginText(login)}
          value={this.state.login}
          placeholder={'Zadajte prihlasovacie meno'}
        />
        <TextInput
          secureTextEntry
          style={styles.textInput}
          onChangeText={(password) => this.handlePasswordText(password)}
          value={this.state.password}
          placeholder={'Zadajte heslo'}
        />
        <Button title="Sign in!" onPress={() => _signInAsync(navigation)} />
        <Button title="Register!" onPress={() => navigation.navigate('Register')} />
      </View>
    );
  }

  async _signInAsync (navigation) {
    await AsyncStorage.setItem('userToken', 'abc');
    navigation.navigate('App');
  }

  handleLoginText (login) {
    this.setState({login});
  }

  handlePasswordText (password) {
    this.setState({password});
  }
}

const {width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00bcff',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  textInput: {
    backgroundColor: '#fff',
    padding: 10,
    textAlign: 'center',
    width: width * 0.8,
  },
});

export default SignIn;
