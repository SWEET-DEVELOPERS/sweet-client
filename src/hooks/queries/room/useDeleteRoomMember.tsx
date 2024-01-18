import { useMutation, useQueryClient } from '@tanstack/react-query';
import { del } from '../../../apis/client';
import { ROOM_MEMBER_QUERY_KEY } from './useGetRoomMember';

export const MEMBER_DELETE_QUERY_KEY: string[] = ['roomDeleteData'];

interface DeleteRoomMember {
  roomId: number;
  memberId: number;
}

export const deleteRoomMember = async ({ roomId, memberId }: DeleteRoomMember) => {
  await del(`/room/${roomId}/members/${memberId}`);
};

const useDeleteRoomMember = ({ roomId, memberId }: DeleteRoomMember) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationKey: [ROOM_MEMBER_QUERY_KEY[2]],
    mutationFn: () => deleteRoomMember({ roomId, memberId }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [ROOM_MEMBER_QUERY_KEY[2], { roomId, memberId }],
      });
    },
    onError: () => {
      console.log('선물 삭제 중 에러가 발생했습니다.');
    },
  });
  return { mutation };
};

export default useDeleteRoomMember;
