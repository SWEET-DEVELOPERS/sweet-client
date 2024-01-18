export type GiftData = {
  giftId: number;
  imageUrl: string;
  name: string;
  cost: number;
  url?: string;
};

export type GiftRankingData = {
  ranking: number;
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

export type TournamentUser = {
  ParticipantsCount: number;
  tournamentDuration: string;
  TotalParticipantsCount: number;
  tournamentStartDate: string;
};
