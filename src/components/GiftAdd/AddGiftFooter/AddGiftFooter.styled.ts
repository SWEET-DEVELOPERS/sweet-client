import styled from 'styled-components';

export const AddGiftFooterWrapper = styled.footer`
  display: flex;
  justify-content: flex-end;
  position: absolute;
  align-items: center;

  width: 37.5rem;
  bottom: 0;
  padding: 2rem;
  left: 50%;
  transform: translate(-50%);
`;

export const BtnPrev = styled.button`
  ${({ theme: { mixin } }) => mixin.inlineFlexBox({ align: 'center', justify: 'center' })}

  height: 4.4rem;
  padding: 1rem 1.1rem 1rem 0rem;

  border: none;
  border-radius: 9.9rem;
  color: ${({ theme }) => theme.colors.};;
  background-color: ${({ theme }) => theme.colors.white};
`;
