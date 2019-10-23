import React, { useState } from "react";

const ExpenseForm = () => {
  const [expense, setExpense] = useState({
    date: Date.now,
    amount: 0,
    category: "",
    description: ""
  });

  const { date, amount, category, description } = expense;
  return (
    <form>
      <h2 className='text-primary'>Add Expense</h2>
      <input type='date' name='date' value={date} />
      <input
        type='text'
        placeholder='Description'
        name='description'
        value={description}
      />
    </form>
  );
};

export default ExpenseForm;
