import { useMutation, useQueryClient } from '@tanstack/react-query';
import { del } from '../../../apis/client';
import { POST_GIFT_QUERY_KEY } from './usePostGift';

export const deleteMyGift = async (giftId: number) => {
  await del(`/gift/my/${giftId}`);
};

export const useDeleteMyGift = ({ giftId }: { giftId: number }) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: deleteMyGift,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [POST_GIFT_QUERY_KEY[0], giftId] });
    },
    onError: () => {
      console.log('선물 삭제 중 에러가 발생했습니다.');
    },
  });

  return { mutation };
};

export default useDeleteMyGift;
