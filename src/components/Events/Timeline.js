import React, { useEffect, useRef } from 'react';
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
        { date: "2015", title: "timeline item title", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
        { date: "2016", title: "timeline item title", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
        { date: "2017", title: "timeline item title", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
        { date: "2018", title: "timeline item title", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
        { date: "2019", title: "timeline item title", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
        { date: "2020", title: "timeline item title", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
        { date: "2021", title: "timeline item title", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    ];

    return (
        <>
            <div className="fluid blink-in">
                <h2 className="display-6" style={{ textAlign: "center", marginTop: "100px" }}>Events</h2>
                <hr style={{ border: '3px solid #4f46e5', margin: '20px 35%', textAlign: "center", width: "30%" }} />
            </div >
            <section className="timeline-section blink-in">
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
