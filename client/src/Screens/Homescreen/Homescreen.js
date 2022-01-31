import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Error from '../../Components/Error/Error'
import Loading from '../../Components/Loading/Loading'
// import pizzas from '../ pizzasdata'
import Pizza from '../../Components/Pizza/Pizza'

import { getAllPizzas } from '../../redux/action/pizzaAction'

const Homescreen = () => {
  const dispatch = useDispatch()
  const pizzaState = useSelector((state) => state.getAllPizzasReducer)

  const { pizzas, error, loading } = pizzaState

  useEffect(() => {
    dispatch(getAllPizzas())
  }, [dispatch])
  return (
    <div style={{ padding: '1rem' }}>
      <div className='row'>
        {loading ? (
          <Loading />
        ) : error ? (
          <Error error='Something went wrong' />
        ) : (
          pizzas.map((pizza, key) => {
            return (
              <div className='col-md-4 col-sm-6' key={key}>
                <div>
                  <Pizza pizza={pizza} />
                </div>
              </div>
            )
          })
        )}
      </div>
    </div>
  )
}

export default Homescreen
