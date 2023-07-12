import React from 'react';
import Product from '../Product/Product';
import { Link } from 'react-router-dom';

const Cart = ({ cart }) => {
    console.log(cart);
    const { price } = cart;
    const totalPrice = cart.reduce((previous, current) => previous + current.price, 0);

    return (
        <div className='bg-orange-200 p-4 ml-5'>
            <h1>Total Item : {cart.length}</h1>

            <p>Total Price: {totalPrice}</p>
            <Link to='/orders'><button className='bg-orange-500	 p-2 rounded-lg mt-4 w-48 hover:bg-red-600	'>Order Now!</button></Link>
        </div>
    );
};

export default Cart;