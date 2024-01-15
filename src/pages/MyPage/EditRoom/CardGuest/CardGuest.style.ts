import styled from 'styled-components';

export const CardGuestWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({ justify: 'space-between', align: 'center' })};
  width: 33.5rem;
  height: 6.4rem;
  border-radius: 1.2rem;
  border: 1px solid ${({ theme: { colors } }) => colors.G_02};
  padding: 1.2rem;
`;

export const UserWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({ align: 'center' })};
  gap: 1.2rem;
`;

export const User = styled.div`
  ${({ theme: { fonts } }) => fonts.body_07};
`;
