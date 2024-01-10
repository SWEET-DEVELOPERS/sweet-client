import styled from 'styled-components';

export const Wrapper = styled.button`
  ${({ theme: { mixin } }) => mixin.inlineFlexBox({ align: 'center', justify: 'space-between' })}

  width: 33.5rem;
  height: 2.7rem;

  flex-shrink: 0;
  background-color: transparent;
  border: none;

  > p {
    ${({ theme: { fonts } }) => fonts.body_01};
  }
`;

export const EditText = styled.div`
  ${({ theme: { fonts } }) => fonts.caption_01};

  color: ${({ theme: { colors } }) => colors.G_07};
`;
