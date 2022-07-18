import { useSearchParams } from 'react-router-dom';
import { AnswerType } from '../questions';
import { ShareButton } from './ShareButton';

export function Result() {
  const [searchParams] = useSearchParams();

  const getAnswerTypeCount = (type: AnswerType) => {
    return searchParams.get(type);
  };

  return (
    <div>
      <div>
        <div>A - 인정하는 말 : {getAnswerTypeCount('A')}</div>
        <div>B - 함께하는 시간 : {getAnswerTypeCount('B')}</div>
        <div>C - 선물 : {getAnswerTypeCount('C')}</div>
        <div>D - 봉사 : {getAnswerTypeCount('D')}</div>
        <div>E - 스킨쉽 : {getAnswerTypeCount('E')}</div>
      </div>

      <ShareButton />
    </div>
  );
}
