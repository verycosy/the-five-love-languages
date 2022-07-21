import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { GA4 } from '../utils/ga';

export const usePageView = () => {
  const location = useLocation();

  useEffect(() => {
    GA4.pageview(location.pathname);
  }, [location]);
};
