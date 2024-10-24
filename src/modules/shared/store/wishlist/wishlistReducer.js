export const FETCH_WISHLIST = 'FETCH_WISHLIST';
export const ADD_WISHLIST = 'ADD_WISHLIST';
export const DELETE_WISHLIST = 'DELETE_WISHLIST';
export const FETCH_INWISHLIST = 'FETCH_INWISHLIST';

export const INIT_WISHLIST = {
  Wishlist: {items: [], totalItems: 1, totalPages: 1, currentPage: 1},
  inWishlist: [],
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
    case FETCH_INWISHLIST:
      return {
        ...state,
        inWishlist: action.payload.inWishlist,
      };
    case ADD_WISHLIST:
      const {newWishlist} = action.payload;

      // Check if any new products are already in the wishlist
      const updatedInWishlist = newWishlist.filter(
        (newItem) =>
          !state.inWishlist.some((item) => item.productId === newItem.productId)
      );

      // Check if any new products are already in the Wishlist items
      const updatedWishlistItems = newWishlist.filter(
        (newItem) =>
          !state.Wishlist.items.some(
            (item) => item.productId === newItem.productId
          )
      );

      return {
        ...state,
        inWishlist: [...state.inWishlist, ...updatedInWishlist], //update inWishlist
        Wishlist: {
          ...state.Wishlist,
          items: [...state.Wishlist.items, ...updatedWishlistItems], //updated wishlist
        },
      };

    case DELETE_WISHLIST:
      // Create a helper function to filter out the item
      const filterByProductId = (item) =>
        item.productId !== action.payload.productId;
      return {
        ...state,
        inWishlist: state.inWishlist.filter(filterByProductId), // Remove from inWishlist
        Wishlist: {
          ...state.Wishlist,
          items: state.Wishlist.items.filter(filterByProductId), // Remove from Wishlist.items
        },
      };
    default:
      return state;
  }
}
