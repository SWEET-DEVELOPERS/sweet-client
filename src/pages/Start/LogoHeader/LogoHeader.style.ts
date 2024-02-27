import styled from 'styled-components';

export const LogoHeaderWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({ justify: 'center', align: 'center' })};
  position: fixed;
  width: 100%;
  height: 5.6rem;
  z-index: 999;
  top: 0rem;
  background-color: white;
`;

export const IconWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({ align: 'center' })};
  width: 37.5rem;
  height: 100%;
  gap: 21.2rem;
  padding: 0 2rem;
`;

export const UserProfileImg = styled.img`
  ${({ theme: { mixin } }) => mixin.flexBox({})};
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 99rem;
`;
