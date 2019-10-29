import {
  ADD_EXPENSE,
  DELETE_EXPENSE,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_EXPENSE,
  FILTER_EXPENSES,
  CLEAR_FILTER,
  SORT_EXPENSES,
  SET_ORDER,
  SET_SORT
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
    case FILTER_EXPENSES:
      return {
        ...state,
        filtered: state.expenses.filter(expense => {
          const regex = new RegExp(`${action.payload}`, "gi");
          return (
            expense.category.match(regex) || expense.description.match(regex)
          );
        })
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null
      };
    case SET_ORDER:
      return {
        ...state,
        order: action.payload
      };
    case SET_SORT:
      return {
        ...state,
        sortBy: action.payload
      };
    case SORT_EXPENSES:
      return {
        ...state,
        expenses: state.expenses.sort(
          // (a, b) => (a.amount > b.amount ? 1 : -1)
          // {
          // switch (action.payload) {
          //   case "Date":
          //     a.date > b.date ? 1 : -1;
          //   case "Amount":
          //     a.date > b.amount ? 1 : -1;
          //   case "Category":
          //     a.date > b.category ? 1 : -1;
          // }
          // }
          (a, b) => {
            switch (state.sortBy) {
              case "Date":
                if (state.order === "asc") {
                  return new Date(a.date) - new Date(b.date);
                } else {
                  return new Date(b.date) - new Date(a.date);
                }

              case "Amount":
                if (state.order === "asc") {
                  return a.amount - b.amount;
                } else {
                  return b.amount - a.amount;
                }

              case "Category":
                if (state.order === "asc") {
                  return a.category > b.category ? 1 : -1;
                } else {
                  return a.category > b.category ? -1 : 1;
                }

              default:
                return state;
            }
          }
        )
      };
    default:
      return state;
  }
};