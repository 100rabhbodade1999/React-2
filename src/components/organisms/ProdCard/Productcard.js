import './ProductCard.css';
import React from 'react';
import App from '../../../App';

export default function ProdCard ({products}){


    return(
       <div className='container'>
        {products.map((product, index) =>(
           
            <div key={index} className='product-card'>
              <div><img src={product.image} alt={product.name} className='product-img'></img></div>
              <h1 className='name'>{product.name}</h1>
              <h3 className='brand'>{product.brand}</h3>
              <div className='details'>{product.details}</div>
              <div className='price'>{product.price}</div>
              <button className='btn'>Add to Cart</button>
            </div>
            
        ))}
       </div>   
        )
}