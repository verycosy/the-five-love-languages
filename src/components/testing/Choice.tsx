import { useRecoilState, useSetRecoilState } from 'recoil';
import answerTypeCountState from '../../atoms/answer-type-count';
import currentIndexState from '../../atoms/current-index';
import { Answer } from '../../data/questions';

export function Choice({ answer }: Props) {
  const setCurrentIndex = useSetRecoilState(currentIndexState);
  const [answerTypeCount, setAnswerTypeCount] =
    useRecoilState(answerTypeCountState);

  const onClick = () => {
    setAnswerTypeCount({
      ...answerTypeCount,
      [answer.type]: answerTypeCount[answer.type] + 1,
    });
    setCurrentIndex((index) => index + 1);
  };

  return (
    <div className='choice' onClick={onClick}>
      {answer.type}. {answer.text}
    </div>
  );
}

interface Props {
  answer: Answer;
}
