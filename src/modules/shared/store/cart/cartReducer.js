//action
export const FETCH_CART = 'FETCH_CART';
export const ADD_CART = 'ADD_CART';
export const UPDATE_CART = 'UPDATE_CART';
export const DELETE_CART = 'DELETE_CART';

//state
export const INIT_CART = {
  userCart: [],
};

export default function cartReducer(state, action) {
  switch (action.type) {
    case FETCH_CART:
      return {
        ...state,
        userCart: action.payload.userCart,
      };
    case ADD_CART:
      const {valueId} = action.payload;
      if (state.userCart.length >= 10) return state;
      const index = state.userCart.findIndex(
        (item) => item.productId === valueId
      );
      if (index !== -1) {
        const updatedCart = [...state.userCart];
        updatedCart[index].qty++;
        // setUserCart(updatedCart);
        // await CartApi.updateCartItem(
        //   updatedCart[index].id,
        //   updatedCart[index].qty
        // );
        return {
          ...state,
          userCart: updatedCart,
        };
      }
      return {
        ...state,
        userCart: [...state.userCart, {}],
      };
    case UPDATE_CART:
      return {
        ...state,
      };
    case DELETE_CART:
      return {
        ...state,
      };
    default:
      return state;
  }
}
