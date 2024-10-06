//action.type
export const FETCH_CHECKOUT = 'FETCH_CHECKOUT';
export const CREATE_CHECKOUT = 'CREATE_CHECKOUT';
export const UPDATE_CHECKOUT = 'UPDATE_CHECKOUT';
export const SELECT_CHECKOUT = 'SELECT_CHECKOUT';
export const GET_TOTAL_AMOUNT = 'GET_TOTAL_AMOUNT';
//initial state
export const INIT_CHECKOUT = {
  checkout: {item: {}, service: [], payment: []},
  selected: {address: {}, service: {}, payment: {}, status: false},
  amount: {totalPrice: '', subTotal: ''},
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
          status: action.payload.status,
        },
      };

    case UPDATE_CHECKOUT:
      return {
        ...state,
      };

    case GET_TOTAL_AMOUNT:
      return {
        ...state,
        amount: {
          totalPrice: action.payload.totalPrice,
          subTotal: action.payload.subTotal,
        },
      };

    default:
      return state;
  }
}

export default checkoutReducer;
