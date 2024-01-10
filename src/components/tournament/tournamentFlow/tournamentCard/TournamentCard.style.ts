import styled from 'styled-components';

interface TournamentCardWrapperProps {
  isClicked: boolean;
}

export const SelectWrapper = styled.div<{ isClicked: boolean }>`
  display: ${({ isClicked }) => (isClicked ? 'flex' : 'none')};
  width: 5rem;
  position: absolute;
  top: -12%;
  left: 50%;
  justify-content: center;
  align-items: center;
  transform: translateX(-50%);
`;

export const TournamentCardWrapper = styled.div<TournamentCardWrapperProps>`
  display: flex;
  flex-direction: column;
  width: 16rem;
  position: relative;
  border-radius: 12px;
  border: ${({ isClicked }) =>
    isClicked ? '3px solid var(--Pink-P-06, #FF2176)' : '3px solid var(--Gray-G-02, #ebe9ea)'};
  background: ${({ theme }) => theme.colors.white};
  cursor: pointer;

  img {
    width: 100%;
    border-radius: 9px 9px 0 0;
  }
`;

export const ItemInfo = styled.div`
  padding: 0 1.2rem;
`;

export const Title = styled.p`
  height: 4.2rem;
  word-break: keep-all;
  ${({ theme }) => theme.fonts.body_09};
`;

export const Price = styled.p`
  margin-bottom: 1.2rem;
`;

export const TournamentImgWrapper = styled.div`
  margin-bottom: 1.2rem;
`;
