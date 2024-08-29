import React from "react";
import "./Footer.css"; // Assuming you have placed the CSS in this file

const Footer = () => {
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
                                <form
                                    action="/"
                                    className="f_subscribe_two mailchimp"
                                    method="post"
                                    noValidate
                                >
                                    {/*                                     <input type="text" name="EMAIL" className="form-control memail" placeholder="Email" />
 */}                                    <button className="btn btn_get btn_get_two" type="submit">Join Now..!</button>
                                    <p className="mchimp-errmessage" style={{ display: "none" }}></p>
                                    <p className="mchimp-sucmessage" style={{ display: "none" }}></p>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div
                                className="f_widget about-widget pl_70 wow fadeInLeft"
                                data-wow-delay="0.4s"
                                style={{ visibility: "visible", animationDelay: "0.4s", animationName: "fadeInLeft" }}
                            >
                                <h3 className="f-title f_600 t_color f_size_18">Resources</h3>
                                <ul className="list-unstyled f_list">
                                    <li><a href="/">Java</a></li>
                                    <li><a href="/">Python</a></li>
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
                                    <li><a href="/">Events</a></li>
                                    <li><a href="/">Schedule</a></li>
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
                                    <a href="/"><i className="fa fa-instagram"></i></a>
                                    <a href="/"><i className="fa fa-twitter"></i></a>
                                    <a href="/"><i className="fa fa-linkedin"></i></a>
                                    <a href="/"><i className="fa fa-youtube"></i></a>
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
