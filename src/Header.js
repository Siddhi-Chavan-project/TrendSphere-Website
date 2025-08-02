import React, { useState } from 'react'; // Import useState from React
import { Link } from 'react-router-dom';
import './Header.css';
import iconImage from './icon.jpeg';
import cart_icon from './cart_icon.png';
function Header({ count, handleShow }) {
    const [menu, setMenu] = useState("shop");
    return (
        <div className='header'>
            <Link to="/Home">
                <img className="header__logo border" src={iconImage} alt="" />

            </Link>


            <ul className="nav-menu">
                <Link to="/Home"><li key="Home" onClick={() => { setMenu("Home") }}>Home{menu === "Home" ? <hr /> : <></>}</li> </Link>
                <Link to="/page1"><li key="Products" onClick={() => { setMenu("Products") }}>Products{menu === "Products" ? <hr /> : <></>}</li></Link>
                <Link to="/AboutUs"><li key="About" onClick={() => { setMenu("About") }}>About{menu === "About" ? <hr /> : <></>}</li></Link>
                <Link to="/ContactPage"><li key="Contact" onClick={() => { setMenu("Contact") }}>Contact{menu === "Contact" ? <hr /> : <></>}</li></Link>
            </ul>
            <div className="nav-login-cart">
                <button><Link to="/signin"> Login</Link></button>
                <div className='s'> <div onClick={() => handleShow(true)}> <img src={cart_icon} alt="" />
                    <span>     <sup> {count} </sup></span></div>
                </div>
            </div>
        </div >

    );
}

export default Header