import React, { useState, useEffect } from 'react';
import './BannerSlider.css';
const BannerSlider = ({ banners }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide(currentSlide === banners.length - 1 ? 0 : currentSlide + 1);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, [currentSlide, banners.length]);

    return (
        <div className="banner-slider">
            {banners.map((banner, index) => (
                <div
                    key={index}
                    className={`slide ${index === currentSlide ? 'active' : ''}`}
                    style={{ backgroundImage: `url(${banner.image})` }}
                >
                    <div className="content">
                        <h2>{banner.title}</h2>
                        <p>{banner.description}</p>
                        {/* Add any additional content you want to display */}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BannerSlider;
