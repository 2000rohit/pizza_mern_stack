import React from 'react'
import './Cartscreen.css'
import { addToCart, deleteFromCart } from '../../redux/action/cartAction'

import { useSelector, useDispatch } from 'react-redux'

const Cartscreen = () => {
  const cartState = useSelector((state) => state.cartReducer)
  const cartItems = cartState.cartItems
  var subTotal = cartItems.reduce((x, item) => x + item.price, 0)

  const dispatch = useDispatch()
  return (
    <div>
      <div className='row d-flex justify-content-center'>
        <div className='col-md-6'>
          <h1>My Cart</h1>

          {cartItems.map((item) => {
            return (
              <div className='flex-container'>
                <div className='m-4 w-100' style={{ textAlign: 'left' }}>
                  <h1>
                    {item.name} [{item.varient}]
                  </h1>
                  <h1>
                    Price:{item.quantity}*{item.prices[0][item.varient]} =
                    {item.price}
                  </h1>
                  <h1 style={{ display: 'inline' }}>Quantity</h1>
                  <i
                    className='fas fa-minus'
                    onClick={() => {
                      dispatch(addToCart(item, item.quantity - 1, item.varient))
                    }}
                  ></i>
                  <b>{item.quantity}</b>
                  <i
                    className='fas fa-plus'
                    onClick={() => {
                      dispatch(addToCart(item, item.quantity + 1, item.varient))
                    }}
                  ></i>
                </div>

                <div className='w-100'>
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ height: '8rem', width: '8rem' }}
                  />
                </div>

                <div className='w-100 d-flex justify-content-center align-items-center'>
                  <i
                    className='fas fa-trash'
                    onClick={() => {
                      dispatch(deleteFromCart(item))
                    }}
                  ></i>
                </div>
              </div>
            )
          })}
        </div>
        <div className='col-md-4' style={{ textAlign: 'right' }}>
          <h2 style={{ fontSize: '1.5rem' }}>Subtotal:{subTotal} /-</h2>
          <button className='btn'>Check Out</button>
        </div>
      </div>
    </div>
  )
}

export default Cartscreen
