import {
  SEND_ORDER_DATA_REQUEST,
  SEND_ORDER_DATA_SUCCESS,
  SEND_ORDER_DATA_FAILED
} from "../actions/order-details-action";

const initialValue = {
  number: 0,
  name: "",
  requesting: false,
  success: true,
  error: null
}

// this reducer generate current order data
export default function orderDetailsReducer(state = initialValue, action) {
  switch (action.type) {
    case SEND_ORDER_DATA_REQUEST: {
      return {...state, requesting: true, success: false, error: null};
    }
    case SEND_ORDER_DATA_FAILED: {
      return {
        ...state,
        requesting: false,
        success: false,
        error: action.errorMsg
      };
    }
    case SEND_ORDER_DATA_SUCCESS: {
      return {
        number: action.orderDetails.order.number,
        name: action.orderDetails.name,
        requesting: false,
        success: true
      }
    }
    default: {
      return {...state};
    }
  }
}
