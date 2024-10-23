export const FETCH_WISHLIST = 'FETCH_WISHLIST';
export const ADD_WISHLIST = 'ADD_WISHLIST';
export const DELETE_WISHLIST = 'DELETE_WISHLIST';

export const INIT_WISHLIST = {
  Wishlist: {items: [], totalItems: 1, totalPages: 1, currentPage: 1},
};

export default function wishlistReducer(state, action) {
  switch (action.type) {
    case FETCH_WISHLIST:
      return {
        ...state,
        Wishlist: {
          items: action.payload.items,
          totalItems: action.payload.totalItems,
          totalPages: action.payload.totalPages,
          currentPage: action.payload.currentPage,
        },
      };
    case ADD_WISHLIST:
      return {...state};
    case DELETE_WISHLIST:
      return {
        ...state,
        Wishlist: {
          ...state.Wishlist,
          items: state.Wishlist.items.filter(
            (item) => item.productId !== action.payload.productId
          ),
        },
      };
    default:
      return state;
  }
}
