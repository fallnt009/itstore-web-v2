export const FETCH_PRODUCT_OVERVIEW = 'FETCH_PRODUCT_OVERVIEW';
export const FETCH_ALL_BRAND = 'FETCH_ALL_BRAND';
export const FETCH_CATEGORY_TAG = 'FETCH_CATEGORY_TAG';

export const INIT_ADMIN = {
  ProductOverview: {
    items: [],
    itemsFilter: [],
    totalItems: 0,
    totalPages: 1,
    currentPage: 1,
  },
  TagOverview: {
    items: [],
    brandItems: [],
    totalItems: 0,
    totalPages: 1,
    currentPage: 1,
  },
};

function adminReducer(state, action) {
  switch (action.type) {
    case FETCH_PRODUCT_OVERVIEW:
      return {
        ...state,
        ProductOverview: {
          items: action.payload.items,
          itemsFilter: action.payload.itemsFilter,
          totalItems: action.payload.totalItems,
          totalPages: action.payload.totalPages,
          currentPage: action.payload.currentPage,
        },
      };
    case FETCH_CATEGORY_TAG:
      return {
        ...state,
        TagOverview: {
          ...state.TagOverview,
          items: action.payload.items,
          totalItems: action.payload.totalItems,
          totalPages: action.payload.totalPages,
          currentPage: action.payload.currentPage,
        },
      };
    case FETCH_ALL_BRAND:
      return {
        ...state,
        TagOverview: {
          ...state.TagOverview,
          brandItems: action.payload.brandItems,
        },
      };

    default: {
      return state;
    }
  }
}

export default adminReducer;
