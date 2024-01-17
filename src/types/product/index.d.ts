import { HotGiftsType } from '../room';

export interface HotProductsType {
  data: {
    tournamentStartDate: Date;
    hotProductDtoList: HotGiftsType[];
  };
}
