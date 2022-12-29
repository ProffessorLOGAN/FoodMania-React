import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../CartContext';

const Cart = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const { cart } = useContext(CartContext);

  useEffect(() => {
    if (!cart.items) {
      return;
    }
    fetch('/api/products/cart-items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ids: Object.keys(cart.items) })
    }).then(res => res.json())
      .then(products => {
        setProducts(products);
      })

  }, [cart])

  return (
    <div className='container mx-auto lg:w-1/2 w-full pb-24'>
      <button className='font-bold' onClick={() => navigate(-1)}>Back</button>
      <h1 className='my-8 font-bold '>Cart Items</h1>

      <ul>
        {
          products.map(product => {
            return (
              <li className='mb-12'>
                <div className='flex items-center justify-between '>
                  <div className='flex items-center'>
                    <img className='h-16 w-24' src={product.image} alt="productImg" />
                    <span className='font-bold ml-4 w-48'>{product.name}</span>
                  </div>
                  <div>
                    <button className='bg-yellow-400 font-bold px-4 py-2 rounded-full leading-none'>-</button>
                    <b className='px-4'>2</b>
                    <button className='bg-yellow-400 font-bold px-4 py-2 rounded-full leading-none'>+</button>
                  </div>

                  <span>₹ {product.price}</span>

                  <button className='bg-red-400 px-4 py-2 rounded-full leading-none text-white'>Delete</button>

                </div>
              </li>
            )
          })
        }

      </ul>
      <hr className='my-6' />

      <div className='text-right '>
        <b>Grand Total</b> : $ 1000
      </div>
      <div className='text-right mt-6'>
        <button className='bg-green-400 px-4 py-2 rounded-full leading-none'>Order Now</button>
      </div>


    </div>

  )
}

export default Cart