import React from 'react';
import './Instructors.css';

const Instructors = () => {
    const slides = [
        {
            imgSrc: "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert1.png",
            title1: "President",
            title2: "Ajay",
        },
        {
            imgSrc: "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert1.png",
            title1: "Vice President",
            title2: "Geyamrutha",
        },
        {
            imgSrc: "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert1.png",
            title1: "Secretary",
            title2: "Varshitha",
        },
        {
            imgSrc: "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert1.png",
            title1: "Treasurer",
            title2: "Ganesh",
        },
        {
            imgSrc: "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert1.png",
            title1: "Designer",
            title2: "Jishnu Vardhan",
        },
        {
            imgSrc: "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert1.png",
            title1: "Web Master",
            title2: "Sai Rekha",
        },
        {
            imgSrc: "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert1.png",
            title1: "Web Master",
            title2: "Chandini",
        },
        {
            imgSrc: "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert1.png",
            title1: "Event Manager",
            title2: "Gayathri",
        },
        {
            imgSrc: "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert1.png",
            title1: "Event Manager",
            title2: "Divya",
        },
        {
            imgSrc: "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert1.png",
            title1: "Event Manager",
            title2: "Mohammed Zaid",
        }
    ];

    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" style={{ backgroundColor: "#eef9ff", width: "100%" }}>
            <h1 className="display-5" style={{ fontWeight: 'bold', textAlign: "center", paddingTop: "40px" }}>Our Team</h1>
            <div className="carousel-indicators">
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
                        <div className="cardbox">
                            <div className="card">
                                <img src={slide.imgSrc} className="card-img-top" alt="..." style={{ width: "200px", height: "230px", borderRadius: "50%", paddingTop: "10px" }} />
                                <div className="card-body">
                                    <h1 className="card-title" style={{ fontWeight: "bold", letterSpacing: "4px" }}>{slide.title1}</h1>
                                    <h1 className="card-title" style={{ textAlign: "center" }}>{slide.title2}</h1>
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







