import React from 'react'
import Products from '../components/Products'

const Home = () => {
    return (
        <>
            <div className='hero py-8'>
                <div className='container mx-auto flex items-center justify-between'>
                    <div className='w-1/2 '>
                        <h6 className='text-lg'><em>best food you can order</em></h6>
                        <h1 className='text-3xl md:text-6xl font-bold' >Don't Wait </h1>
                        <button className="px-6 py-2 rounded-full text-white font-bold mt-4 bg-green-400 hover:bg-green-600" >Order Now</button>

                    </div>
                    <div className='w-1/2'>
                        <img className="" src="https://www.pngarts.com/files/3/Fast-Food-Free-PNG-Image.png" alt="foods" />
                        
                    </div>
                </div>

            </div>

            <div className='container mx-auto mt-8 pb-24'>
            <h1 className="text-lg font-bold my-8">Products</h1>
                <Products />
            </div>
        </>
    )
}

export default Home