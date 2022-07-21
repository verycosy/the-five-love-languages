import { GA4 } from '../../utils/ga';

export function ShareButton() {
  const share = async () => {
    const url = window.location.href;

    if (window.navigator.share) {
      window.navigator.share({
        url,
        title: '사랑의 5가지 언어 테스트',
        text: '당신의 사랑의 언어는?',
      });
    } else {
      await window.navigator.clipboard.writeText(url);
      alert('주소가 복사되었습니다.');
    }

    GA4.event('share');
  };

  return (
    <div onClick={share} className='button'>
      공유하기
    </div>
  );
}
