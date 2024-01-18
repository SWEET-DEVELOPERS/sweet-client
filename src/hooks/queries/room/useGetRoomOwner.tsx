import { useSuspenseQuery } from '@tanstack/react-query';
import { get } from '../../../apis/client';
import { RoomOwnerType } from '../../../types/member';

interface RoomOwnerResponse extends Response {
  data: RoomOwnerType;
}

export const ROOM_OWNER_QUERY_KEY: string[] = ['roomOwnerData'];

const useGetRoomOwner = (roomId: number) => {
  const fetchOwner = async (roomId: number): Promise<RoomOwnerResponse> =>
    get(`/room/${roomId}/room-detail`);

  const { data } = useSuspenseQuery({
    queryKey: [...ROOM_OWNER_QUERY_KEY, roomId],
    queryFn: () => fetchOwner(roomId),
  });
  return data;
};
export default useGetRoomOwner;
