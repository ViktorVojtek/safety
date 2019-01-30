import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { RNCamera } from 'react-native-camera';
import Header from './components/Header';
import { strings } from '../../../../shared/config';
import styles from './styles';

const initialState = {
  description: ''
};

class AddReport extends Component {
  constructor(props) {
    super(props);

    this.camera = undefined;
    this.state = initialState;

    this.handleDescription = this.handleDescription.bind(this);
  }

  static navigationOptions = {
    header: ({navigation}) => {
      const { header: { title: {report} } } = strings;
      return <Header navigation={navigation} title={report} />;
    }
  }

  render() {
    const { navigation } = this.props;
    const categoryId = navigation.getParam('categoryId');
    const subCategoryId = navigation.getParam('subCategoryId');
    const { description } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.cameraContainer}>
          <RNCamera
            ref={(ref) => {
              this.camera = ref;
            }}
            style={styles.camera}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.on}
            permissionDialogTitle={'Permission to use camera'}
            permissionDialogMessage={'We need your permission to use your camera phone'}
          />
        </View>
        <View style={styles.formContainer}>
          <ScrollView>
            <TextInput
              onChangeText={(descriptionText) => this.handleDescription(descriptionText)}
              placeholder={'Sem zadajte popis'}
              style={styles.textInput}
              value={description}
            />
            <View style={styles.textContainer}>
              <Text>Kategória</Text>
            </View>
            <View style={styles.textContainer}>
              <Text>Podkategória</Text>
            </View>
            <View style={styles.textContainer}>
              <Text>Lokácia</Text>
            </View>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Pridať oznámenie</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    );
  }

  handleDescription(description) {
    this.setState({description});
  }
}

export default AddReport;
