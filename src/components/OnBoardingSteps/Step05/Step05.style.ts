import styled from 'styled-components';

export const SetTournamentDurationWrapper = styled.div`
  ${({ theme }) => theme.mixin.flexCenter({})};
  gap: 1.2rem;
  margin-top: 4.6rem;
`;

export const DetailBox = styled.div`
  ${({ theme }) => theme.mixin.flexBox({ align: 'center', justify: 'space-between' })};
  padding: 2rem;
  width: 100%;
  height: 5.6rem;
  border-radius: 1.2rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.G_02};
`;

export const RadioBox = styled.section`
  ${({ theme }) => theme.mixin.flexBox({ align: 'center', justify: 'space-between' })};
  width: 7.3rem;
  height: 2.4rem;
`;

export const TimeText = styled.p`
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.body_09};
`;

export const TimeOptionsWrapper = styled.div`
  border-radius: 1.2rem;
  border: 1px solid ${({ theme }) => theme.colors.G_02};
`;

export const TimeOptionsWrapper = styled.div`
  border-radius: 1.2rem;
  border: 1px solid ${({ theme }) => theme.colors.G_02};
`;
