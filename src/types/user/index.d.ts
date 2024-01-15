import { Response } from '../types';

export interface DataType {
  userInfo: UserInfoType;
  memberToken: JsonWebTokenType;
}
export interface JsonWebTokenType {
  accessToken: string;
  refreshToken: string;
}

export interface UserInfoType {
  memberId: number;
  socialId: number;
  nickname: string;
  profileImage: string;
}

export interface LoginDataType {

  data: DataType;
}

export type KakaoSignType = {
  method: 'LOGIN' | 'LOGOUT';
};
