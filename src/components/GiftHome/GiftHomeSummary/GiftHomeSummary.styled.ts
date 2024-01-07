import styled from 'styled-components';

export const GiftHomeSummaryWrapper = styled.section`
  width: 100%;
  padding-left: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: start;
`;

export const FriendsNumber = styled.p`
  ${({ theme }) => theme.fonts.body_10};
  color: ${({ theme }) => theme.colors.G_09};
`;

export const PinkTitle = styled.span`
  ${({ theme }) => theme.fonts.heading_01};
  color: ${({ theme }) => theme.colors.P_06};
`;

export const GiftHomeSummaryTitle = styled.p`
  display: flex;

  ${({ theme }) => theme.fonts.heading_01};
  color: ${({ theme }) => theme.colors.black};
`;
