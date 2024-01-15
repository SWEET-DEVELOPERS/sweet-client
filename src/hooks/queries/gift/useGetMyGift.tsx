import { useQuery } from '@tanstack/react-query';
import { get } from '../../../apis/client';
import { MyGiftsType } from '../../../types/gift';

interface MyGiftResponse extends Response {
  data: MyGiftsType;
}

export const MY_GIFT_QUERY_KEY: string[] = ['myGiftData'];

export const fetchMyGift = async (roomId: number): Promise<MyGiftResponse> => {
  const response = await get(`/gift/my`);
  return response.data;
};

const useGetMyGift = ({ roomId }: { rooamId: number }) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: [MY_GIFT_QUERY_KEY, roomId],
    queryFn: () => fetchMyGift(roomId),
  });

  return { data, isLoading, isError };
};

export default useGetMyGift;
