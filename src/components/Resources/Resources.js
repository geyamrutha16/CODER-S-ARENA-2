import React from 'react';
import './Resources.css';

const Resources = () => {
    return (
        <div>
            <div className="fluid blink-in">
                <h2 className="display-6" style={{ textAlign: "center", marginTop: "100px" }}>Resources</h2>
                <hr style={{ border: '3px solid #4f46e5', margin: '20px 35%', textAlign: "center", width: "30%" }} />
            </div >
            <div className="row">
                <div className="col">
                    <div className="tabs">
                        <div className="tab">
                            <input type="checkbox" id="chck1" />
                            <label className="tab-label" htmlFor="chck1">week 1</label>
                            <div className="tab-content" style={{ padding: "20px" }}>
                                <button className='btn btn-outline-primary' style={{ margin: "20px" }}>DAY 1</button>
                                <button className='btn btn-outline-primary' style={{ margin: "20px" }}>DAY 2</button>
                                <button className='btn btn-outline-primary' style={{ margin: "20px" }}>DAY 3</button>
                                <button className='btn btn-outline-primary' style={{ margin: "20px" }}>DAY 4</button>
                                <button className='btn btn-outline-primary' style={{ margin: "20px" }}>DAY 5</button>
                                <button className='btn btn-outline-primary' style={{ margin: "20px" }}>DAY 6</button>
                                <button className='btn btn-outline-primary' style={{ margin: "20px" }}>DAY 7</button>
                            </div>
                        </div>
                        <div className="tab">
                            <input type="checkbox" id="chck2" />
                            <label className="tab-label" htmlFor="chck2">week 2</label>
                            <div className="tab-content" style={{ padding: "20px" }}>
                                <button className='btn btn-outline-primary' style={{ margin: "20px" }}>DAY 1</button>
                                <button className='btn btn-outline-primary' style={{ margin: "20px" }}>DAY 2</button>
                                <button className='btn btn-outline-primary' style={{ margin: "20px" }}>DAY 3</button>
                                <button className='btn btn-outline-primary' style={{ margin: "20px" }}>DAY 4</button>
                                <button className='btn btn-outline-primary' style={{ margin: "20px" }}>DAY 5</button>
                                <button className='btn btn-outline-primary' style={{ margin: "20px" }}>DAY 6</button>
                                <button className='btn btn-outline-primary' style={{ margin: "20px" }}>DAY 7</button>
                            </div>
                        </div>
                        <div className="tab">
                            <input type="checkbox" id="chck3" />
                            <label className="tab-label" htmlFor="chck3">week 3</label>
                            <div className="tab-content" style={{ padding: "20px" }}>
                                <button className='btn btn-outline-primary' style={{ margin: "20px" }}>DAY 1</button>
                                <button className='btn btn-outline-primary' style={{ margin: "20px" }}>DAY 2</button>
                                <button className='btn btn-outline-primary' style={{ margin: "20px" }}>DAY 3</button>
                                <button className='btn btn-outline-primary' style={{ margin: "20px" }}>DAY 4</button>
                                <button className='btn btn-outline-primary' style={{ margin: "20px" }}>DAY 5</button>
                                <button className='btn btn-outline-primary' style={{ margin: "20px" }}>DAY 6</button>
                                <button className='btn btn-outline-primary' style={{ margin: "20px" }}>DAY 7</button>
                            </div>
                        </div>
                        <div className="tab">
                            <input type="checkbox" id="chck4" />
                            <label className="tab-label" htmlFor="chck4">week 4</label>
                            <div className="tab-content" style={{ padding: "20px" }}>
                                <button className='btn btn-outline-primary' style={{ margin: "20px" }}>DAY 1</button>
                                <button className='btn btn-outline-primary' style={{ margin: "20px" }}>DAY 2</button>
                                <button className='btn btn-outline-primary' style={{ margin: "20px" }}>DAY 3</button>
                                <button className='btn btn-outline-primary' style={{ margin: "20px" }}>DAY 4</button>
                                <button className='btn btn-outline-primary' style={{ margin: "20px" }}>DAY 5</button>
                                <button className='btn btn-outline-primary' style={{ margin: "20px" }}>DAY 6</button>
                                <button className='btn btn-outline-primary' style={{ margin: "20px" }}>DAY 7</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resources;


/* import React, { useState } from 'react';
import './Resources.css'; // Import the CSS file for styling

const resources = [
    { name: 'Resource 1', details: 'Details about Resource 1' },
    { name: 'Resource 2', details: 'Details about Resource 2' },
    { name: 'Resource 3', details: 'Details about Resource 3' },
    { name: 'Resource 1', details: 'Details about Resource 1' },
    { name: 'Resource 2', details: 'Details about Resource 2' },
    { name: 'Resource 3', details: 'Details about Resource 3' },
    { name: 'Resource 1', details: 'Details about Resource 1' },
    { name: 'Resource 2', details: 'Details about Resource 2' },
    { name: 'Resource 3', details: 'Details about Resource 3' },
    { name: 'Resource 1', details: 'Details about Resource 1' },
    { name: 'Resource 2', details: 'Details about Resource 2' },
    { name: 'Resource 3', details: 'Details about Resource 3' },
    // Add more resources as needed
];

const Resources = () => {
    const [selectedResource, setSelectedResource] = useState(null);

    const handleSelectResource = (index) => {
        setSelectedResource(resources[index]);
    };

    return (
        <div className="resource-container">
            <div className="resource-list">
                <ul>
                    {resources.map((resource, index) => (
                        <li key={index} onClick={() => handleSelectResource(index)}>
                            {resource.name}
                        </li>
                    ))}
                </ul>
            </div>
            {selectedResource && (
                <div key={selectedResource.name} className="resource-details blink-in">
                    <h2>{selectedResource.name}</h2>
                    <p>{selectedResource.details}</p>
                </div>
            )}
        </div>
    );
};

export default Resources;
 */