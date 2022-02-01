import React, { useState } from 'react'
import './Pizza.css'
import { Modal, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'

import { addToCart } from '../../redux/action/cartAction'

const Pizza = ({ pizza }) => {
  const [quantity, setquantity] = useState(1)
  const [varient, setvarient] = useState('small')

  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const dispatch = useDispatch()

  const addtocart = () => {
    dispatch(addToCart(pizza, quantity, varient))
  }
  return (
    <div
      className='shadow-lg p-3 mb-5 bg-white rounded'
      key={pizza._id}
      style={{ margin: '2rem' }}
    >
      <div onClick={handleShow}>
        <h1>{pizza.name}</h1>
        <img
          src={pizza.image}
          alt={pizza.name}
          style={{ height: '8rem', width: '8rem' }}
        />
      </div>
      <div className='flex-container'>
        <div className='w-100 m-1'>
          <p>varients</p>
          <select
            className='form-control'
            value={varient}
            onChange={(e) => {
              setvarient(e.target.value)
            }}
          >
            {pizza.varients.map((varient, key) => {
              return (
                <option key={key} value={varient}>
                  {varient}
                </option>
              )
            })}
          </select>
        </div>
        <div className='w-100 m-1'>
          <p>prices</p>
          <select
            className='form-control'
            value={quantity}
            onChange={(e) => {
              setquantity(e.target.value)
            }}
          >
            {[...Array(10).keys()].map((x, i) => {
              return <option value={i + 1}>{i + 1}</option>
            })}
          </select>
        </div>
      </div>

      <div className='flex-container'>
        <div className='m-1 w-100'>
          <h1 className='mt-2'>
            Price : {pizza.prices[0][varient] * quantity} Rs/-
          </h1>
        </div>
        <div className='m-1 w-100'>
          <button className='btn' onClick={addtocart}>
            add to card
          </button>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body className='d-flex flex-column align-items-center justify-content-center'>
          <img
            src={pizza.image}
            alt={pizza.name}
            className='img-fluid'
            style={{ height: '20rem' }}
          />
          <p>{pizza.description}</p>
        </Modal.Body>

        <Modal.Footer>
          <Button className='btn' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Pizza
