import React from "react";
import './Hero.css'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero-image.jpg'
const Hero = () => {
    return(
        <div className="hero">
            <div className="hero-left">
                
                <div>
                    <div className="hero-hand-icon">
                        <p>Crafted with</p>
                    </div>
                    <p>Care for</p>
                    <p1>Memorable moments</p1>
                </div>
                <div className="hero-latest-btn">
                    <div>Latest Collection</div>
                    <img src={arrow_icon} alt="" />
                </div>
            </div>
            <div className="hero-right">
                <img src={hero_image} alt="" />
            </div>
        </div>
    )
}

export default Hero