import { useSuspenseQuery } from '@tanstack/react-query';
import { get } from '../../../apis/client';
import { GiftData } from '../../../types/tournament';

interface TournamentResponse extends Response {
  data: GiftData[];
}

export const TOURNAMENT_BY_ID_QUERY_KEY: string[] = ['tournamentData'];

export const fetchTournamentItem = async (roomId: number): Promise<TournamentResponse> =>
  get(`/gift/tournament/${roomId}`);

const useGetMyPage = ({ roomId }: { roomId: number }) => {
  const { data } = useSuspenseQuery({
    queryKey: [TOURNAMENT_BY_ID_QUERY_KEY, roomId],
    queryFn: () => fetchTournamentItem(roomId),
  });

  console.log(data);
  return data;
};

export default useGetMyPage;
