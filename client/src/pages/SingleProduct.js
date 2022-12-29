import React, { useEffect, useState } from 'react'
import { useParams,useNavigate } from 'react-router-dom';

const SingleProduct = () => {
    const [product, setProduct] = useState({});
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        
        fetch(`http://localhost:8000/api/product/details/${params.id}`)
            .then((response) => response.json())
            .then((product) => {
                setProduct(product);
            })
    },[params.id])
    return (
        <>
            <div className='container mx-auto mt-12'>
                <button className='mb-12 font-bold' onClick={() => navigate(-1)}>Back</button>
                <div className='flex'>
                    <img className='h-44 w-56' src={product.image} alt="foodsImg" />
                    <div className='ml-4'>
                        <h1 className='text-xl font-bold'>{product.name}</h1>
                        <div className='text-md '>{product.category}</div>
                        <div className='font-bold mt-2'>₹{product.price}</div>
                        <button className='bg-green-400 py-1 px-4 rounded-full font-bold mt-4'>Add to cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleProduct