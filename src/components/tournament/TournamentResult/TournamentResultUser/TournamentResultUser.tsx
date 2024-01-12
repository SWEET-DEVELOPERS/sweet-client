import styled from 'styled-components';
const TournamentResultUser = () => {
  const user = 4;
  const totalUser = 8;
  return (
    <TournamentResultUserWrapper>
      <UserWrapper>
        <User>현재까지 참여자</User>
        <UserCount>
          {user}/{totalUser}
        </UserCount>
      </UserWrapper>
      <TimerWrapper>
        <Timer>종료까지 남은 시간</Timer>
        <TimerCount>00:31:40</TimerCount>
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
