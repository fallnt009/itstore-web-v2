//action.type
export const FETCH_CHECKOUT = 'FETCH_CHECKOUT';
export const CREATE_CHECKOUT = 'CREATE_CHECKOUT';
export const UPDATE_CHECKOUT = 'UPDATE_CHECKOUT';
export const SELECT_CHECKOUT = 'SELECT_CHECKOUT';
//initial state
export const INIT_CHECKOUT = {
  checkout: {item: {}, service: [], payment: []},
  selected: {address: {}, service: {}, payment: {}},
};

function checkoutReducer(state, action) {
  switch (action.type) {
    case FETCH_CHECKOUT:
      return {
        ...state,
        checkout: {
          item: action.payload.item,
          service: action.payload.service,
          payment: action.payload.payment,
        },
      };

    case CREATE_CHECKOUT:
      return {
        ...state,
        checkout: {
          item: action.payload.item,
        },
      };

    case SELECT_CHECKOUT:
      return {
        ...state,
        selected: {
          address: action.payload.address,
          service: action.payload.service,
          payment: action.payload.payment,
        },
      };

    default:
      return state;
  }
}

export default checkoutReducer;
