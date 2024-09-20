//action type
export const FETCH_PRODUCT_HOME = 'FETCH_PRODUCT_HOME';

//states
export const INIT_PRODUCT = {
  Home: {newProducts: [], salesProducts: []},
};

export default function productReducer(state, action) {
  switch (action.type) {
    case FETCH_PRODUCT_HOME:
      return {
        ...state,
        Home: {
          newProducts: action.payload.newProducts,
          salesProducts: action.payload.newProducts,
        },
      };
    default:
      return state;
  }
}
