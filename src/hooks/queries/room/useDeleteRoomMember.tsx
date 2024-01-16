import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { del } from '../../../apis/client';
import { RoomMemberType } from '../../../types/member';

interface RoomMemberResponse extends Response {
  data: RoomMemberType;
}

export const MEMBER_DELETE_QUERY_KEY: string[] = ['roomDeleteData'];

const useDeleteRoomMember = (roomId: number, memberId: number) => {
  const fetchMyPage = async (roomId: number, memberId: number): Promise<RoomMemberResponse> =>
    del(`/api/room/${roomId}/members/${memberId}`);
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: () => fetchMyPage(roomId, memberId),
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
