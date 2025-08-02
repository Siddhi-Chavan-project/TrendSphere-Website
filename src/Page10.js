import React from 'react';
import './Page.css';
import Header from './Header';
import ProductDetail from './ProductDetail';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Cart from './Cart';
import iconImage from './icon.jpeg';

const Page10 = () => {
    // Sample products data
    const [product, setProduct] = useState([
        {
            id: 151,
            image: "https://m.media-amazon.com/images/I/71NJcWMFAML._AC_UL600_FMwebp_QL65_.jpg",
            title: "ginoya brothers 36 Pieces Pink & Grey Fancy Head-Wear Accessories For Baby Girls/Toddlers",
            price: 499,
            rating: 5
        },
        {
            id: 152,
            image: "https://m.media-amazon.com/images/I/81RZ2i+hOuL._AC_UL600_FMwebp_QL65_.jpg",
            title: "Atrube's Pack Of 4 Dual Tone Scrunchies Pink-Green Hair Accessories Silk Satin Scrunchies Combo of 4 Scrunchies",
            price: 219,
            rating: 5
        },
        {
            id: 153,
            image: "https://m.media-amazon.com/images/I/611ZT26wdES._AC_UL600_FMwebp_QL65_.jpg",
            title: "Annacreations Korean Fashion Style Pearl Rhinestone Metal Hair Clips Hair Pin Stylish Hair Accessories Jewellery",
            price: 532,
            rating: 5
        },
        {
            id: 154,
            image: "https://m.media-amazon.com/images/I/71hP4hVn1PL._AC_UL600_FMwebp_QL65_.jpg",
            title: "RedChimes 10 Pcs Korean Style Small Pearl Hair Claw Clips Mini Pearl",
            price: 299,
            rating: 5
        },
        {
            id: 155,
            image: "https://m.media-amazon.com/images/I/61epVg9IzvL._UY695_.jpg",
            title: "Shining Diva Fashion Bohemian Stackable Multilayer Hamsa Hand Evil Eye Lucky Protection Bracelets Multicolor Crystal Charm Beaded Bracelet for Women Girls",
            price: 399,
            rating: 5
        },
        {
            id: 156,
            image: "https://m.media-amazon.com/images/I/71RzYyzhsoL._AC_UL600_FMwebp_QL65_.jpg",
            title: "Om Jewells Valentine Gift Rose Gold Plated Pink Flowers Link Chain Adjustable Size Charm Bracelet Decorated With Crystals for Girls & Women BR1000009C",
            price: 59,
            rating: 5
        },
        {
            id: 157,
            image: "https://m.media-amazon.com/images/I/81nx9c+lOxL._AC_UL600_FMwebp_QL65_.jpg",
            title: "VINJEWELRY 2pcs Best Friend Unicorn Stainless Steel Bracelet BFF Heart Jewelry Christmas Birthday Gift for Women & Girls(Blue)",
            price: 397,
            rating: 5
        },
        {
            id: 158,
            image: "https://m.media-amazon.com/images/I/81Lzv9RRv5L._AC_UL600_FMwebp_QL65_.jpg",
            title: "Shining Diva Fashion 780 Pcs Hair Accessories Set, Flower Bow Hair Clips Rubber Band Hair Ties Hairband for Girls",
            price: 345,
            rating: 5
        },
        {
            id: 159,
            image: "https://m.media-amazon.com/images/I/51JBNLtPvQS._AC_UL600_FMwebp_QL65_.jpg",
            title: "Shining Diva Fashion Latest Stylish Rose Gold Austrian Crystal Bracelet For Women And Girls (11942B), Free",
            price: 269,
            rating: 5
        },
        {
            id: 160,
            image: "https://m.media-amazon.com/images/I/61JNAzCKcdL._AC_UL600_FMwebp_QL65_.jpg",
            title: "Shining Diva Fashion Latest Stylish Crystal Multilayer 3-5 pcs Set Charm Bracelets for Women and Girls",
            price: 199,
            rating: 5
        },
        {
            id: 161,
            image: "https://m.media-amazon.com/images/I/61ge3BpXVES._AC_UL600_FMwebp_QL65_.jpg",
            title: "University Trendz 6 PCs Mixed Multi-Layer Genuine Leather Bracelet, Handmade Adjustable Braided Leather Cuff Men & Women",
            price: 233,
            rating: 5
        },
        {
            id: 162,
            image: "https://m.media-amazon.com/images/I/519ex09f7UL._AC_UL600_FMwebp_QL65_.jpg",
            title: "Zindura Bracelets for MEN and Boys | Leather Bracelet for MEN and Boys | Leather Silicon Wristband for Boys",
            price: 799,
            rating: 5
        },
        {
            id: 163,
            image: "https://m.media-amazon.com/images/I/51RCyVOxVIL._AC_UL600_FMwebp_QL65_.jpg",
            title: "okos Men's Fashion Jewellery High Polished Stylish Stainless Steel Full Kada Style Bracelet ",
            price: 79,
            rating: 5
        },
        {
            id: 164,
            image: "https://m.media-amazon.com/images/I/616iKbzRtFL._AC_UL600_FMwebp_QL65_.jpg",
            title: "okos Men's Stainless Steel Jewellery Set Combo Pack of 2 Cuboid Vertical Bar Pendant ",
            price: 299,
            rating: 5
        },
        {
            id: 165,
            image: "https://m.media-amazon.com/images/I/71YjXtPHFuL._AC_UL600_FMwebp_QL65_.jpg",
            title: "Thrillz Silver Chain For Boys Silver Plated Chains For Boys Men Jewellery Alloy Silver Chain Mens Jewellery Necklace Chain 20 Inches",
            price: 159,
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

export default Page10;