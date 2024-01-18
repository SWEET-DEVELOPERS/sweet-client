import styled from 'styled-components';
import HomeBackgroundImage from '../../../assets/img/giftroom_bg_final.png';

export const GiftHomeSummaryWrapper = styled.section`
  width: 100%;
  padding-left: 2rem;
  margin-bottom: 2rem;
  margin-top: 5.6rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-image: url(${HomeBackgroundImage});
  background-size: cover;
  background-position-x: right;
  background-repeat: no-repeat;
  width: 100%;
`;

export const FriendsNumber = styled.p`
  margin-bottom: 0.4rem;

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

export const CopyLinkBtnWrapper = styled.div`
  padding: 0.3rem 1rem;
  margin-bottom: 8.8rem;
  margin-top: 1.1rem;

  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 0.4rem;

  border-radius: 1.4rem;
  background-color: ${({ theme }) => theme.colors.G_01};

  cursor: pointer;
`;

export const Caption02Text = styled.span`
  ${({ theme }) => theme.fonts.caption_02};
  color: ${({ theme }) => theme.colors.G_09};
`;

export const Body09Text = styled.span`
  margin-bottom: 0.6rem;

  ${({ theme }) => theme.fonts.body_09};
  color: ${({ theme }) => theme.colors.P_06};
`;
