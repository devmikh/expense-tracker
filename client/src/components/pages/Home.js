import React from "react";
import Expenses from "../expenses/Expenses";
import ExpenseForm from "../expenses/ExpenseForm";
import ExpenseFilter from "../expenses/ExpenseFilter";

const Home = () => {
  return (
    <div className='grid-custom'>
      <div>
        <ExpenseForm />
      </div>
      <div>
        <ExpenseFilter />
        <Expenses />
      </div>
    </div>
  );
};

export default Home;
