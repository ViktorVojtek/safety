import React, { Component } from 'react';
import {
  Animated,
  // Image,
  Dimensions,
  Keyboard,
  ScrollView,
  TouchableOpacity,
  Text,
  TextInput,
  UIManager,
  View,
} from 'react-native';
import { graphql } from 'react-apollo';
import { createUserMutation } from '../../../graphql/mutations';
import Header from './components/Header';
import Modal from '../../../shared/components/Modal';
import styles from './styles';

const { State: TextInputState } = TextInput;
const initialState = {
  data: {
    email: '',
    firstName: '',
    lastName: '',
    password: '',
  },
  errorVisible: false,
  keyboardHeight: 0,
  shift: new Animated.Value(0),
};

class Register extends Component {
  static navigationOptions = {
    header: ({ navigation }) => <Header navigation={navigation} />,
  }

  constructor(props, ctx) {
    super(props, ctx);

    this.state = initialState;
    this.keyboardDidShow = null;
    this.keyboardDidHide = null;

    this.registerAsync = this.registerAsync.bind(this);
    this.handleKeyboardDidHide = this.handleKeyboardDidHide.bind(this);
    this.handleKeyboardDidShow = this.handleKeyboardDidShow.bind(this);
    this.handleUserData = this.handleUserData.bind(this);
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

  handleUserData(data) {
    this.setState({ data });
  }

  async registerAsync() {
    try {
      const { mutate, navigation } = this.props;
      const {
        data: {
          email, firstName, lastName, password,
        },
      } = this.state;
      const user = {
        email, firstName, lastName, password,
      };

      await mutate({ variables: { user } });

      navigation.navigate('SignIn');
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
      shift,
    } = this.state;

    return (
      <View style={styles.container}>
        <Modal
          close={this.toggleError}
          text="Užívateľ s danou e-mailovou adresou už existuje."
          visible={errorVisible}
        />

        <View style={styles.subContainer}>
          <Text style={styles.loginTitleText}>Registrácia</Text>
          <ScrollView>
            <Animated.View style={{ transform: [{ translateY: shift }] }}>
              <TextInput
                onChangeText={(firstNameText) => {
                  const { data } = this.state;

                  data.firstName = firstNameText;
                  this.handleUserData(data);
                }}
                placeholder="Zadajte svoje krstné meno"
                returnKeyLabel="next"
                returnKeyType="next"
                style={[styles.textInput, {
                  borderTopLeftRadius: 4,
                  borderTopRightRadius: 4,
                  borderBottomWidth: 0,
                }]}
                onSubmitEditing={() => this.secondTextInput.focus()}
                value={firstName}
              />
              <TextInput
                onChangeText={(lastNameText) => {
                  const { data } = this.state;

                  data.lastName = lastNameText;
                  this.handleUserData(data);
                }}
                onFocus={this.handleKeyboardDidShow}
                ref={(input) => { this.secondTextInput = input; }}
                onSubmitEditing={() => this.thirdTextInput.focus()}
                placeholder="Zadajte svoje priezvysko"
                returnKeyLabel="ďalej"
                returnKeyType="next"
                style={[styles.textInput, { borderBottomWidth: 0 }]}
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
                onFocus={this.handleKeyboardDidShow}
                onSubmitEditing={() => this.fourthTextInput.focus()}
                ref={(input) => { this.thirdTextInput = input; }}
                returnKeyLabel="ďalej"
                returnKeyType="next"
                placeholder="Zadajte svoj e-mail"
                style={[styles.textInput, { borderBottomWidth: 0 }]}
                value={email}
              />
              <TextInput
                autofocus
                autoCapitalize="none"
                onChangeText={(passwordText) => {
                  const { data } = this.state;

                  data.password = passwordText;
                  this.handleUserData(data);
                }}
                onFocus={this.handleKeyboardDidShow}
                ref={(input) => { this.fourthTextInput = input; }}
                placeholder="Zadajte heslo"
                returnKeyLabel="hotovo"
                returnKeyType="done"
                style={[styles.textInput, {
                  borderBottomLeftRadius: 4,
                  borderBottomRightRadius: 4,
                }]}
                secureTextEntry
                value={password}
              />
            </Animated.View>
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
