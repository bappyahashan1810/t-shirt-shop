import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product, handlerCart }) => {

    const { picture, name, price, gender, _id } = product;
    return (
        <div className='my-5 border-orange-500 border p-3'>
            <img width='300' className='h-80' src={picture} alt="" />
            <h6 className='font-bold'>{name}</h6>
            <p>Price: BDT{price}</p>
            <p><small>Gender: {gender}</small></p>
            <button onClick={() => handlerCart(_id)} className=' mt-3 bg-amber-700 p-2 text-center w-full hover:bg-blue-600 rounded-lg'>Buy Now</button>

        </div>
    );
};

export default Product;