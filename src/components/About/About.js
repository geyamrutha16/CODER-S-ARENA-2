import React from 'react';
import './About.css';
import '../../App.css';
import image1 from './images/tutoring.jpeg';
import image2 from './images/support.jpeg';
import image3 from './images/web.svg';
import image4 from './images/doubts.jpeg';

const About = () => {
    return (
        <>
            <div className="fluid blink-in">
                <h2 className="display-6" style={{ textAlign: "center", marginTop: "6.25rem", fontSize: "2rem" }}>Our Services</h2>
                <hr style={{ border: '0.1875rem solid #4f46e5', margin: '1.25rem 35%', textAlign: "center", width: "30%" }} />
            </div>
            <div className="service blink-in" style={{ fontSize: "0.7rem" }}>
                <div className='service-card'>
                    <img src={image1} alt="Lectures" />
                    <h1 style={{ marginBlock: "0.3125rem", fontWeight: "bold", color: "royalblue" }}>Lectures</h1>
                    <p>"Join us at Coder's Arena for interesting coding sessions designed to boost your skills"</p>
                </div>
                <div className='service-card'>
                    <img src={image2} alt="Coding Support" />
                    <h1 style={{ marginBlock: "0.3125rem", fontWeight: "bold", color: "royalblue" }}>Coding Support</h1>
                    <p>"Our coding support team is here to help you overcome any programming challenges"</p>
                </div>
                <div className='service-card'>
                    <img src={image3} alt="Resources" />
                    <h1 style={{ marginBlock: "0.3125rem", fontWeight: "bold", color: "royalblue" }}>Resources</h1>
                    <p>"Explore a wealth of resources at Coder's Arena, including tutorials and code snippets"</p>
                </div>
                <div className='service-card'>
                    <img src={image4} alt="Doubts Solving Sessions" />
                    <h1 style={{ marginBlock: "0.3125rem", fontWeight: "bold", color: "royalblue" }}>Doubts Solving Sessions</h1>
                    <p>"Got questions? Our doubt-solving sessions at Coder's Arena are here to provide clear answers."</p>
                </div>
            </div>
        </>
    );
};

export default About;
