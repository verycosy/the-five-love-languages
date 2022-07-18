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
  };

  return <div onClick={share}>공유</div>;
}
