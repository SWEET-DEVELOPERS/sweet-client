import styled from 'styled-components';

export const WholeWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({ direction: 'column' })};
  flex-shrink: 0;
  z-index: 0;
`;

export const RoomImgWrapper = styled.img`
  ${({ theme: { mixin } }) => mixin.flexBox({})};
  width: 100%;
  height: 16rem;
  overflow: hidden;
  object-fit: cover;
`;

export const CardRoomWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({ direction: 'column' })};

  width: 16rem;
  height: 27.5rem;

  border-radius: 1.2rem;

  border: 1px solid ${({ theme: { colors } }) => colors.G_02};
  background-color: ${({ theme: { colors } }) => colors.white};

  img {
    width: 100%;
    border-radius: 1.2rem 1.2rem 0 0;
  }
`;

export const Text = styled.div`
  ${({ theme: { fonts } }) => fonts.body_09};
  margin: 0 1.2rem;
  margin-top: 1rem;
`;

interface UserProps {
  multiline: boolean;
}
export const User = styled.div<UserProps>`
  ${({ theme: { fonts } }) => fonts.body_09};
  ${({ multiline }) =>
    multiline &&
    `
    display: block;
    white-space: pre-wrap;
  `}
`;

export const CountUser = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({ align: 'center' })};
  ${({ theme: { fonts } }) => fonts.caption_01};
  color: ${({ theme: { colors } }) => colors.G_07};
  margin: 0 1.2rem;
  margin-top: 0.4rem;
`;

export const TagWrapper = styled.div`
  display: flex;
  margin: 0 1.2rem;
  margin-top: 1rem;
  gap: 0.4rem;
`;

export const SettingWrapper = styled.div`
  position: relative;
  width: fit-content;
  height: fit-content;
  left: 13rem;
  top: -27.5rem;
  z-index: 999;
  margin-top: 0.8rem;
  cursor: pointer;
`;
