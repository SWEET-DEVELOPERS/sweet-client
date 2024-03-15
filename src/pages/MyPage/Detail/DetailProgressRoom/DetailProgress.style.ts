import styled from 'styled-components';

export const DetailProgressRoomWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
  width: 100%;
  height: 100vh;
  padding: 0 2rem;
`;

export const RoomWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({})};
  position: relative;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  top: 5rem;
  gap: 1.5rem;
  padding: 1.6rem 0;
`;
