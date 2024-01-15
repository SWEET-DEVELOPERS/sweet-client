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

export type MemberInfoType = {
  nickname: string;
  profileImage: string;
};

export type ClosedRoomType = {
  data: Array<ClosedRoomArrayType>;
};

export type ActiveRoomType = {
  data: Array<ActiveRoomArrayType>;
};

export type ClosedRoomArrayType = {
  roomId: number;
  imageUrl: string;
  gifteeName: string;
  gifterNumber: number;
};

export type ActiveRoomArrayType = {
  roomId: number;
  imageUrl: string;
  gifteeName: string;
  gifterNumber: number;
  tournamentStartDate: Date;
  isOwner: boolean;
};

export type MyPageType = {
  memberInfo: MemberInfoType;
  closedRooms: ClosedRoomType;
  activeRooms: ActiveRoomType;
};
