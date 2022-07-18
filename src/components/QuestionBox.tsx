import { useMemo } from 'react';
import { useRecoilValue } from 'recoil';
import currentIndexState from '../atoms/current-index';
import { questions } from '../questions';
import { Choice } from './Choice';

export function QuestionBox() {
  const currentIndex = useRecoilValue(currentIndexState);
  const question = useMemo(() => questions[currentIndex], [currentIndex]);

  if (currentIndex === questions.length) {
    return null;
  }

  return (
    <div className='question-box'>
      <Choice answer={question[0]} />
      <Choice answer={question[1]} />
    </div>
  );
}
