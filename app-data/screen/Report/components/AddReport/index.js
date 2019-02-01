import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { RNCamera } from 'react-native-camera';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/EvilIcons';
import { graphql } from 'react-apollo';
import PropTypes from 'prop-types';
import CategoryText from './components/CategoryText';
import { geocode, gpsLocation } from '../../../../shared/lib';
import SubCategoryText from './components/SubCategoryText';
import { reportQuery } from '../../../../graphql/queries';
import Header from './components/Header';
import { strings } from '../../../../shared/config';
import styles from './styles';

const initialState = {
  address: '',
  cameraShow: false,
  description: '',
  gpsCoords: {
    latitude: 0.0,
    longitude: 0.0,
  },
};

class AddReport extends Component {
  static navigationOptions = {
    header: ({ navigation }) => {
      const { header: { title: { report } } } = strings;
      return <Header navigation={navigation} title={report} />;
    },
  }

  static propTypes = {
    categoryId: PropTypes.string.isRequired,
    subCategoryId: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props);

    this.camera = undefined;
    this.state = initialState;

    this.handleDescription = this.handleDescription.bind(this);
    this.handleLocation = this.handleLocation.bind(this);
    this.selectPhoto = this.selectPhoto.bind(this);
  }

  componentDidMount() {
    this.handleLocation();
  }

  handleLocation = async () => {
    const gpsCoords = await gpsLocation();
    const address = await geocode(gpsCoords);

    this.setState({ address /* , gpsCoords, */ });
  }

  selectPhoto = () => {
    const options = {
      title: 'Výber fotografie',
      // customButtons: null,// [{ name: 'fb', title: 'Choose Photo from Facebook' }],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      console.log(response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.uri };

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };

        console.log(source);
      }
    });
  }

  handleDescription(description) {
    this.setState({ description });
  }

  render() {
    const {
      categoryId,
      subCategoryId,
    } = this.props;
    const { address, cameraShow, description } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.cameraContainer}>
          {
            !cameraShow ? (
              <View style={styles.choosePhotoContainer}>
                <TouchableOpacity
                  onPress={this.selectPhoto}
                  style={styles.choosePhotoButton}
                >
                  <View style={styles.choosePhotoIconContainer}>
                    <Icon name="image" color="#fff" size={35} />
                  </View>
                  <Text style={styles.choosePhotoText}>Pridaj fotografiu</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <RNCamera
                ref={(ref) => {
                  this.camera = ref;
                }}
                style={styles.camera}
                type={RNCamera.Constants.Type.back}
                flashMode={RNCamera.Constants.FlashMode.on}
                permissionDialogTitle="Permission to use camera"
                permissionDialogMessage="We need your permission to use your camera phone"
              />
            )
          }
        </View>
        <View style={styles.formContainer}>
          <ScrollView>
            <TextInput
              onChangeText={descriptionText => this.handleDescription(descriptionText)}
              placeholder="Sem zadajte popis"
              style={styles.textInput}
              value={description}
            />

            <CategoryText categoryId={categoryId} />

            <SubCategoryText
              categoryId={categoryId}
              subCategoryId={subCategoryId}
            />

            <View style={styles.textContainer}>
              <Text>{address}</Text>
            </View>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Pridať oznámenie</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default graphql(reportQuery, {
  props: (props) => {
    const { data: { report: { categoryId, subCategoryId } } } = props;

    return { ...props, categoryId, subCategoryId };
  },
})(AddReport);
