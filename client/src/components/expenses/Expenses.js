import React, { Fragment, useContext } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseContext from "../../context/expense/expenseContext";

const Expenses = () => {
  const expenseContext = useContext(ExpenseContext);

  const { expenses } = expenseContext;

  return (
    <Fragment>
      {expenses.map(expense => (
        <ExpenseItem key={expense.id} expense={expense} />
      ))}
    </Fragment>
  );
};

export default Expenses;
