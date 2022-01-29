import { React, useState } from 'react';
import Evans from './../images/evans.png'
import './hero.css'

const Hero = () => {

    return <div className='hero'>
        <div className='hero-text'>
            <h1>Become a Renowned <br />Actor</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea deleniti illo culpa iure iusto veniam officia sit, nisi repudiandae quaerat.
            </p>
            <button>Apply Now</button>
        </div>

        <div className='hero-image'>
            <img src={Evans} alt="" className='evans' />
        </div>

    </div>;
};

export default Hero;
