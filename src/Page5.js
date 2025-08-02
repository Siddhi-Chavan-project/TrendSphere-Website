import React from 'react';
import './Page.css';
import Header from './Header';
import ProductDetail from './ProductDetail';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Cart from './Cart';
import iconImage from './icon.jpeg';

const Page5 = () => {
    // Sample products data
    const [product, setProduct] = useState([
        {
            id: 76,
            image: "https://m.media-amazon.com/images/I/71IszooqopL._AC_UL400_.jpg",
            title: "Kuvarba Fashion Women's Banarasi Silk Saree|Unstiched Blouse Piece",
            price: 379,
            rating: 5,
        },
        {
            id: 77,
            image: "https://m.media-amazon.com/images/I/81Pxmepi-mL._AC_UL400_.jpg",
            title: "PERFECTBLUE Women's Digital Linen Blend Saree | Unstitched Blouse Piece",
            price: 359,
            rating: 5,
        },
        {
            id: 78,
            image: "https://m.media-amazon.com/images/I/51hABDO3t7L._AC_UL400_.jpg",
            title: "Satrani Women'S Georgette Leheriya Printed Saree With Unstitched Blouse Piece",
            price: 639,
            rating: 5,
        },
        {
            id: 79,
            image: "https://m.media-amazon.com/images/I/61-QfaonpML._AC_UL400_.jpg",
            title: "Pratham Blue Women's Silk Saree With Blouse Piece",
            price: 650,
            rating: 5,
        },
        {
            id: 80,
            image: "https://m.media-amazon.com/images/I/71L7l+xbkmL._AC_UL400_.jpg",
            title: "Sidhidata Women's Georgette Digital Printed Ready To Wear one Minute Saree With Unstitched Blouse Piece",
            price: 999,
            rating: 5,
        },
        {
            id: 81,
            image: "https://m.media-amazon.com/images/I/51Atj-Hb6-L._AC_UL400_.jpg",
            title: "Satrani Women'S Georgette Bandhani Printed Saree With Unstitched Blouse Piece",
            price: 569,
            rating: 5,
        },
        {
            id: 82,
            image: "https://m.media-amazon.com/images/I/81PXtEXGcfL._AC_UL400_.jpg",
            title: "Monjolika Fashion Women's Banarasi Silk Blend Woven Work Tussles Saree With Unsttiched Blouse Piece (Monjolika",
            price: 1999,
            rating: 5,
        },
        {
            id: 83,
            image: "https://m.media-amazon.com/images/I/81xISlYAIGL._AC_UL600_FMwebp_QL65_.jpg",
            title: "Pandadi Saree Women's Banarasi Paithani Silk Saree With Unstitched Blouse Piece",
            price: 2569,
            rating: 5,
        },
        {
            id: 84,
            image: "https://m.media-amazon.com/images/I/510zZkW+GwL._AC_UL600_FMwebp_QL65_.jpg",
            title: "SIRIL Women's Paithani Jacquard Silk Saree with Unstitched Blouse",
            price: 1569,
            rating: 5,
        },
        {
            id: 85,
            image: "https://m.media-amazon.com/images/I/81prN4Qm7FL._AC_UL400_.jpg",
            title: "Amazon Brand - Myx Women Women Saree",
            price: 384,
            rating: 5,
        },
        {
            id: 86,
            image: "https://m.media-amazon.com/images/I/51FoRKgu30L._AC_UL400_.jpg",
            title: "SGF11 Women's Kanjivaram Soft Lichi Silk Saree With Blouse Piece",
            price: 799,
            rating: 5,
        },
        {
            id: 87,
            image: "https://m.media-amazon.com/images/I/41t+Bq0HLaL._AC_UL400_.jpg",
            title: "Avantika Fashion Women's Kanjivaram Soft Silk Banarasi Saree With Blouse Piece",
            price: 436,
            rating: 5,
        },
        {
            id: 88,
            image: "https://m.media-amazon.com/images/I/510fJY4HU9L._AC_UL400_.jpg",
            title: "SIRIL Women's Bandhani Printed Chiffon Saree with Blouse",
            price: 599,
            rating: 5,
        },
        {
            id: 89,
            image: "https://m.media-amazon.com/images/I/61Y2Y8lL6+L._AC_UL400_.jpg",
            title: "Yashika Women's Jaquard Art Silk Weaving Saree With Blouse Piece",
            price: 569,
            rating: 5,
        },
        {
            id: 90,
            image: "https://m.media-amazon.com/images/I/71XAzGJXvkL._AC_UL400_.jpg",
            title: "SIRIL Women's Bandhani Printed & Embroidery Work In Lace Georgette Saree with Unstitched Blouse Piece",
            price: 989,
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

export default Page5;