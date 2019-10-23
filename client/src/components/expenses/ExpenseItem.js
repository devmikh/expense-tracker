import React from "react";

const ExpenseItem = ({ expense }) => {
  const { id, date, amount, description, category } = expense;

  return (
    <div className='card bg-light'>
      <h3 className='text-primary text-left'>{description}</h3>
    </div>
  );
};

export default ExpenseItem;
