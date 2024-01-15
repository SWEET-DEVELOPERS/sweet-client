import { useQuery } from '@tanstack/react-query';
import { get } from '../../../apis/client';
import { RoomInfoType } from '../../../types/room';

export const GET_ROOM_INFO_QUERY_KEY = 'roomInfo';

interface RoomInfoResponse extends Response {
  data: RoomInfoType;
}

export const fetchRoomInfo = (roomId: number): Promise<RoomInfoResponse> => get(`/room/${roomId}`);

export function useGetRoomInfo({ roomId }: { roomId: number }) {
  const { data, isLoading } = useQuery(
    [GET_ROOM_INFO_QUERY_KEY, roomId],
    () => fetchRoomInfo(roomId).then((res) => res.data),
    { enabled: Boolean(roomId) },
  );

  return { data, isLoading };
}
