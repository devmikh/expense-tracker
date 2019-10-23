import React from "react";
import PropTypes from "prop-types";

const ExpenseItem = ({ expense }) => {
  const { id, date, amount, description, category } = expense;

  return (
    // <div className='card bg-light'>
    //   <h3 className='text-primary text-left'>{description}</h3>
    // </div>
    <tr>
      <td>{date}</td>
      <td>{amount}</td>
      <td>{category}</td>
      <td className='hide-sm'>{description}</td>
      <td>
        <button className='btn btn-dark btn-sm'>Edit</button>
      </td>
      <td>
        <button className='btn btn-danger btn-sm'>Delete</button>
      </td>
    </tr>
  );
};

ExpenseItem.propTypes = {
  expense: PropTypes.object.isRequired
};

export default ExpenseItem;
