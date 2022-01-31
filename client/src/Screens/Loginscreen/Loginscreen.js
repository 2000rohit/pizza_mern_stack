import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Loading from '../../Components/Loading/Loading'
import Success from '../../Components/Success/Success'
import Error from '../../Components/Error/Error'
import { loginUser } from '../../redux/action/userAction'

const Loginscreen = () => {
  const loginState = useSelector((state) => state.loginUserReducer)
  const { loading, success, error } = loginState
  useEffect(() => {
    if (localStorage.getItem('currentUser')) {
      window.location.href = '/'
    }
  }, [])
  const dispatch = useDispatch()
  const [user, setUser] = useState({
    email: '',
    password: '',
  })
  const { email, password } = user
  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    console.log('user = ', user)
    dispatch(loginUser(user))
  }

  return (
    <div>
      <div className='row justify-content-center mt-5'>
        <div className='col-md-5 mt-5 shadow-lg p-3 mb-5 bg-white rounded'>
          {loading && <Loading />}
          {success && <Success success='User Register Successfully' />}
          {error && <Error error='Email Already Register' />}

          <h1 className='text-center' style={{ fontSize: '2.4rem' }}>
            Login
          </h1>
          <div className='m-4'>
            <form onSubmit={(e) => onSubmit(e)}>
              <input
                type='text'
                placeholder='email'
                className='form-control'
                name='email'
                value={email}
                onChange={(e) => onChange(e)}
              />
              <input
                type='text'
                placeholder='password'
                className='form-control'
                name='password'
                value={password}
                onChange={(e) => onChange(e)}
              />

              <input type='submit' value='login' className='w-100 btn mt-2' />
            </form>
          </div>
          <NavLink exact='true' to='/register' style={{ color: 'black' }}>
            Click here to register
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Loginscreen
