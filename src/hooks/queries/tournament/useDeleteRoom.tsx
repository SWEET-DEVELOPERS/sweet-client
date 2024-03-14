import { useMutation, useQueryClient } from '@tanstack/react-query';
import { post } from '../../../apis/client';

export async function deleteMyGift(roomId: number) {
  await post(`/gift/tournament-end/${roomId}`);
}

export const useDeleteRoom = (roomId: number) => {
  const MY_TOURNAMENT_QUERY_KEY: string[] = ['myRoomData'];

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: deleteMyGift,
    onSuccess() {
      console.log('선물 삭제 성공');
      queryClient.invalidateQueries({ queryKey: [MY_TOURNAMENT_QUERY_KEY[0], roomId] });
    },
    onError: (error) => {
      console.log('선물 삭제 중 에러가 발생했습니다.', error.message);
    },
  });

  return { mutation };
};

export default useDeleteRoom;
