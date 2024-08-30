import React from 'react';
import './Instructors.css';
import Ajay from '../About/images/Ajay.png';
import Amrutha from '../About/images/Amrutha.png';
import Rekha from '../About/images/Rekha.png';
import Gayathri from '../About/images/Gayathri.png';
import Chandini from '../About/images/Chandini.png';
import Jishnu from '../About/images/Jishnu.png';
import Divya from '../About/images/Divya.png';
import Ganesh from '../About/images/Ganesh.png';
import Zaid from '../About/images/Zaid.png';
import Varshitha from '../About/images/Varshitha.png';



const Instructors = () => {
    const slides = [
        {
            imgSrc: Ajay,
            title1: "President",
            title2: "A. Ajay",
        },
        {
            imgSrc: Amrutha,
            title1: "Vice President",
            title2: "P. Geyamrutha",
        },
        {
            imgSrc: Varshitha,
            title1: "Secretary",
            title2: "G. Varshitha",
        },
        {
            imgSrc: Ganesh,
            title1: "Treasurer",
            title2: "CH. Ganesh",
        },
        {
            imgSrc: Jishnu,
            title1: "Designer",
            title2: "M. Jishnu Vardhan",
        },
        {
            imgSrc: Rekha,
            title1: "Web Master",
            title2: "K. Sai Rekha",
        },
        {
            imgSrc: Chandini,
            title1: "Web Master",
            title2: "Y. Chandini",
        },
        {
            imgSrc: Gayathri,
            title1: "Event Manager",
            title2: "N. Gayathri",
        },
        {
            imgSrc: Zaid,
            title1: "Event Manager",
            title2: "Mohammed Zaid",
        },
        {
            imgSrc: Divya,
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
                                <img src={slide.imgSrc} className="icard-img-top" alt="..." style={{ width: "300px", height: "300px", borderRadius: "50%", paddingTop: "10px", paddingBottom: "10px" }} />
                                <div className="icard-body">
                                    <h1 className="icard-title" style={{ fontWeight: "bold", letterSpacing: "3px", color: "royalblue" }}>{slide.title1}</h1>
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