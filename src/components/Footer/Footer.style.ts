import styled from 'styled-components';

export const FooterWrapper = styled.div`
  height: 38.6rem;
  width: 37.5rem;
  background-color: white;
`;

export const TextWrapper = styled.div`
  ${({ theme }) => theme.mixin.flexBox({ direction: 'column' })};
  margin: 4rem 2rem;
  gap: 2rem;
`;

export const OwnerWrapper = styled.div`
  gap: 0.4rem;
`;

export const TextOneLine = styled.div`
  ${({ theme }) => theme.mixin.flexBox({ align: 'center' })};
  width: 100%;
  gap: 0.8rem;
`;

export const BoldText = styled.div`
  color: ${({ theme }) => theme.colors.black};

  font-family: 'SUIT';
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
`;

export const Text = styled.div`
  ${({ theme }) => theme.fonts.caption_02};
  color: ${({ theme }) => theme.colors.G_07};
`;

export const Icon = styled.div`
  top: 1rem;
  gap: 0.8rem;
`;
