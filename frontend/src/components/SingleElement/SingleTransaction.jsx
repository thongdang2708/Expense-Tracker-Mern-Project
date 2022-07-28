
import React from 'react';
import PropTypes from 'prop-types';
import {FaTimes} from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { deleteForTransaction } from '../../features/transaction/TransactionSlice';

function SingleTransaction({transaction}) {

    let dispatch = useDispatch();
    const deleteFunction = (id) => {

        dispatch(deleteForTransaction(id));
    };

  return (
    <div className={transaction.amount > 0 ? "my-5 w-full rounded-md shadow-lg p-3 bg-white flex items-center justify-between relative border-r-8 border-r-emerald-500" : "my-5 w-full rounded-md shadow-lg p-3 bg-white flex items-center justify-between relative border-r-8 border-r-red-500"}>

        <div className='button absolute -left-7 top-0 h-full flex items-center justify-center rounded-lg p-1 bg-red-600' onClick={() => deleteFunction(transaction._id)}>
            <FaTimes />
        </div>
        <div>
            <h4 className='font-bold text-black'> {transaction.text} </h4> 
        </div>

        <div>
            <p className='font-bold text-black'> {transaction.amount} </p>
        </div>
    </div>
  )
};

SingleTransaction.propTypes = {
    transaction: PropTypes.object.isRequired
};

export default SingleTransaction