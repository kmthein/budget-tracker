import React, { useState } from "react";
import { FaMoneyCheck } from "react-icons/fa";
import { BiAddToQueue } from "react-icons/bi";
import AddExpense from "./AddExpense";
import { useDispatch, useSelector } from "react-redux";
import { toMyanmarNum } from "./Expenses";
import { AiFillCloseCircle } from "react-icons/ai";
import { expenseActions } from "../store/reducer/expenserReducer";

const History = () => {
  const expenses = useSelector((state) => state.expense.expenses);

  const dispatch = useDispatch();

  const removeExpenseHandler = (id) => {
    dispatch(expenseActions.removeItem(id));
  }

  return (
    <div
      className={`bg-white mt-5 w-[100%] sm:w-[90%] sm:ml-5 pb-5 rounded-sm h-[300px] ${
        expenses.length != 0 && expenses.length > 3 && "overflow-scroll"
      }`}
    >
      <div>
        <div className="flex items-center justify-center border-b-[1px] py-3">
          <FaMoneyCheck className="text-2xl mr-3" />
          <h3>ဝင်ငွေထွက်ငွေစာရင်း</h3>
        </div>
        {expenses.length != 0 ? (
          expenses.map((expense) => (
            <div className={`border-b-[1px]`}>
              <div
                className={`bg-white  flex justify-between py-3 px-5 text-sm border-r-4 ${
                  expense.type == "income"
                    ? "border-green-500"
                    : "border-red-500"
                } group`}
                key={expense.id}
              >
                <div className="flex justify-between">
                  <h4>{expense.name}</h4>
                </div>
                <div className="flex gap-1 items-center">
                  <p>
                    {expense.type == "income" && <span>+</span>}
                    {expense.type == "expense" && <span>-</span>}
                    {toMyanmarNum(expense.cost)} ကျပ်
                  </p>
                  <AiFillCloseCircle className="text-lg text-red-500 cursor-pointer hidden group-hover:block" title="remove" onClick={() => removeExpenseHandler(expense.id)} />
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="flex items-center justify-center h-[150px]">
            <p className="text-center">ယခင်စာရင်းမရှိသေးပါ။</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default History;
