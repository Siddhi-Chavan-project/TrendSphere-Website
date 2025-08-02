import React from 'react';
import './Page.css';
import Header from './Header';
import ProductDetail from './ProductDetail';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Cart from './Cart';
import iconImage from './icon.jpeg';



const Page9 = () => {
    // Sample products data
    const [product, setProduct] = useState([
        {
            id: 136,
            image: "https://m.media-amazon.com/images/I/31iYoz1YigL._AC_UL600_FMwebp_QL65_.jpg",
            title: "DENGER KID WEAR Kids New Fancy Trendy Full Sleeve T-shirt With Pant",
            price: 388,
            rating: 5
        },
        {
            id: 137,
            image: "https://m.media-amazon.com/images/I/51m-Td-2oJL._UX679_.jpg",
            title: "Hopscotch Boys Formal Set",
            price: 709,
            rating: 5
        },
        {
            id: 138,
            image: "https://m.media-amazon.com/images/I/71nFBvWq5ML._AC_UL600_FMwebp_QL65_.jpg",
            title: "SOUTH SAILOR Kids Boys Tshirt Printed Cotton Tshirts ",
            price: 780,
            rating: 5
        },
        {
            id: 139,
            image: "https://m.media-amazon.com/images/I/41NytFEV2CL._AC_UL600_FMwebp_QL65_.jpg",
            title: "Badshah New Girl's Maxi Dress",
            price: 375,
            rating: 5
        },
        {
            id: 140,
            image: "https://m.media-amazon.com/images/I/61eU-2gSbgL._AC_UL600_FMwebp_QL65_.jpg",
            title: "Hopscotch Boys Green Cotton All-Over Print T-Shirt With Jacket & Pant Set",
            price: 949,
            rating: 5
        },
        {
            id: 141,
            image: "https://m.media-amazon.com/images/I/51-5uGPWDiL._AC_UL600_FMwebp_QL65_.jpg",
            title: "JUGULAR Baby Boys and Girls Cotton Printed Shorts Pack of 3",
            price: 259,
            rating: 5
        },
        {
            id: 142,
            image: "https://m.media-amazon.com/images/I/71eEgYXPDXL._AC_UL600_FMwebp_QL65_.jpg",
            title: "TAGAS KD-202",
            price: 469,
            rating: 5
        },
        {
            id: 143,
            image: "https://m.media-amazon.com/images/I/51r9whxwUcL._AC_UL600_FMwebp_QL65_.jpg",
            title: "Hopscotch Girls Cotton Sleeveless Bow Applique Party Dress in Purple Color",
            price: 549,
            rating: 5
        },
        {
            id: 144,
            image: "https://m.media-amazon.com/images/I/51COhF+FP3L._AC_UL600_FMwebp_QL65_.jpg",
            title: "Niren Enterprise Polka DOT Frock for Old Kids Girls",
            price: 569,
            rating: 5
        },
        {
            id: 145,
            image: "https://m.media-amazon.com/images/I/816rEiQ6MOL._AC_UL600_FMwebp_QL65_.jpg",
            title: "T2F Girl T-Shirt",
            price: 549,
            rating: 5
        },
        {
            id: 146,
            image: "https://m.media-amazon.com/images/I/7113XqJIZ9L._AC_UL600_FMwebp_QL65_.jpg",
            title: "Wish Karo Baby girl Knee Length Frock Dress",
            price: 600,
            rating: 5
        },
        {
            id: 147,
            image: "https://images-eu.ssl-images-amazon.com/images/I/51WdnVfh-VL._AC_UL320_SR320,320_.jpg",
            title: "Wish Karo Baby Girls Cotton Frock Dress - (ctn125rd)",
            price: 400,
            rating: 5
        },
        {
            id: 148,
            image: "https://m.media-amazon.com/images/I/51s9WqTsR0L._AC_SR480,600_.jpg",
            title: "Wish Karo Baby Girls Frock Dress-(fe2783)",
            price: 200,
            rating: 5
        },
        {
            id: 149,
            image: "https://images-eu.ssl-images-amazon.com/images/I/81L4rLiwYWL._AC_UL320_SR320,320_.jpg",
            title: "Wish Karo Baby Girls Frock Dress-(fe2903)",
            price: 344,
            rating: 5
        },
        {
            id: 150,
            image: "https://images-eu.ssl-images-amazon.com/images/I/71Vt9xjnsZL._AC_UL320_SR320,320_.jpg",
            title: "Wish Karo Baby Girls Frock Dress-(fe2781)",
            price: 234,
            rating: 5
        }
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

export default Page9;