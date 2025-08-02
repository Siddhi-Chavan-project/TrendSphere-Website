import React from 'react';
import './Page.css';
import Header from './Header';
import ProductDetail from './ProductDetail';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Cart from './Cart';
import iconImage from './icon.jpeg';



const Page4 = () => {
    // Sample products data
    const [product, setProduct] = useState([
        {
            id: 61,
            image: "https://m.media-amazon.com/images/I/51py6MMmSSL._AC_UL400_.jpg",
            title: "MyGlamm Super Serum Compact | Infused With Hyaluronic Acid & Vitamin E",
            price: 384,
            rating: 5,
        },
        {
            id: 62,
            image: "https://m.media-amazon.com/images/I/51fw4NpIGcL._AC_UL400_.jpg",
            title: "Maybelline New York Mascara, Curls Lashes, Long-lasting, Waterproof",
            price: 299,
            rating: 5,
        },
        {
            id: 63,
            image: "https://m.media-amazon.com/images/I/51XM2LWhd7L._AC_UL400_.jpg",
            title: "Maybelline New York Kajal, Super Black,Long-lasting, Colossal Kajal, 0.35g",
            price: 291,
            rating: 5,
        },
        {
            id: 64,
            image: "https://m.media-amazon.com/images/I/51Ckdg8ReDL._AC_UL400_.jpg",
            title: "Swiss Beauty Hd Matte Pigmented Smudge Proof Lipstick | Stay Lipstick ",
            price: 239,
            rating: 5,
        },
        {
            id: 65,
            image: "https://m.media-amazon.com/images/I/5131DNtHNQL._AC_UL400_.jpg",
            title: "Lakme Rose Face Powder, Soft Pink, 40g",
            price: 179,
            rating: 5,
        },
        {
            id: 66,
            image: "https://m.media-amazon.com/images/I/51c1xZSw73L._AC_UL400_.jpg",
            title: "Swiss Beauty Liquid Light Weight Concealer With Full Coverage",
            price: 183,
            rating: 5,
        },
        {
            id: 67,
            image: "https://m.media-amazon.com/images/I/51841b8qQLL._AC_UL400_.jpg",
            title: "FACES CANADA Peaches N Cream Tinted Moisturizer Non Oily Lightweight",
            price: 419,
            rating: 5,
        },
        {
            id: 68,
            image: "https://m.media-amazon.com/images/I/51lBOB-oHXL._AC_UL400_.jpg",
            title: "Lacto Calamine Daily Cleansing Face Wipes with Aloe Vera",
            price: 115,
            rating: 5,
        },
        {
            id: 69,
            image: "https://m.media-amazon.com/images/I/61D+t9-A2rL._AC_UL400_.jpg",
            title: "Swiss Beauty Ultimate 9 Pigmented Colors Eyeshadow Palette Eye Makeup Matte",
            price: 226,
            rating: 5,
        },
        {
            id: 70,
            image: "https://m.media-amazon.com/images/I/61ot4hBl0oL._AC_UL400_.jpg",
            title: "Swiss Beauty Wing & Volume Kit | Mascara + Eyeliner | Long-Lasting",
            price: 469,
            rating: 5,
        },
        {
            id: 71,
            image: "https://m.media-amazon.com/images/I/61leqX+hJTS._AC_UL400_.jpg",
            title: "SUAKE 6-in-1 Professional Beauty Blender Sponge Foundation Beauty Blender",
            price: 99,
            rating: 5,
        },
        {
            id: 72,
            image: "https://m.media-amazon.com/images/I/41LS9x7LhjL._AC_UL400_.jpg",
            title: "NIVEA Pearl and Beauty 50ml Deo Roll Underarms For Women",
            price: 168,
            rating: 5,
        },
        {
            id: 73,
            image: "https://m.media-amazon.com/images/I/61qE6RDGH4L._AC_UL400_.jpg",
            title: "Mamaearth Soft Matte Long Stay Lipsticks 04 Berry Nude - 3.5 g",
            price: 388,
            rating: 5,
        },
        {
            id: 74,
            image: "https://m.media-amazon.com/images/I/51rv9uqXoLL._AC_UL400_.jpg",
            title: "Maybelline New York Lipstick, Matte Finish, Sensational Liquid Matte",
            price: 271,
            rating: 5,
        },
        {
            id: 75,
            image: "https://m.media-amazon.com/images/I/61Ur6uVWDML._AC_UL400_.jpg",
            title: "Lotus Herbals WhiteGlow Skin Whitening And Brightening Gel",
            price: 206,
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

export default Page4;