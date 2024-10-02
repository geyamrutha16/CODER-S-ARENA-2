import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Home/Nav';
import Home from './components/Home/Home';
import About from './components/About/About';
import Calendar from './components/Schedules/Schedule';
import Resources from './components/Resources/Resources';
import Timeline from './components/Events/Timeline';
import Loader from './components/Home/Loaderlogo';
import Join from './components/JoinNow/JoinNow';

const NotFound = () => (
  <div>
    <h1>404 - Not Found</h1>
    <p>The page you are looking for does not exist.</p>
  </div>
);

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay to represent data fetching
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 seconds delay

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
            <Route path="*" element={<NotFound />} /> {/* Updated to show NotFound */}
          </Routes>
        </>
      )}
    </Router>
  );
};

export default App;
