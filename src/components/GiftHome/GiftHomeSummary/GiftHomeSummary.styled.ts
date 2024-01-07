import styled from 'styled-components';

export const GiftHomeSummaryWrapper = styled.section`
  width: 100%;
  padding-left: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: start;
`;

export const FriendsNumber = styled.p`
  ${({ theme }) => theme.fonts.Body.body_10};
  color: ${({ theme }) => theme.colors.Grayscale.G_09};
`;

export const PinkTitle = styled.span`
  ${({ theme }) => theme.fonts.Heading.heading_01};
  color: ${({ theme }) => theme.colors.Main.Pink.P_06};
`;

export const GiftHomeSummaryTitle = styled.p`
  display: flex;

  ${({ theme }) => theme.fonts.Heading.heading_01};
  color: ${({ theme }) => theme.colors.black};
`;
