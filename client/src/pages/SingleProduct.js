import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const SingleProduct = () => {
    const [product, setProduct] = useState({});
    const params = useParams();
    // console.log(params);

    useEffect(() => {
        fetch(`/product/details/${params._id}`)
            .then((response) => response.json())
            .then((product) => {
                console.log('tansen keshri');
                setProduct(product);
            })
    }, [])
    return (
        <div className='container mx-auto mt-12'>
            <button className='mb-12 font-bold'>Back</button>
            <div className='flex'>
                <img className='h-40 w-44' src={product.image} alt="foodsImg" />
                <div className='ml-16'>
                    <h1 className='text-xl font-bold'>{product.name}</h1>
                    <div className='text-md '>{product.category}</div>
                    <div className='font-bold mt-2'>₹{product.price}</div>
                    <button className='bg-green-400 py-1 px-8 rounded-full font-bold mt-4'>Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct