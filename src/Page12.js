
import React from 'react';
import './Page.css';
import Header from './Header';
import ProductDetail from './ProductDetail';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Cart from './Cart';
import iconImage from './icon.jpeg';


const Page12 = () => {
    // Sample products data
    const [product, setProduct] = useState([

        {
            id: "181",
            image: "https://m.media-amazon.com/images/I/8139T8YbdkL._AC_UL600_FMwebp_QL65_.jpg",
            title: "Dekorly Artificial Potted Plants, 8 Pack Artificial Plastic Eucalyptus Plants |decor for garden",
            price: 399,
            rating: 5
        },
        {
            id: "182",
            image: "https://m.media-amazon.com/images/I/81fJ8HhKbLL._AC_UL600_FMwebp_QL65_.jpg",
            title: "ILU® Dream Catchers, Wall Hangings, Home Decor, Handmade Dreamcatcher for Bedroom",
            price: 199,
            rating: 5
        },
        {
            id: "183",
            image: "https://m.media-amazon.com/images/I/71+xe0TgLVL._AC_UL600_FMwebp_QL65_.jpg",
            title: "INDICAST Resin 6 Deer Statue Showpiece Antique Finish Table For Home Interior Decor",
            price: 1337,
            rating: 5
        },
        {
            id: "184",
            image: "https://m.media-amazon.com/images/I/81ufRcPVFtL._AC_UL600_FMwebp_QL65_.jpg",
            title: "TIED RIBBONS Resin Romantic Boat Couple Showpiece Statue For Home Decor",
            price: 649,
            rating: 5
        },
        {
            id: "185",
            image: "https://m.media-amazon.com/images/I/61zmorZsjKL._AC_UL600_FMwebp_QL65_.jpg",
            title: "RAG28 Wooden Good Vibes showpiece Item for Study Table Book Shelf Home Decor",
            price: 259,
            rating: 5
        },
        {
            id: "186",
            image: "https://m.media-amazon.com/images/I/71ko3kgDwxS._AC_UL600_FMwebp_QL65_.jpg",
            title: "Paradigm Pictures Home Decoration Items Wind Chimes for Home",
            price: 499,
            rating: 5
        },
        {
            id: "187",
            image: "https://m.media-amazon.com/images/I/81a3yjFQ6zL._AC_UL600_FMwebp_QL65_.jpg",
            title: "Special You Aesthetic Room Decor Backdrop Fairy Lights for Bedroom Artificial Vines",
            price: 379,
            rating: 5
        },
        {
            id: "188",
            image: "https://m.media-amazon.com/images/I/61xtVRXZ-7L._AC_UL600_FMwebp_QL65_.jpg",
            title: "IRFANHANDICRAFTS ® Design Wall Shelf intersecting Wooden Wall|wall decor items",
            price: 754,
            rating: 5
        },
        {
            id: "189",
            image: "https://m.media-amazon.com/images/I/61m5aDOE9BL._AC_UL600_FMwebp_QL65_.jpg",
            title: "eCraftIndia Think No Evil, Speak No Evil, Hear No Evil, See No Evil Set of 4 Baby Monk",
            price: 294,
            rating: 5
        },
        {
            id: "190",
            image: "https://m.media-amazon.com/images/I/51au0UIyksL._AC_UL600_FMwebp_QL65_.jpg",
            title: "SN Modern Metal Floor Flower Stands for Living Room Bedroom Display Plant Stand Tall Indoor",
            price: 189,
            rating: 5
        },
        {
            id: "191",
            image: "https://m.media-amazon.com/images/I/71yS-U+MRkL._AC_UL600_FMwebp_QL65_.jpg",
            title: "Bikri Kendra - Hexagon 20 Golden mirror stickers for wall,acrylic mirror wall decor sticker",
            price: 269,
            rating: 5
        },
        {
            id: "192",
            image: "https://m.media-amazon.com/images/I/41O92Zonx9L._AC_UL600_FMwebp_QL65_.jpg",
            title: "Sehaz Artworks Wall Hangings | Door Hanging | Home Decor Items| decor items| unique gifts",
            price: 239,
            rating: 5
        },
        {
            id: "193",
            image: "https://m.media-amazon.com/images/I/91XWgIMVtYL._AC_UL600_FMwebp_QL65_.jpg",
            title: "TIED RIBBONS Multicolor Flowers with Mercury Glass Vase for Home Decor Center Table Bedroom",
            price: 499,
            rating: 5
        },
        {
            id: "194",
            image: "https://m.media-amazon.com/images/I/71CrRyGERnL._AC_UL600_FMwebp_QL65_.jpg",
            title: "Decazone Macrame Indoor Wall Hanging Shelf Shelves with Wooden Dowel Hand Woven",
            price: 287,
            rating: 5
        },
        {
            id: "195",
            image: "https://m.media-amazon.com/images/I/81Yk8pUHacL._AC_UL600_FMwebp_QL65_.jpg",
            title: "TIED RIBBONS Decorative Glass Vase for Flower Plants Home Decor Office Living Room",
            price: 299,
            rating: 5
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

export default Page12;