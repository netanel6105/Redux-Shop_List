import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ShopItem from './shopItem'

const ShopList = () => {

    const {shop_ar} = useSelector(myStore => myStore.shopSlice)



  return (
    <div className='container mt-3'>
        <h2>List of products in your list :) </h2>
        <div className='row'>
        {shop_ar.map(item=> {
            return(
                <ShopItem key={item.id} item={item}/>
            )
        })}
        </div>
    </div>
  )
}

export default ShopList