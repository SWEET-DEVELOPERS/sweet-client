import { atom } from 'recoil';

export const memberIdState = atom({
  key: 'memberIdState',
  default: 0,
});

export const nickNameState = atom({
  key: 'nickNameState',
  default: '',
});

export const profileImageState = atom({
  key: 'profileImageState',
  default: '',
});
