import React from 'react';
import {
  ActivityIndicator, FlatList, Text, View,
} from 'react-native';
import { compose, graphql } from 'react-apollo';
import FlatListItem from './components/FlatListItem';
// import { setGpsReportMarkerMutation } from '../../../../graphql/mutations';
import { getReportsQuery } from '../../../../graphql/queries';
import styles from './styles';

const handleMarkerRegion = async ({ latitude, longitude }, mutate) => {
  try {
    const gpsCoords = { latitude, longitude };

    await mutate({ variables: { gpsCoords } });
  } catch (err) {
    console.log(err);
  }
};

export default compose(
  // graphql(setGpsReportMarkerMutation),
  graphql(getReportsQuery),
)(({
  data: {
    error, loading, reports,
  },
  getMarkerPosition, /* mutate, */ navigation,
}) => {
  if (error) {
    return (
      <View style={[styles.container, { justifyContent: 'center' }]}>
        <Text>{error.message}</Text>
      </View>
    );
  }
  if (loading) {
    return <ActivityIndicator style={[styles.container, { justifyContent: 'center' }]} />;
  }

  return (
    <View style={styles.halfContainer}>
      <FlatList
        data={reports}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <FlatListItem
            address={item.address}
            categoryId={item.categoryId}
            description={item.description}
            gpsCoords={item.gpsCoords}
            handler={getMarkerPosition}
            imageURI={item.image.data}
            navigation={navigation}
            subCategoryId={item.subCategoryId}
          />
        )}
      />
    </View>
  );
});
