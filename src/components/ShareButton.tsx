import { GA4 } from '../utils/ga';

export function ShareButton() {
  const share = () => {
    if (window.navigator.share) {
      window.navigator.share({
        url: window.location.href,
        title: '사랑의 5가지 언어 테스트',
        text: '당신의 사랑의 언어는?',
      });
    } else {
      // copy url
    }

    GA4.event('share');
  };

  return (
    <div onClick={share} className='button'>
      공유하기
    </div>
  );
}
