import React from 'react';
import { Text, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { apis, strings } from '../../../../shared/config';
import Header from './components/Header';
import CategoryTitle from '../CategoryTitle';
import SubCategoryTitle from '../SubCategoryTitle';
import { parseDate } from '../../../../shared/lib';
import styles from './styles';

const { serverURI } = apis;

const ReportDetail = ({ navigation }) => {
  const address = navigation.getParam('address');
  const categoryId = navigation.getParam('categoryId');
  const dateStamp = parseInt(navigation.getParam('date'), 10);
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
        <View style={styles.containerColumn}>
          <View style={styles.containerHorizontalHalf}>
            <CategoryTitle categoryId={categoryId} noStyle />
          </View>
          <View style={styles.containerHorizontalHalf}>
            <Text style={styles.textRight}>{parseDate(dateStamp)}</Text>
          </View>
        </View>
        <SubCategoryTitle subCategoryId={subCategoryId} noStyle />
        <Text>{description}</Text>
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
