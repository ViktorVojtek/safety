export default {
  gps: {
    __typename: 'Gps',
    latitude: 0.0,
    longitude: 0.0,
  },
  categories: [{
      __typename: 'CategoryItem',
      id: 0,
      categoryType: 'TRAFFIC',
      categoryName: 'Doprava',
      subCategories: [{
        __typename: 'SubCategoryItem',
        id: 0,
        categoryType: 'DAMAGED_TRAFFIC_SIGN',
        categoryName: 'Poškodená dopravná značka',
      },
      {
        __typename: 'SubCategoryItem',
        id: 1,
        categoryType: 'ROAD_POTHOLE',
        categoryName: 'Výtlk na komunikácií',
      },
      {
        __typename: 'SubCategoryItem',
        id: 2,
        categoryType: 'INOPERATIVE_LIGHT_SIGNALING',
        categoryName: 'Nefunkčná svetelná signalizácia',
      }]
    },
    {
      __typename: 'CategoryItem',
      id: 1,
      categoryType: 'INFRASTRUCTURE',
      categoryName: 'Infraštruktúra',
      subCategories: [{
        __typename: 'SubCategoryItem',
        id: 0,
        categoryType: 'DAMAGED_PUBLIC_LIGHT',
        categoryName: 'Nefunkčné verejné osvetlenie',
      },
      {
        __typename: 'SubCategoryItem',
        id: 1,
        categoryType: 'DAMAGED_CITY_PROPERTY',
        categoryName: 'Poškodený majetok mesta',
      }]
    },
    {
      __typename: 'CategoryItem',
      id: 2,
      categoryType: 'POLICE',
      categoryName: 'Polícia',
      subCategories: [{
        __typename: 'SubCategoryItem',
        id: 0,
        categoryType: 'CAR_ACCIDENT',
        categoryName: 'Dopravná nehoda',
      },
      {
        __typename: 'SubCategoryItem',
        id: 1,
        categoryType: 'INCORRECT_PARKING',
        categoryName: 'Nesprávne parkovanie',
      },
      {
        __typename: 'SubCategoryItem',
        id: 2,
        categoryType: 'ENDANGAGERING_LIFE_AND_HEALTH',
        categoryName: 'Ohrozenie života a zdravia',
      },
      {
        __typename: 'SubCategoryItem',
        id: 3,
        categoryType: 'VANDALISM',
        categoryName: 'Vandalismus',
      }]
    },
  ]
};