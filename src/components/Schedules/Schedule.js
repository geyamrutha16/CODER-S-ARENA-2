import React, { useState } from 'react';
import './Schedule.css';
import '../../App.css';

const eventsData = {
    "2024-08-30": [{ id: 1, name: "Club Inauguration" }],
    "2024-09-13": [{ id: 2, name: "Conquer Code" }],
    "2024-09-25": [{ id: 3, name: "Code Combat" }],
    "2024-10-04": [{ id: 4, name: "Bug Busters" }],
};

const CalendarComponent = () => {
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
    const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);
    const [selectedDate, setSelectedDate] = useState(null);
    const [events, setEvents] = useState([]);

    const handleYearChange = (e) => {
        setSelectedYear(e.target.value);
    };

    const handleMonthChange = (e) => {
        setSelectedMonth(e.target.value);
    };

    const handleDateClick = (day) => {
        setSelectedDate(day);
        const dateKey = `${selectedYear}-${String(selectedMonth).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        const dayEvents = eventsData[dateKey] || [];
        setEvents(dayEvents);
    };

    const daysInMonth = (year, month) => {
        return new Date(year, month, 0).getDate();
    };

    const hasEvent = (day) => {
        const dateKey = `${selectedYear}-${String(selectedMonth).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        return eventsData.hasOwnProperty(dateKey);
    };

    return (
        <div className="calendar blink-in">
            {/* Section 1: Year and Month Selection */}
            <div className="year-month">
                <h1 className="yearh" style={{ fontWeight: "bold", fontSize: "1rem" }}>Year & Month</h1>
                <div className="select">
                    <h2>Select Year : &nbsp; </h2>
                    <select value={selectedYear} onChange={handleYearChange}
                        style={{
                            padding: '0.1125rem',
                            borderRadius: '0.3125rem',
                            border: '0.0625rem solid #ccc',
                            backgroundColor: '#f9f9f9',
                            fontSize: '1.0875rem',
                            color: '#333',
                        }}>
                        {[2024, 2025].map(year => (
                            <option key={year} value={year}
                                className="custom-option">{year}</option>
                        ))}
                    </select>
                </div>
                <div className="select">
                    <h2>Select Month : &nbsp; </h2>
                    <select value={selectedMonth} onChange={handleMonthChange}
                        style={{
                            padding: '0.1125rem',
                            borderRadius: '0.3125rem',
                            border: '0.0625rem solid #ccc',
                            backgroundColor: '#f9f9f9',
                            fontSize: '1.0875rem',
                            color: '#333',
                        }}>
                        {[...Array(12).keys()].map(month => (
                            <option key={month + 1} value={month + 1}
                                className="custom-option"
                            >{new Date(0, month + 1, 0).toLocaleString('en', { month: 'long' })}</option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="vr" style={{ marginRight: "5rem" }}></div>

            {/* Section 2: Month Display */}
            <div className="card month-display" style={{ paddingLeft: "1rem" }}>
                <h1 className="calhead" style={{ fontWeight: "bold" }}>{new Date(selectedYear, selectedMonth - 1).toLocaleString('en', { month: 'long' })} {selectedYear}</h1>
                <div className="days-grid" style={{ fontSize: "0.7rem" }}>
                    {[...Array(daysInMonth(selectedYear, selectedMonth)).keys()].map(day => (
                        <div
                            key={day + 1}
                            onClick={() => handleDateClick(day + 1)}
                            className={`day ${hasEvent(day + 1) ? 'has-event' : ''}`}
                        >
                            {day + 1}
                        </div>
                    ))}
                </div>
            </div>

            <div className="vr" style={{ marginLeft: "6.25rem" }}></div>

            {/* Section 3: Event Display */}
            <div className="events-display" style={{ paddingLeft: "3.125rem" }}>
                <h1 className="eventsdis" style={{ fontWeight: "bold" }}>
                    Events on {selectedDate ? `${selectedDate} ${new Date(selectedYear, selectedMonth - 1).toLocaleString('en', { month: 'long' })}` : 'Selected Date'}
                </h1>
                {events.length > 0 ? (
                    events.map(event => (
                        <div key={event.id} className="event-item">
                            {event.name}
                        </div>
                    ))
                ) : (
                    <div className="event-item1">Sorry, no events</div>
                )}
            </div>
        </div >
    );
};

export default CalendarComponent;
