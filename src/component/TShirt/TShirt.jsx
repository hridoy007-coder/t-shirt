import React from 'react';
import './TShirt.css'

const TShirt = ({ tshirt, handleAddCart }) => {
    const { picture, name, price, gender } = tshirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <div>
                <h3>Name: {name}</h3>
                <p>Price: ${price}</p>
            </div>
            <button onClick={() => handleAddCart(tshirt)}>Buy Now</button>
        </div>
    );
};

export default TShirt; <h2>T-Shirt</h2>