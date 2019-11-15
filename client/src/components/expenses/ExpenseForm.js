import React, { useState, useContext, useEffect } from "react";
import ExpenseContext from "../../context/expense/expenseContext";

const ExpenseForm = () => {
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1;

  let yyyy = today.getFullYear();
  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }
  today = yyyy + "-" + mm + "-" + dd;

  const expenseContext = useContext(ExpenseContext);

  const {
    addExpense,
    updateExpense,
    clearCurrent,
    sortExpenses,
    current
  } = expenseContext;

  useEffect(() => {
    if (current !== null) {
      setExpense(current);
    } else {
      setExpense({
        date: today,
        amount: 0,
        category: "Other",
        description: ""
      });
    }
    // eslint-disable-next-line
  }, [expenseContext, current]);

  const [expense, setExpense] = useState({
    date: today,
    amount: 0,
    category: "Other",
    description: ""
  });

  const { date, amount, category, description } = expense;

  const onChange = e =>
    setExpense({ ...expense, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (current === null) {
      addExpense(expense);
      sortExpenses();
    } else {
      updateExpense(expense);
      sortExpenses();
    }
    clearAll();
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className='text-primary'>{current ? "Edit Entry" : "Add Entry"}</h2>
      <h4>Date</h4>
      <input type='date' name='date' value={date} onChange={onChange} />
      <h4>Amount</h4>
      <input
        type='number'
        name='amount'
        placeholder='Amount'
        value={amount}
        onChange={onChange}
      />
      <h4>Category</h4>
      <select name='category' value={category} onChange={onChange}>
        <option value='Other'>Other</option>
        <option value='Food'>Food</option>
        <option value='Entertainment'>Entertainment</option>
        <option value='Clothes'>Clothes</option>
        <option value='Bills'>Bills</option>
      </select>
      <h4>Description</h4>
      <input
        type='text'
        placeholder='Description'
        name='description'
        value={description}
        onChange={onChange}
      />
      <div>
        <input
          type='submit'
          value={current ? "Update Entry" : "Add Entry"}
          className='btn btn-primary btn-block'
        />
      </div>
      {current && (
        <div>
          <button className='btn btn-light btn-block' onClick={clearAll}>
            Cancel
          </button>
        </div>
      )}
    </form>
  );
};

export default ExpenseForm;
