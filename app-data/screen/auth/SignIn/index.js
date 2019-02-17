import React, { Component } from 'react';
import {
  Animated,
  AsyncStorage,
  // Image,
  Dimensions,
  Keyboard,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  UIManager,
  View,
} from 'react-native';
import { graphql } from 'react-apollo';
import FastImage from 'react-native-fast-image';
import Modal from '../../../shared/components/Modal';
import Header from './components/Header';
import { loginUserMutation } from '../../../graphql/mutations';
import styles from './styles';

const { State: TextInputState } = TextInput;
const initialState = {
  data: {
    email: '',
    password: '',
  },
  errorText: '',
  errorVisible: false,
  keyboardHeight: 0,
  shift: new Animated.Value(0),
};

class SignIn extends Component {
  static navigationOptions = {
    header: ({ navigation }) => <Header navigation={navigation} />,
  }

  constructor(props, ctx) {
    super(props, ctx);

    this.state = initialState;
    this.keyboardDidShow = null;
    this.keyboardDidHide = null;

    this.checkFields = this.checkFields.bind(this);
    this.handleErrorText = this.handleErrorText.bind(this);
    this.handleUserData = this.handleUserData.bind(this);
    this.handleKeyboardDidHide = this.handleKeyboardDidHide.bind(this);
    this.handleKeyboardDidShow = this.handleKeyboardDidShow.bind(this);
    this.signInAsync = this.signInAsync.bind(this);
    this.toggleError = this.toggleError.bind(this);
  }

  componentWillMount() {
    this.keyboardDidShow = Keyboard.addListener('keyboardDidShow', this.handleKeyboardDidShow);
    this.keyboardDidHide = Keyboard.addListener('keyboardDidHide', this.handleKeyboardDidHide);
  }

  componentWillUnmount() {
    this.keyboardDidShow.remove();
    this.keyboardDidHide.remove();
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
              confirmed, firstName, id, jwt, lastName, role,
            },
          },
        } = resp;

        if (confirmed) {
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
          throw new Error('Potvrďte registráciu!');
        }
      } else {
        throw new Error('Skontrolujte zadané informácie');
      }
    } catch (err) {
      if (err.message.indexOf('NOT_FOUND') > -1) {
        this.handleErrorText('Nesprávne prihlasovacie údaje');
        this.toggleError();
      } else {
        this.handleErrorText(err.message);
        this.toggleError();
      }
    }
  }

  handleErrorText(errorText) {
    this.setState({ errorText });
  }

  handleKeyboardDidHide() {
    const { shift } = this.state;

    Animated.timing(
      shift, {
        toValue: 0,
        duration: 600,
        useNativeDriver: true,
      },
    ).start();
  }

  handleKeyboardDidShow(event) {
    const { keyboardHeight } = this.state;

    if (!keyboardHeight && event.endCoordinates) {
      this.setState({ keyboardHeight: event.endCoordinates.height });
    }

    const { height: windowHeight } = Dimensions.get('window');
    const currentlyFocusedField = TextInputState.currentlyFocusedField();

    UIManager.measure(currentlyFocusedField, (originX, originY, width, height, pageX, pageY) => {
      const fieldHeight = height;
      const fieldTop = pageY;
      const gap = (windowHeight - keyboardHeight) - (fieldTop + fieldHeight);
      const { shift } = this.state;

      if (gap >= 0) {
        return;
      }

      Animated.timing(
        shift, {
          toValue: gap,
          duration: 600,
          useNativeDriver: true,
        },
      ).start();
    });
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
      errorText,
      errorVisible,
      shift,
    } = this.state;

    return (
      <View style={styles.container}>
        <Modal
          close={this.toggleError}
          text={errorText}
          visible={errorVisible}
        />

        <View style={styles.erbContainer}>
          <FastImage
            source={require('../../../shared/assets/images/erb.png')}
            style={styles.erbImage}
            resizeMode="contain"
          />
        </View>

        <View style={styles.subContainer}>
          <Text style={styles.loginTitleText}>SAFETY / Trebišov</Text>
          <ScrollView>
            <Animated.View style={{ transform: [{ translateY: shift }] }}>
              <TextInput
                autoCapitalize="none"
                style={[styles.textInput, {
                  borderBottomWidth: 0,
                  marginBottom: 0,
                  borderBottomLeftRadius: 0,
                  borderBottomRightRadius: 0,
                }]}
                onChangeText={(emailText) => {
                  const { data } = this.state;

                  data.email = emailText;
                  this.handleUserData(data);
                }}
                returnKeyLabel="ďalej"
                returnKeyType="next"
                onSubmitEditing={() => this.secondTextInput.focus()}
                blurOnSubmit={false}
                value={email}
                placeholder="Zadajte svoj e-mail"
                keyboardType="email-address"
              />
              <TextInput
                autoCapitalize="none"
                secureTextEntry
                style={[styles.textInput, { borderTopLeftRadius: 0, borderTopRightRadius: 0 }]}
                onChangeText={(passwordText) => {
                  const { data } = this.state;

                  data.password = passwordText;
                  this.handleUserData(data);
                }}
                onFocus={this.handleKeyboardDidShow}
                ref={(input) => { this.secondTextInput = input; }}
                value={password}
                placeholder="Zadajte heslo"
              />
            </Animated.View>
          </ScrollView>

          <TouchableOpacity
            style={styles.button}
            onPress={() => this.signInAsync(mutate, navigation)}
          >
            <Text style={styles.textWhite}>Prihlásiť</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.link}>Nemáte účeť? Zaregistrujte sa.</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default graphql(loginUserMutation)(SignIn);
