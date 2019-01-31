import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { RNCamera } from 'react-native-camera';
import { graphql } from 'react-apollo';
import CategoryText from './components/CategoryText';
import SubCategoryText from './components/SubCategoryText';
// import getCategoryQuery from './graphql/getCategory.query';
// import getSubCategoryQuery from './graphql/getSubCategory.query';
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
    // console.log('AddReport component');
    // console.log(this.props);
    const { navigation } = this.props;
    const { description } = this.state;
    const categoryId = navigation.getParam('categoryId');
    const subCategoryId = navigation.getParam('subCategoryId');

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
            <CategoryText categoryId={categoryId} />
            <SubCategoryText
              categoryId={categoryId}
              subCategoryId={subCategoryId}
            />
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

export default graphql(reportQuery, {
  props: (props) => {
    const { data: { report: { categoryId, subCategoryId } } } = props;

    return { ...props, categoryId, subCategoryId };
  },
})(AddReport);
