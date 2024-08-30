import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css'
import Button from './Button';
import "./Footer.css"; // Assuming you have placed the CSS in this file

const Footer = () => {
    const [Open1, setOpen1] = useState(false);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        if (loading) {
            const timer = setTimeout(() => setLoading(false), 1000);
            return () => clearTimeout(timer);
        }
    }, [loading]);

    const handleLinkClick = () => {
        setLoading(true);
    };
    return (
        <footer className="new_footer_area bg_color">
            <div className="new_footer_top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div
                                className="f_widget company_widget wow fadeInLeft"
                                data-wow-delay="0.2s"
                                style={{ visibility: "visible", animationDelay: "0.2s", animationName: "fadeInLeft" }}
                            >
                                <h3 className="f-title f_600 t_color f_size_18">Get in Touch</h3>
                                <p>Stay ahead and never miss a moment with our club! Join now to get all the latest updates,
                                    exclusive content, and be the first to know about upcoming events.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div
                                className="f_widget about-widget pl_70 wow fadeInLeft"
                                data-wow-delay="0.4s"
                                style={{ visibility: "visible", animationDelay: "0.4s", animationName: "fadeInLeft" }}
                            >
                                <h3 className="f-title f_600 t_color f_size_18" >Resources</h3>
                                <ul className="list-unstyled f_list">
                                    <li><Link to="/resources" onClick={() => { setOpen1(false); handleLinkClick(); }}>Java</Link></li>
                                    <li><Link to="/resources" onClick={() => { setOpen1(false); handleLinkClick(); }}>Python</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div
                                className="f_widget about-widget pl_70 wow fadeInLeft"
                                data-wow-delay="0.6s"
                                style={{ visibility: "visible", animationDelay: "0.6s", animationName: "fadeInLeft" }}
                            >
                                <h3 className="f-title f_600 t_color f_size_18">Updates</h3>
                                <ul className="list-unstyled f_list">
                                    <li><Link to="/events" onClick={() => { setOpen1(false); handleLinkClick(); }}>Events</Link></li>
                                    <li><Link to="/calendar" onClick={() => { setOpen1(false); handleLinkClick(); }}>Calendar</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div
                                className="f_widget social-widget pl_70 wow fadeInLeft"
                                data-wow-delay="0.8s"
                                style={{ visibility: "visible", animationDelay: "0.8s", animationName: "fadeInLeft" }}
                            >
                                <h3 className="f-title f_600 t_color f_size_18">Contact Team</h3>
                                <div className="f_social_icon">
                                    <a href="https://www.instagram.com/necg_codersclub/" target="_blank" rel="noopener noreferrer">
                                        <i className="fa fa-instagram"></i>
                                    </a>
                                    <a href="https://chat.whatsapp.com/GHzoEjdvXp14rE9LClpDCo" target="_blank" rel="noopener noreferrer">
                                        <i className="fa-brands fa-whatsapp"></i>
                                    </a>
                                    <a href="https://www.youtube.com/@necgcodersclub?si=bsJUn9kTBEOB" target="_blank" rel="noopener noreferrer">
                                        <i className="fa fa-youtube"></i>
                                    </a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer_bg">
                    <div className="footer_bg_one"></div>
                    <div className="footer_bg_two"></div>
                </div>
            </div>
            <div className="footer_bottom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-sm-7">
                            <p className="mb-0 f_400">© Coder's Club 2024.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
