import React from 'react';
import './Instructors.css';

const Instructors = () => {
    const slides = [
        {
            imgSrc: "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert1.png",
            title1: "President",
            title2: "Card title 1",
        },
        {
            imgSrc: "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert1.png",
            title1: "Vice President",
            title2: "Card title 2",
        },
        {
            imgSrc: "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert1.png",
            title1: "Secretary",
            title2: "Card title 3",
        },
        {
            imgSrc: "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert1.png",
            title1: "Treasurer",
            title2: "Card title 4",
        },
        {
            imgSrc: "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert1.png",
            title1: "Member",
            title2: "Card title 5",
        },
        {
            imgSrc: "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert1.png",
            title1: "Member",
            title2: "Card title 6",
        },
        {
            imgSrc: "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert1.png",
            title1: "Member",
            title2: "Card title 7",
        },
        {
            imgSrc: "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert1.png",
            title1: "Member",
            title2: "Card title 8",
        },
        {
            imgSrc: "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert1.png",
            title1: "Member",
            title2: "Card title 9",
        },
        {
            imgSrc: "https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert1.png",
            title1: "Member",
            title2: "Card title 10",
        }
    ];

    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" style={{ backgroundColor: "#eef9ff", width: "100%" }}>
            <h1 style={{ fontWeight: 'bold', textAlign: "center", paddingTop: "40px", fontSize: "2rem" }}>Our Team</h1>
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
                        <div className="icardbox" >
                            <div className="icard" style={{ height: "20rem", backgroundColor: "white", width: "30rem" }}>
                                <img src={slide.imgSrc} className="icard-img-top" alt="..." style={{ width: "200px", height: "230px", borderRadius: "50%", paddingTop: "10px" }} />
                                <div className="icard-body">
                                    <h1 className="icard-title" style={{ fontWeight: "bold", letterSpacing: "4px" }}>{slide.title1}</h1>
                                    <h1 className="icard-title" style={{ textAlign: "center" }}>{slide.title2}</h1>
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