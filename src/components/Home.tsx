import { useNavigate } from 'react-router-dom';

export function Home() {
  const navigate = useNavigate();
  return (
    <div>
      사랑의 5가지 언어
      <div onClick={() => navigate('/test')}>검사시작</div>
    </div>
  );
}
