export default {
  dialNumbers: [{
    __typename: 'DialNumberItem',
    id: '0-N1',
    dialNumberItem: '112',
    dialNumberItemTitle: 'Linka tiesňového volania',
    dialNumberItemType: 'EMERGENCY_LINE',
  }, {
    __typename: 'DialNumberItem',
    id: '1-N1',
    dialNumberItem: '150',
    dialNumberItemTitle: 'Hasiči',
    dialNumberItemType: 'FIRE_FIGHTERS',
  }, {
    __typename: 'DialNumberItem',
    id: '2-N1',
    dialNumberItem: '158',
    dialNumberItemTitle: 'Polícia',
    dialNumberItemType: 'POLICE',
  }, {
    __typename: 'DialNumberItem',
    id: '3-N1',
    dialNumberItem: '159',
    dialNumberItemTitle: 'Mestská polícia',
    dialNumberItemType: 'CITY_POLICE',
  }, {
    __typename: 'DialNumberItem',
    id: '4-N1',
    dialNumberItem: '18 155',
    dialNumberItemTitle: 'Letecká záchranná služba',
    dialNumberItemType: 'AIR_AMBULANCE_SERVICE',
  }, {
    __typename: 'DialNumberItem',
    id: '5-N1',
    dialNumberItem: '18 300',
    dialNumberItemTitle: 'Horská záchranná služba',
    dialNumberItemType: 'MOUNTAIN_RESCUE_SERVICE',
  }],
  gpsDevice: {
    __typename: 'GpsDevice',
    latitude: 0,
    longitude: 0,
  },
  gpsReportMarker: {
    __typename: 'GpsReportMarker',
    latitude: 0,
    longitude: 0,
  },
  categories: [{
    __typename: 'CategoryItem',
    id: '0-C',
    categoryType: 'TRAFFIC',
    categoryName: 'Doprava',
    subCategories: [{
      __typename: 'SubCategoryItem',
      id: '0-0S',
      categoryType: 'DAMAGED_TRAFFIC_SIGN',
      categoryName: 'Poškodená dopravná značka',
    },
    {
      __typename: 'SubCategoryItem',
      id: '1-0S',
      categoryType: 'ROAD_POTHOLE',
      categoryName: 'Výtlk na komunikácií',
    },
    {
      __typename: 'SubCategoryItem',
      id: '2-0S',
      categoryType: 'INOPERATIVE_LIGHT_SIGNALING',
      categoryName: 'Nefunkčná svetelná signalizácia',
    },
    {
      __typename: 'SubCategoryItem',
      id: '3-0S',
      categoryType: 'OTHER',
      categoryName: 'Iné',
    }],
  },
  {
    __typename: 'CategoryItem',
    id: '1-C',
    categoryType: 'INFRASTRUCTURE',
    categoryName: 'Infraštruktúra',
    subCategories: [{
      __typename: 'SubCategoryItem',
      id: '0-1S',
      categoryType: 'DAMAGED_PUBLIC_LIGHT',
      categoryName: 'Nefunkčné verejné osvetlenie',
    },
    {
      __typename: 'SubCategoryItem',
      id: '1-1S',
      categoryType: 'DAMAGED_CITY_PROPERTY',
      categoryName: 'Poškodený majetok mesta',
    },
    {
      __typename: 'SubCategoryItem',
      id: '2-1S',
      categoryType: 'OTHER',
      categoryName: 'Iné',
    }],
  },
  {
    __typename: 'CategoryItem',
    id: '2-C',
    categoryType: 'POLICE',
    categoryName: 'Polícia',
    subCategories: [{
      __typename: 'SubCategoryItem',
      id: '0-2S',
      categoryType: 'CAR_ACCIDENT',
      categoryName: 'Dopravná nehoda',
    },
    {
      __typename: 'SubCategoryItem',
      id: '1-2S',
      categoryType: 'INCORRECT_PARKING',
      categoryName: 'Nesprávne parkovanie',
    },
    {
      __typename: 'SubCategoryItem',
      id: '2-2S',
      categoryType: 'ENDANGAGERING_LIFE_AND_HEALTH',
      categoryName: 'Ohrozenie života a zdravia',
    },
    {
      __typename: 'SubCategoryItem',
      id: '3-2S',
      categoryType: 'VANDALISM',
      categoryName: 'Vandalismus',
    },
    {
      __typename: 'SubCategoryItem',
      id: '4-2S',
      categoryType: 'OTHER',
      categoryName: 'Iné',
    }],
  }],
  report: {
    __typename: 'Report',
    categoryId: '',
    subCategoryId: '',
  },
};
