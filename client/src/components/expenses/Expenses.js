import React, { Fragment, useContext } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseContext from "../../context/expense/expenseContext";

const Expenses = () => {
  const expenseContext = useContext(ExpenseContext);

  const { expenses } = expenseContext;

  return (
    // <Fragment>
    //   {expenses.map(expense => (
    //     <ExpenseItem key={expense.id} expense={expense} />
    //   ))}
    // </Fragment>
    <Fragment>
      <table>
        <tr>
          <th>Date</th>
          <th>Amount</th>
          <th>Category</th>
          <th className='hide-sm'>Description</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
        {expenses.map(expense => (
          <ExpenseItem key={expense.id} expense={expense} />
        ))}
      </table>
    </Fragment>
  );
};

export default Expenses;
