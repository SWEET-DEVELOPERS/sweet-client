import { HotGiftsType } from '../room';

export interface HotProductsType {
  gifteeName: string;
  tournamentStartDate: Date;
  hotProductDtoList: HotGiftsType[];
}
