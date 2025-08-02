import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import SignInPage from './SignInPage';
import RegistrationForm from './RegistrationForm';
import Home from './Home';

// Adjust the path as per your project structure

import Page from './Page';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';
import Page6 from './Page6';
import Page7 from './Page7';
import Page8 from './Page8';
import Page9 from './Page9';
import Page10 from './Page10';
import Page11 from './Page11';
import Page12 from './Page12';
import Page13 from './Page13';
import Page14 from './Page14';
import Page15 from './Page15';

import Cart from './Cart';
import './App.css';
import ProductDetail from "./ProductDetail";
import SocialMediaDetails from './SocialMediaDetails';
import Payment from './Payment';
import AboutUs from './AboutUs';
import ContactPage from './ContactPage';
import BannerSlider from './BannerSlider';

const App = () => {

    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        const existingItem = cartItems.find((item) => item.id === product.id);
        if (existingItem) {
            setCartItems(
                cartItems.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                )
            );
        } else {
            setCartItems([...cartItems, { ...product, quantity: 1 }]);
        }
    };

    const removeFromCart = (product) => {
        setCartItems(cartItems.filter((item) => item.id !== product.id));
    };



    return (

        <Router>

            <div className="App">

                <Routes>

                    <Route path="/signin" element={<SignInPage />} />
                    <Route path="/register" element={<RegistrationForm />} />

                    <Route path="/payment" element={<Payment />} />

                    <Route path="/Page" element={<Page />} />
                    <Route path="/page1" element={<Page1 />} />
                    <Route path="/page2" element={<Page2 />} />
                    <Route path="/page3" element={<Page3 />} />
                    <Route path="/page4" element={<Page4 />} />
                    <Route path="/page5" element={<Page5 />} />
                    <Route path="/page6" element={<Page6 />} />
                    <Route path="/page7" element={<Page7 />} />
                    <Route path="/page8" element={<Page8 />} />
                    <Route path="/page9" element={<Page9 />} />
                    <Route path="/page10" element={<Page10 />} />
                    <Route path="/page11" element={<Page11 />} />
                    <Route path="/page12" element={<Page12 />} />
                    <Route path="/page13" element={<Page13 />} />
                    <Route path="/page14" element={<Page14 />} />
                    <Route path="/page15" element={<Page15 />} />

                    <Route path="/ProductDetail" element={<ProductDetail addToCart={addToCart} />} />
                    <Route path="/Cart" element={<Cart removeFromCart={removeFromCart} />} />
                    <Route path="/AboutUs" element={<AboutUs />} />
                    <Route path="/ContactPage" element={<ContactPage />} />
                    <Route path="/SocialMediaDetails" element={<SocialMediaDetails />} />
                    <Route path="/BannerSlider" element={<BannerSlider />} />
                    <Route
                        path="/*"
                        element={
                            <>
                                <Home />
                            </>
                        }
                    />
                </Routes>
            </div>

        </Router >
    )
};

export default App;
