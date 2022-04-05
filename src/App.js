import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Loader from './components/Loader/Loader.jsx';
import Home from './components/Home/Home.jsx';
import Header from './components/Header/Header.jsx';

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadingPercentage, setLoadingPercentage] = useState(0);

  useEffect(() => {
    let timer = 5;
    const intervalId = setTimeout(() => {
      setLoadingPercentage(loadingPercentage + 1)
    }, timer);
    if (loadingPercentage === 100) {
      setIsLoaded(true)
      clearInterval(intervalId);
    }
  }, [loadingPercentage])

  if (isLoaded) {
    return (
      <>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>  
      </>
    )
  }
  return <Loader percentage={loadingPercentage} />
}