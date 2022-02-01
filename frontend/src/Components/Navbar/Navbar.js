import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { logoutUser } from '../../redux/action/userAction'

const Navbar = () => {
  const dispatch = useDispatch()
  const [user, setUser] = useState('')
  const cartState = useSelector((state) => state.cartReducer)
  const userState = useSelector((state) => state.loginUserReducer)
  const { state } = userState
  const { currentUser } = state
  useEffect(() => {
    // const { currentUser } = state
    setUser(currentUser)
  }, [])
  return (
    <>
      <nav className='navbar navbar-expand-lg shadow p-3 mb-5 navbar-light bg-light rounded'>
        <NavLink exact='true' className='navbar-brand' to='/'>
          Navbar
        </NavLink>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav' style={{ marginLeft: 'auto' }}>
            {user ? (
              // <li className='mt-2 nav-item active'>{user.name}</li>
              <div className='dropdown show'>
                <div
                  className='btn dropdown-toggle'
                  role='button'
                  id='dropdownMenuLink'
                  data-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'
                  style={{ backgroundColor: 'transparent', boxShadow: 'none' }}
                >
                  {user.name}
                </div>

                <div
                  className='dropdown-menu'
                  aria-labelledby='dropdownMenuLink'
                >
                  <div className='dropdown-item'>
                    <li>Orders</li>
                  </div>
                  <div
                    className='dropdown-item'
                    onClick={() => dispatch(logoutUser())}
                  >
                    Logout
                  </div>
                </div>
              </div>
            ) : (
              <li className='nav-item active'>
                <NavLink exact='true' className='nav-link' to='/login'>
                  login
                </NavLink>
              </li>
            )}

            <li className='nav-item'>
              <NavLink exact='true' className='nav-link' to='/cart'>
                cart {cartState.cartItems.length}
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
