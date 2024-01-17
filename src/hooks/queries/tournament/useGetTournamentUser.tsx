import { useQuery } from '@tanstack/react-query';
import { get } from '../../../apis/client';
import { TournamentUser } from '../../../types/tournament';

interface TournamentUserResponse extends Response {
  data: TournamentUser[];
}

export const TOURNAMENT_USER_BY_ID_QUERY_KEY: string[] = ['tournamentUserData'];

export const fetchTournamentUser = async (roomId: number): Promise<TournamentUserResponse> =>
  get(`/api/gift/tournament-info/${roomId}`);

const useGetTournamentUser = ({ roomId }: { roomId: number }) => {
  const { data } = useQuery({
    queryKey: [TOURNAMENT_USER_BY_ID_QUERY_KEY, roomId],
    queryFn: () => fetchTournamentUser(roomId),
  });

  console.log(data);
  return data;
};

export default useGetTournamentUser;
