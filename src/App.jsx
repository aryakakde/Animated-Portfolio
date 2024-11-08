import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';
import Page5 from './pages/Page5';
import Page6 from './pages/Page6';
import Page7 from './pages/Page7';
import Page8 from './pages/Page8';
import Page9 from './pages/Page9';
import Page10 from './pages/Page10';

const App = () => {
  const location = useLocation(); // Get the current route path

  // Define routes where Header, Page1, and Page2 should not be visible
  const hidePages = ['/Page9'];

  return (
    <div id="main" className="overflow-hidden">
      {/* Show Header only if current path is not in the hidePages list */}
      {!hidePages.includes(location.pathname) && <Header />}

      {/* Show specific pages conditionally */}
      {!hidePages.includes(location.pathname) && <Page1 />}
      {!hidePages.includes(location.pathname) && <Page2 />}
      {!hidePages.includes(location.pathname) && <Page3 />}
      {!hidePages.includes(location.pathname) && <Page4 />}
      {!hidePages.includes(location.pathname) && <Page5 />}
      {!hidePages.includes(location.pathname) && <Page6 />}
      {!hidePages.includes(location.pathname) && <Page7 />}
      {!hidePages.includes(location.pathname) && <Page8 />}
      {!hidePages.includes(location.pathname) && <Page10 />}
      {!hidePages.includes(location.pathname) && <Page9 />}

      <Routes>
        {/* Define routes for all pages */}
        <Route path="/Page1" element={<Page1 />} />
        <Route path="/Page2" element={<Page2 />} />
        <Route path="/Page3" element={<Page3 />} />
        <Route path="/Page4" element={<Page4 />} />
        <Route path="/Page5" element={<Page5 />} />
        <Route path="/Page6" element={<Page6 />} />
        <Route path="/Page7" element={<Page7 />} />
        <Route path="/Page8" element={<Page8 />} />
        <Route path="/Page9" element={<Page9 />} />
        <Route path="/Page10" element={<Page10 />} />

      </Routes>
    </div>
  );
};

// Wrap the App component in the Router for proper use of useLocation
const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
