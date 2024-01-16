export type GiftData = {
  giftId: number;
  imageUrl: string;
  name: string;
  cost: number;
  url: string;
};

export type TournamentScore = {
  firstPlaceGiftId: number;
  secondPlaceGiftId: number;
  // PlaceGiftId: number;
};