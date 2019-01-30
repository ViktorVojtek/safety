import React from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import styles from './styles';
import { styles as styleConfig } from '../../../../shared/config';

const { colors: { mediumGrey, white } } = styleConfig;

export default (props) => {
  const {
    data: { id, subCategories },
    title,
    navigation,
  } = props;

  return (
    <View style={styles.flatListItem}>
      <View style={[styles.image, { borderBottomColor: mediumGrey, borderBottomWidth: 1 }]}>
        <Image
          blurRadius={6}
          resizeMode="cover"
          source={
            id < 2 ?
            (
              id < 1 ?
              require('../../../../shared/assets/images/Traffic.jpeg') :
              require('../../../../shared/assets/images/Infrastructure.jpeg')
            ) : require('../../../../shared/assets/images/Police.png')
          }
          style={styles.image}
        />
        <View style={styles.imageOverlay} />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('SubCategory', {
          id,
          categoryName: title,
          data: subCategories,
        })}
        style={styles.link}
      >
        <View>
          <Text style={styles.titleText}>{title}</Text>
          <View style={[styles.linkDivider, {
            backgroundColor: id < 2 ? (id < 1 ? '#ffb21f' : '#ff0057') : '#006de6'
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
};
