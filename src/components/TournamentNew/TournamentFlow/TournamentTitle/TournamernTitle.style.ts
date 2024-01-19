import styled from 'styled-components';

export const Title = styled.p`
  ${({ theme }) => theme.fonts.suit};
  font-size: 3.4rem;
  color: ${({ theme }) => theme.colors.P_06};
  text-align: center;
`;

export const SetCount = styled.p`
  margin-bottom: 4rem;
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.G_05};
  ${({ theme }) => theme.fonts.body_02};
  text-align: center;
`;

export const RefreshWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;

  width: 2.4rem;
  margin-bottom: 2rem;
  left: 92%;
`;
