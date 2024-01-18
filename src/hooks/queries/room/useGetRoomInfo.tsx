import { useSuspenseQuery } from '@tanstack/react-query';
import { get } from '../../../apis/client';
import { RoomInfoType } from '../../../types/room';

export const GET_ROOM_INFO_QUERY_KEY = 'roomInfo';

interface RoomInfoResponse extends Response {
  data: RoomInfoType;
}

export const fetchRoomInfo = async (roomId: number): Promise<RoomInfoResponse> =>
  get(`/room/${roomId}`);

const useGetRoomInfo = ({ roomId }: { roomId: number }) => {
  const { data, isLoading, isError } = useSuspenseQuery({
    queryKey: [GET_ROOM_INFO_QUERY_KEY, roomId],
    queryFn: () => fetchRoomInfo(roomId),
  });
  console.log(data);

  return { data, isLoading, isError };
};

export default useGetRoomInfo;
