import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../CartContext';

const Cart = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const { cart ,setCart } = useContext(CartContext);

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

  const getQty = (productId) => {
    return cart.items[productId];
  }

  const increment = (productId) => {
    const existingQty = cart.items[productId];
    const _cart = { ...cart };
    _cart.items[productId] = existingQty + 1;
    _cart.totalItems += 1;
    setCart(_cart);
  }
  const decrement = (productId) => {
    const existingQty = cart.items[productId];
    if(existingQty===1){
      return;
    }
    const _cart = { ...cart };
    _cart.items[productId] = existingQty - 1;
    _cart.totalItems -= 1;
    setCart(_cart);
  }

  return (
    products.length ?
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
                    <button onClick={() => { decrement(product._id) }} className='bg-yellow-400 font-bold px-4 py-2 rounded-full leading-none'>-</button>
                    <b className='px-4'>{getQty(product._id)}</b>
                    <button onClick={() => { increment(product._id) }} className='bg-yellow-400 font-bold px-4 py-2 rounded-full leading-none'>+</button>
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
    : 
    <img className='mx-auto  w-1/2 mt-2 ' src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-2130356-1800917.png" alt="emptycartImg" />

  )
}

export default Cart