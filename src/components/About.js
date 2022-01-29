import React from 'react';
import Hemsworth from './../images/hemsworth.png'
import './about.css'

const About = () => {
    return <div className='about'>

        <div className='about-image'>
            <img src={Hemsworth} alt="Chris Hemsworth" className='hemsworth' />
        </div>
        <div className='about-content'>
            <div><div className='line'></div><h2>What We Do</h2></div>
            <div className='card'>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio culpa quam accusamus iure esse natus. Beatae voluptatibus necessitatibus quibusdam nemo accusantium, officia veritatis assumenda sunt praesentium repellendus et quisquam nisi. Quos provident ad non laborum quisquam blanditiis dignissimos optio ab, id minus harum minima at, debitis, rerum nihil odit! At.</p>
            </div> <div className='card'>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio culpa quam accusamus iure esse natus. Beatae voluptatibus necessitatibus quibusdam nemo accusantium, officia veritatis assumenda sunt praesentium repellendus et quisquam nisi. Quos provident ad non laborum quisquam blanditiis dignissimos optio ab, id minus harum minima at, debitis, rerum nihil odit! At.</p>
            </div> <div className='card'>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio culpa quam accusamus iure esse natus. Beatae voluptatibus necessitatibus quibusdam nemo accusantium, officia veritatis assumenda sunt praesentium repellendus et quisquam nisi. Quos provident ad non laborum quisquam blanditiis dignissimos optio ab, id minus harum minima at, debitis, rerum nihil odit! At.</p>
            </div> <div className='card'>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio culpa quam accusamus iure esse natus. Beatae voluptatibus necessitatibus quibusdam nemo accusantium, officia veritatis assumenda sunt praesentium repellendus et quisquam nisi. Quos provident ad non laborum quisquam blanditiis dignissimos optio ab, id minus harum minima at, debitis, rerum nihil odit! At.</p>
            </div>

        </div>



    </div>;
};

export default About;
