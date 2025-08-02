import { useEffect, useState } from 'react';
import './Cart.css';

import { Link } from 'react-router-dom';
function Cart({ cart }) {
    const [CART, setCART] = useState([]);

    useEffect(() => {
        setCART(cart);
    }, [cart]);

    return (
        <div className="cart-container">
            {CART.length === 0 ? (
                <div className="empty-cart">
                    <h1>Your Cart is empty</h1>
                    <p>Looks like you haven't added anything to your cart yet.</p>
                    <img src="https://media.istockphoto.com/id/861576608/vector/empty-shopping-bag-icon-online-business-vector-icon-template.jpg?s=612x612&w=0&k=20&c=I7MbHHcjhRH4Dy0NVpf4ZN4gn8FVDnwn99YdRW2x5k0=" alt="Empty Cart" className="empty-cart-image" />
                    <h5>Add something to make me happy !!</h5>
                </div>
            ) : (
                <>
                    <div className="cart-items">
                        {CART.map((cartItem, cartindex) => (
                            <div className="cart-item" key={cartindex}>
                                <img src={cartItem.image} width={180} alt={cartItem.title} />
                                <div className="item-details">
                                    <span>{cartItem.title}</span>
                                    <div className="quantity-controls">
                                        <button
                                            onClick={() => {
                                                const _CART = CART.map((item, index) => {
                                                    return cartindex === index ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 0 } : item;
                                                });
                                                setCART(_CART);
                                            }}
                                        >-</button>
                                        <span>{cartItem.quantity}</span>
                                        <button
                                            onClick={() => {
                                                const _CART = CART.map((item, index) => {
                                                    return cartindex === index ? { ...item, quantity: item.quantity + 1 } : item;
                                                });
                                                setCART(_CART);
                                            }}
                                        >+</button>
                                    </div>
                                </div>
                                <span className="item-total">Rs. {cartItem.price * cartItem.quantity}</span>
                            </div>
                        ))}
                    </div>
                    <div className="total">
                        <p>Total <span>{CART.map(item => item.price * item.quantity).reduce((total, value) => total + value, 0)}</span></p>
                    </div><div className='buy'>
                        <Link to="/Payment">
                            <button>Buy Now</button>
                        </Link></div>
                </>
            )
            }
        </div >
    );
}

export default Cart;
