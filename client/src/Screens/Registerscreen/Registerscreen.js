import React, { useState } from 'react'
import './Registerscreen.css'

import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../../redux/action/userAction'
import { NavLink } from 'react-router-dom'
import Loading from '../../Components/Loading/Loading'
import Success from '../../Components/Success/Success'
import Error from '../../Components/Error/Error'

const Registerscreen = () => {
  const registerstate = useSelector((state) => state.registerUserReducer)
  const { error, loading, success } = registerstate
  const dispatch = useDispatch()
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    conformPassword: '',
  })
  const { name, email, password, conformPassword } = user
  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (password !== conformPassword) {
      alert('Please enter correct password')
    } else {
      dispatch(registerUser(user))
    }
  }
  return (
    <div>
      <div className='row justify-content-center mt-5'>
        <div className='col-md-5 mt-5 shadow-lg p-3 mb-5 bg-white rounded'>
          {/* {loading ?<Loading/>:success?<Success success='User Register Successfully'/>:error? <Error error='Email Already Register'/>:null} */}
          {loading && <Loading />}
          {success && <Success success='User Register Successfully' />}
          {error && <Error error='Email Already Register' />}

          <h1 className='text-center' style={{ fontSize: '2.4rem' }}>
            Register
          </h1>
          <div className='m-4'>
            <form onSubmit={(e) => onSubmit(e)}>
              <input
                type='text'
                placeholder='name'
                className='form-control'
                name='name'
                value={name}
                onChange={(e) => onChange(e)}
              />
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
              <input
                type='text'
                placeholder='conform password'
                className='form-control'
                name='conformPassword'
                value={conformPassword}
                onChange={(e) => onChange(e)}
              />
              <input
                type='submit'
                value='Register'
                className='w-100 btn mt-2'
              />
            </form>
          </div>
          <NavLink exact='true' to='/login' style={{ color: 'black' }}>
            Click here to login
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Registerscreen
