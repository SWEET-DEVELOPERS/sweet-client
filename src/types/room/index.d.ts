export interface RoomInfoType {
  gifterNumber: number;
  gifteeName: string;
  invitationCode: string;
  tournamentStartDate: Date;
  roomMyGiftDtoList: MyGiftsType[];
  roomFriendsGiftDtoList: friendGiftDtoType[];
  hotProductGiftDtoList: HotGiftsType[];
}

export interface FriendsGiftsInfoType {
  roomInfoResponseDto: roomInfoResponseDtoType;
  friendGiftDto: friendGiftDtoType[];
}

export interface roomInfoResponseDtoType {
  gifteeName: string;
  tournamentStartDate: Date;
}

export interface friendGiftDtoType {
  giftId: number;
  imageUrl: string;
  name: string;
  cost: number;
  url: string;
  giftOwner: string;
}

export interface MyGiftsType {
  giftId: number;
  imageUrl: string;
  name: string;
  url: string;
  cost: number;
  // ownerName: string;
}

export interface HotGiftsType {
  productId: number;
  imageUrl: string;
  name: string;
  url: string;
  cost: number;
}
