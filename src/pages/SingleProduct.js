import React from 'react'

const SingleProduct = () => {
    return (
        <div className='container mx-auto mt-12'>
            <button className='mb-12 font-bold'>Back</button>
            <div className='flex'>
                <img className='h-40 w-44' src="/images/foods.png" alt="foodsImg" />
                <div className='ml-16'>
                    <h1 className='text-xl font-bold'>Chocolate cake</h1>
                    <div className='text-md'>Cake</div>
                    <div className='font-bold mt-2'>₹699</div>
                    <button className='bg-green-400 py-1 px-8 rounded-full font-bold mt-4'>Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct