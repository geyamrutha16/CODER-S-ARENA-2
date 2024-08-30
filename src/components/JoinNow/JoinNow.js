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
                    <h1>Subscribe</h1>
                    <p style={{ textAlign: "center" }}>Subscribe to our newsletter and stay updated.</p>
                </div>
                <div className="form-input">
                    <label htmlFor="email"></label>
                    <input type="email" placeholder="Your Email" />
                    <button className="subscribe-btn">Subscribe</button>
                </div>
            </form>
        </div>
    );

};

export default JoinNow;
{/* <div className="fluid blink-in">
                <h2 className="display-6" style={{ textAlign: "center", marginTop: "100px" }}>Our Services</h2>
                <hr style={{ border: '3px solid #4f46e5', margin: '20px 35%', textAlign: "center", width: "30%" }} />
            </div >
            <div className="service blink-in">
                <div className='service-card'>
                    <h1 style={{ marginBlock: "5px", fontWeight: "bold", color: "royalblue" }}>Lectures</h1>
                    <p>"Join us at Coder's Arena for interesting coding sessions designed to boost your skills"</p>
                </div>
                <div className='service-card'>
                    <h1 style={{ marginBlock: "5px", fontWeight: "bold", color: "royalblue" }}>Coding Support</h1>
                    <p>"Our coding support team is here to help you overcome any programming challenges"</p>
                </div>
                <div className='service-card'>
                    <h1 style={{ marginBlock: "5px", fontWeight: "bold", color: "royalblue" }}>Resources</h1>
                    <p>"Explore a wealth of resources at Coder's Arena, including tutorials and code snippets"</p>
                </div>
                <div className='service-card'>
                    <h1 style={{ marginBlock: "5px", fontWeight: "bold", color: "royalblue" }}>Doubts Solving Sessions</h1>
                    <p>"Got questions? Our doubt-solving sessions at Coder's Arena are here to provide clear answers."</p>
                </div>
            </div>
            <div className="membership_card">
                <div className="membership_card__info">
                    <div className="membership_card__logo">PlasticIsShiny</div>
                    <div className="membership_card__chip">
                        <svg
                            className="membership_card__chip-lines"
                            role="img"
                            width="20px"
                            height="20px"
                            viewBox="0 0 100 100"
                            aria-label="Chip"
                        >
                            <g opacity="0.8">
                                <polyline points="0,50 35,50" fill="none" stroke="#000" strokeWidth="2" />
                                <polyline points="0,20 20,20 35,35" fill="none" stroke="#000" strokeWidth="2" />
                                <polyline points="50,0 50,35" fill="none" stroke="#000" strokeWidth="2" />
                                <polyline points="65,35 80,20 100,20" fill="none" stroke="#000" strokeWidth="2" />
                                <polyline points="100,50 65,50" fill="none" stroke="#000" strokeWidth="2" />
                                <polyline points="35,35 65,35 65,65 35,65 35,35" fill="none" stroke="#000" strokeWidth="2" />
                                <polyline points="0,80 20,80 35,65" fill="none" stroke="#000" strokeWidth="2" />
                                <polyline points="50,100 50,65" fill="none" stroke="#000" strokeWidth="2" />
                                <polyline points="65,65 80,80 100,80" fill="none" stroke="#000" strokeWidth="2" />
                            </g>
                        </svg>
                        <div className="membership_card__chip-texture"></div>
                    </div>
                    <div className="membership_card__type">debit</div>
                    <div className="membership_card__number">
                        <span className="membership_card__digit-group">0000</span>
                        <span className="membership_card__digit-group">0021</span>
                        <span className="membership_card__digit-group">4748</span>
                        <span className="membership_card__digit-group">3647</span>
                    </div>
                    <div className="membership_card__valid-thru" aria-label="Valid thru">
                        Valid
                        <br />
                        thru
                    </div>
                    <div className="membership_card__exp-date">
                        <time dateTime="2038-01">01/38</time>
                    </div>
                    <div className="membership_card__name" aria-label="Dee Stroyer">Dee Stroyer</div>
                    <div className="membership_card__vendor" role="img" aria-labelledby="membership_card-vendor">
                        <span id="membership_card-vendor" className="membership_card__vendor-sr">Mastercard</span>
                    </div>
                </div>
                <div className="membership_card__texture"></div>
            </div>
        </>
    );
};

export default JoinNow; */}
