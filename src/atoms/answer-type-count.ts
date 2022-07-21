import { atom } from 'recoil';
import { AnswerType } from '../data/questions';

type AnswerTypeCount = {
  [key in AnswerType]: number;
};

export default atom<AnswerTypeCount>({
  key: 'answer-type-count',
  default: {
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    E: 0,
  },
});
