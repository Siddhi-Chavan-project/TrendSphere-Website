import React from 'react';
import './Page.css';
import Header from './Header';
import ProductDetail from './ProductDetail';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Cart from './Cart';
import iconImage from './icon.jpeg';


const Page11 = () => {
    // Sample products data
    const [product, setProduct] = useState([
        {
            id: 166,
            image: "https://m.media-amazon.com/images/I/61hj8yUFstL._AC_UL600_FMwebp_QL65_.jpg",
            title: "THE KURTA COMPANY Men Poly Rayon Cherry Red & Green Printed Kurta Perfect for Any Occasion",
            price: 1999,
            rating: 5,
        },
        {
            id: 167,
            image: "https://m.media-amazon.com/images/I/61YJKiaW3hL._AC_UL600_FMwebp_QL65_.jpg",
            title: "THE KURTA COMPANY Men Cotton Poly Blend Multicolor Printed Kurta Perfect for Any Occasion",
            price: 2499,
            rating: 5,
        },
        {
            id: 168,
            image: "https://m.media-amazon.com/images/I/61Q9i7N-QjL._AC_UL600_FMwebp_QL65_.jpg",
            title: "Ethluxis Men's Silk Blend Kurta Set",
            price: 1859,
            rating: 5,
        },
        {
            id: 169,
            image: "https://m.media-amazon.com/images/I/71BbvtqeP3L._AC_UL600_FMwebp_QL65_.jpg",
            title: "Pashtush Mens fine Soft Ethnic Stole Stole, Jamawar design, Faux Pashmina",
            price: 1299,
            rating: 5
        },
        {
            id: 170,
            image: "https://m.media-amazon.com/images/I/51FE21IGnyS._AC_UL600_FMwebp_QL65_.jpg",
            title: "Logass Men's Silk Blend Kurta Pyjama Set",
            price: 748,
            rating: 5
        },
        {
            id: 171,
            image: "https://images-eu.ssl-images-amazon.com/images/I/61OryqumWeS._AC_UL320_SR320,320_.jpg",
            title: "IZA COLLECTION Dupion Silk Pink Kurta Pajama With Printed Waistcoat For Men Size 38",
            price: 699,
            rating: 5
        },
        {
            id: 172,
            image: "https://m.media-amazon.com/images/I/61P1fKttmiL._AC_UL600_FMwebp_QL65_.jpg",
            title: "SKAVIJ Men's Art Silk Dhoti Kurta Set Ethnic Dress",
            price: 1490,
            rating: 5,
        },
        {
            id: 173,
            image: "https://m.media-amazon.com/images/I/711TqBGzgqL._AC_UL600_FMwebp_QL65_.jpg",
            title: "SKAVIJ Men's Art Silk Regular Kurta Pajama and Scarf Set Wedding Party Dress",
            price: 1394,
            rating: 5
        },
        {
            id: 174,
            image: "https://m.media-amazon.com/images/I/511VOEiJnaL._AC_UL600_FMwebp_QL65_.jpg",
            title: "SKAVIO Mens Art Silk Ethnic Kurta Pajama Eid Wedding Party Dress Set",
            price: 699,
            rating: 5
        },
        {
            id: 175,
            image: "https://encrypted-tbn0.gstatic.com/shopping?q:tbn:ANd9GcRlZMF5K5TYt1arc9POayEi0mhGyB-GSVfjhWMk36c_dvy3S3doRbjsc4iGFNJvy6zO4nxfKfmGe95pFVkFNzqLBjDXEn6C9Tyb7SDsCWB9cQ_6PEDv5namjb8&usqp:CAc",
            title: "Uri and MacKenzie Men's Silk Blend Regular Kurta Churidar Pyjama with Bundi Nehru Jacket/Waistcoat",
            price: 2789,
            rating: 5
        },
        {
            id: 176,
            image: "https://m.media-amazon.com/images/I/61mQSrMF-fL._AC_UL600_FMwebp_QL65_.jpg",
            title: "SKAVIJ Men's 4-Piece Kurta Pajama Set with Jacket and Scarf Perfect for Parties",
            price: 1649,
            rating: 5
        },
        {
            id: 177,
            image: "https://m.media-amazon.com/images/I/61RPLTCHf2L._AC_UL600_FMwebp_QL65_.jpg",
            title: "Amzira Men's Ethnic Wear Kurta Pajama With Long Waistcoat Jacket Set- Green",
            price: 2699,
            rating: 5
        },
        {
            id: 178,
            image: "https://m.media-amazon.com/images/I/81THepuEMdL._AC_UL600_FMwebp_QL65_.jpg",
            title: "FABWAX Men's Full Black Cotton Blend Side Pleated Cross Kurta Payjama Set",
            price: 599,
            rating: 5
        },
        {
            id: 179,
            image: "https://m.media-amazon.com/images/I/61Qvv5a-PZL._AC_UL600_FMwebp_QL65_.jpg",
            title: "R.K. DRESSES 100% Cotton Kurta & Pyjama Set For Men | For Men's",
            price: 699,
            rating: 5,
        },
        {
            id: 180,
            image: "https://m.media-amazon.com/images/I/61A-Y4uhufL._AC_UL600_FMwebp_QL65_.jpg",
            title: "Amazon Brand - Anarva Mens Handloom Cotton Long Kurta Indian Ethnic Wear Shirt",
            price: 809,
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

export default Page11;