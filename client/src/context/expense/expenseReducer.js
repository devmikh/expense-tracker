import {
  ADD_EXPENSE,
  DELETE_EXPENSE,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_EXPENSE,
  FILTER_EXPENSES,
  CLEAR_FILTER
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case ADD_EXPENSE:
      return {
        ...state,
        expenses: [...state.expenses, action.payload]
      };
    case UPDATE_EXPENSE:
      return {
        ...state,
        expenses: state.expenses.map(expense =>
          expense.id === action.payload.id ? action.payload : expense
        )
      };
    case DELETE_EXPENSE:
      return {
        ...state,
        expenses: state.expenses.filter(
          expense => expense.id !== action.payload
        )
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null
      };
    default:
      return state;
  }
};
