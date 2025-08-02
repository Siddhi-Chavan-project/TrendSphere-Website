import React from 'react';
import './Page.css';
import Header from './Header';
import ProductDetail from './ProductDetail';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Cart from './Cart';
import iconImage from './icon.jpeg';



const Page8 = () => {
    // Sample products data
    const [product, setProduct] = useState([
        {
            id: 121,
            image: "https://m.media-amazon.com/images/I/715DtOHh94L._AC_UL600_FMwebp_QL65_.jpg",
            title: "Adidas Mens Throb M Running Shoe",
            price: 1999,
            rating: 5,
        },
        {
            id: 122,
            image: "https://m.media-amazon.com/images/I/81+WX0V8psL._AC_UL600_FMwebp_QL65_.jpg",
            title: "Adidas Mens Ultimashow Running Shoes",
            price: 2999,
            rating: 5,
        },
        {
            id: 123,
            image: "https://m.media-amazon.com/images/I/71KDWykJDfL._AC_UL600_FMwebp_QL65_.jpg",
            title: "Adidas Mens Duramo 10 Running Shoe",
            price: 3999,
            rating: 5,
        },
        {
            id: 124,
            image: "https://m.media-amazon.com/images/I/71TAzJmxClL._UY695_.jpg",
            title: "ASIAN Men's Bouncer-01 Sports,Walking,Gym,Training,Running Shoes",
            price: 699,
            rating: 5,
        },
        {
            id: 125,
            image: "https://m.media-amazon.com/images/I/81A6WtUTVSL._UY695_.jpg",
            title: "ASIAN Men's Plasma-08 Sports Running,Walking  Casual Snaeker Shoes for Men's",
            price: 799,
            rating: 5,
        },
        {
            id: 126,
            image: "https://m.media-amazon.com/images/I/614+cjRAPwL._AC_UL600_FMwebp_QL65_.jpg",
            title: "OZJI Men's Basketball Casual Boots",
            price: 699,
            rating: 5,
        },
        {
            id: 127,
            image: "https://m.media-amazon.com/images/I/61hChNd-00L._UX695_.jpg",
            title: "Absolutee Shoes Men's Boot",
            price: 1299,
            rating: 5,
        },
        {
            id: 128,
            image: "https://m.media-amazon.com/images/I/71fSfFLNWZL._AC_UL600_FMwebp_QL65_.jpg",
            title: "layasa Comfotable Lightweight Casual Sneaker for Women/Girls",
            price: 599,
            rating: 5,
        },
        {
            id: 129,
            image: "https://m.media-amazon.com/images/I/71iXnDurpPL._AC_UL600_FMwebp_QL65_.jpg",
            title: "SOLETHREADS Torrent | Casual Sneaker Lightweight Cushioned Lace-up Shoes for Women",
            price: 1599,
            rating: 5,
        },
        {
            id: 130,
            image: "https://m.media-amazon.com/images/I/61AQu0BjsrL._AC_UL600_FMwebp_QL65_.jpg",
            title: "Campus Mens 5g-820 Running Shoe",
            price: 1523,
            rating: 5,
        },
        {
            id: 131,
            image: "https://m.media-amazon.com/images/I/71YF-GYRReL._AC_UL600_FMwebp_QL65_.jpg",
            title: "Bacca Bucci FLAME Original 7-Eye Moto Inspired Mild Snow boots for Men",
            price: 1999,
            rating: 5,
        },
        {
            id: 132,
            image: "https://m.media-amazon.com/images/I/51wWDC-xJgS._AC_SR480,480_.jpg",
            title: "Bacca Bucci Men's RIDGE casual boot for all day wear,water resistant & hand crafted",
            price: 1299,
            rating: 5,
        },
        {
            id: 133,
            image: "https://m.media-amazon.com/images/I/71Ye-nyK3YL._AC_UL600_FMwebp_QL65_.jpg",
            title: "DOCTOR EXTRA SOFT Flexible Memory Foam Women's Shoes",
            price: 699,
            rating: 5,
        },
        {
            id: 134,
            image: "https://m.media-amazon.com/images/I/71kH7m61oBL._AC_UL600_FMwebp_QL65_.jpg",
            title: "Marc Loire Women's Lightweight Athleisure Knitted Active Wear Sneaker Shoes",
            price: 799,
            rating: 5,
        },
        {
            id: 135,
            image: "https://m.media-amazon.com/images/I/61MGVjbYydL._AC_UL600_FMwebp_QL65_.jpg",
            title: "Campus Women's Alexa Running Shoes",
            price: 1019,
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

export default Page8;