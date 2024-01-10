import { Response } from '../types';

export interface JsonWebTokenType {
  accessToken: string;
}

export interface LoginDataType extends Response {
  data: JsonWebTokenType;
}

export type KakaoSignType = {
  method: 'LOGIN' | 'LOGOUT';
};
