import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb } from '../../utilities/fakedb';

const Home = () => {
    const { products, previousCart } = useLoaderData();
    const [cart, setCart] = useState(previousCart);
    const handlerCart = (id) => {
        let newCart = [];
        const savedCart = products.find(product => product._id === id)
        newCart = [...cart, savedCart];
        setCart(newCart);
        addToDb(id);

    }

    return (
        <div className='md:grid grid-cols-2'>
            <div className='md:grid grid-cols-3 gap-4 mt-12 w-74'>
                {
                    products.map(product => <Product
                        key={product._id}
                        handlerCart={handlerCart}
                        product={product}
                    ></Product>)
                }
            </div>
            <div className='mt-6 bg-'>
                <Cart
                    cart={cart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;