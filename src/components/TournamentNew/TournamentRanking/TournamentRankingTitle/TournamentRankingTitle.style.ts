import styled from 'styled-components';

export const Line = styled.div`
  width: 335px;
  height: 1px;
  margin-bottom: 2.4rem;
  background-color: ${({ theme }) => theme.colors.G_02};
`;
export const LinkButton = styled.button`
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 13.4rem;
  height: 4rem;
  border-radius: 100px;
  border: none;
  color: ${({ theme }) => theme.colors.P_06};
  background: var(--Pink-P-06, #ffe9f1);
`;

export const ImageButton = styled.button`
  display: flex;
  padding: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 13.4rem;
  height: 4rem;
  border-radius: 100px;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.P_06};
`;

export const TournamentRenameTitleWrapper = styled.section`
  svg {
    width: 19.5rem;
    display: flex;
    margin: 0 auto;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 0.8rem;
  margin-bottom: 2.4rem;
  justify-content: center;
`;

export const Title = styled.p`
  margin-bottom: 2.4rem;
  color: var(--Black, var(--sponus_black, #222));
  text-align: center;
  font-family: SUIT;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 42px */
`;

export const ImgWrapper = styled.div`
  img {
    width: 33.5rem;
  }
`;
