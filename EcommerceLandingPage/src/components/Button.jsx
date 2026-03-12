import React from 'react'

const Button = ({button}) => {
  return (
    <div className='bg-primary rounded-full px-7 py-2 text-white font-semibold hover:cursor-pointer'>{button.name}</div>
  )
}

export default Button