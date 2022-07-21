import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { GA4 } from '../utils/ga';

export function StartButton() {
  const navigate = useNavigate();

  const start = useCallback(() => {
    navigate('/test');
    GA4.event('start_test');
  }, [navigate]);

  return <div onClick={start}>검사시작</div>;
}
