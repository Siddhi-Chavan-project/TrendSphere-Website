import React from 'react';
import './Page.css';
import Header from './Header';
import ProductDetail from './ProductDetail';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Cart from './Cart';
import iconImage from './icon.jpeg';



const Page14 = () => {
    // Sample products data
    const [product, setProducts] = useState([
        {
            id: 221,
            image: "https://m.media-amazon.com/images/I/71CaINo+3FL._AC_UL600_FMwebp_QL65_.jpg",
            title: "INOVERA (LABEL) Women Handbags Shoulder Hobo Bag Purse With Long Strap",
            price: 1299,
            rating: 5
        },
        {
            id: 222,
            image: "https://m.media-amazon.com/images/I/71RCSsz5T5L._AC_UL600_FMwebp_QL65_.jpg",
            title: "ROSS BROWN Modish Sling Bag for Women/Girls",
            price: 479,
            rating: 5
        },
        {
            id: 223,
            image: "https://m.media-amazon.com/images/I/71cWqvdrocL._AC_UL600_FMwebp_QL65_.jpg",
            title: "EXOTIC Latest Cross Body Sling Bag for Girls/Women",
            price: 499,
            rating: 5
        },
        {
            id: 224,
            image: "https://m.media-amazon.com/images/I/51-+SFrhYFL._AC_UL600_FMwebp_QL65_.jpg",
            title: "Fargo Handbag For Women And Girls COMBO SET OF 5 (Light5pc)",
            price: 487,
            rating: 5
        },
        {
            id: 225,
            image: "https://m.media-amazon.com/images/I/71XarSGYpgL._AC_UL600_FMwebp_QL65_.jpg",
            title: "ADISA women girls laser cut crossbody sling bag with gold chain",
            price: 394,
            rating: 5
        },
        {
            id: 226,
            image: "https://m.media-amazon.com/images/I/61cR9bV-kqL._AC_UL600_FMwebp_QL65_.jpg",
            title: "ELMIRA sling bag for men - one side bags mens and women travel small size",
            price: 647,
            rating: 5
        },
        {
            id: 227,
            image: "https://m.media-amazon.com/images/I/611x1lKgE2L._AC_UL600_FMwebp_QL65_.jpg",
            title: "Arctic Hunter Sling Bag for Men, Cross Body Bag Bag for Men",
            price: 1614,
            rating: 5
        },
        {
            id: 228,
            image: "https://m.media-amazon.com/images/I/71xeGpHlyRL._AC_UL600_FMwebp_QL65_.jpg",
            title: "Arctic Hunter Sling Bag for Men Messenger Bag with 10.9-inch iPad Pocket",
            price: 1994,
            rating: 5
        },
        {
            id: 229,
            image: "https://m.media-amazon.com/images/I/91mx8In-rML._AC_UL600_FMwebp_QL65_.jpg",
            title: "Storite Stylish Padded Nylon Small Sling Cross Body Travel Office Messenger",
            price: 689,
            rating: 5
        },
        {
            id: 230,
            image: "https://m.media-amazon.com/images/I/61Sv-BShAmL._AC_UL600_FMwebp_QL65_.jpg",
            title: "Wesley office Laptop Bag briefcase notebook professional business 15.6 Inch",
            price: 497,
            rating: 5
        },
        {
            id: 231,
            image: "https://m.media-amazon.com/images/I/81cE2Wc2ukL._AC_UL600_FMwebp_QL65_.jpg",
            title: "GOLD SKY Stylish PU Synthetic Leather Men's Sling Bag ",
            price: 495,
            rating: 5
        },
        {
            id: 232,
            image: "https://m.media-amazon.com/images/I/518drdoYsNL._AC_UL600_FMwebp_QL65_.jpg",
            title: "Contacts Men's and Women's Genuine Leather Messenger",
            price: 1896,
            rating: 5
        },
        {
            id: 233,
            image: "https://m.media-amazon.com/images/I/71x55RWrMDL._AC_UL600_FMwebp_QL65_.jpg",
            title: "Lavie Women's Monoprint Raily Plus Tote Bag | Ladies Purse Handbag",
            price: 1887,
            rating: 5
        },
        {
            id: 234,
            image: "https://m.media-amazon.com/images/I/6151MAuWlzL._AC_UL600_FMwebp_QL65_.jpg",
            title: "Lino Perros Women Handbag",
            price: 1486,
            rating: 5
        },
        {
            id: 235,
            image: "https://m.media-amazon.com/images/I/71E+UEvO4yL._AC_UL600_FMwebp_QL65_.jpg",
            title: "EXOTIC Floral hand bag for women",
            price: 1999,
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

export default Page14;
