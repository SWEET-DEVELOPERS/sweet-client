import styled from 'styled-components';
import MypageImage from '../../../public/svg/mypage_image.svg';

export const Wrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
`;

export const TopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  position: relative;

  width: 37.5rem;
  height: 34rem;
  flex-shrink: 0;

  background-image: url(${MypageImage});
`;
export const UserName = styled.div`
  display: flex;
  align-items: center;

  ${({ theme: { fonts } }) => fonts.heading_03};
  > p {
    ${({ theme: { fonts } }) => fonts.heading_01};
    color: ${({ theme: { colors } }) => colors.P_06};
  }
`;
export const UserButtonWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({ justify: 'space-between' })};
  width: 100%;
`;
export const UserWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({ align: 'center' })};
  width: 100%;
  gap: 1.2rem;
`;
export const ProfileWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};

  border-radius: 12px;
  width: 33.5rem;
  height: 14.9rem;
  backdrop-filter: blur(1.5rem);
  border: 1px solid rgba(255, 255, 255, 0.4);
  padding: 0 1.6rem;
  gap: 1.6rem;

  box-shadow: 0rem 0rem 2rem 0rem rgba(220, 180, 180, 0.35);
`;

export const GiftRoomWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
`;
