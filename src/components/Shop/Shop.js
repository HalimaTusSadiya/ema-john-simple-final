import React  from 'react';
import { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const first10 = fakeData.slice(0,10)
    const[products,setproducts] = useState(first10)
    const[cart,setCart] = useState([])
    const handleAddProduct=(product)=>{
        const newCart=[...cart,product]
        setCart(newCart)
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {products.map(product => <Product  product={product} handleProduct={handleAddProduct}></Product>)}
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Shop;