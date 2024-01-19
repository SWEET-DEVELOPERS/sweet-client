import styled from 'styled-components';

interface TournamentCardWrapperProps {
  isClicked: boolean;
}
export const Wrapper = styled.div``;
export const LinkIconWrapper = styled.button`
  display: inline-flex;
  align-items: center;
  position: relative;

  padding-right: 14px;
  left: 50%;
  flex-shrink: 0;
  transform: translateX(-50%);
  gap: 1.2rem;
  border: none;

  background-color: #ffffff00;
  ${({ theme }) => theme.fonts.body_10};
  color: ${({ theme }) => theme.colors.G_07};
`;

export const SelectWrapper = styled.div<{ isClicked: boolean }>`
  display: ${({ isClicked }) => (isClicked ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  position: absolute;

  width: 5rem;
  top: -12%;
  left: 50%;
  transform: translateX(-50%);
`;

export const TournamentCardWrapper = styled.div<TournamentCardWrapperProps>`
  display: flex;
  flex-direction: column;
  position: relative;

  width: 16rem;
  border: ${({ isClicked }) =>
    isClicked ? '3px solid var(--Pink-P-06, #FF2176)' : '3px solid var(--Gray-G-02, #ebe9ea)'};
  border-radius: 12px;
  margin-bottom: 2rem;
  background: ${({ theme }) => theme.colors.white};
  cursor: pointer;

  img {
    width: 100%;
    height: 16rem;
    object-fit: cover;
    border-radius: 9px 9px 0 0;
  }
`;

export const ItemInfo = styled.div`
  padding: 0 1.2rem 1.2rem;
`;

export const Title = styled.p`
  height: 4.2rem;
  word-break: keep-all;
  ${({ theme }) => theme.fonts.body_09};
`;

export const Price = styled.p`
  margin-bottom: 1.2rem;
  ${({ theme }) => theme.fonts.caption_02};
  color: ${({ theme }) => theme.colors.G_09};
`;

export const TournamentImgWrapper = styled.div`
  margin-bottom: 1.2rem;
`;
