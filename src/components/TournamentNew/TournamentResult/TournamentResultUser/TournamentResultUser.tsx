import styled from 'styled-components';
import { useCountDown } from '../../../../hooks/useCountDown';
import { TournamentUser } from '../../../../types/tournament';

interface TournamentResultUserProps {
  memberData: TournamentUser;
}

const TournamentResultUser = ({ memberData }: TournamentResultUserProps) => {
  console.log('wtf.', memberData);
  const tournamentUserData = memberData || {};

  const [days, hours, minutes, seconds] = useCountDown(tournamentUserData.tournamentStartDate);
  console.log('Countdown:', hours, 'hours', minutes, 'minutes', seconds, 'seconds');

  console.log(days);

  return (
    <TournamentResultUserWrapper>
      <UserWrapper>
        <User>현재까지 참여자</User>
        <UserCount>
          {tournamentUserData.ParticipantsCount}/{tournamentUserData.TotalParticipantsCount}
        </UserCount>
      </UserWrapper>
      <TimerWrapper>
        <Timer>종료까지 남은 시간</Timer>
        <TimerCount>
          {hours.toString().padStart(2, '0')}:{minutes.toString().padStart(2, '0')}:
          {seconds.toString().padStart(2, '0')}
        </TimerCount>
      </TimerWrapper>
    </TournamentResultUserWrapper>
  );
};

export default TournamentResultUser;

const UserWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const TimerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TournamentResultUserWrapper = styled.div`
  width: 22rem;
  position: relative;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 2.5rem;
`;

const TimerCount = styled.p`
  ${({ theme }) => theme.fonts.body_09};
`;
const UserCount = styled.p`
  ${({ theme }) => theme.fonts.body_09};
`;

const User = styled.p`
  color: ${({ theme }) => theme.colors.G_09};
  ${({ theme }) => theme.fonts.body_10};
`;

const Timer = styled.p`
  color: ${({ theme }) => theme.colors.G_09};
  ${({ theme }) => theme.fonts.body_10};
`;
