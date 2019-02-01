import React from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { graphql } from 'react-apollo';
import Icon from 'react-native-vector-icons/Feather';
import { setReportDataMutation } from '../../../../graphql/mutations';
import styles from './styles';
import { styles as styleConfig } from '../../../../shared/config';

const { colors: { white } } = styleConfig;

export default graphql(setReportDataMutation)((props) => {
  const {
    data: { id, subCategories },
    mutate,
    navigation,
    title,
  } = props;

  const cId = parseInt(id.split('-')[0], 10);

  return (
    <View style={styles.flatListItem}>
      <View style={styles.imageContainer}>
        <Image
          blurRadius={6}
          resizeMode="cover"
          source={
            cId < 2
              ? (
                cId < 1
                  ? require('../../../../shared/assets/images/Traffic.jpeg') : require('../../../../shared/assets/images/Infrastructure.jpeg')
              ) : require('../../../../shared/assets/images/Police.png')
          }
          style={styles.image}
        />
        <View style={styles.imageOverlay} />
      </View>
      <TouchableOpacity
        onPress={async () => {
          const reportData = { categoryId: id };

          await mutate({ variables: { reportData } });

          navigation.navigate('SubCategory');
        }}
        style={styles.link}
      >
        <View style={styles.itemTextContainer}>
          <Text style={styles.titleText}>{title}</Text>
          <View style={[styles.linkDivider, {
            backgroundColor: cId < 2 ? (cId < 1 ? '#ffb21f' : '#ff0057') : '#006de6',
          }]}
          />
          <Text style={styles.textWhite}>
            {
              subCategories.map((item, i) => (i < subCategories.length - 1 ? `${item.categoryName}, ` : `${item.categoryName}...`))
            }
          </Text>
        </View>
        <Icon color={white} name="chevron-right" size={30} style={styles.chevron} />
      </TouchableOpacity>
    </View>
  );
});
