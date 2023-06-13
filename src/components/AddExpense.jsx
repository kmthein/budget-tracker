import React, { useState } from "react";
import { BiAddToQueue } from 'react-icons/bi';
import { useDispatch, useSelector } from "react-redux";
import { expenseActions } from "../store/reducer/expenserReducer";

export const toEnglishNum = ( num, dontTrim ) => {
  var i = 0,
      j = 0,
      dontTrim = dontTrim || false,
      num = dontTrim ? num.toString() : num.toString().trim(),
      len = num.length,
      res = '',
      pos,
      myanmarNumbers = typeof myanmarNumbers == 'undefined' ?
      ["၀", "၁", "၂", "၃", "၄", "၅", "၆", "၇", "၈", "၉"] :
      myanmarNumbers;

  for ( ; i < len; i++ )
      if ( ~( pos = myanmarNumbers.indexOf( num.charAt( i ) ) ) )
          res += pos;
      else
          res += num.charAt( i );
  return res;
};

const AddExpense = () => {
  const [name, setName] = useState('');

  const [cost, setCost] = useState('');

  const [type, setType] = useState('income');

  const expenses = useSelector(state => state.expense.expenses);

  const dispatch = useDispatch();

  const submitNewHandler = (e) => {
    const id = expenses.length + 1;
    e.preventDefault();
    const newExpense = {
      id,
      name,
      cost: toEnglishNum(cost),
      type
    }
    dispatch(expenseActions.addExpense(newExpense))
    setName("");
    setCost("");
  }

  return (
    <>
      <div className="bg-white mt-5 w-[100%] sm:w-[90%] sm:ml-5 pb-5 rounded-sm">
        <div>
          <div className="flex items-center justify-center border-b-[1px] py-3">
            <BiAddToQueue className="text-2xl mr-3" />
            <h3>စာရင်းအသစ်ထပ်ထည့်ရန်</h3>
          </div>
          <div className=" text-sm">
            <form onSubmit={submitNewHandler}>
              <div className="px-5 py-2 mt-3">
                <label htmlFor="text" className="block mb-1">
                  အကြောင်းအရာ
                </label>
                <input
                  type="text"
                  className=" bg-gray-100 border-gray-300 border w-full p-2 text-sm"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  required
                />
              </div>
              <div className="flex px-5 gap-2 items-center">
              <div className="py-2 mb-3 w-[80%]">
                <label htmlFor="text" className="block mb-1">
                  ငွေပမာဏ
                </label>
                <input
                  type="text"
                  className=" bg-gray-100 border-gray-300 border w-full p-2 text-sm"
                  onChange={(e) => setCost(e.target.value)}
                  value={cost}
                  required
                />
              </div>
              <div className="py-2 mb-3">
                <label htmlFor="text" className="block mb-1">
                  အမျိုးအစား
                </label>
                <select name="type" id="type" onChange={(e) => setType(e.target.value)} required className=" border-gray-300 bg-gray-100 border rounded-sm text-sm">
                  <option value="income">ဝင်ငွေ</option>
                  <option value="expense">ထွက်ငွေ</option>
                </select>
              </div>
              </div>
              <div>
                <div className="px-5">
                  <button className="block mx-auto bg-gray-600 text-white py-2 px-3 rounded-md text-md">
                    ထည့်မည်
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddExpense;
