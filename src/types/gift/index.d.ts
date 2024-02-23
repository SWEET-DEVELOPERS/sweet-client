export interface GiftPostRequestType {
  roomId: number;
  url: string;
  name: string;
  cost: number;
  imageUrl: string;
}

export interface GiftPostResponseType {
  status: number;
  success?: boolean;
  message: string;
}

export interface GiftType {
  giftId: number;
  imageUrl: string;
  name: string;
  cost: number;
}

export interface myGiftsResponseDtoType {
  myGiftDtoList: GiftType[];
}

export interface MyGiftsType {
  gifteeName: string;
  myGiftsResponseDto: myGiftsResponseDtoType;
}
export interface AddGiftInfo {
  name: name;
  cost: cost;
  imageUrl: imageUrl;
  url: link;
}
