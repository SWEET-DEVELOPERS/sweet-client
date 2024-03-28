import { useMutation, useQueryClient } from '@tanstack/react-query';
import { post } from '../../../apis/client';

export const MY_TOURNAMENT_QUERY_KEY: string[] = ['myRoomData'];

export const deleteRoom = async (roomId: number): Promise<any> => {
  try {
    const response = await post(`/gift/tournament-end/${roomId}`);
    return response;
  } catch (error) {
    return '중복입니다';
  }
};
export const useDeleteRoom = ({ roomId }: { roomId: number }) => {
  const queryClient = useQueryClient();

  const mutation: any = useMutation({
    mutationFn: deleteRoom,
    onSuccess() {
      console.log('선물 삭제 성공');
      queryClient.invalidateQueries({ queryKey: [MY_TOURNAMENT_QUERY_KEY[0], roomId] });
    },
    onError: (error) => {
      console.log('삭제에러:' + roomId);
      console.log('선물 삭제 중 에러가 발생했습니다.', error.message);
    },
  });

  return { mutation };
};

export default useDeleteRoom;
