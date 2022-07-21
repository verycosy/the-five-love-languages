import { useNavigate } from 'react-router-dom';
import { useResetRecoilState } from 'recoil';
import answerTypeCountState from '../atoms/answer-type-count';
import currentIndexState from '../atoms/current-index';
import { GA4 } from '../utils/ga';

export function ResetButton() {
  const resetCurrentIndex = useResetRecoilState(currentIndexState);
  const resetAnswerTypeCount = useResetRecoilState(answerTypeCountState);
  const navigate = useNavigate();

  const reset = () => {
    resetAnswerTypeCount();
    resetCurrentIndex();
    navigate('/');
    GA4.event('retry_test');
  };

  return (
    <div onClick={reset} className='button'>
      다시하기
    </div>
  );
}
