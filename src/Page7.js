import React from 'react';
import './Page.css';
import Header from './Header';
import ProductDetail from './ProductDetail';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Cart from './Cart';
import iconImage from './icon.jpeg';

const Page7 = () => {
    // Sample products data
    const [product, setProduct] = useState([
        {
            id: 106,
            image: "https://m.media-amazon.com/images/I/61uQknjgWTL._AC_UL400_.jpg",
            title: "CURVSHAPE Instyle Women Designed as per The Latest Trends",
            price: 699,
            rating: 5,
        },
        {
            id: 107,
            image: "https://m.media-amazon.com/images/I/31gq8TWUHBL._AC_UL400_.jpg",
            title: "Round Neck Poly Cotton Patient Dress (Blue Check for mens)",
            price: 399,
            rating: 5,
        },
        {
            id: 108,
            image: "https://m.media-amazon.com/images/I/31+qHt1YbmS._AC_UL400_.jpg",
            title: "Trend Sales Fashion Festival wear Solid Pattern Cotton Blend Baby Gown",
            price: 629,
            rating: 5,
        },
        {
            id: 109,
            image: "https://m.media-amazon.com/images/I/81h4mZv6XgS._AC_UL400_.jpg",
            title: "Shiva Trends Women's Mini Dress",
            price: 400,
            rating: 5,
        },
        {
            id: 110,
            image: "https://m.media-amazon.com/images/I/7146TB8MB2L._AC_UL400_.jpg",
            title: "Trend Arrest Dual Floral Printed Tie Up Top",
            price: 639,
            rating: 5,
        },
        {
            id: 111,
            image: "https://m.media-amazon.com/images/I/61gUUqzWgRS._AC_UL400_.jpg",
            title: "ishin Women's Cotton Above Knee Length A-Line Indo Western Dress",
            price: 1999,
            rating: 5,
        },
        {
            id: 112,
            image: "https://m.media-amazon.com/images/I/713EWcF36KL._AC_UL400_.jpg",
            title: "Leriya Fashion Western Dresses for Women | Short A-Line Dress for Girls",
            price: 278,
            rating: 5,
        },
        {
            id: 113,
            image: "https://m.media-amazon.com/images/I/71W3u5FNfLL._AC_UL400_.jpg",
            title: "Men Casual Shirt",
            price: 799,
            rating: 5,
        },
        {
            id: 114,
            image: "https://m.media-amazon.com/images/I/51RthiG0RFL._AC_UL400_.jpg",
            title: "Leriya Fashion Shirt for Men | Tropical Leaf Printed Rayon Shirts for Men",
            price: 279,
            rating: 5,
        },
        {
            id: 115,
            image: "https://m.media-amazon.com/images/I/61mp12NqMsL._AC_UL400_.jpg",
            title: "J B Fashion Track Pant for Men || Track Pants || Lycra Full Elastic Jogger",
            price: 379,
            rating: 5,
        },
        {
            id: 116,
            image: "https://m.media-amazon.com/images/I/51-ISImNTEL._AC_UL400_.jpg",
            title: "Hopscotch Boys Gray Cotton & Spandex Polka Dot Print Shirt And Pant Set With Bow",
            price: 639,
            rating: 5,
        },
        {
            id: 117,
            image: "https://m.media-amazon.com/images/I/41KLQmja5JL._AC_UL400_.jpg",
            title: "Your Fashion Mate Cotton Casual, Regular Fit Tshirt And Lower Clothing Set for Boys",
            price: 1400,
            rating: 5,
        },
        {
            id: 118,
            image: "https://m.media-amazon.com/images/I/61UIDB6j96L._AC_UL400_.jpg",
            title: "Fashion Dream Girl’s Calf Length Solid Dresses",
            price: 588,
            rating: 5,
        },
        {
            id: 119,
            image: "https://m.media-amazon.com/images/I/61rRwAzv2FL._AC_UL400_.jpg",
            title: "Fashion Dream Girls Jumpsuit Set",
            price: 567,
            rating: 5,
        },
        {
            id: 120,
            image: "https://m.media-amazon.com/images/I/51Eh2Z4OGPL._AC_UL400_.jpg",
            title: "Hopscotch Girl's Empire Maxi Dress",
            price: 1999,
            rating: 5,
        },
    ])

    const [cart, setCart] = useState([])
    const [showCart, setShowCart] = useState(false)

    const addToCart = (data) => {
        setCart([...cart, { ...data, quantity: 1 }])
    }

    const handleShow = (value) => {
        setShowCart(value)
    }

    return (

        <div>
            <Header count={cart.length}
                handleShow={handleShow} ></Header>

            {
                showCart ?
                    <Cart cart={cart} ></Cart> :
                    <ProductDetail product={product} addToCart={addToCart} ></ProductDetail>
            }








            <div className="foot-panel2">
                <ul>
                    <p>Get to Know Us</p>
                    <Link to="/AboutUs">About Us</Link>
                    <Link to="/AboutUs">Center</Link>
                </ul>
                <ul>
                    <p>Connect with Us</p>
                    <Link to="/SocialMediaDetails">Facebook</Link>
                    <Link to="/">Instagram</Link>
                </ul>
                <ul>
                    <p>Let Us Help You</p>
                    <Link to="/ContactPage">Returns Centre</Link>
                    <Link to="/ContactPage">Help</Link>
                </ul>
            </div>
            <div className="foot-panel3">
                <img className="header_logo" src={iconImage} alt="Icon" />
            </div>
            <div className="foot-panel4">
                <div className="copyright">
                    © 1996-2023, TrendSphere.com
                </div>
            </div>
        </div >
    );
};

export default Page7;