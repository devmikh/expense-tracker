import React, { useReducer } from "react";
import axios from "axios";
import ExpenseContext from "./expenseContext";
import expenseReducer from "./expenseReducer";
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
  SET_SORT,
  EXPENSE_ERROR
} from "../types";

const ExpenseState = props => {
  const initialState = {
    expenses: [],
    current: null,
    filtered: null,
    order: "asc",
    sortBy: "Date",
    error: null
  };

  const [state, dispatch] = useReducer(expenseReducer, initialState);

  // Add Expense
  const addExpense = async expense => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    try {
      const res = await axios.post("/api/expenses", expense, config);

      dispatch({
        type: ADD_EXPENSE,
        payload: res.data
      });
    } catch (err) {
      dispatch({ type: EXPENSE_ERROR, payload: err.response.msg });
    }
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

  // Sort Expenses
  const sortExpenses = () => {
    dispatch({ type: SORT_EXPENSES });
  };

  // Set Order
  const setOrder = order => {
    dispatch({ type: SET_ORDER, payload: order });
  };

  // Set Sort
  const setSort = sortBy => {
    dispatch({ type: SET_SORT, payload: sortBy });
  };

  return (
    <ExpenseContext.Provider
      value={{
        expenses: state.expenses,
        current: state.current,
        filtered: state.filtered,
        order: state.order,
        sortBy: state.sortBy,
        error: state.error,
        addExpense,
        deleteExpense,
        setCurrent,
        clearCurrent,
        updateExpense,
        filterExpenses,
        clearFilter,
        sortExpenses,
        setOrder,
        setSort
      }}
    >
      {props.children}
    </ExpenseContext.Provider>
  );
};

export default ExpenseState;
