import React from 'react';
import {
  Text,
  View
} from 'react-native';
import Header from './components/Header';
import { strings } from '../../../../shared/config';
import styles from './styles';

const AddReport = (props) => {
  const { navigation } = props;
  const categoryId = navigation.getParam('categoryId');
  const subCategoryId = navigation.getParam('subCategoryId');

  return (
    <View style={styles.container}>
      <Text>Add report screen</Text>
    </View>
  );
};

AddReport.navigationOptions = {
  header: ({navigation}) => {
    const { header: { title: {report} } } = strings;

    return <Header navigation={navigation} title={report} />;
  }
};

export default AddReport;
