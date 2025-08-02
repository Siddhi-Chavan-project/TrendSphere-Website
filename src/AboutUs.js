
import React, { useState } from 'react';
import './AboutUs.css';
import iconImage from './icon.jpeg';
import Header from './Header';
function AboutUs() {
    return (
        <><Header />
            <div className="about-us">

                <div className='logo'>
                    <img src={iconImage} width={200} height={100} />
                </div>
                <h1>About Us</h1>
                <p>Welcome to our online store!</p>
                <p>At TrendSphere, we're passionate about providing our customers with the best shopping experience possible. Whether you're looking for the latest fashion trends, high-quality electronics, or unique home decor, we've got you covered.</p>
                <p>Our mission is to offer a wide selection of products at competitive prices, paired with excellent customer service. We strive to make your online shopping experience seamless, enjoyable, and hassle-free.</p>
                <h2>Our Story</h2>
                <p>TrendSphere was founded in 1996 with a simple idea: to create a one-stop destination for all your shopping needs. What started as a small venture has now grown into a thriving online marketplace, serving customers across the globe.</p>
                <p>Over the years, we've built strong relationships with top brands and suppliers to bring you the best products at unbeatable prices. Our dedicated team works tirelessly to curate our inventory, ensuring that every item meets our high standards of quality and value.</p>
                <h2>Why Choose Us?</h2>
                <p>Here are a few reasons why you should choose TrendSphere for your online shopping:</p>
                <ul>
                    <li>Wide Selection: From fashion and beauty to electronics and home goods, we offer a diverse range of products to suit every taste and budget.</li>
                    <li>Competitive Prices: We strive to keep our prices competitive without compromising on quality, so you can shop with confidence.</li>
                    <li>Fast Shipping: We understand that you want your orders delivered promptly, which is why we offer fast and reliable shipping options.</li>
                    <li>Excellent Customer Service: Our friendly and knowledgeable customer support team is here to assist you with any questions or concerns you may have.</li>
                    <li>Secure Checkout: We prioritize the security of your personal information and offer a safe and secure checkout process.</li>
                </ul>
                <p>Thank you for choosing TrendSphere for your online shopping needs. We look forward to serving you!</p>
            </div></>
    );
}

export default AboutUs;
