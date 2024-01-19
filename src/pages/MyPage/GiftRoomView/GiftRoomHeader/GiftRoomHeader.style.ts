import styled from 'styled-components';

export const GiftRoomHeaderWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({ justify: 'space-between', align: 'center' })};
  width: 100%;
  padding: 2rem;
  height: 4rem;
  margin-top: 4rem;
  margin-bottom: 0.7rem;
`;

export const Icon = styled.div`
  position: relative;
  left: 0.7rem;
`;
export const Text = styled.div`
  ${({ theme: { fonts } }) => fonts.body_01};
  width: 100%;
`;
