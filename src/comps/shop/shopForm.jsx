import React, { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addProduct, resetProduct } from '../../featuers/shopSlice';

const ShopForm = () => {

const dispatch = useDispatch();


    
const nameRef = useRef();
const amountRef = useRef();


const onSub = (e) =>{
    e.preventDefault();
    let newItem = {
        name:nameRef.current.value,
        amount:amountRef.current.value,
        id:Date.now()
    }
    console.log(newItem);
    dispatch(addProduct({item:newItem}))
}

const resetPro = () =>{
    dispatch(resetProduct())
}


  return (
    <div className='container'>
        <form onSubmit={onSub} className='col-md-6'>
            <h2>Add new product form:</h2>
            <label>Product name:</label>
            <input  ref={nameRef} type="text" className='form-control' />
            <label>Product amount:</label>
            <input ref={amountRef} defaultValue={1} type="number" className='form-control' />
            <button className='mt-3 mx-1 btn btn-info'>Add product</button>
            <button onClick={resetPro} type='button' className='mt-3 mx-1 btn btn-danger'>Reset product list</button>

        </form>
    </div>
  )
}

export default ShopForm