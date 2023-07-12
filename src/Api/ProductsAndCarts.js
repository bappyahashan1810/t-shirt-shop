import { getShoppingCart } from "../utilities/fakedb";

export const ProductsAndCarts = async () => {
    const productData = await fetch('tshirts.json');
    const products = await productData.json();

    const savedCart = getShoppingCart();
    let previousCart = [];
    for (const id in savedCart) {
        const addedProducts = products.find(product => product.id === id);
        if (addedProducts) {
            const quantity = savedCart[id];
            addedProducts.quantity = quantity;
            previousCart.push(addedProducts);
            console.log(previousCart);
        }
    }
    return { products: products, previousCart: previousCart };
}