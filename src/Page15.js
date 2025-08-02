import React from 'react';
import './Page.css';
import Header from './Header';
import ProductDetail from './ProductDetail';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Cart from './Cart';
import iconImage from './icon.jpeg';



const Page15 = () => {
    // Sample products data
    const [product, setProducts] = useState([
        {
            id: 236,
            image: "https://m.media-amazon.com/images/I/61+DSUDxCeL._AC_UL600_FMwebp_QL65_.jpg",
            title: "HEET Health Care System Cleansing Detox Foot Pads Detox Foot Patches for Stress Relief Sleep",
            price: 299,
            rating: 5
        },
        {
            id: 238,
            image: "https://m.media-amazon.com/images/I/6158pEV7bAL._AC_UL600_FMwebp_QL65_.jpg",
            title: "Healthvit Eyevitan | 20+ Vitamins for Eye Care | 20+ Vitamins for Eye Care|Bilberry 60mg",
            price: 479,
            rating: 5
        },
        {
            id: 239,
            image: "https://m.media-amazon.com/images/I/41LS9x7LhjL._AC_UL600_FMwebp_QL65_.jpg",
            title: "NIVEA Pearl and Beauty 50ml Deo Roll On | With Pearl Extracts & Avocado Oil For Women",
            price: 168,
            rating: 5
        },
        {
            id: 240,
            image: "https://m.media-amazon.com/images/I/71zcWaE7TiL._AC_UL600_FMwebp_QL65_.jpg",
            title: "Gillette Venus Simply Venus Pink Hair Removal for Women - 5 razors (Buy 4,Get 1 free)",
            price: 276,
            rating: 5
        },
        {
            id: 241,
            image: "https://m.media-amazon.com/images/I/51lutlVVg0L._AC_UL600_FMwebp_QL65_.jpg",
            title: "LetsShave Evior Reusable Face & Eyebrow Razor For Women | For Insant & Painless Hair Removal",
            price: 236,
            rating: 5
        },
        {
            id: 242,
            image: "https://m.media-amazon.com/images/I/91EIuufEiEL._AC_UL600_FMwebp_QL65_.jpg",
            title: "Trajectory Travel Neck Pillow Rest Cushion with Eye Mask Combo for Sleeping for Men",
            price: 399,
            rating: 5
        },
        {
            id: 243,
            image: "https://m.media-amazon.com/images/I/41goO+bdJJL._AC_UL600_FMwebp_QL65_.jpg",
            title: "SMIC Thermometer for Professional and personal use with One Touch For Child and Adult",
            price: 199,
            rating: 5
        },
        {
            id: 244,
            image: "https://m.media-amazon.com/images/I/61B8gGC2vIL._AC_UL600_FMwebp_QL65_.jpg",
            title: "Mamaearth Natural Mosquito Repellent Gel, 50ml, For protection for kids and adults, useful daily",
            price: 89,
            rating: 5
        },
        {
            id: 245,
            image: "https://m.media-amazon.com/images/I/51GRWUB40tL._AC_UL600_FMwebp_QL65_.jpg",
            title: "Philips BG1025/15 Showerproof Body Groomer for Men, Safe for all body areas, including private parts",
            price: 1190,
            rating: 5
        },
        {
            id: 246,
            image: "https://m.media-amazon.com/images/I/81L3BIIbF-L._AC_UL600_FMwebp_QL65_.jpg",
            title: "PHILIPS BT3231/15 Battery Powered Beard Trimmer for Men-Power adapt technology for precise trimming",
            price: 1764,
            rating: 5
        },
        {
            id: 247,
            image: "https://m.media-amazon.com/images/I/91SaV9kjnuL._AC_UL600_FMwebp_QL65_.jpg",
            title: "Beauté Secrets Manicure Set, Nail Clippers Set, Gifts for Men/Women, Personal Care Tool Kit",
            price: 499,
            rating: 5
        },
        {
            id: 248,
            image: "https://m.media-amazon.com/images/I/717EN8cEmRL._AC_UL600_FMwebp_QL65_.jpg",
            title: "Ensure Diabetes Care- Nutrition to Help Control Blood Sugar Levels- 400 gm, for diabetes",
            price: 870,
            rating: 5
        },
        {
            id: 249,
            image: "https://m.media-amazon.com/images/I/718vx0xjaEL._AC_UL600_FMwebp_QL65_.jpg",
            title: "Health Veda Organics Diabetic Care Supplements with Karela, Gudmar, Jamun I 60 Veg Tablets",
            price: 474,
            rating: 5
        },
        {
            id: 250,
            image: "https://m.media-amazon.com/images/I/8186EHiieQL._AC_UL600_FMwebp_QL65_.jpg",
            title: "Protinex Diabetes Care Drink Mix For Adults - (Vanilla Flavor, 400 Gms, Jar) with Vital Nutrients",
            price: 629,
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

export default Page15;
