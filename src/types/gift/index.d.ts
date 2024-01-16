export interface GiftPostRequestType {
  roomId: number;
  url: string;
  name: string;
  cost: number;
  imageUrl: string;
}

export interface GiftType {
  giftId: number;
  imageUrl: string;
  name: string;
  cost: number;
}

export interface MyGiftsType {
  myGiftDtoList: GiftType[];
}
