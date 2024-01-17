import { useMutation, useQueryClient } from '@tanstack/react-query';
import { del } from '../../../apis/client';

export const MEMBER_DELETE_QUERY_KEY: string[] = ['roomDeleteData'];

interface DeleteRoomMember {
  roomId: number;
  memberId: number;
}

export const deleteRoomMember = async ({ roomId, memberId }: DeleteRoomMember) => {
  await del(`/api/room/${roomId}/members/${memberId}`);
};

const useDeleteRoomMember = ({ roomId, memberId }: DeleteRoomMember) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: () => deleteRoomMember({ roomId, memberId }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: MEMBER_DELETE_QUERY_KEY });
    },
    onError: () => {
      console.log('선물 삭제 중 에러가 발생했습니다.');
    },
  });
  return { mutation };
};

export default useDeleteRoomMember;
