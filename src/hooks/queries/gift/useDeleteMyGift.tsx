import { useMutation, useQueryClient } from '@tanstack/react-query';
import { del } from '../../../apis/client';
import { MY_GIFT_QUERY_KEY } from './useGetMyGift';

export async function deleteMyGift(giftId: number) {
  await del(`/gift/my/${giftId}`);
}

export const useDeleteMyGift = (roomId: number) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: deleteMyGift,
    onSuccess() {
      console.log('선물 삭제 성공');
      queryClient.invalidateQueries({ queryKey: [MY_GIFT_QUERY_KEY[0], roomId] });
    },
    onError: (error) => {
      console.log('선물 삭제 중 에러가 발생했습니다.', error.message);
    },
  });

  return { mutation };
};

export default useDeleteMyGift;
