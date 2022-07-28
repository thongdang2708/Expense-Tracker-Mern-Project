
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';


function SplitAccount() {

    let {transactions} = useSelector(state => state.transaction);

    //Total Income

    let filterIncome = transactions.map((trans) => trans.amount);

    let income = filterIncome.filter((ins) => ins > 0);

    let totalIncome = income.reduce((acc, item) => acc+=item, 0);

    //Total Expense

    let expense = filterIncome.filter((ins) => ins < 0);

    let totalExpense = expense.reduce((acc, item) => acc+=item, 0);

    //Remove Minus of Expense
    let removeMinusExpense = totalExpense * parseInt(-1);

   

  return (
    <div className="w-full p-3 rounded-lg shadow-lg bg-white grid grid-cols-2 mb-5">
        <div className='text-center p-4 border-r-2'>
            <h3 className='text-black font-bold text-lg'> Income </h3>
            <p className='text-emerald-500'> {totalIncome} </p>
        </div>

        <div className='text-center p-4'>
            <h3 className='text-black font-bold text-lg'> Expense </h3>
            <p className="text-red-300"> {removeMinusExpense}</p>
        </div>
    </div>
  )
}

export default SplitAccount