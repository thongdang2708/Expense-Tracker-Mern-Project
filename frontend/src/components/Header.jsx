
import React from 'react';
import { useSelector } from 'react-redux';

function Header() {

    let {transactions} = useSelector(state => state.transaction);

    let amount = transactions.map((trans) => trans.amount);

    let totalAmount = amount.reduce((acc, item) => acc+=item, 0);

  return (
    <div>
        <h1 className='text-2xl font-bold text-black mb-5'> Expense Tracker </h1>

        <h3 className='text-xl font-bold text-black mb-3'> Your Balance </h3>
        <h5 className='text-2xl font-bold text-black mb-5'> $ <span className='text-2xl text-emerald-400 font-bold'> {totalAmount} </span> </h5>
    </div>
  )
}

export default Header