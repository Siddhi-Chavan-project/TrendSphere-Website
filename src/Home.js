import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";
import iconImage from './icon.jpeg';
import banner2 from './banner2.jpeg';
import BannerSlider from './BannerSlider';
import Header from './Header';

const Home = () => {
    const banners = [
        {
            image: 'https://img.freepik.com/premium-vector/big-sale-promotion-sale-banner-template-design_19573-794.jpg',
        },
        {
            image: banner2,

        },
        {
            image: 'https://i.pinimg.com/736x/ff/be/28/ffbe283fbedc1dcbc49f06702f61ea92.jpg',

        },
        {
            image: 'https://t4.ftcdn.net/jpg/03/72/21/29/360_F_372212921_l0wtrUbGY168QTCIRHp1W02ug8CVuWSV.jpg',

        },
    ];







    return (

        <div className="home">
            <div className="home">
                <Header />
                <BannerSlider banners={banners} />
            </div>

            <div className="shop-section">
                <div className="box">
                    <div className="box-content">
                        <h2>Gifts</h2>

                        <div className="box-img" style={{ backgroundImage: "url('https://m.media-amazon.com/images/I/91gOt-mIPEL._AC_UL960_FMwebp_QL65_.jpg')" }}></div>
                        <p> <Link to="/Page">See more</Link></p>
                    </div>
                </div>

                <div className="box">
                    <div className="box-content">
                        <h2>New Arrivals</h2>
                        <div className="box-img" style={{ backgroundImage: "url('https://img.freepik.com/free-vector/new-latest-collection-arrivial-poster-abstract-style_1017-36606.jpg?size=338&ext=jpg&ga=GA1.1.1224184972.1711843200&semt=ais')" }}></div>
                        <p> <Link to="/page1">See more</Link></p>
                    </div>
                </div>
                <div className="box">
                    <div className="box-content">
                        <h2>Furniture</h2>
                        <div className="box-img" style={{ backgroundImage: "url('https://m.media-amazon.com/images/I/714uyLlIrVL._AC_UL600_FMwebp_QL65_.jpg')" }}></div>
                        <p> <Link to="/page2">See more</Link></p>
                    </div>
                </div>

                <div className="box">
                    <div className="box-content">
                        <h2>Electronics</h2>
                        <div className="box-img" style={{ backgroundImage: "url('https://m.media-amazon.com/images/I/61j99uUfXNL._AC_UL600_FMwebp_QL65_.jpg')" }}></div>
                        <p> <Link to="/page3">See more</Link></p>
                    </div>
                </div>
                <div className="box">
                    <div className="box-content">
                        <h2>Beauty Picks</h2>
                        <div className="box-img" style={{ backgroundImage: "url('https://img.freepik.com/free-photo/different-cosmetics-types-scattered-pink-table_23-2148046961.jpg?w=2000')" }}></div>
                        <p> <Link to="/page4">See more</Link></p>
                    </div>
                </div>

                <div className="box">
                    <div className="box-content">
                        <h2>Saree Picks</h2>
                        <div className="box-img" style={{ backgroundImage: "url('https://image.wedmegood.com/resized-nw/700X/wp-content/uploads/2019/07/1568396426_A_R_Wed32.jpg')" }}></div>
                        <p> <Link to="/page5">See more</Link></p>
                    </div>
                </div>
                <div className="box">
                    <div className="box-content">
                        <h2>Jewellery</h2>
                        <div className="box-img" style={{ backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl_7FGXuPbVCVVMIM88MdfqYr1KD9UKiCCzw&usqp=CAU')" }}></div>
                        <p> <Link to="/page6">See more</Link></p>
                    </div>
                </div>

                <div className="box">
                    <div className="box-content">
                        <h2>Fashion Trends</h2>
                        <div className="box-img" style={{ backgroundImage: "url('https://img.freepik.com/free-photo/fashion-studio-image-two-young-women-stylish-casual-spring-outfit-having-fun-show-tongue-bright-trendy-colors-stylish-hairstyle-with-buns-cool-sunglasses-friends-portrait_273443-1142.jpg?w=2000')" }}></div>
                        <p> <Link to="/page7">See more</Link></p>
                    </div>
                </div>
                <div className="box">
                    <div className="box-content">
                        <h2>Footwear</h2>
                        <div className="box-img" style={{ backgroundImage: "url('https://images.pexels.com/photos/6664300/pexels-photo-6664300.png?auto=compress&cs=tinysrgb&dpr=1&w=500')" }}></div>
                        <p> <Link to="/page8">See more</Link></p>
                    </div>
                </div>

                <div className="box">
                    <div className="box-content">
                        <h2>Kids Wear</h2>
                        <div className="box-img" style={{ backgroundImage: "url('https://assets.vogue.in/photos/5f21496663616a15c5d41925/master/w_4050,h_5062,c_limit/AABACUS.jpg')" }}></div>
                        <p> <Link to="/page9">See more</Link></p>
                    </div>
                </div>
                <div className="box">
                    <div className="box-content">
                        <h2>Accessories</h2>
                        <div className="box-img" style={{ backgroundImage: "url('https://media.istockphoto.com/id/539853376/photo/top-view-of-female-trendy-accessories-for-woman.webp?b=1&s=170667a&w=0&k=20&c=VSnoCP_f3nG4j95K7uJmKtvRNkrAlnvtR3uHzWA8DZU=')" }}></div>
                        <p><Link to="/page10">See more</Link></p>
                    </div>
                </div>
                <div className="box">
                    <div className="box-content">
                        <h2>Ethnics</h2>
                        <div className="box-img" style={{ backgroundImage: "url('https://newcdn.kalkifashion.com/media/catalog/product/b/l/blue_embroidered_indo-western_bandi-sg136284_2_.jpg')" }}></div>
                        <p><Link to="/page11">See more</Link></p>
                    </div>
                </div>
                <div className="box">
                    <div className="box-content">
                        <h2>Decor</h2>
                        <div className="box-img" style={{ backgroundImage: "url('https://m.media-amazon.com/images/I/91jSXD7MYfL._AC_UL600_FMwebp_QL65_.jpg')" }}></div>
                        <p><Link to="/page12">See more</Link></p>
                    </div>
                </div>
                <div className="box">
                    <div className="box-content">
                        <h2>Sandals</h2>
                        <div className="box-img" style={{ backgroundImage: "url('https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw40046d99/1_front_750/00454652-01.jpg?sw=300&sh=450')" }}></div>
                        <p> <Link to="/page13">See more</Link></p>
                    </div>
                </div>
                <div className="box">
                    <div className="box-content">
                        <h2>Bags</h2>
                        <div className="box-img" style={{ backgroundImage: "url('https://m.media-amazon.com/images/I/914dfbwItIL._AC_SY400_.jpg')" }}></div>
                        <p><Link to="/page14">See more</Link></p>
                    </div>
                </div>
                <div className="box">
                    <div className="box-content">
                        <h2>Health Care</h2>
                        <div className="box-img" style={{ backgroundImage: "url('https://png.pngtree.com/thumb_back/fh260/background/20210911/pngtree-personal-care-daytime-skin-care-products-pink-background-placement-photography-map-image_851764.jpg')" }}></div>
                        <p> <Link to="/page15">See more</Link></p>
                    </div>
                </div>
            </div>



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
                <img className="header_logo"
                    src={iconImage} />
            </div>
            <div className="foot-panel4">
                <div className="copyright">
                    © 1996-2023, TrendSphere.com
                </div>
            </div>

        </div >
    )
};

export default Home;