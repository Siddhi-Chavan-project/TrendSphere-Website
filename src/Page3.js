import React from 'react';
import './Page.css';
import Header from './Header';
import ProductDetail from './ProductDetail';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Cart from './Cart';
import iconImage from './icon.jpeg';



const Page3 = () => {
    // Sample products data
    const [product, setProduct] = useState([
        {
            id: 46,
            image: "https://m.media-amazon.com/images/I/51b5EprYt8L._AC_UL400_.jpg",
            title: "Hoffen Digital Electronic LCD Personal Body Fitness Weighing Scale",
            price: 649,
            rating: 5,
        },
        {
            id: 47,
            image: "https://m.media-amazon.com/images/I/41zxerd4OJL._SX300_SY300_QL70_FMwebp_.jpg",
            title: "Redmi A2 (Sea Green, 2GB RAM, 32GB Storage) | Upto 7GB RAM",
            price: 6499,
            rating: 5,
        },
        {
            id: 48,
            image: "https://m.media-amazon.com/images/I/61hrzDc3aTL._AC_UL400_.jpg",
            title: "Voltas 1.5 Ton 3 Star, Fixed Speed Window AC (Copper, 2023 Model, White)",
            price: 27780,
            rating: 5,
        },
        {
            id: 49,
            image: "https://m.media-amazon.com/images/I/314JIzM4MNL._SY300_SX300_QL70_FMwebp_.jpg",
            title: "USHA Diplomat 1200mm 50 Watt Energy Power Saving Ceiling Fan (Brown)",
            price: 1599,
            rating: 5,
        },
        {
            id: 50,
            image: "https://images-eu.ssl-images-amazon.com/images/I/71dEY4Neo3L._AC_UL160_SR160,160_.jpg",
            title: "realme narzo N53 (Feather Gold, 4GB+64GB) 33W Segment Fastest Charging",
            price: 8999,
            rating: 5,
        },
        {
            id: 51,
            image: "https://m.media-amazon.com/images/I/51mdVrFlJPL._AC_UL400_.jpg",
            title: "Whirlpool 184 L 2 Star Direct-Cool Single Door Refrigerator",
            price: 12390,
            rating: 5,
        },
        {
            id: 52,
            image: "https://m.media-amazon.com/images/I/91jx8plSPkL._AC_UL400_.jpg",
            title: "Hisense 45 L 4 Star Direct-Cool Single Door Mini Refrigerator",
            price: 8490,
            rating: 5,
        },
        {
            id: 53,
            image: "https://m.media-amazon.com/images/I/51DenBugfAL._AC_UL400_.jpg",
            title: "Voltas Beko, A Tata Product 20L, 700W smart solo Microwave oven",
            price: 3813,
            rating: 5,
        },
        {
            id: 54,
            image: "https://m.media-amazon.com/images/I/71gf7IId1TL._AC_UL400_.jpg",
            title: "Samsung 32 L Convection Microwave Oven Neo stainless silver, SlimFry",
            price: 16990,
            rating: 5,
        },
        {
            id: 55,
            image: "https://m.media-amazon.com/images/I/41SM7T5BgoL._SX300_SY300_QL70_FMwebp_.jpg",
            title: "Raptas (Deal of The Day 12 Year Warranty MultipleXR2 V380 Pro HD Smart Wireless CCTV Security Camera",
            price: 1999,
            rating: 5,
        },
        {
            id: 56,
            image: "https://m.media-amazon.com/images/I/71hNjwzeXUL._AC_UL400_.jpg",
            title: "LG 8 Kg 5 Star Inverter TurboDrum Fully Automatic Top Loading Washing Machine",
            price: 10000,
            rating: 5,
        },
        {
            id: 57,
            image: "https://m.media-amazon.com/images/I/71o4XEEvEVL._AC_UL400_.jpg",
            title: "LG 7 Kg 5 Star Semi-Automatic Top Loading Washing Machine",
            price: 11990,
            rating: 5,
        },
        {
            id: 58,
            image: "https://m.media-amazon.com/images/I/61nPxflwpcL._AC_UL400_.jpg",
            title: "Whirlpool 7 Kg 5 Star Royal Fully-Automatic Top Loading Washing Machine",
            price: 15240,
            rating: 5,
        },
        {
            id: 59,
            image: "https://m.media-amazon.com/images/I/31NPT3Db0NL._SY300_SX300_QL70_FMwebp_.jpg",
            title: "Newly Launched truke Buds Clarity 5 True Wireless in Ear Earbuds",
            price: 1499,
            rating: 5,
        },
        {
            id: 60,
            image: "https://m.media-amazon.com/images/I/51sZ0bOotML._AC_UL400_.jpg",
            title: "OnePlus Bullets Wireless Z2 ANC Bluetooth in Ear Earphones with Mic",
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

export default Page3;