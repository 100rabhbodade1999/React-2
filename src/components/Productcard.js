import './ProductCard.css';
import React from 'react';
import App from '../App';

export default function ProdCard ({productDetail, buttonStyle, imgStyle, priceStyle}){

    const {
        image,
        name,
        brand,
        details,
        price
    } =  productDetail



    return(
        <div id='page'>
        <div className='wrapper'>
        <img
           style={imgStyle}
           src= {image}
           alt='image'
        />

        <h2>{name}</h2>
        <h3>{brand}</h3>
        <p>{details}</p>
        <h4 style={priceStyle}>{price}</h4>
        <button style={buttonStyle}>Add to Cart</button>

        </div>
        </div>    
        )
}