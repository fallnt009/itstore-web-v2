import {
  ORDER_PENDING,
  ORDER_PROCESSING,
  ORDER_COMPLETED,
  ORDER_CANCELED,
} from '../../../shared/services/config/constants';

//action type
export const FETCH_ORDER_LISTS = 'FETCH_ORDER_LISTS';
export const FETCH_ORDER_BY_NUMBER = 'FETCH_ORDER_BY_NUMBER';
export const SELECT_ORDER_LIST = 'SELECT_ORDER_LIST';
//initial state
export const INIT_ORDER = {
  //single order on success or using order number
  order: {detail: {}, product: [], currentStep: 1, isCancel: false},
  //for listing ORDER
  orderList: {items: [], filter: [], totalPages: 1},
};

function orderReducer(state = INIT_ORDER, action) {
  switch (action.type) {
    case FETCH_ORDER_LISTS:
      return {
        ...state,
        orderList: {
          items: action.payload.items,
          filter: action.payload.filter,
          totalPages: action.payload.totalPages,
        },
      };
    case FETCH_ORDER_BY_NUMBER:
      const {detail, product, currentStep, isCancel} = action.payload;
      return {
        ...state,
        order: {
          detail: detail,
          product: product,
          currentStep: currentStep,
          isCancel: isCancel,
        },
      };

    case SELECT_ORDER_LIST:
      const selectIndex = action.payload;
      const orderListItem = state.orderList.items; //array

      let filteredList = [];

      switch (selectIndex) {
        case 0:
          filteredList = orderListItem;
          break;
        case 1:
          filteredList = orderListItem.filter(
            (item) => item.orderStatus === ORDER_PENDING
          );
          break;
        case 2:
          filteredList = orderListItem.filter(
            (item) => item.orderStatus === ORDER_PROCESSING
          );
          break;
        case 3:
          filteredList = orderListItem.filter(
            (item) => item.orderStatus === ORDER_COMPLETED
          );
          break;
        case 4:
          filteredList = orderListItem.filter(
            (item) => item.orderStatus === ORDER_CANCELED
          );
          break;
        default:
          return state;
      }

      return {orderList: {items: orderListItem, filter: filteredList}};

    default:
      return state;
  }
}

export default orderReducer;
