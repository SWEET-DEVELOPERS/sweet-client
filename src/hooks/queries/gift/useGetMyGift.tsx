import { useQueryClient, useSuspenseQuery } from '@tanstack/react-query';
import { get } from '../../../apis/client';
import { MyGiftsType } from '../../../types/gift';

interface MyGiftResponse extends Response {
  data: MyGiftsType;
}

export const MY_GIFT_QUERY_KEY: string[] = ['myGiftData'];

export const getMyGift = async (roomId: number): Promise<MyGiftResponse> => {
  return get(`/gift/my/${roomId}`);
};

export const useGetMyGift = ({ roomId }: { roomId: number }) => {
  const { data, isLoading, isError } = useSuspenseQuery({
    queryKey: [MY_GIFT_QUERY_KEY[0], roomId],
    queryFn: () => getMyGift(roomId),
  });

  return { data, isLoading, isError };
};

export default useGetMyGift;
