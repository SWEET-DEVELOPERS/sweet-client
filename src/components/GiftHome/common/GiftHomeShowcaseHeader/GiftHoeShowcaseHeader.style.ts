import styled from 'styled-components';

export const GiftHomeShowcaseHeaderWrapper = styled.article`
  width: 100%;
  height: 4rem;
  padding: 0 1.4rem 0 0;
  margin-bottom: 0.7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const ShowcaseTitle = styled.p`
  ${({ theme }) => theme.fonts.body_01};
`;

export const EditText = styled.span`
  ${({ theme }) => theme.fonts.caption_01};
  color: ${({ theme }) => theme.colors.G_07};
  cursor: pointer;
`;
