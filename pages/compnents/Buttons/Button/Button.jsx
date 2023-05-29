import React from 'react'

const Button = ({ children }) => {
  return (
    <>
      <div className='simple-button'>
        <button> {children} </button>
      </div>
    </>
  )
}

export default Button
