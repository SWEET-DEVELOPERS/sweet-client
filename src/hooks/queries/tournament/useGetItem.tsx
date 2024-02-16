import { AxiosError } from 'axios';
import { useQuery } from '@tanstack/react-query';
import { get } from '../../../apis/client';
import { GiftData } from '../../../types/tournament';

interface TournamentResponse extends Response {
  data: GiftData[];
}

export const TOURNAMENT_BY_ID_QUERY_KEY: string[] = ['tournamentData'];

export const fetchTournamentItem = async (roomId: number): Promise<TournamentResponse> =>
  get(`/gift/tournament/${roomId}`);

const useGetItem = ({ roomId }: { roomId: number }) => {
  const { data, error } = useQuery({
    queryKey: [TOURNAMENT_BY_ID_QUERY_KEY, roomId],
    queryFn: () => fetchTournamentItem(roomId),
  });

  if (error instanceof AxiosError) {
    console.log(error.message);
    return '중복입니다';
  }

  console.log(data);
  return data;
};

export default useGetItem;
