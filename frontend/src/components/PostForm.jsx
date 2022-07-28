
import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from "react-toastify";
import { createForTransaction } from '../features/transaction/TransactionSlice';
import { updateForTransaction } from '../features/transaction/TransactionSlice';


function PostForm() {

    // Set state for data in form

    let [formData, setFormData] = useState({
        text: "",
        amount: ""
    });

    //Global state of transaction

    let {transactions} = useSelector(state => state.transaction);



    //Set Dispatch

    let dispatch = useDispatch();

    //Set Changes for Form

    const handleChange = (e) => {
        
        let {name, value} = e.target;

        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }))
    };

    //Set submit for form
    const handleSubmit = (et) => {
        et.preventDefault();

        let inputData = {
            text: formData.text.toLowerCase(),
            amount: Number(formData.amount)
        };

       

        if (!formData.text || !formData.amount) {
            toast.error("Please fill information!")
        } else if (transactions.some((transaction) => transaction.text == formData.text.toLowerCase())) {
            
           
            let updatedTransactions = transactions.map((trans) => {
                let newNumber;
                if (trans.text == formData.text.toLowerCase()) {
                    newNumber = trans.amount + Number(formData.amount);
                }

                return {
                    ...trans,
                    amount: newNumber
                }
            })

            let updateTransaction = updatedTransactions.filter((trans) => trans.text == formData.text.toLowerCase())[0];
            
            let inputResult = {
                inputName: formData.text.toLowerCase(),
                inputData: updateTransaction
            }
            dispatch(updateForTransaction(inputResult));

            
        } else {

            dispatch(createForTransaction(inputData))
        }
        
        setFormData({
            text: "",
            amount: ""
        })


       
    }


  return (
    <div>
        <h2 className='mt-5 pt-3 pb-3 border-b-2 border-b-gray-500'> Add New Transaction </h2>

        <div className='form'>
            <form onSubmit={handleSubmit}>
                <div className='form-group flex flex-col'>
                    <label htmlFor="text" className='mt-3'> Text: </label>
                    <input type="text" name="text" id="text" placeholder='Enter text...' value={formData.text} onChange={handleChange} className='input input-sm mt-3 focus:outline-0 bg-white'/>
                </div>

                <div className='form-group flex flex-col'>
                    <label htmlFor="amount" className='mt-3'> Amount: (negative -expense, positive -income) </label>
                    <input type="number" name="amount" id="amount" placeholder='Enter amount...' value={formData.amount} onChange={handleChange} className='mt-3 input input-sm focus:outline-0 bg-white'/>
                </div>

                <div className='form-group mt-5'>
                    <button className='btn btn-md bg-sky-500 w-full text-white focus:outline-0'> Add Transaction </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default PostForm
















