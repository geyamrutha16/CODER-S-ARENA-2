import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';
import Instructors from './Instructors';
import Nav from './Nav';
import '../../App.css';
import image from './dm.svg';
import Footer from './Footer';

const Home = () => {
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

    const missionRef = useRef(null);
    return (
        <>
            <Nav missionRef={missionRef} />
            <div>
                <div className="box blink-in" id='home'>
                    <div className="homebox">
                        <div className="container">
                            <h1 className="display-6" style={{ fontWeight: 'bold', marginLeft: '0.5rem' }}>Inspire. Innovate. Code.</h1>
                            <div className="typewriter" style={{ marginTop: '2.5rem', marginLeft: '0.5rem' }}>
                                <h1 className="display-6"  >
                                    <Typewriter
                                        words={[
                                            "Learn to Code",
                                            "Build Amazing Projects",
                                            "Join Community of Innovators",
                                            "Advance Your Skills",
                                            "Future of Technology"
                                        ]}
                                        loop={true}
                                        cursor
                                        cursorStyle="."
                                        typeSpeed={100}
                                        deleteSpeed={60}
                                        delaySpeed={1000}
                                        style={{ fontSize: '0.7rem' }}
                                    />
                                </h1>
                            </div>
                            <button type="button" id="button" className="btn btn-outline-primary" style={{ marginTop: '3.125rem', marginLeft: '0.5rem' }}>
                                <Link to="/join" onClick={() => { setOpen1(false); handleLinkClick(); }}>Join Now</Link>
                            </button>
                        </div>
                        <div className="container" id="image" style={{
                            marginTop: '1.5rem'
                        }}>
                            <img src={image} style={{ marginTop: '0.2125rem' }} alt='background' />
                        </div>
                    </div>
                </div>
                <h1 className="missionhead" style={{ fontWeight: 'bold', textAlign: "center", paddingTop: "40px", fontSize: "2rem", }}>Our Mission</h1>
                <div className="aboutbox" id="mission" ref={missionRef}>
                    <div className="aboutdes">
                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <div className="card">
                                <div className="cover item-a">
                                    <h1 className='cardh1'>Coder's Arena</h1>
                                    <span className="price">@2024</span>
                                    <div className="card-back">
                                        <Link to="/join" onClick={() => { setOpen1(false); handleLinkClick(); }}>Join Now</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card1">
                            <p className="aboutp">Welcome to <strong>Coder's Arena!</strong> Our mission is to inspire the next
                                generation of tech innovators by providing a platform for students to explore
                                the world of programming. We offer hands-on learning experiences.
                            </p>
                            <p className="card1-footer" style={{ color: 'royalblue' }}>
                                <Typewriter
                                    words={[
                                        "Coder's Club 2024"
                                    ]}
                                    loop={true}
                                    cursor
                                    cursorStyle="."
                                    typeSpeed={100}
                                    deleteSpeed={60}
                                    delaySpeed={1000}
                                />
                            </p>
                        </div>
                    </div>
                </div>
                <Instructors />
                <Footer />
            </div>
        </>
    );
}

export default Home;
