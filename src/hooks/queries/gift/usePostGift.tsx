import { useMutation } from '@tanstack/react-query';
import { post } from '../../../apis/client';
import { GiftPostRequestType } from '../../../types/gift';
import { useNavigate } from 'react-router-dom';

export const postNewGift = async (body: GiftPostRequestType) => {
  post(`/gift`, body);
};

export const usePostGift = (roomId: number, targetDate: string) => {
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: postNewGift,
    onSuccess: () => {
      // console.log('roomId, targetDate', roomId, targetDate);
      navigate(`/add-gift/${roomId}/${targetDate}`);
    },

    onError: () => {
      console.log('선물 등록 에러!!');
    },
  });

  return { mutation };
};

export default usePostGift;
