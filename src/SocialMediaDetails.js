import React from 'react';

import './SocialMediaDetails.css';

const SocialMediaDetails = () => {
    return (
        <div className="social-media-details">
            <h3>Follow Us</h3>
            <p>Connect with Us on Social Media!
                Stay updated with the latest news, deals, and product launches by following us on social media. Our social media profiles are just a click away!

                Explore Our Social Media Channels:
                Facebook: Connect with us on Facebook for exciting updates, behind-the-scenes content, and exclusive promotions. Follow us

                Twitter: Follow us on Twitter for real-time updates, customer interactions, and engaging conversations. Follow us

                Instagram: Discover our vibrant world on Instagram with stunning visuals, product showcases, and user-generated content. Follow us

                Pinterest: Explore our curated collections, inspiration boards, and lifestyle content on Pinterest. Follow us</p>
            <ul>
                <li>
                    <a href="https://facebook.com">
                        <i className="fab fa-facebook-f"></i>

                    </a>
                </li>
                <li>
                    <a href="https://twitter.com">
                        <i className="fab fa-twitter"></i>
                    </a>
                </li>
                <li>
                    <a href="https://instagram.com">
                        <i className="fab fa-instagram"></i>
                    </a>
                </li>
                <li>
                    <a href="https://pinterest.com">
                        <i className="fab fa-pinterest"></i>
                    </a>
                </li>
            </ul>
            <p>Get Social with Us!
                Following us on social media is more than just staying connected; it's about being part of our online family and experiencing the essence of our brand firsthand. Don't miss out on the excitement - follow us now!</p>
        </div>
    );
};

export default SocialMediaDetails;
