import styled from 'styled-components';

export const ShowLinkWrapper = styled.div`
  display: flex;
  align-items: center;

  height: 3.2rem;
  width: 26.9rem;
  padding: 0.4rem 1rem;
  margin-top: 2rem;

  column-gap: 0.6rem;

  border-radius: 1.5rem;
  background-color: ${({ theme }) => theme.colors.G_01};
`;

export const LinkText = styled.span`
  width: 21.9rem;
  padding: 0;

  -webkit-line-clamp: 1;
  white-space: nowrap;
  overflow: hidden;
  color: ${({ theme }) => theme.colors.G_07};
  ${({ theme }) => theme.fonts.body_10};
  text-overflow: ellipsis;

  border-radius: 1.5rem;
  background-color: ${({ theme }) => theme.colors.G_01};
`;
