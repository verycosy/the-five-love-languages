import { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import answerTypeCountState from '../atoms/answer-type-count';
import currentIndexState from '../atoms/current-index';
import { questions } from '../data/questions';
import { GA4 } from '../utils/ga';

export function CurrentIndex() {
  const navigate = useNavigate();
  const currentIndex = useRecoilValue(currentIndexState);
  const answerTypeCount = useRecoilValue(answerTypeCountState);
  const totalQuestionLength = useMemo(() => questions.length, []);

  useEffect(() => {
    if (currentIndex === totalQuestionLength) {
      GA4.event('result', answerTypeCount);

      const query = Object.entries(answerTypeCount).reduce(
        (acc, cur) => (acc += `${cur[0]}=${cur[1]}&`),
        ''
      );

      navigate(`/result?${query}`);
    }
  }, [currentIndex, totalQuestionLength, navigate, answerTypeCount]);

  return (
    <div className='index'>
      {currentIndex + 1} / {totalQuestionLength}
    </div>
  );
}
