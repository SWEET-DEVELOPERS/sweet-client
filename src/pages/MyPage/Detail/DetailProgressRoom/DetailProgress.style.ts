import styled from 'styled-components';

export const DetailProgressRoomWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
  width: 100%;
`;

export const RoomWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({ direction: 'row', justify: 'center' })};
  width: 100%;
  gap: 1.5rem;
  margin: 0 2rem;
`;

export const EmptyText = styled.div`
  ${({ theme: { fonts } }) => fonts.body_10};
  color: ${({ theme: { colors } }) => colors.G_07};
`;
