
import React from 'react';
import './App.css';
import Header from './Header';
import ProductDetail from './ProductDetail';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Cart from './Cart';
import iconImage from './icon.jpeg';

const Page2 = () => {
    // Sample products data
    const [product, setProduct] = useState([
        {
            id: 31,
            image: "https://m.media-amazon.com/images/I/71i4d+k15xL._AC_UL400_.jpg",
            title: "TRENDY VIBES Two - Seater Leg Sofa Cum Bed Furniture",
            price: 5000,
            rating: 5,
        },
        {
            id: 32,
            image: "https://m.media-amazon.com/images/I/513I7-J-HqL._AC_UL400_.jpg",
            title: "UHUD CRAFTS Beautiful Antique Wooden Fold-able Side",
            price: 450,
            rating: 5,
        },
        {
            id: 33,
            image: "https://m.media-amazon.com/images/I/81YnapMNAkL._AC_UL400_.jpg",
            title: "Furniture Cafe Wooden Wall Shelves | Rack Storage Organizer",
            price: 674,
            rating: 3,
        },
        {
            id: 34,
            image: "https://m.media-amazon.com/images/I/71Mk5QqODdL._AC_UL400_.jpg",
            title: "UHUD CRAFTS Wooden Minimalistic Cone Shape Coffee Table",
            price: 2449,
            rating: 5,
        },
        {
            id: 35,
            image: "https://m.media-amazon.com/images/I/51dka33POcL._AC_UL400_.jpg",
            title: "EKRON Engineered Wood Storage Organizer Furniture",
            price: 3990,
            rating: 5,
        },
        {
            id: 36,
            image: "https://m.media-amazon.com/images/I/61+80v1eNaL._AC_UL400_.jpg",
            title: "FLOOR DECOR Indoor Outdoor Furniture Coffee Table Set",
            price: 9999,
            rating: 3,
        },
        {
            id: 37,
            image: "https://m.media-amazon.com/images/I/71M+5bajAxS._AC_UL400_.jpg",
            title: "Luxury furniture Square Foldable Storage Ottoman Coffee",
            price: 1999,
            rating: 5,
        },
        {
            id: 38,
            image: "https://m.media-amazon.com/images/I/51dvVtWkPiL._AC_UL400_.jpg",
            title: "Cello Novelty Compact Plastic 2 Door Cupboard",
            price: 2399,
            rating: 5,
        },
        {
            id: 39,
            image: "https://m.media-amazon.com/images/I/41adylirSVL._AC_UL400_.jpg",
            title: "CASPIAN Furniture Super White Engineered Wood Single Door Wardrobe",
            price: 6800,
            rating: 3,
        },
        {
            id: 40,
            image: "https://m.media-amazon.com/images/I/713VTIhCfOL._AC_UL400_.jpg",
            title: "uberlyfe 3 Seater Sofa Cum Bed Dark Grey with 2 Cushions",
            price: 11499,
            rating: 5,
        },
        {
            id: 41,
            image: "https://m.media-amazon.com/images/I/61X1FRLYjDL._AC_UL400_.jpg",
            title: "Hexagon Furnitures Engineeredwood Brownish Black Storage Bed",
            price: 7499,
            rating: 5,
        },
        {
            id: 42,
            image: "https://m.media-amazon.com/images/I/71DQ1Uq8zeL._AC_UL400_.jpg",
            title: "SATTVA Wooden Stools for Living Room Sitting Chair",
            price: 899,
            rating: 3,
        },
        {
            id: 43,
            image: "https://m.media-amazon.com/images/I/41Oqjvpm9gL._AC_UL400_.jpg",
            title: "JEANNERET Floating Armchair Office Chair",
            price: 8200,
            rating: 5,
        },
        {
            id: 44,
            image: "https://m.media-amazon.com/images/I/615PtUEDk-S._AC_UL400_.jpg",
            title: "Nilkamal Freedom Mini Medium (FMM) Plastic Cabinet for Storages",
            price: 5050,
            rating: 5,
        },
        {
            id: 45,
            image: "https://m.media-amazon.com/images/I/61lw0NZLsdL._AC_UL480_FMwebp_QL65_.jpg",
            title: "Nilkamal Freedom large sofa set",
            price: 25050,
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

export default Page2;