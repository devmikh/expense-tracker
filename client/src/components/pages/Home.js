import React from "react";
import Expenses from "../expenses/Expenses";

const Home = () => {
  return (
    <div>
      <div>{/* expense form */}</div>
      <div>
        <Expenses />
      </div>
    </div>
  );
};

export default Home;
