import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { add1, addCustom, reset0 ,reduce1} from '../../featuers/counterSlice'

const CounterRedux = () => {

const dispatch = useDispatch();
const {counter} = useSelector(myStore=> myStore.counterSlice)

const onAdd1 = () =>{
  dispatch(add1())
}
const reset = () =>{
  dispatch(reset0())
}
const reducer1 = () =>{
  dispatch(reduce1())
}


  return (
    <div className='container'>
        <h2> Redux: {counter}</h2>
        <button onClick={onAdd1}> Add</button>
        <button onClick={()=>{
          dispatch(addCustom({number:5}))
        }}> Add 5</button>
        <button onClick={reset}> reset</button>
        <button onClick={reducer1}> reduce1</button>
    </div>
  )
}

export default CounterRedux