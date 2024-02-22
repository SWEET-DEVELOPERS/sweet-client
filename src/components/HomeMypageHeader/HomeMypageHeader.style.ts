import styled from 'styled-components';

export const HomeMypageHeaderWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({ justify: 'flex-end', align: 'center' })};
  position: fixed;
  width: 100%;
  height: 5.6rem;
  gap: 1.6rem;
  padding: 0 1.8rem;
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
