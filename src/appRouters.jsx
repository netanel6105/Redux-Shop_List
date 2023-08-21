import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './comps/home';
import Header from './comps/misc/header';
import CounterRedux from './comps/test/counterRedux';
import ShopPage from './comps/shop/shopPage';
import Login from './comps/login/login';
import SignUp from './comps/login/signUp';


const AppRouters = () => {
  return (

    <BrowserRouter>
      <Header />
      <Routes>

        

       <Route path='/' element={<Home/>}/>
       {/* <Route path='/counter' element={<CounterRedux/>}/> */}
       <Route path='/shop' element={<ShopPage/>}/>
       <Route path='/login' element={<Login/>}/>
       <Route path='/signUp' element={<SignUp/>}/>



       <Route path='/*' element={<h2>page not found! </h2>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouters