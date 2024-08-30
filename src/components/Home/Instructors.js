import React from 'react';
import './Instructors.css';
import Ajay from '../About/images/Ajay.jpeg';

const Instructors = () => {
    const slides = [
        {
            imgSrc: Ajay,
            title1: "President",
            title2: "A. Ajay",
        },
        {
            imgSrc: "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert1.png",
            title1: "Vice President",
            title2: "P. Geyamrutha",
        },
        {
            imgSrc: "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert1.png",
            title1: "Secretary",
            title2: "G. Varshitha",
        },
        {
            imgSrc: "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert1.png",
            title1: "Treasurer",
            title2: "CH. Ganesh",
        },
        {
            imgSrc: "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert1.png",
            title1: "Designer",
            title2: "M. Jishnu Vardhan",
        },
        {
            imgSrc: "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert1.png",
            title1: "Web Master",
            title2: "K. Sai Rekha",
        },
        {
            imgSrc: "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert1.png",
            title1: "Web Master",
            title2: "Y. Chandini",
        },
        {
            imgSrc: "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert1.png",
            title1: "Event Manager",
            title2: "N. Gayathri",
        },
        {
            imgSrc: "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert1.png",
            title1: "Event Manager",
            title2: "Mohammed Zaid",
        },
        {
            imgSrc: "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert1.png",
            title1: "Event Manager",
            title2: "N. Divya",
        }
    ];

    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" style={{ backgroundColor: "#eef9ff", width: "100%" }}>
            <h1 style={{ fontWeight: 'bold', textAlign: "center", paddingTop: "40px", fontSize: "2rem" }}>Our Team</h1>
            <div className="carousel-indicators"
                style={{ marginTop: "20px" }}>
                {slides.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to={index}
                        className={index === 0 ? "active" : ""}
                        aria-current={index === 0 ? "true" : "false"}
                        aria-label={`Slide ${index + 1}`}
                    ></button>
                ))}
            </div>
            <div className="carousel-inner">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`carousel-item ${index === 0 ? "active" : ""}`}
                        data-bs-interval="3000"
                        style={{ width: '500px', height: "auto" }}
                    >
                        <div className="icardbox" >
                            <div className="icard">
                                <img src={slide.imgSrc} className="icard-img-top" alt="..." style={{ width: "300px", height: "300px", borderRadius: "50%", paddingTop: "10px" }} />
                                <div className="icard-body">
                                    <h1 className="icard-title" style={{ fontWeight: "bold", letterSpacing: "4px" }}>{slide.title1}</h1>
                                    <h1 className="icard-title" style={{ textAlign: "center", marginBlock: "1rem" }}>{slide.title2}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default Instructors;