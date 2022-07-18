import { useSearchParams } from 'react-router-dom';
import { commentary } from '../commentary';
import { AnswerType } from '../questions';
import { ResetButton } from './ResetButton';
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
        <div>E - 스킨십 : {getAnswerTypeCount('E')}</div>
      </div>

      <div className='commentary-container'>
        <div className='commentary-type'>첫번째 언어, 인정하는 말</div>
        <div className='commentary'>{commentary.A[0]}</div>
        <div className='commentary-partner-title'>
          파트너의 사랑의 언어가 "인정, 존중"일 경우
        </div>
        <div className='commentary-partner'>{commentary.A[1]}</div>
      </div>

      <div className='commentary-container'>
        <div className='commentary-type'>두번째 언어, 함께하는 시간</div>
        <div className='commentary'>{commentary.B[0]}</div>
        <div className='commentary-partner-title'>
          파트너의 사랑의 언어가 "함께하는 시간"일 경우
        </div>
        <div className='commentary-partner'>{commentary.B[1]}</div>
      </div>

      <div className='commentary-container'>
        <div className='commentary-type'>세번째 언어, 선물</div>
        <div className='commentary'>{commentary.C[0]}</div>
        <div className='commentary-partner-title'>
          파트너의 사랑의 언어가 "선물"일 경우
        </div>
        <div className='commentary-partner'>{commentary.C[1]}</div>
      </div>

      <div className='commentary-container'>
        <div className='commentary-type'>네번째 언어, 봉사</div>
        <div className='commentary'>{commentary.D[0]}</div>
        <div className='commentary-partner-title'>
          파트너의 사랑의 언어가 "봉사"일 경우
        </div>
        <div className='commentary-partner'>{commentary.D[1]}</div>
      </div>

      <div className='commentary-container'>
        <div className='commentary-type'>다섯번째 언어, 스킨십</div>
        <div className='commentary'>{commentary.E[0]}</div>
        <div className='commentary-partner-title'>
          파트너의 사랑의 언어가 "스킨십"일 경우
        </div>
        <div className='commentary-partner'>{commentary.E[1]}</div>
      </div>

      <div>
        <ShareButton />
        <ResetButton />
      </div>
    </div>
  );
}
