import React from 'react'

function StyledButton({ children }) {
  return (
    <>
      <div className='styled-button'>
        <button>{children}</button>
      </div>
    </>
  )
}

export default StyledButton
