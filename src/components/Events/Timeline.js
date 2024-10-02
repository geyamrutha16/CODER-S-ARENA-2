import React, { useEffect, useRef, useState } from 'react';
import ImageGallery from 'react-image-gallery';
import './Timeline.css';
import '../../App.css';
import 'react-image-gallery/styles/css/image-gallery.css';

const Timeline = () => {
    function importAllImages(r) {
        return r.keys().map(r);
    }

    // Import all images from the inauguration folder
    const images_inauguration = importAllImages(require.context('./assets/inauguration', false, /\.(png|jpe?g|svg)$/));
    const images_code_conquer = importAllImages(require.context('./assets/code_conquer', false, /\.(png|jpe?g|svg)$/));
    const images_code_combat = importAllImages(require.context('./assets/code_combat', false, /\.(png|jpe?g|svg)$/));
    const images_bug_busters = importAllImages(require.context('./assets/bug_busters', false, /\.(png|jpe?g|svg)$/));

    const [isGalleryOpen, setIsGalleryOpen] = useState(false);
    const [currentGalleryImages, setCurrentGalleryImages] = useState([]);
    const timelineItemsRef = useRef([]);

    const events = [
        {
            date: "04-10-2024",
            title: "Bug Busters",
            description: "A Debugging competition which test your problem identification and error spotting techniques.!",
            gallery: images_bug_busters
        },
        {
            date: "25-09-2024",
            title: "Code Combat",
            description: "A Quiz competition to learn programming language basic concepts..!",
            gallery: images_code_combat
        },
        {
            date: "13-09-2024",
            title: "Conquer Code",
            description: "A Quiz competition to check your debugging skills..!",
            gallery: images_code_conquer
        },
        {
            date: "30-08-2024",
            title: "Club Inauguration",
            description: "Kickstart Your Coding Journey: Join Us for the Grand Inauguration of the Coder's Club!",
            gallery: images_inauguration
        },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        const elements = timelineItemsRef.current.filter(el => el != null);
        elements.forEach(item => {
            observer.observe(item);
        });

        return () => {
            elements.forEach(item => {
                if (item) observer.unobserve(item);
            });
        };
    }, []);

    const openGallery = (index) => {
        const selectedEventGallery = events[index].gallery.map(image => ({
            original: image,
            thumbnail: image,
        }));
        setCurrentGalleryImages(selectedEventGallery);
        setIsGalleryOpen(true);
    };

    const closeGallery = () => {
        setIsGalleryOpen(false);
    };

    return (
        <>
            <div className={`fluid blink-in ${isGalleryOpen ? 'blur-background' : ''}`}>
                <h2 className="display-6" style={{ textAlign: "center", marginTop: "100px", fontSize: "2rem" }}>Events</h2>
                <hr style={{ border: '3px solid #4f46e5', margin: '20px 35%', textAlign: "center", width: "30%" }} />
            </div>
            <section className={`timeline-section blink-in ${isGalleryOpen ? 'blur-background' : ''}`} style={{ fontSize: "0.7rem" }}>
                <div className="timeline-items">
                    {events.map((event, index) => (
                        <div
                            key={index}
                            className="timeline-item"
                            ref={el => timelineItemsRef.current[index] = el}
                        >
                            <div className="timeline-dot"></div>
                            <div className="timeline-date">{event.date}</div>
                            <div className="timeline-content">
                                <img
                                    className='Timeline-img'
                                    src={event.gallery[0]}
                                    alt={event.title}
                                    onClick={() => openGallery(index)}
                                />
                                <h3 style={{ textAlign: 'center' }}>{event.title}</h3>
                                <p>{event.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Image Gallery Modal */}
            {isGalleryOpen && (
                <div className="image-gallery-modal">
                    <div className="gallery-close" onClick={closeGallery}>X</div>
                    <ImageGallery
                        items={currentGalleryImages}
                        showFullscreenButton={false}
                        showPlayButton={false}
                    />
                </div>
            )}
        </>
    );
};

export default Timeline;



/* import React, { useEffect, useRef } from 'react';
import './Timeline.css';
import '../../App.css';


const Timeline = () => {
    const timelineItemsRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        const elements = timelineItemsRef.current.filter(el => el != null);
        elements.forEach(item => {
            observer.observe(item);
        });

        return () => {
            elements.forEach(item => {
                if (item) observer.unobserve(item);
            });
        };
    }, []);

    const events = [
        { date: "13-09-2024", title: "Conquer Code", description: "A Quiz competition to check your debugging skills..!", img: "https://images.unsplash.com/photo-1615147342761-9238e15d8b96?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80" },
        { date: "30-08-2024", title: "Club Inauguration", description: "Kickstart Your Coding Journey: Join Us for the Grand Inauguration of the Coder's Club!", img: "https://images.unsplash.com/photo-1615147342761-9238e15d8b96?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80" },
    ];

    return (
        <>
            <div className="fluid blink-in">
                <h2 className="display-6" style={{ textAlign: "center", marginTop: "100px", fontSize: "2rem" }}>Events</h2>
                <hr style={{ border: '3px solid #4f46e5', margin: '20px 35%', textAlign: "center", width: "30%" }} />
            </div >
            <section className="timeline-section blink-in" style={{ fontSize: "0.7rem" }}>
                <div className="timeline-items">
                    {events.map((event, index) => (
                        <div
                            key={index}
                            className="timeline-item"
                            ref={el => timelineItemsRef.current[index] = el}
                        >
                            <div className="timeline-dot"></div>
                            <div className="timeline-date">{event.date}</div>
                            <div className="timeline-content">
                                <img
                                    className='Timeline-img'
                                    src={event.img}
                                    alt="brown couch"
                                />
                                <h3>{event.title}</h3>
                                <p>{event.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Timeline;
 */