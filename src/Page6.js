import React from 'react';
import './Page.css';
import Header from './Header';
import ProductDetail from './ProductDetail';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Cart from './Cart';
import iconImage from './icon.jpeg';



const Page6 = () => {
    // Sample products data
    const [product, setProduct] = useState([
        {
            id: 91,
            image: "https://m.media-amazon.com/images/I/71eFpmH3-VL._AC_UL400_.jpg",
            title: "ZENEME Rhodium-Plated Silver Toned Star Shaped American Diamond Studded Necklace Earrings Jewellery Set for Girls and Women",
            price: 829,
            rating: 5,
        },
        {
            id: 92,
            image: "https://m.media-amazon.com/images/I/71alVVY3SwL._AC_UL400_.jpg",
            title: "Shining Diva Fashion Latest 18k Rose Gold Stylish Bracelet Earrings Combo Jewellery For Women and Girls",
            price: 269,
            rating: 5,
        },
        {
            id: 93,
            image: "https://m.media-amazon.com/images/I/71FpObtA+RL._AC_UL400_.jpg",
            title: "YouBella Fashion Jewellery Set for Women Antique Oxidised Silver Plated Tribal Jewellery Necklace Earring Set for Women & Girls",
            price: 299,
            rating: 5,
        },
        {
            id: 94,
            image: "https://m.media-amazon.com/images/I/818QQGSZhTL._AC_UL400_.jpg",
            title: "Atasi International Silver Plated Crystal AD Diamond Necklace Jewellery Set with Earrings for Women and Girls Suits Best Party, Wedding and Any Occasions",
            price: 300,
            rating: 5,
        },
        {
            id: 95,
            image: "https://m.media-amazon.com/images/I/61MFdU+7nvL._AC_UL400_.jpg",
            title: "Amazon Brand - Nora Nico 925 Sterling Silver BIS Hallmarked Love Heart Hoop Earrings for Girls",
            price: 1499,
            rating: 5,
        },
        {
            id: 96,
            image: "https://m.media-amazon.com/images/I/610M27CQMXL._AC_UL400_.jpg",
            title: "YouBella Fashion Jewellery Gold Plated Necklace and Earrings Combo Jewellery Set for Girls and Women (Gold)",
            price: 281,
            rating: 5,
        },
        {
            id: 97,
            image: "https://m.media-amazon.com/images/I/81RKA1lGyPL._AC_UL400_.jpg",
            title: "AVNI by GIVA 925 Oxidised Silver Peacock Earrings | Rakhi Gift for Sister |sister|gifts",
            price: 1551,
            rating: 5,
        },
        {
            id: 98,
            image: "https://m.media-amazon.com/images/I/61t7uNjitCL._AC_UL400_.jpg",
            title: "ANAYRA Pure Silver Earrings For Women, Hallmarked 925 Silver Earrings,Earrings For Women",
            price: 702,
            rating: 5,
        },
        {
            id: 99,
            image: "https://m.media-amazon.com/images/I/71BYiGpdQIL._AC_UL400_.jpg",
            title: "YouBella Jewellery for women earings Gold Plated Crystal Stud Tops Earrings for Girls and Women",
            price: 214,
            rating: 5,
        },
        {
            id: 100,
            image: "https://m.media-amazon.com/images/I/61beOST3kwL._AC_UL400_.jpg",
            title: "Shining Diva Fashion Latest Stylish Trendy Kunckle Rings Set for Women and Girls| Boho Rings",
            price: 246,
            rating: 5,
        },
        {
            id: 101,
            image: "https://m.media-amazon.com/images/I/710z1XgiQoL._AC_UL400_.jpg",
            title: "Peora Traditional Jewellery Crystal Pearl Necklace Earring Jewellery Set | olny for Women",
            price: 416,
            rating: 5,
        },
        {
            id: 102,
            image: "https://m.media-amazon.com/images/I/71kF3qNhjIL._AC_UL400_.jpg",
            title: "Peora Ethnic Indian Traditional Gold Plated Kundan Jewellery Set | beautiful for Women",
            price: 2346,
            rating: 5,
        },
        {
            id: 103,
            image: "https://m.media-amazon.com/images/I/711ZldF8GQL._AC_UL400_.jpg",
            title: "Sukkhi Sparkling Gold Plated Wedding Jewellery Austrian Diamond Set of 4",
            price: 399,
            rating: 5,
        },
        {
            id: 104,
            image: "https://m.media-amazon.com/images/I/61FnJLJRPsL._AC_UL400_.jpg",
            title: "PRM Traditional Gold Plated Long Mangalsutra/Tanmaniya Vati",
            price: 198,
            rating: 5,
        },
        {
            id: 105,
            image: "https://m.media-amazon.com/images/I/71smegU5YwL._AC_UL400_.jpg",
            title: "Peora 18K Gold Plated Kundan Pearl Choker Necklace Earring Mang Tikka ",
            price: 1000,
            rating: 5,
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

export default Page6;