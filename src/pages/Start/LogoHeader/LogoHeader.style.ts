import styled from 'styled-components';

export const LogoHeaderWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({ align: 'center' })};
  position: fixed;
  width: 100%;
  padding: 0 2rem;
  height: 5.6rem;
  gap: 21.2rem;
  z-index: 999;
  top: 0rem;
  background-color: #fafafa;
`;

export const UserProfileImg = styled.img`
  ${({ theme: { mixin } }) => mixin.flexBox({})};
  width: 3rem;
  height: 3rem;
  border-radius: 9rem;
`;
