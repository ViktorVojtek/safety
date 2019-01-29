import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import { RNCamera } from 'react-native-camera';
import Header from './components/Header';
import { strings } from '../../../../shared/config';
import styles from './styles';

class AddReport extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions() {
    header: ({navigation}) => {
      const { header: { title: {report} } } = strings;
  
      return <Header navigation={navigation} title={report} />;
    }
  }

  render() {
    const { navigation } = this.props;
    const categoryId = navigation.getParam('categoryId');
    const subCategoryId = navigation.getParam('subCategoryId');

    return (
      <View style={[styles.container, {
        flexDirection: 'column',
        backgroundColor: 'black'
      }]}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'center'
          }}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          permissionDialogTitle={'Permission to use camera'}
          permissionDialogMessage={'We need your permission to use your camera phone'}
          onGoogleVisionBarcodesDetected={({ barcodes }) => {
            console.log(barcodes);
          }}
        />
        <Text>Add report screen</Text>
      </View>
    );
  }
}

export default AddReport;
