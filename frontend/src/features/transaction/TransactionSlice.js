
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import TransactionService from "./TransactionService";

const initialState = {
    transactions: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: ""
};

//Display Transactions

export const displayTransactions = createAsyncThunk("/transaction/displayTransaction", 
        async (user, thunkAPI) => {
            try {

                return await TransactionService.fetchTransactions();


            } catch (error) {

                let message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();

                return thunkAPI.rejectWithValue(message);
            }
        }
)

//Create transaction

export const createForTransaction  = createAsyncThunk("/transaction/createTransaction",
        async (user, thunkAPI) => {

            try {

                return await TransactionService.createTransaction(user);
                


            } catch (error) {
                let message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();

                return thunkAPI.rejectWithValue(message);
            }
        }
);


//Update transaction with same name

export const updateForTransaction = createAsyncThunk("/transaction/updateTransaction", 
        async (user, thunkAPI) => {

            try {

                return await TransactionService.updateTransaction(user.inputName, user.inputData);

            } catch (error) {

                let message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();

                return thunkAPI.rejectWithValue(message);
            }
        }
);

//Delete transaction

export const deleteForTransaction = createAsyncThunk("/transaction/deleteTransaction",
        async (user, thunkAPI) => {

            try {

                return await TransactionService.deleteTransaction(user);


            } catch (error) {

                let message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();

                return thunkAPI.rejectWithValue(message);
            }
        }
)

export const TransactionSlice = createSlice({
    name: "transaction",
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(displayTransactions.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(displayTransactions.fulfilled, (state, action) => {
                state.isSuccess = true;
                state.isLoading = false;
                state.transactions = action.payload;
            })
            .addCase(displayTransactions.rejected, (state, action) => {
                state.isError = true;
                state.isLoading = false;
                state.message = action.payload;
            })
            .addCase(createForTransaction.pending, (state, action) => {
                state.isLoading =true;
            })
            .addCase(createForTransaction.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.transactions = [action.payload, ...state.transactions]
            })
            .addCase(createForTransaction.rejected, (state, action) => {
                state.isError = true;
                state.isLoading = false;
                state.message = action.payload;
            })
            .addCase(updateForTransaction.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(updateForTransaction.fulfilled, (state, action) => {
                state.isSuccess = true;
                state.isLoading = false;
                state.transactions = state.transactions.map((transaction) => transaction._id === action.payload._id ? {...transaction, ...action.payload} : transaction);
            })
            .addCase(updateForTransaction.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            .addCase(deleteForTransaction.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(deleteForTransaction.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.transactions = state.transactions.filter((transaction) => transaction._id !== action.payload._id)
            })
            .addCase(deleteForTransaction.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
    }
});

export const {reset} = TransactionSlice.actions;

export default TransactionSlice.reducer;