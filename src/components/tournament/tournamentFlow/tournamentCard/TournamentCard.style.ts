import styled from 'styled-components';

export const TournamentCardWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 16rem;

  border-radius: 12px;
  border: 1px solid var(--Gray-G-02, #ebe9ea);
  background: #fff;

  img {
    width: 100%;
    border-radius: 12px 12px 0 0;
  }
`;

export const ItemInfo = styled.div`
  padding: 0 1.2rem;
`;

export const Title = styled.p`
  word-break: keep-all;
  ${({ theme }) => theme.fonts.body_09};
`;

export const Price = styled.p`
  margin-bottom: 1.2rem;
`;

export const TournamentImgWrapper = styled.div`
  margin-bottom: 1.2rem;
`;
