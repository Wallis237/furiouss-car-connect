
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Home from './Home';

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Just render Home component directly for better UX
    // The below is not needed but kept as a fallback
    if (window.location.pathname === '/') {
      navigate('/', { replace: true });
    }
  }, [navigate]);

  return <Home />;
};

export default Index;
