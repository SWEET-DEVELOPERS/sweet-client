import styled from 'styled-components';

export const DetailProgressRoomWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
  width: 100%;
  height: 100%;
`;

export const RoomWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter({ direction: 'row' })};
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  gap: 1.5rem;
  margin: 0 2rem;
`;

export const EmptyWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
  height: 100%;
  gap: 1.2rem;
  margin: 0 2rem;
  margin-top: 15.9rem;
`;

export const EmptyText = styled.div`
  ${({ theme: { fonts } }) => fonts.body_10};
  color: ${({ theme: { colors } }) => colors.G_07};
`;
