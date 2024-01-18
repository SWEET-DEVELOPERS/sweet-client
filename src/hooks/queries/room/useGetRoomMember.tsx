import { useSuspenseQuery } from '@tanstack/react-query';
import { get } from '../../../apis/client';
import { RoomMemberType } from '../../../types/member';

interface RoomMemberResponse extends Response {
  data: RoomMemberType;
}

export const ROOM_MEMBER_QUERY_KEY: string[] = ['roomMemberData'];

const useGetRoomMember = (roomId: number) => {
  const fetchMember = async (roomId: number): Promise<RoomMemberResponse> =>
    get(`/room/${roomId}/members`);

  const { data } = useSuspenseQuery({
    queryKey: [ROOM_MEMBER_QUERY_KEY[0], roomId],
    queryFn: () => fetchMember(roomId),
  });
  return data;
};
export default useGetRoomMember;
