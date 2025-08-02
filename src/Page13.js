import React from 'react';
import './Page.css';
import Header from './Header';
import ProductDetail from './ProductDetail';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Cart from './Cart';
import iconImage from './icon.jpeg';



const Page13 = () => {
    // Sample products data
    const [product, setProducts] = useState([
        {
            id: "196",
            image: "https://m.media-amazon.com/images/I/51edNF+VNuL._AC_UL600_FMwebp_QL65_.jpg",
            title: "HimQuen Kitten heel 2 Inch Wedge Sandals for Women for Walking",
            price: 499,
            rating: 5,
        },
        {
            id: "197",
            image: "https://m.media-amazon.com/images/I/81dKIMFc2FL._AC_UL600_FMwebp_QL65_.jpg",
            title: "Froh Feet Transparent Kitten Heel For Womens",
            price: 999,
            rating: 5
        },
        {
            id: "198",
            image: "https://m.media-amazon.com/images/I/41ADInTT0lL._AC_UL600_FMwebp_QL65_.jpg",
            title: "Denill Women Cross Strap Cone Heels",
            price: 599,
            rating: 5
        },
        {
            id: "199",
            image: "https://m.media-amazon.com/images/I/51FpQxWqzOL._AC_UL600_FMwebp_QL65_.jpg",
            title: "Mochi Women Fashion Heel Slip-on",
            price: 1095,
            rating: 5
        },
        {
            id: "200",
            image: "https://m.media-amazon.com/images/I/71GRSuUQg3L._UY695_.jpg",
            title: "Mochi Women Synthetic Leather Wegde Heel Sandal",
            price: 1200,
            rating: 5
        },
        {
            id: "201",
            image: "https://m.media-amazon.com/images/I/61gkq9VaxUL._AC_UL600_FMwebp_QL65_.jpg",
            title: "Fashion Heel Block Heels Sandals For Women And Girls",
            price: 348,
            rating: 5
        },
        {
            id: "202",
            image: "https://m.media-amazon.com/images/I/61ooZh+66uL._AC_UL600_FMwebp_QL65_.jpg",
            title: "FROH FEET Casual Heel Sandals Solid Comfortable Sole For Womens & Girls",
            price: 799,
            rating: 5
        },
        {
            id: "203",
            image: "https://m.media-amazon.com/images/I/51n2KwcfCNL._AC_UL600_FMwebp_QL65_.jpg",
            title: "Shoetopia Stylish Solid Block Heels For Women & Girls",
            price: 500,
            rating: 5
        },
        {
            id: "204",
            image: "https://m.media-amazon.com/images/I/71GRSuUQg3L._AC_UL600_FMwebp_QL65_.jpg",
            title: "Mochi Women Synthetic Leather Wegde Heel Sandal",
            price: 399,
            rating: 5
        },
        {
            id: "205",
            image: "https://m.media-amazon.com/images/I/71FOJPIvvlL._AC_UL600_FMwebp_QL65_.jpg",
            title: "JM LOOKS Fashion Casual Strappy Heels Sandals For Womens & Girls",
            price: 799,
            rating: 5
        },
        {
            id: "206",
            image: "https://m.media-amazon.com/images/I/51CLWSdGk6L._AC_UL600_FMwebp_QL65_.jpg",
            title: "Shoetopia Patent Multi Cross Strap Block Heeled Sandals For Women & Girls",
            price: 599,
            rating: 5
        },
        {
            id: "207",
            image: "https://m.media-amazon.com/images/I/51Ey8HvlkXL._AC_UL600_FMwebp_QL65_.jpg",
            title: "Shoetopia Womens Heels Heeled Sandal",
            price: 699,
            rating: 5
        },
        {
            id: "208",
            image: "https://m.media-amazon.com/images/I/51HfMuLeTmL._AC_UL600_FMwebp_QL65_.jpg",
            title: "Shoetopia Womens Heels Heeled Sandal",
            price: 500,
            rating: 5
        },
        {
            id: "209",
            image: "https://m.media-amazon.com/images/I/51AO3tIWeTL._AC_UL600_FMwebp_QL65_.jpg",
            title: "Denill Women's Fashionable, Soft & Comfortable Heel Sandals",
            price: 499,
            rating: 5
        },
        {
            id: "210",
            image: "https://m.media-amazon.com/images/I/61D7v-aUagL._AC_UL600_FMwebp_QL65_.jpg",
            title: "Metro Women Ethnicwear Block Heel Sandal",
            price: 1094,
            rating: 5
        }
    ]);

    const [cart, setCart] = useState([]);
    const [showCart, setShowCart] = useState(false);

    const addToCart = (data) => {
        setCart([...cart, { ...data, quantity: 1 }]);
    };

    const handleShow = (value) => {
        setShowCart(value);
    };

    return (
        <div>
            {/* Assuming Header and Cart components are defined elsewhere */}
            <Header count={cart.length} handleShow={handleShow} />
            {showCart ? <Cart cart={cart} /> : <ProductDetail product={product} addToCart={addToCart} />}
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
        </div>
    );
};

export default Page13;
