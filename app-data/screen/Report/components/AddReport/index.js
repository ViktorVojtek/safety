import React, { Component } from 'react';
import {
  ActivityIndicator,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { RNCamera } from 'react-native-camera';
import { compose, graphql } from 'react-apollo';
import getCategoryQuery from './graphql/getCategory.query';
import getSubCategoryQuery from './graphql/getSubCategory.query';
import reportQuery from '../graphql/report.query';
import Header from './components/Header';
import { strings } from '../../../../shared/config';
import styles from './styles';

const initialState = {
  description: '',
};

class AddReport extends Component {
  static navigationOptions = {
    header: ({ navigation }) => {
      const { header: { title: { report } } } = strings;
      return <Header navigation={navigation} title={report} />;
    },
  }

  constructor(props) {
    super(props);

    this.camera = undefined;
    this.state = initialState;

    this.handleDescription = this.handleDescription.bind(this);
  }

  handleDescription(description) {
    this.setState({ description });
  }

  render() {
    console.log('AddReport component');
    const {
      categoryName,
      data: { error, loading, getSubCategory },
    } = this.props;
    const { description } = this.state;

    if (error) {
      return (<View><Text>{error.message}</Text></View>);
    }
    if (loading) {
      return <ActivityIndicator />;
    }

    const subCategoryName = getSubCategory.categoryName;

    if (!categoryName || !subCategoryName) {
      return <ActivityIndicator />;
    }

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
            permissionDialogTitle="Permission to use camera"
            permissionDialogMessage="We need your permission to use your camera phone"
          />
        </View>
        <View style={styles.formContainer}>
          <ScrollView>
            <TextInput
              onChangeText={descriptionText => this.handleDescription(descriptionText)}
              placeholder="Sem zadajte popis"
              style={styles.textInput}
              value={description}
            />
            <View style={styles.textContainer}>
              <Text>{categoryName}</Text>
            </View>
            <View style={styles.textContainer}>
              <Text>{subCategoryName}</Text>
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
}

export default compose(
  graphql(reportQuery, {
    props: (props) => {
      const { data: { report: { categoryId, subCategoryId } } } = props;

      return { ...props, categoryId, subCategoryId };
    },
  }),
  graphql(getCategoryQuery, {
    options: ({ categoryId }) => {
      const id = categoryId;

      return { variables: { id } };
    },
    props: (props) => {
      const { data } = props;

      if (data.getCategory) {
        const { getCategory: { categoryName } } = data;

        return { ...props, categoryName };
      }

      return props;
    },
  }),
  graphql(getSubCategoryQuery, {
    options: ({ categoryId, subCategoryId }) => ({ variables: { categoryId, subCategoryId } }),
  }),
)(AddReport);
