import styled from 'styled-components';

export const SideBarWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
`;

export const MenuWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
  gap: 3.1rem;
`;

export const Menu = styled.div`
  ${({ theme: { fonts } }) => fonts.heading_01};
`;
