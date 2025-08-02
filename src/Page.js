

import React from 'react';
import './App.css';
import Header from './Header';
import ProductDetail from './ProductDetail';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Cart from './Cart';
import iconImage from './icon.jpeg';


function Page() {
    // Sample products data
    const [product, setProduct] = useState([
        {
            id: 1,
            image: 'https://m.media-amazon.com/images/I/51JdP4lk3UL._AC_UL600_FMwebp_QL65_.jpg',
            title: 'Clay Craft CC MM1 Swiss REZ7 Microwave Safe Coffee Mug for Gift to Couples',
            price: 100,
            rating: 5
        },
        {
            id: 2,
            image: 'https://m.media-amazon.com/images/I/51NxUwmuHNL._AC_UL400_.jpg',
            title: 'Radiksa Double Wall Stainless Steel Thermo 500ml Vacuum Insulated',
            price: 400,
            rating: 4
        },
        {
            id: 3,
            image: 'https://m.media-amazon.com/images/I/6140Y0u5aqL._AC_UL400_.jpg',
            title: 'Red Rose Flower with Golden Leaf with Gift Box with Carry Bag',
            price: 199,
            rating: 4
        },
        {
            id: 4,
            image: "https://m.media-amazon.com/images/I/91AF1b1HKDL._AC_UL400_.jpg",
            title: "Jaszz Art Brass Kalpavriksha Tree Showpiece (9.5 inches, Yellow)",
            price: 2803,
            rating: 5
        },
        {
            id: 5,
            image: 'https://m.media-amazon.com/images/I/81craG8eNhL._AC_UL400_.jpg',
            title: "WildHorn Gift Hamper for Men I Leather Wallet & Belt Combo ",
            price: 899,
            rating: 3
        },
        {
            id: 6,
            image: "https://m.media-amazon.com/images/I/41CH0PwJ3oL._AC_UL400_.jpg",
            title: "Aousome Personalized Gift Custom Photo  Name Wish Ceramic Mug ",
            price: 299,
            rating: 5
        },
        {
            id: 7,
            image: "https://m.media-amazon.com/images/I/91ObDp3pKlL._AC_UL400_.jpg",
            title: "Jiada Return Gifts Set of Cartoon Printed Kids Haversack Bags ",
            price: 349,
            rating: 5
        },
        {
            id: 8,
            image: "https://m.media-amazon.com/images/I/81ZSeQgVX3L._AC_UL400_.jpg",
            title: "TIED RIBBONS Raksha Bandhan Gift for Brother- Premium Rakhi ",
            price: 249,
            rating: 5,
        },
        {
            id: 9,
            image: "https://m.media-amazon.com/images/I/51zTckSsvSL._AC_UL400_.jpg",
            title: "YouBella Hair Jewellery Clip Set for Baby Band for Girls (Pink)",
            price: 281,
            rating: 3,
        },
        {
            id: 10,
            image: "https://m.media-amazon.com/images/I/51PGNa9uLCL._AC_UL400_.jpg",
            title: "Acnos® Premium Girl's Special Quality Different Heart Shape Bangle Analog Watch ",
            price: 278,
            rating: 5,
        },
        {
            id: 11,
            image: "https://m.media-amazon.com/images/I/71hJrVOEoKL._AC_UL400_.jpg",
            title: "Prime Deals Frozen Stationary Kit Pencil Pen Book Eraser Sharpener  ",
            price: 244,
            rating: 5,
        },
        {
            id: 12,
            image: "https://m.media-amazon.com/images/I/616AAEC5aZL._AC_UL400_.jpg",
            title: "Sanjis Enterprise birthday gift combo Cartoon hard-shell Crossbody Hand Purse and bag",
            price: 529,
            rating: 3
        },
        {
            id: 13,
            image: "https://m.media-amazon.com/images/I/61AFhefxAEL._AC_UL400_.jpg",
            title: "Yellow Chimes Bracelet for Women and Girls Blue Crystal Bracelets for Women ",
            price: 199,
            rating: 5,
        },
        {
            id: 14,
            image: "https://m.media-amazon.com/images/I/51Y+8bEJDkL._AC_UL400_.jpg",
            title: "FunBlast Piggy Bank - Unicorn Coin Box for Kids, Money Bank for Kids)",
            price: 499,
            rating: 5,
        },
        {
            id: 15,
            image: "https://m.media-amazon.com/images/I/61Pg1H7U15L._AC_UL400_.jpg",
            title: "Storio Kids Toys LCD Writing Tablet 8.5Inch E-Note Pad Best Gift",
            price: 218,
            rating: 3,
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

export default Page;