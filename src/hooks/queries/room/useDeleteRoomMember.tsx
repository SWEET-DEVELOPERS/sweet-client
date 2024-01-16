import { useQuery } from '@tanstack/react-query';
import { del } from '../../../apis/client';
import { RoomMemberType } from '../../../types/member';

interface RoomMemberResponse extends Response {
  data: RoomMemberType;
}

export const MEMBER_DELETE_QUERY_KEY: string[] = ['roomDeleteData'];

const useDeleteRoomMember = (roomId: number, memberId: number) => {
  const fetchMyPage = async (roomId: number, memberId: number): Promise<RoomMemberResponse> =>
    del(`/api/room/${roomId}/members/${memberId}`);

  const { data } = useQuery({
    queryKey: MEMBER_DELETE_QUERY_KEY,
    queryFn: () => fetchMyPage(roomId, memberId),
  });
  return data;
};

export default useDeleteRoomMember;
