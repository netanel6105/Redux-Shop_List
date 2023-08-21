import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { reset0 } from '../../featuers/counterSlice';

const Header = () => {
    const dispatch = useDispatch();
    const {counter} = useSelector(myStore => myStore.counterSlice)



  return (
    <header className='container-fluid bg-dark text-light p-2'>
    <div className="container">
      <div className="row align-items-center">
        <div className="logo col-auto">
          <h2>My logo</h2>
        </div>
        <nav className='col-auto'>
          <ul>
            <li><Link to="/">Home</Link></li>
            {/* <li><Link to="/counter">Counter</Link></li> */}
            <li><Link to="/shop">Shop</Link></li>
            
            <li><Link to="/Login">Login</Link></li>
            <li><Link to="/SignUp">SignUp</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
  )
}

export default Header