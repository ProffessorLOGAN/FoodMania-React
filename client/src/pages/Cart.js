import React from 'react'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const navigate = useNavigate();

  return (
    <div className='container mx-auto mt-12'>
      <h2 className='text-lg font-bold my-8 hover:cursor-pointer' onClick={() => navigate(-1)}>Back</h2>
      <h3>this is cart page</h3>
    </div>

  )
}

export default Cart