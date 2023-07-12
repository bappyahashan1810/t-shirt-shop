import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';

const Orders = () => {
    const { products, previousCart } = useLoaderData();
    const [cart, setCart] = useState(previousCart);
    console.log(products, previousCart);

    return (
        <div>
            <div>

            </div>
            <div className='bg-orange-200 p-4 ml-5'>
                <Cart
                    cart={cart}
                ></Cart>
            </div>
        </div>
    );
};

export default Orders;