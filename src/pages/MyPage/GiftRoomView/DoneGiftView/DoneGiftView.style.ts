import styled from 'styled-components';

export const DoneGiftViewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const RoomWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({})};
  margin: 0 2rem;
  width: 100%;
  gap: 1.5rem;
`;

export const NoneRoom = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
  width: 33.5rem;
  height: 13.6rem;
  flex-shrink: 0;
  border-radius: 1rem;
  border: 1px solid ${({ theme: { colors } }) => colors.G_02};

  color: ${({ theme: { colors } }) => colors.G_02};
  ${({ theme: { fonts } }) => fonts.body_10};
`;
