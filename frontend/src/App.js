import React from 'react';
import Header from './components/Header';
import SplitAccount from './components/SplitAccount';
import HistoryTransaction from './components/HistoryTransaction';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PostForm from './components/PostForm';

function App() {
  return (
    <>
    <div className="App">
        <div className='w-9/12 xl:w-4/12 lg:w-5/12 md:w-6/12 mx-auto border-2 my-10 p-8 rounded-lg shadow-lg bg-slate-100'>
        <Header />
        <SplitAccount />
        <HistoryTransaction />
        <PostForm />
        </div>
    </div>
    <ToastContainer />
    </>
  );
}

export default App;
