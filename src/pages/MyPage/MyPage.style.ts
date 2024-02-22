import styled from 'styled-components';
import { MypageBackground } from '../../assets/svg';

export const MyPageWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
  width: 100%;
`;

export const TopImage = styled(MypageBackground)`
  ${({ theme: { mixin } }) => mixin.flexBox({})};
  position: relative;
  width: 100%;
  top: 0rem;
  margin-bottom: 2rem;
`;
export const UserName = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({ align: 'center', justify: 'center' })};

  ${({ theme: { fonts } }) => fonts.heading_03};
  > span {
    color: ${({ theme: { colors } }) => colors.P_06};
  }
`;
export const User = styled.div`
  ${({ theme: { fonts } }) => fonts.heading_01};
  color: ${({ theme: { colors } }) => colors.P_06};
  margin-right: 0.4rem;
`;
export const UserButtonWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({ align: 'center', justify: 'space-between' })};
  width: 100%;
`;
export const UserWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({ align: 'center' })};
  width: 100%;
  gap: 1.2rem;
`;
export const ProfileWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
  position: absolute;

  border-radius: 12px;
  width: 33.5rem;
  height: 14.9rem;
  backdrop-filter: blur(1.5rem);
  border: 1px solid rgba(255, 255, 255, 0.4);
  padding: 0 1.6rem;
  gap: 1.6rem;
  top: 15rem;

  z-index: 8;

  box-shadow: 0rem 0rem 2rem 0rem rgba(220, 180, 180, 0.35);
`;

export const GiftRoomWrapper = styled.div`
  ${({ theme: { mixin } }) =>
    mixin.flexBox({ direction: 'column', align: 'center', justify: 'center' })};
  background-color: white;
  position: relative;
  top: -7rem;
  padding-top: 4rem;
`;

export const NoneText = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
  height: 32.7rem;
  color: ${({ theme: { colors } }) => colors.G_07};
  ${({ theme: { fonts } }) => fonts.body_07};
`;
