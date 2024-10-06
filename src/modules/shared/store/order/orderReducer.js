import {
  ORDER_PENDING,
  ORDER_PROCESSING,
  ORDER_COMPLETED,
} from '../../../shared/services/config/constants';

//action type
export const FETCH_ORDER_LISTS = 'FETCH_ORDER_LISTS';
export const FETCH_ORDER_BY_NUMBER = 'FETCH_ORDER_BY_NUMBER';
export const SELECT_ORDER = 'SELECT_ORDER';
export const SELECT_ORDER_LIST = 'SELECT_ORDER_LIST';
//initial state
export const INIT_ORDER = {
  //single order on success or using order number
  order: {detail: {}, product: []},
  //for listing ORDER
  orderList: {items: [], filter: []},
};

function orderReducer(state, action) {
  switch (action.type) {
    case FETCH_ORDER_LISTS:
      return {
        ...state,
        orderList: {
          items: action.payload.items,
        },
      };
    case FETCH_ORDER_BY_NUMBER:
      return {
        ...state,
        order: {
          detail: action.payload.detail,
          product: action.payload.product,
        },
      };

    // case SELECT_ORDER:
    //   return {
    //     ...state,
    //     selectedOrder: action.payload.selectedOrder,
    //     orderItems: action.payload.orderItems,
    //   };
    // case SELECT_ORDER_LIST:
    //   const selectIndex = action.payload;

    //   let filteredList = [];

    //   switch (selectIndex) {
    //     case 0:
    //       filteredList = state.order.filter(
    //         (order) => order.orderStatus === ORDER_PENDING
    //       );
    //       break;
    //     case 1:
    //       filteredList = state.order.filter(
    //         (order) => order.orderStatus === ORDER_PROCESSING
    //       );
    //       break;
    //     case 2:
    //       filteredList = state.order.filter(
    //         (order) => order.orderStatus === ORDER_COMPLETED
    //       );
    //       break;
    //     default:
    //       return state;
    //   }

    //   return {order: state.order, orderFilter: filteredList};

    default:
      return state;
  }
}

export default orderReducer;
