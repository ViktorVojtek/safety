export default {
  gps: {
    __typename: 'Gps',
    latitude: 0.0,
    longitude: 0.0,
  },
  reportCategories: {
    __typename: 'ReportCategories',
    categories: [
      {
        __typename: 'CategoryItem',
        categoryId: 0,
        categoryType: 'TRAFFIC',
        categoryName: 'Doprava',
      },
      {
        __typename: 'CategoryItem',
        categoryId: 1,
        categoryType: 'INFRASTRUCTURE',
        categoryName: 'Infraštruktúra',
      },
      {
        __typename: 'CategoryItem',
        categoryId: 2,
        categoryType: 'POLICE',
        categoryName: 'Polícia',
      },
    ],
  },
  reportSubCategories: {
    __typename: 'ReportSubCategories',
    subCategories: [
      {
        __typename: 'SubCategoryItem',
        categoryId: 1,
        categoryType: 'DAMAGED_TRAFFIC_SIGN',
        categoryName: 'Poškodená dopravná značka',
      },
      {
        __typename: 'SubCategoryItem',
        categoryId: 1,
        categoryType: 'ROAD_POTHOLE',
        categoryName: 'Výtlk na komunikácií',
      },
      {
        __typename: 'SubCategoryItem',
        categoryId: 1,
        categoryType: 'INOPERATIVE_LIGHT_SIGNALING',
        categoryName: 'Nefunkčná svetelná signalizácia',
      },
      {
        __typename: 'SubCategoryItem',
        categoryId: 2,
        categoryType: 'DAMAGED_PUBLIC_LIGHT',
        categoryName: 'Nefunkčné verejné osvetlenie',
      },
      {
        __typename: 'SubCategoryItem',
        categoryId: 2,
        categoryType: 'DAMAGED_CITY_PROPERTY',
        categoryName: 'Poškodený majetok mesta',
      },
      {
        __typename: 'SubCategoryItem',
        categoryId: 3,
        categoryType: 'CAR_ACCIDENT',
        categoryName: 'Dopravná nehoda',
      },
      {
        __typename: 'SubCategoryItem',
        categoryId: 3,
        categoryType: 'INCORRECT_PARKING',
        categoryName: 'Nesprávne parkovanie',
      },
      {
        __typename: 'SubCategoryItem',
        categoryId: 3,
        categoryType: 'ENDANGAGERING_LIFE_AND_HEALTH',
        categoryName: 'Ohrozenie života a zdravia',
      },
      {
        __typename: 'SubCategoryItem',
        categoryId: 3,
        categoryType: 'VANDALISM',
        categoryName: 'Vandalismus',
      },
      {
        __typename: 'defaultCategoryItem',
        categoryId: 0,
        categoryType: 'OTHER',
        categoryName: 'Iné',
      },
    ],
  },
};
