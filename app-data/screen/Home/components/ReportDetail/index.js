import React from 'react';
import { Text, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { apis, strings } from '../../../../shared/config';
import Header from './components/Header';
import CategoryTitle from '../CategoryTitle';
import SubCategoryTitle from '../SubCategoryTitle';
import styles from './styles';

const { serverURI } = apis;

const ReportDetail = ({ navigation }) => {
  const address = navigation.getParam('address');
  const categoryId = navigation.getParam('categoryId');
  const subCategoryId = navigation.getParam('subCategoryId');
  const imageURI = navigation.getParam('imageURI');
  const description = navigation.getParam('description');

  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <FastImage
          source={{ uri: `${serverURI}/${imageURI}` }}
          resizeMode={FastImage.resizeMode.cover}
          style={styles.image}
        />
      </View>
      <View style={styles.containerHalf}>
        <Text>{description}</Text>
        <CategoryTitle categoryId={categoryId} noStyle />
        <SubCategoryTitle subCategoryId={subCategoryId} noStyle />
        <Text>{address}</Text>
      </View>
    </View>
  );
};

ReportDetail.navigationOptions = {
  header: ({ navigation }) => {
    const { header: { title: { detailReport } } } = strings;

    return <Header navigation={navigation} title={detailReport} />;
  },
};

export default ReportDetail;
