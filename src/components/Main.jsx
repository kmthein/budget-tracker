import React from "react";
import Navbar from "./Navbar";
import Expenses from "./Expenses";
import History from "./History";
import AddExpense from "./AddExpense";

const Main = () => {
  return (
    <div className=" bg-zinc-100 min-h-[100vh]">
      <Navbar />
      <div className=" flex flex-col sm:flex-row w-[80%] sm:w-[70%]  mx-auto">
        <div className={`block sm:hidden`}><AddExpense /></div>
        <Expenses />
        <div className="w-[100%] sm-w-[50%] flex flex-col h-[85vh]">
        <History />
        <div className={`hidden sm:block`}><AddExpense /></div>
        </div>
      </div>
    </div>
  );
};

export default Main;
