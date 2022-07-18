import { atom } from 'recoil';

export default atom<number>({
  key: 'current-index',
  default: 0,
});
