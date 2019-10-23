import React from "react";
import Expenses from "../expenses/Expenses";

const Home = () => {
  return (
    <div className='grid-2'>
      <div>{/* expense form */}</div>
      <div>
        <Expenses />
      </div>
    </div>
  );
};

export default Home;
