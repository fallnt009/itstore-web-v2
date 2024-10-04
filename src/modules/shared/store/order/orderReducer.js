import {
  ORDER_PENDING,
  ORDER_PROCESSING,
  ORDER_COMPLETED,
} from '../../../shared/services/config/constants';

//action type
export const FETCH_ORDER = 'FETCH_ORDER';
export const SELECT_ORDER = 'SELECT_ORDER';
export const SELECT_ORDER_LIST = 'SELECT_ORDER_LIST';
//initial state
export const INIT_ORDER = {
  order: [],
  orderItems: [],
  orderFilter: [],
  selectedOrder: null,
};

function orderReducer(state, action) {
  switch (action.type) {
    case FETCH_ORDER:
      return {
        ...state,
        order: action.payload.order,
        orderFilter: action.payload.order,
      };
    case SELECT_ORDER:
      return {
        ...state,
        selectedOrder: action.payload.selectedOrder,
        orderItems: action.payload.orderItems,
      };
    case SELECT_ORDER_LIST:
      const selectIndex = action.payload;

      let filteredList = [];

      switch (selectIndex) {
        case 0:
          filteredList = state.order.filter(
            (order) => order.orderStatus === ORDER_PENDING
          );
          break;
        case 1:
          filteredList = state.order.filter(
            (order) => order.orderStatus === ORDER_PROCESSING
          );
          break;
        case 2:
          filteredList = state.order.filter(
            (order) => order.orderStatus === ORDER_COMPLETED
          );
          break;
        default:
          return state;
      }

      return {order: state.order, orderFilter: filteredList};

    default:
      return state;
  }
}

export default orderReducer;
