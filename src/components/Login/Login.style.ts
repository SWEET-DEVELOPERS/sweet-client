import styled from 'styled-components';

export const Container = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
`;
