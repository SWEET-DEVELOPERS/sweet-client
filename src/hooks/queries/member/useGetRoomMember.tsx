import { useQuery } from '@tanstack/react-query';
import { get } from '../../../apis/client';
import { RoomMemberType } from '../../../types/user';

interface RoomMemberResponse extends Response {
  data: RoomMemberType;
}

export const ROOM_MEMBER_QUERY_KEY: string[] = ['roomMemberData'];

const useGetRoomMember = (roomId: number) => {
  const fetchMyPage = async (roomId: number): Promise<RoomMemberResponse> =>
    get(`/room/${roomId}/members`);

  const { data } = useQuery({
    queryKey: ROOM_MEMBER_QUERY_KEY,
    queryFn: () => fetchMyPage(roomId),
  });
  return data;
};

export default useGetRoomMember;
