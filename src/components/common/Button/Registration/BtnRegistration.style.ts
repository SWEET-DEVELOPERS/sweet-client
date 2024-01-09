import styled from 'styled-components';

export const Wrapper = styled.button`
  ${({ theme: { mixin } }) => mixin.flexBox({ align: 'center', justify: 'center' })}

  height: 4.4rem;
  padding: 1.2rem 2rem 1.1rem 2rem;
  border-radius: 9.9rem;
  flex-shrink: 0;

  background-color: transparent;
  color: ${({ theme: { colors } }) => colors.G_05};
  border: 1px solid ${({ theme: { colors } }) => colors.G_05};
  ${({ theme: { fonts } }) => fonts.body_09};

  &:focus {
    color: ${({ theme: { colors } }) => colors.P_06};
    border: 1px solid ${({ theme: { colors } }) => colors.P_06};
  }
`;
