import React from "react";
import Expenses from "../expenses/Expenses";
import ExpenseForm from "../expenses/ExpenseForm";
import ExpenseFilter from "../expenses/ExpenseFilter";
import ExpenseSortBy from "../expenses/ExpenseSortBy";

const Home = () => {
  return (
    <div className='grid-custom'>
      <div>
        <ExpenseForm />
      </div>
      <div>
        <ExpenseSortBy />
        <ExpenseFilter />
        <Expenses />
      </div>
    </div>
  );
};

export default Home;
