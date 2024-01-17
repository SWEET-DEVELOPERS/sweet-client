export type GiftData = {
  giftId: number;
  imageUrl: string;
  name: string;
  cost: number;
  url: string;
};

export type TournamentScore = {
  firstGiftId: number;
  secondGiftId: number;
  finalGiftId: number;
};