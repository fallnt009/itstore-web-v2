//action type
export const FETCH_PRODUCT_HOME = 'FETCH_PRODUCT_HOME';
export const FETCH_PRODUCT_LIST = 'FETCH_PRODUCT_LIST';
export const FETCH_PRODUCT_FILTER = 'FETCH_PRODUCT_FILTER';
export const FETCH_PRODUCT_INFO = 'FETCH_PRODUCT_INFO';

//states
export const INIT_PRODUCT = {
  Home: {newProducts: [], salesProducts: []},
  ProductList: {
    items: [],
    itemsFilter: [],
    totalItems: 1,
    totalPages: 1,
    currentPage: 1,
  },
  ProductInfo: {
    product: {},
    images: [],
    specTitle: [],
    specText: [],
  },
  ProductFilters: {specItems: [], specProduct: []},
};

export default function productReducer(state, action) {
  switch (action.type) {
    case FETCH_PRODUCT_HOME:
      return {
        ...state,
        Home: {
          newProducts: action.payload.newProducts,
          salesProducts: action.payload.salesProducts,
        },
      };
    case FETCH_PRODUCT_LIST:
      return {
        ...state,
        ProductList: {
          items: action.payload.items,
          itemsFilter: action.payload.itemsFilter,
          totalItems: action.payload.totalItems,
          totalPages: action.payload.totalPages,
          currentPage: action.payload.currentPage,
        },
      };
    case FETCH_PRODUCT_FILTER:
      return {
        ...state,
        ProductFilters: {
          specItems: action.payload.specItems,
          specProduct: action.payload.specProduct,
        },
      };
    case FETCH_PRODUCT_INFO:
      return {
        ...state,
        ProductInfo: {
          product: action.payload.product,
          images: action.payload.images,
          specTitle: action.payload.specTitle,
          specText: action.payload.specText,
        },
      };
    default:
      return state;
  }
}
