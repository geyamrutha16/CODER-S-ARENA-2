import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Nav from './components/Home/Nav';
import Home from './components/Home/Home';
import About from './components/About/About';
import Calendar from './components/Schedules/Schedule';
import Resources from './components/Resources/Resources';
import Timeline from './components/Events/Timeline';
import Loader from './components/Home/Loaderlogo';
import Join from './components/JoinNow/JoinNow';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay to represent data fetching
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 2 seconds delay

    // Clean up the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/events" element={<Timeline />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/join" element={<Join />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </>
      )}
    </Router>
  );
};

export default App;
