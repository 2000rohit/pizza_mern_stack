import React from 'react'

const Filter = () => {
  return (
    <div>
      <div className='row justify-content-center'>
        <div className='col-md-2'>
          <input
            type='text'
            className='form-control'
            placeholder='search pizza'
          />
        </div>
        <div className='col-md-2'>
          <select className='form-control'>
            <option value='all'>All</option>
            <option value='veg'>Veg</option>
            <option value='nonveg'>nonveg</option>
          </select>
        </div>
        <div className='col-md-2'>
          <button className='btn'>Filter</button>
        </div>
      </div>
    </div>
  )
}

export default Filter
