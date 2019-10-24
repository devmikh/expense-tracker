import React, { useContext } from "react";
import PropTypes from "prop-types";
import ExpenseContext from "../../context/expense/expenseContext";

const ExpenseItem = ({ expense }) => {
  const expenseContext = useContext(ExpenseContext);
  const { deleteExpense, setCurrent, clearCurrent } = expenseContext;

  const { id, date, amount, description, category } = expense;

  const onDelete = () => {
    deleteExpense(id);
    clearCurrent();
  };

  const newDate = new Date(date);

  return (
    // <div className='card bg-light'>
    //   <h3 className='text-primary text-left'>{description}</h3>
    // </div>
    <tr>
      <td>{newDate.toString()}</td>
      <td>{amount}</td>
      <td>{category}</td>
      <td className='hide-sm'>{description}</td>
      <td>
        <button
          className='btn btn-dark btn-sm'
          onClick={() => setCurrent(expense)}
        >
          Edit
        </button>
      </td>
      <td>
        <button className='btn btn-danger btn-sm' onClick={onDelete}>
          Delete
        </button>
      </td>
    </tr>
  );
};

ExpenseItem.propTypes = {
  expense: PropTypes.object.isRequired
};

export default ExpenseItem;
