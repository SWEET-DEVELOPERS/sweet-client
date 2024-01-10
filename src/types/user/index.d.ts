import { Response } from '../types';

export interface JsonWebTokenType {
  accessToken: string;
}

export interface LoginDataType extends Response {
  data: Array;
  userInfo: string[{ memberId: string; nickname: string; profileImage: string }];
  memberToken: JsonWebTokenType;
}

export type KakaoSignType = {
  method: 'LOGIN' | 'LOGOUT';
};
