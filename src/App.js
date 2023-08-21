import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import './App.css';
import AppRouters from "./appRouters";
import counterSlice from './featuers/counterSlice';
import shopSlice from './featuers/shopSlice';

const myStore = configureStore({
  reducer:{
    counterSlice,
    shopSlice
  }
})


function App() {
  return (

    <Provider store={myStore}>
      <AppRouters/>
    </Provider>

  );
}

export default App;
