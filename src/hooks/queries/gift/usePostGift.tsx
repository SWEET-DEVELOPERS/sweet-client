import { useMutation, useQueryClient } from '@tanstack/react-query';
import { post } from '../../../apis/client';
import { GiftPostRequestType } from '../../../types/gift';
import { useNavigate } from 'react-router-dom';
import { MY_GIFT_QUERY_KEY } from './useGetMyGift';

export async function postNewGift(body: GiftPostRequestType) {
  await post(`/gift`, body);
}

export const usePostGift = (
  roomId: number,
  targetDate: string,
  setStep: React.Dispatch<React.SetStateAction<number>>,
) => {
  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: postNewGift,
    onSuccess: (data) => {
      console.log('선물 등록 성공!!');
      queryClient.setQueryData([MY_GIFT_QUERY_KEY[0], roomId], data);
      navigate(`/add-gift/${roomId}/${targetDate}`);
      setStep(0);
    },
    onError: (error) => {
      console.log('선물 등록 에러!!', error.message);
    },
  });

  return { mutation };
};

export default usePostGift;
