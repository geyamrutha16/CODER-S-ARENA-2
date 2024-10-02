import React from 'react';
import './JoinNow.css'
import '../../App.css';

const JoinNow = () => {
    return (
        <div className="wrapper" style={{ marginTop: "10px" }}>
            <form action="#" className="card-content">
                <div className="container">
                    <div className="image">
                        <i className="fas fa-envelope"></i>
                    </div>
                    <h1>Join Now</h1>
                    <p style={{ textAlign: "center" }}> Join Coder's Club Today and Unlock a World of Coding Opportunities! </p>
                </div>
                <div className="form-input">
                    <label htmlFor="email"></label>
                    <input type="email" placeholder="Your Email" />
                    <button className="subscribe-btn"><a href='https://docs.google.com/forms/d/e/1FAIpQLSfrj0W4474i2Js_YAtspGwaxKXzaBLrszzyHR3mLImDNJzHUQ/viewform'>Join Now</a></button>
                </div>
            </form>
        </div>
    );

};

export default JoinNow;
