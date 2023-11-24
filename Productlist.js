// Productlist.js
import React from 'react';
import Product from './Product';
import Products from '../data/products';

const ProducList = () => {
    return(
        <div className="pricing-page">
            <h2>our Products</h2>
            <div className='product-list'>
                {Products.map((product, index)=>(
                    <product key={index} {...product} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;