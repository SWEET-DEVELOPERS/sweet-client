import styled from 'styled-components';

export const GiftAddNextBtnWrapper = styled.button<{ $isActivated: boolean }>`
  ${({ theme: { mixin } }) => mixin.inlineFlexBox({ align: 'center', justify: 'center' })}

  height: 4.4rem;
  padding: 1rem 1.1rem 1rem 2rem;
  border-radius: 9.9rem;

  ${({ theme: { fonts } }) => fonts.body_09}

  ${({ $isActivated, theme: { colors } }) =>
    $isActivated
      ? `
   background-color: ${colors.P_06};
   color: ${colors.white};
   border: none;
   outline: none;
 `
      : `
   background-color: ${colors.G_02};
   color: ${colors.G_07};
   border: none;
 `}
`;
