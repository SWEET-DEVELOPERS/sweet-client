import { useMutation, useQueryClient } from '@tanstack/react-query';
import { post } from '../../../apis/client';
import { AddGiftInfo, GiftPostRequestType } from '../../../types/gift';
import { useNavigate } from 'react-router-dom';
import { MY_GIFT_QUERY_KEY } from './useGetMyGift';

export const postNewGift = async (body: GiftPostRequestType) => {
  try {
    const response = await post(`/gift`, body);
    console.log('response data', response.data);
    return response.data;
  } catch (error: any) {
    console.log('확인확인', error.message);
    if (error.message === '중복된 선물 등록입니다.') {
      console.log('들어와~', error);
      throw new Error(`${error}`);
    }
  }
};

export const usePostGift = (
  roomId: number,
  targetDate: string,
  setStep: React.Dispatch<React.SetStateAction<number>>,
  updateAddGiftInfo: (newInfo: Partial<AddGiftInfo>) => void,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: postNewGift,
    onSuccess: () => {
      console.log('선물 등록 성공!!');
      queryClient.invalidateQueries({ queryKey: [MY_GIFT_QUERY_KEY[0], roomId] });
      navigate(`/add-gift/${roomId}/${targetDate}`);
      setStep(0);
      setIsLoading(false);
      updateAddGiftInfo({ name: '', cost: 0, imageUrl: '', url: '' });
    },
    onError: (error) => {
      console.log('선물 등록 에러!!', error.message);
      if (error.message === 'Error: 중복된 선물 등록입니다.') {
        console.log('잘 들어오고 있닝');
        // setIsModalOpen((prev) => !prev);
        return error;
      }
    },
  });

  return { mutation };
};

export default usePostGift;
