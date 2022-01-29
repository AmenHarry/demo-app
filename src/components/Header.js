import React from 'react';
import { FiActivity, FiAlignCenter } from "react-icons/fi";
import { Link } from "react-router-dom";
import './../App.css';
import './header.css'

const Header = ({ nav, buttonHandler }) => {
    return <div className='header'>
        <i><FiActivity size='4rem' /></i>
        <ul className='links'>
            <Link to='./Services' className='lii'>Services</Link>
            <li onClick={buttonHandler}>Courses <div className={nav ? 'nav show' : 'nav'}>
                <ul>
                    <li>Accents</li>
                    <li>Facial Emotion Training</li>
                    <li>Scripts</li>
                    <li>Improvisation</li>
                </ul>
            </div></li>

            <Link to='./Contact' className='lii'>Contact</Link>
        </ul>

        <i><FiAlignCenter size='2rem' className='menu' /></i>


    </div>;
};

export default Header;
