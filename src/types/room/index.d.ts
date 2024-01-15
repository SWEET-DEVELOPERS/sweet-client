export interface RoomInfoType {
  gifterNumber: number;
  gifteeName: string;
  invitationCode: string;
  tournamentStartDate: Date;
  roomMyGiftDtoList: FriendsGiftsType[];
  hotProductGiftDtoList: HotGiftsType[];
}
export interface FriendsGiftsType {
  giftId: number;
  imageUrl: string;
  name: string;
  url: string;
  cost: number;
  ownerName: string;
}

export interface HotGiftsType {
  productId: number;
  imageUrl: string;
  name: string;
  url: string;
  cost: number;
}
