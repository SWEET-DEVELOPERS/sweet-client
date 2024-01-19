import styled from 'styled-components';

export const SelectWrapper = styled.div`
  display: flex;
  width: 5rem;
  position: absolute;
  top: -12%;
  left: 50%;
  justify-content: center;
  align-items: center;
  transform: translateX(-50%);
`;

export const TournamentCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 25rem;
  position: relative;
  border-radius: 12px;
  margin: 0 auto;
  margin-bottom: 1.6rem;
  border: 1px solid ${({ theme }) => theme.colors.G_02};
  background: ${({ theme }) => theme.colors.white};
  cursor: pointer;

  img {
    width: 100%;
    border-radius: 9px 9px 0 0;
  }
`;

export const ItemInfo = styled.div`
  padding: 0 2rem 2rem 2rem;
`;

export const Title = styled.p`
  height: 4.7rem;
  word-break: keep-all;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  ${({ theme }) => theme.fonts.body_05};
`;

export const Price = styled.p`
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.G_09};
  ${({ theme }) => theme.fonts.caption_01};
`;

export const TournamentImgWrapper = styled.div`
  margin-bottom: 2rem;
`;
