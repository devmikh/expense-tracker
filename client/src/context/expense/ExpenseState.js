import React, { useReducer } from "react";
import uuid from "uuid";
import ExpenseContext from "./expenseContext";
import expenseReducer from "./expenseReducer";
import {
  ADD_EXPENSE,
  DELETE_EXPENSE,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_EXPENSE,
  FILTER_EXPENSES,
  CLEAR_FILTER
} from "../types";

const ExpenseState = props => {
  const initialState = {
    expenses: [
      {
        id: 1,
        date: 69771323,
        amount: 1200,
        description: "qulum alamo hskksf lakjjksdg",
        category: "Food"
      },
      {
        id: 2,
        date: 6878989,
        amount: 32.21,
        description: "ejkrjhprjegjerg",
        category: "Food"
      },
      {
        id: 3,
        date: 697713231,
        amount: 234,
        description: "jkspakjwgjprewgokl",
        category: "Other"
      }
    ]
  };

  const [state, dispatch] = useReducer(expenseReducer, initialState);

  // Add Expense

  // Delete Expense

  // Set Current Expense

  // Clear Current Expense

  // Update Expense

  // Filter Expenses

  // Clear Filter

  return (
    <ExpenseContext.Provider
      value={{
        expenses: state.expenses
      }}
    >
      {props.children}
    </ExpenseContext.Provider>
  );
};

export default ExpenseState;
