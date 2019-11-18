import React, { useContext, useEffect } from "react";
import Expenses from "../expenses/Expenses";
import ExpenseForm from "../expenses/ExpenseForm";
import ExpenseFilter from "../expenses/ExpenseFilter";
import ExpenseSortBy from "../expenses/ExpenseSortBy";
import ExpenseChart from "../expenses/ExpenseChart";
import AuthContext from "../../context/auth/authContext";

const Home = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <div className='grid-custom'>
      <div>
        <ExpenseForm />
      </div>
      <div>
        {/* <ExpenseChart /> */}
        <ExpenseSortBy />
        <ExpenseFilter />
        <Expenses />
      </div>
    </div>
  );
};

export default Home;
