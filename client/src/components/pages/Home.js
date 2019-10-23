import React from "react";
import Expenses from "../expenses/Expenses";
import ExpenseForm from "../expenses/ExpenseForm";

const Home = () => {
  return (
    <div>
      <div>{/* expense form */}</div>
      <div>
        <ExpenseForm />
        <Expenses />
      </div>
    </div>
  );
};

export default Home;
