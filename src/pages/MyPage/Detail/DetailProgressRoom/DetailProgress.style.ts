import styled from 'styled-components';

export const DetailProgressRoomWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
  width: 100%;
`;

export const RoomWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({})};
  width: 100%;
  gap: 1.5rem;
  margin: 0 2rem;
`;
