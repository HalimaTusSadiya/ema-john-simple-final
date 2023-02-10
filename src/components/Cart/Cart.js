import React from 'react';
const Cart = (props) => {
    console.log(props.cart)
    
    const cart = props.cart
    
    let total = 0; 
    for(let i=0; i<cart.length;i++){
         const product = cart[i]
         total = total+product.price
         total.toFixed(2)
    }
   let shipping =0;
    if(total > 15 && total <45 ){
        shipping = 4.77
    }else if(total >= 45){
        shipping = 0;
    }else if(total>0){
        shipping =12.99
    }
    let grandTotal = total+shipping
        
    return (
        <div className='cart'>
            <h3><small>Items: {cart.length}</small></h3>
            <h3><small>Shipping:{shipping.toFixed(2)}</small></h3>
            <h3><small>total: {total.toFixed(2)}</small></h3>
            <h3>Ordered Total {grandTotal.toFixed(2)}</h3>
            <h3></h3>
        </div>
    );
};

export default Cart;