import { useMutation } from '@tanstack/react-query';
import { del } from '../../../apis/client';

export const deleteMyGift = async (giftId: number) => {
  await del(`/gift/my/${giftId}`);
};

export const useDeleteMyGift = ({ giftId }: { giftId: number }) => {
  const mutation = useMutation({
    mutationFn: deleteMyGift,
    onSuccess: () => {
      console.log('선물 삭제 선물 아이디', giftId);
    },
    onError: () => {
      console.log('선물 삭제 중 에러가 발생했습니다.');
    },
  });

  return { mutation };
};

export default useDeleteMyGift;
