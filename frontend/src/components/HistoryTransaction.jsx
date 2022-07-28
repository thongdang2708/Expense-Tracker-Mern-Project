
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { displayTransactions } from '../features/transaction/TransactionSlice';
import { useEffect } from 'react';
import {toast} from "react-toastify";
import SingleTransaction from './SingleElement/SingleTransaction';

function HistoryTransaction() {

    //Global state for transaction
    let {transactions, isError, message} = useSelector(state => state.transaction); 

    //Set Dispatch
    let dispatch = useDispatch();


    //Display transtions with effect
    useEffect(() => {
        if (isError) {
            toast.error(message);
        }

        dispatch(displayTransactions());
    },[])

    
  return (
    <div className='mb-5'>
        <h3 className='font-bold text-black text-xl'> History </h3>
        {transactions.map((transaction) => (
            <SingleTransaction key={transaction._id} transaction={transaction}/>
        ))}
    </div>
  )
}

export default HistoryTransaction