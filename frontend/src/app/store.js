import { configureStore } from '@reduxjs/toolkit';
import TransactionReducer from "../features/transaction/TransactionSlice";

export const store = configureStore({
  reducer: {
    transaction: TransactionReducer
  },
});
