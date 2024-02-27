import styled from 'styled-components';

export const HomeMypageHeaderWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({ justify: 'flex-end', align: 'center' })};
  position: fixed;
  width: 37.5rem;
  height: 5.6rem;
  padding: 0 1.8rem;
  z-index: 999;
  top: 0rem;
`;

export const UserProfileImg = styled.img`
  ${({ theme: { mixin } }) => mixin.flexBox({})};
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 9rem;
  margin-left: 0.8rem;
`;
