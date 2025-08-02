import React from 'react';
import './Page.css';
import Header from './Header';
import ProductDetail from './ProductDetail';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Cart from './Cart';
import iconImage from './icon.jpeg';


function Page1() {
    // Sample products data
    const [product, setProduct] = useState([
        {
            id: 16,
            image: "https://m.media-amazon.com/images/I/81uDWsj1LZL._AC_UL480_FMwebp_QL65_.jpg",
            title: "Women's Synthetic Ready to Wear Saree With Blouse Piece",
            price: 999,
            rating: 5,
        },
        {
            id: 17,
            image: "https://m.media-amazon.com/images/I/41DMQg722ES._AC_SR400,600_.jpg",
            title: "BATA Mens Boss-Grip Uniform Dress Shoe",
            price: 337,
            rating: 5,
        },
        {
            id: 18,
            image: "https://m.media-amazon.com/images/I/51agKAEK81L._SY741_.jpg",
            title: "Women's Pure Soft Kanjivaram Silk Saree Banarasi Type",
            price: 1500,
            rating: 3,
        },
        {
            id: "19",
            image: "https://images-eu.ssl-images-amazon.com/images/I/71HWol1DobL._AC_SR370,420,0,B_BR3_.jpg",
            title: "French Connection Analog Dial Men's Watch",
            price: 1680,
            rating: 5,
        },
        {
            id: "20",
            image: "https://www.dipyourtoes.in/cdn/shop/files/DSC2621-_1.jpg?v:1699049609&width:1100",
            title: "Mulberry knotted textured Heels",
            price: 300,
            rating: 5,
        },
        {
            id: "21",
            image: "https://uptownie.com/cdn/shop/files/1_9_540x.png?v:1699436943s",
            title: "Three Piece Linen Co-ord Set",
            price: 3300,
            rating: 3,
        },
        {
            id: "22",
            image: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/b/d/bdfa052KINAD00000419_1.jpg?rnd=20200526195200&tr=w-1080",
            title: "Zipper Collar Linen White Hoodie - Cocoon",
            price: 2200,
            rating: 5,
        },
        {
            id: "23",
            image: "https://cdn.shopify.com/s/files/1/0567/5106/3210/files/KOW-JG01-R-0076-32_2_350x.jpg?v:1711790255s",
            title: "Drawstring Rib Waist White Jogger Pants - Voyager",
            price: 1550,
            rating: 5,
        },
        {
            id: "24",
            image: "https://eridani.in/cdn/shop/products/385X_1.jpg?v=1710604044&width=1000",
            title: "Gold Kolhapuri Heels",
            price: 229,
            rating: 3,
        },
        {
            id: "25",
            image: "https://kolhapurisaaj.in/3561-home_default/traditional-maharashtrian-kolhapuri-saaj-jav-3-panadi-21-pan.jpg",
            title: "Gold Kolhapuri Saaj",
            price: 970,
            rating: 5,
        },
        {
            id: "26",
            image: "https://www.prerto.com/cdn/shop/products/sidra-468294_720x.jpg?v=1681387967",
            title: "Sidra Jewels",
            price: 13500,
            rating: 5,
        },
        {
            id: "27",
            image: "https://www.prerto.com/cdn/shop/files/sydney-emerald-diamond-necklace_360x.jpg?v:1687261009",
            title: "Sydney Emerald Diamond Necklace",
            price: 5000,
            rating: 3,
        },
        {
            id: "28",
            image: "https://www.tailortrends.in/cdn/shop/products/CREAM_BORDER_1.webp?v:1707282505&width:700",
            title: "CREAM BORDER Design Mens Half Sleeves Cotton Shirts",
            price: 800,
            rating: 5,
        },
        {
            id: "29",
            image: "https://cdn.fcglcdn.com/brainbees/images/products/438x531/15824494a.webp",
            title: "The Wise Owl Lamp",
            price: 850,
            rating: 5,
        },
        {
            id: "30",
            image: "https://cdn.pixelspray.io/v2/black-bread-289bfa/Zu3Ns5/wrkr/t.resize(h:1240,w:1400)/data/pottery-barn/14-july-2022/8358789_4.jpg",
            title: "Bondi Terra Cotta Bud Vase",
            price: 900,
            rating: 3,
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
        </div>
    );
};

export default Page1;
