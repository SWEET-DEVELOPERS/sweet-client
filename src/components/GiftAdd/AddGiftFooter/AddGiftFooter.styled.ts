import styled from 'styled-components';

export const AddGiftFooterWrapper = styled.footer`
  width: 100%;
  margin-bottom: 2rem;
  
  position: absolute;
  bottom: 0;
  right: 0;

  display: flex;
  justify-content: right;
`;

export const BtnPrev = styled.button`
  ${({ theme: { mixin } }) => mixin.inlineFlexBox({ align: 'center', justify: 'center' })}

  height: 4.4rem;
  padding: 1rem 1.1rem 1rem 0rem;

  border: none;
  border-radius: 9.9rem;
  background-color: ${({ theme }) => theme.colors.white};
`;
