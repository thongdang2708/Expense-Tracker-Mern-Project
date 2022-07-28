
import axios from "axios";

const API_URL = "/api/posts/"; 

//Fetch Transactions
const fetchTransactions = async () => {

    let response = await axios.get(API_URL);

    return response.data;
};

//Create Transactions

const createTransaction = async (inputData) => {

    let response = await axios.post(API_URL, inputData);

    return response.data;
};

//Update transaction with same name

const updateTransaction = async (inputName, inputData) => {

    let response = await axios.put(API_URL + inputName, inputData);

    return response.data;
};

//Delete transaction

const deleteTransaction = async (id) => {

    let response = await axios.delete(API_URL + id);

    return response.data;
}

const TransactionService = {
    fetchTransactions,
    createTransaction,
    updateTransaction,
    deleteTransaction
};

export default TransactionService;



