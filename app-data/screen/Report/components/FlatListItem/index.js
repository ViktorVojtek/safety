import React from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { graphql } from 'react-apollo';
import Icon from 'react-native-vector-icons/Feather';
import setReportData from '../graphql/setReportData.mutation';
import styles from './styles';
import { styles as styleConfig } from '../../../../shared/config';

const { colors: { white } } = styleConfig;

export default graphql(setReportData)((props) => {
  const {
    categoryId,
    data: { id, subCategories },
    mutate,
    navigation,
    title,
  } = props;

  return (
    <View style={styles.flatListItem}>
      <View style={styles.imageContainer}>
        <Image
          blurRadius={6}
          resizeMode="cover"
          source={
            id < 2
              ? (
                id < 1
                  ? require('../../../../shared/assets/images/Traffic.jpeg') : require('../../../../shared/assets/images/Infrastructure.jpeg')
              ) : require('../../../../shared/assets/images/Police.png')
          }
          style={styles.image}
        />
        <View style={styles.imageOverlay} />
      </View>
      <TouchableOpacity
        onPress={async () => {
          try {
            const reportData = {
              categoryId,
            };

            await mutate({ variables: { reportData } });

            navigation.navigate('SubCategory', {
              id,
              categoryId,
              categoryName: title,
              data: subCategories,
            });
          } catch (err) {
            console.log(err);
          }
        }}
        style={styles.link}
      >
        <View style={styles.itemTextContainer}>
          <Text style={styles.titleText}>{title}</Text>
          <View style={[styles.linkDivider, {
            backgroundColor: id < 2 ? (id < 1 ? '#ffb21f' : '#ff0057') : '#006de6',
          }]}
          />
          <Text style={styles.textWhite}>
            {
              subCategories.map((item, i) => (i < subCategories.length - 1 ? `${item.categoryName}, ` : `${item.categoryName}, Iné...`))
            }
          </Text>
        </View>
        <Icon color={white} name="chevron-right" size={30} style={styles.chevron} />
      </TouchableOpacity>
    </View>
  );
});
