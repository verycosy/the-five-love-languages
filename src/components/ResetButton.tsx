import { useNavigate } from 'react-router-dom';
import { useResetRecoilState } from 'recoil';
import answerTypeCountState from '../atoms/answer-type-count';
import currentIndexState from '../atoms/current-index';

export function ResetButton() {
  const resetCurrentIndex = useResetRecoilState(currentIndexState);
  const resetAnswerTypeCount = useResetRecoilState(answerTypeCountState);
  const navigate = useNavigate();

  const reset = () => {
    resetAnswerTypeCount();
    resetCurrentIndex();
    navigate('/');
  };

  return <div onClick={reset}>다시하기</div>;
}
