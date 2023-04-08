import React from 'react';
import './Cart.css'

const Cart = ({ cart, handleRemoveFromCart }) => {
    let message;
    if (cart.length === 0) {
        message = <p>Please add some products</p>
    }
    else {
        message = <div>
            <h3>Brolok</h3>
            <p><small>Thanks for giving your money</small></p>
        </div>
    }
    return (
        <div>
            <h2 /*conditional class */ className={cart.length === 1 ? 'blue' : 'red'}>Order summary: {cart.length}</h2>

            {cart.length > 2 ? <span>aro kino</span> : <span>fokir</span>}
            {message}
            <div>
                {
                    cart.map(tshirt => <p
                        key={tshirt._id}
                    >
                        {tshirt.name}
                        <button
                            onClick={() => handleRemoveFromCart(tshirt._id)}
                        >X</button>
                    </p>)
                }
                {cart.length === 2 && <p>Double bonaz</p>}
                {cart.length === 3 || <h2>3 ta to hoilo na</h2>}
            </div>
        </div>
    );
};

export default Cart;

/***
 * conditional rendering
 * 1. use if else to set a variable that will contain an element, components
 * 2. ternary operator: condition ? 'for true' : 'false'
 * 3. logical &&: (if the condition is true then the next thing will be displayed)
 * 4. logical ||: (if the condition is false then the next thing will be displayed)
 * */

/*
conditional css
1. use ternary
2. ternary inside template string
*/ 

