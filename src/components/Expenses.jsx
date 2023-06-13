import React from "react";
import { GiPayMoney, GiMoneyStack, GiReceiveMoney } from "react-icons/gi";
import { useSelector } from "react-redux";

export const toMyanmarNum = ( num, dontTrim ) => {

  var i = 0,

      dontTrim = dontTrim || false,

      num = dontTrim ? num.toString() : num.toString().trim(),
      len = num.length,

      res = '',
      pos,

      myanmarNumbers = typeof myanmarNumbers == 'undefined' ?
      ["၀", "၁", "၂", "၃", "၄", "၅", "၆", "၇", "၈", "၉"] :
      myanmarNumbers;

  for (; i < len; i++)
      if (( pos = myanmarNumbers[num.charAt(i)] ))
          res += pos;
      else
          res += num.charAt(i);

  return res;
}

const Expenses = () => {
  const { budget, expense, income, expenses } = useSelector((state) => state.expense);

  const myanNum = ["၀", "၁", "၂", "၃", "၄", "၅", "၆", "၇", "၈", "၉"];

  return (
    <div className="w-[100%] sm-w-[50%] flex flex-col gap-5">
      <div className="bg-white mt-5 sm-mx-5 p-5 rounded-sm py-[32px]">
        <div className="p-3 text-lg flex justify-between">
          <div>
            <h3 className="mb-3">လက်ကျန်ငွေ</h3>
            <GiMoneyStack className="text-4xl" />
          </div>
          <div>
            <span className="text-xl font-semibold">{toMyanmarNum(budget)} ကျပ်</span>
          </div>
        </div>
      </div>
      <div className="bg-white sm-mx-5 p-5 rounded-sm py-[32px]">
        <div className="p-3 text-lg flex justify-between">
          <div>
            <h3 className="mb-3">ဝင်ငွေ</h3>
            <GiReceiveMoney className="text-4xl" />
          </div>
          <div>
            <span className="text-xl text-emerald-500 font-semibold">
              {toMyanmarNum(income)} ကျပ်
            </span>
          </div>
        </div>
      </div>
      <div className="bg-white sm-mx-5 p-5 rounded-sm py-[32px]">
        <div className="p-3 text-lg flex justify-between">
          <div>
            <h3 className="mb-3">ထွက်ငွေ</h3>
            <GiPayMoney className="text-4xl" />
          </div>
          <div>
            <span className="text-xl text-red-500 font-semibold">
              {toMyanmarNum(Math.abs(expense))} ကျပ်
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expenses;
