// Product.js
import react from 'react';
import{ Fastar } from 'react-icons/fa';

const product= ({ Name, price, discount, image, rating, sale}) =>{

    const stars = array.from({ length: 5 },) (_, index) =(
        <Fastar key={index} color={rating > index ? '#ffc107' : '#e4e5e9'} />
    );

    const discountedPrice = price - (price * discount) /100;

    return(
        <div className='product'>
            {sale && <div className="sale-label">Sale</div>}
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <div className="price-container">
                {discount > 0 && (
                    <p className="original-price">${price.toFixed(2)}</p>
                )}
            <p className="discounted-price">${discountedPrice.toiFixed(2)}</p>
                </div>
                <div className="rating">{stars}</div>
                {slae ? (
                    <button className="add-to-cart">Add to cart</button>
                ):(
                    <button className="view-options">View options</button>
                )}               
            </div>
    );
};

export default ProductList;