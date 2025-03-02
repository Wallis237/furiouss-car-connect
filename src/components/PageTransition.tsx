
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PageTransition = () => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState('page-transition-enter');

  useEffect(() => {
    if (location !== displayLocation) {
      setTransitionStage('page-transition-exit');
    }
  }, [location, displayLocation]);

  const handleAnimationEnd = () => {
    if (transitionStage === 'page-transition-exit') {
      setTransitionStage('page-transition-enter');
      setDisplayLocation(location);
    }
  };

  return (
    <div
      className={`page-transition-wrapper ${transitionStage}`}
      onAnimationEnd={handleAnimationEnd}
    >
      <div className="page-transition-content" />
    </div>
  );
};

export default PageTransition;
