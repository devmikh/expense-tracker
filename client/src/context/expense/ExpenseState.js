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
    ],
    current: null,
    filtered: null
  };

  const [state, dispatch] = useReducer(expenseReducer, initialState);

  // Add Expense
  const addExpense = expense => {
    expense.id = uuid.v4();
    dispatch({ type: ADD_EXPENSE, payload: expense });
  };

  // Delete Expense
  const deleteExpense = id => {
    dispatch({ type: DELETE_EXPENSE, payload: id });
  };

  // Set Current Expense
  const setCurrent = expense => {
    dispatch({ type: SET_CURRENT, payload: expense });
  };

  // Clear Current Expense
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  // Update Expense
  const updateExpense = expense => {
    dispatch({ type: UPDATE_EXPENSE, payload: expense });
  };

  // Filter Expenses
  const filterExpenses = text => {
    dispatch({ type: FILTER_EXPENSES, payload: text });
  };

  // Clear Filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <ExpenseContext.Provider
      value={{
        expenses: state.expenses,
        current: state.current,
        filtered: state.filtered,
        addExpense,
        deleteExpense,
        setCurrent,
        clearCurrent,
        updateExpense,
        filterExpenses,
        clearFilter
      }}
    >
      {props.children}
    </ExpenseContext.Provider>
  );
};

export default ExpenseState;
