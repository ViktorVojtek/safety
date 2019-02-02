import React, { Component } from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import ImagePicker from 'react-native-image-picker';
import { compose, graphql } from 'react-apollo';
import PropTypes from 'prop-types';
import CategoryText from './components/CategoryText';
import { geocode, gpsLocation } from '../../../../shared/lib';
import SubCategoryText from './components/SubCategoryText';
import { reportQuery } from '../../../../graphql/queries';
import { createReportMutation } from '../../../../graphql/mutations';
import Header from './components/Header';
import AddPhoto from './components/AddPhoto';
import ShowPhoto from './components/ShowPhoto';
import Modal from '../../../../shared/components/Modal';
import UploadingReportModal from './components/UploadingReportModal';
import { strings, styles as stylesConfig } from '../../../../shared/config';
import styles from './styles';

const { colors: { mediumGrey } } = stylesConfig;

const initialState = {
  address: '',
  description: '',
  error: {
    errorText: '',
    errorVisible: false,
  },
  gpsCoords: {
    latitude: 0.0,
    longitude: 0.0,
  },
  image: {
    data: '',
    fileSize: 0,
    height: 0,
    showImage: false,
    type: '',
    uri: '',
    width: 0,
  },
  photoActivity: false,
  showUploadingModal: false,
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

    this.cancelPhoto = this.cancelPhoto.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
    this.handleLocation = this.handleLocation.bind(this);
    this.selectPhoto = this.selectPhoto.bind(this);
    this.submitReport = this.submitReport.bind(this);
  }

  componentDidMount() {
    this.handleLocation();
  }

  handleLocation = async () => {
    const gpsCoords = await gpsLocation();
    const address = await geocode(gpsCoords);

    this.setState({ address, gpsCoords });
  }

  selectPhoto = () => {
    const options = {
      title: 'Výber fotografie',
      maxHeight: 640,
      maxWidth: 640,
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
      quality: 0.6,
    };

    this.setState({ photoActivity: true });

    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        this.setState({ photoActivity: false });
      } else if (response.error) {
        this.setState({ photoActivity: false });
      } else {
        const {
          data, fileSize, height, type, uri, width,
        } = response;

        this.setState({
          image: {
            data,
            fileSize,
            height,
            showImage: true,
            type,
            uri,
            width,
          },
          photoActivity: false,
        });
      }
    });
  }

  cancelPhoto() {
    this.setState({
      image: {
        data: '',
        fileSize: 0,
        height: 0,
        showImage: false,
        type: '',
        uri: '',
        width: 0,
      },
    });
  }

  submitReport() {
    this.setState({ showUploadingModal: true }, async () => {
      try {
        const {
          address,
          description,
          gpsCoords,
          image: {
            data, fileSize, height, type, width,
          },
        } = this.state;
        const {
          categoryId, mutate, navigation, subCategoryId,
        } = this.props;
        const reportDataToSubmit = {
          address,
          categoryId,
          gpsCoords,
          image: {
            data, fileSize, height, type, width,
          },
          subCategoryId,
        };

        if (description.length > 0) {
          reportDataToSubmit.description = description;
        }

        const userId = await AsyncStorage.getItem('id');

        reportDataToSubmit.userId = userId;

        await mutate({ variables: { report: reportDataToSubmit } });

        this.setState({
          address: '',
          description: '',
          error: {
            errorText: '',
            errorVisible: false,
          },
          gpsCoords: {
            latitude: 0.0,
            longitude: 0.0,
          },
          image: {
            data: '',
            fileSize: 0,
            height: 0,
            showImage: false,
            type: '',
            uri: '',
            width: 0,
          },
          photoActivity: false,
          showUploadingModal: false,
        });

        setTimeout(() => navigation.navigate('Report'), 500);
      } catch (err) {
        console.log(err);
      }
    });
  }

  toggleError() {
    const { error: { errorVisible } } = this.state;

    this.setState({ error: { errorVisible: errorVisible !== true } });
  }

  handleDescription(description) {
    this.setState({ description });
  }

  render() {
    console.log(this.props);
    const {
      categoryId,
      subCategoryId,
    } = this.props;
    const {
      address,
      description,
      error: { errorText, errorVisible },
      image: { showImage, uri },
      photoActivity,
      showUploadingModal,
    } = this.state;

    return (
      <View style={styles.container}>
        <Modal
          close={this.toggleError}
          text={errorText}
          visible={errorVisible}
        />
        <UploadingReportModal
          visible={showUploadingModal}
        />
        <View style={styles.cameraContainer}>
          <View style={styles.choosePhotoContainer}>
            {
              photoActivity ? <ActivityIndicator />
                : (
                  showImage ? <ShowPhoto photoHandler={this.cancelPhoto} uri={uri} />
                    : <AddPhoto photoHandler={this.selectPhoto} />
                )
            }
          </View>
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

            <TouchableOpacity
              disabled={!showImage}
              onPress={() => this.submitReport()}
              style={[styles.button, { backgroundColor: showImage ? '#ff0068' : mediumGrey }]}
            >
              <Text style={styles.buttonText}>Pridať oznámenie</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default compose(
  graphql(reportQuery, {
    props: (props) => {
      const { data: { report: { categoryId, subCategoryId } } } = props;

      return { ...props, categoryId, subCategoryId };
    },
  }),
  graphql(createReportMutation),
)(AddReport);
