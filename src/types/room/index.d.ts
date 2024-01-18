export interface RoomInfoType {
  gifterNumber: number;
  gifteeName: string;
  invitationCode: string;
  tournamentStartDate: Date;
  roomMyGiftDtoList: FriendsGiftsType[];
  roomFriendsGiftDtoList: friendGiftDtoType[];
  hotProductGiftDtoList: HotGiftsType[];
}

export interface FriendsGiftsInfoType {
  tournamentStartDate: tournamentStartDateType;
  friendGiftDto: friendGiftDtoType[];
}

export interface tournamentStartDateType {
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

export interface FriendsGiftsType {
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
