import React, { useState, useEffect } from 'react';
import Loader from './components/Loader/Loader.jsx';

const Home = React.lazy(() => import('./components/Home/Home.jsx'));

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadingPercentage, setLoadingPercentage] = useState(0);

  useEffect(() => {
    let timer = 50;
    const intervalId = setTimeout(() => {
      setLoadingPercentage(loadingPercentage + 1)
    }, timer);
    if (loadingPercentage === 100) {
      setIsLoaded(true)
      clearInterval(intervalId);
    }
  }, [loadingPercentage])

  if (isLoaded) {
    return <Home />
  }
  return <Loader percentage={loadingPercentage} />
}