import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';


function ProductDetail({ product, addToCart }) {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);

    const handleProductClick = (product) => {
        setSelectedProduct(product);
    };



    const handleBuyNow = (product) => {
        console.log('Buy now:', product);
        // Implement logic to proceed to checkout with the product
    };

    return (
        <div>
            {selectedProduct ? (
                <div className="product-detail">

                    <img src={selectedProduct.image} alt={selectedProduct.title} />  <h2>{selectedProduct.title}</h2>
                    <p>Price: ₹{selectedProduct.price}</p>
                    <div className="product_rating">
                        {Array.from({ length: 5 }, (_, index) => (
                            <span key={index}>
                                <FaStar color={selectedProduct.rating >= index + 1 ? '#ffc107' : '#e4e5e9'} />
                            </span>
                        ))}
                    </div>
                    <div className='label'>
                        <label>Color:</label>
                        <select>

                            <option >Red</option>
                            <option >Blue</option>
                            <option >Green</option>
                            <option >black</option>

                        </select>
                    </div>
                    <div className='label'>

                        <label>Size:</label>
                        <select>

                            <option >Large</option>
                            <option >Medium</option>
                            <option >Small</option>
                        </select>
                    </div>




                    <Link to="/payment">
                        <button onClick={() => handleBuyNow(selectedProduct)}>Buy Now</button>
                    </Link>
                    <button onClick={() => setSelectedProduct(null)}>Back to Products</button>
                </div>
            ) : (
                <div className="product-list">
                    {
                        product.map((product) => (
                            <div key={product.id} className="product-item" onClick={() => handleProductClick(product)}>
                                <img src={product.image} alt={product.title} />
                                <div className="product-info">
                                    <h3>{product.title}</h3>
                                    <p>Price: ₹{product.price}</p>
                                    <div className="product_rating">
                                        {Array.from({ length: 5 }, (_, index) => (
                                            <span key={index}>
                                                <FaStar color={product.rating >= index + 1 ? '#ffc107' : '#e4e5e9'} />
                                            </span>

                                        ))}
                                    </div> </div>
                                <button
                                    onClick={() => addToCart(product)}
                                >Add To Cart</button> </div>


                        ))}
                </div>
            )}
        </div>
    );
};

export default ProductDetail;
