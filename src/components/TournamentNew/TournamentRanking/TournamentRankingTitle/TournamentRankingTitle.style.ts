import styled from 'styled-components';

export const Line = styled.div`
  width: 335px;
  height: 1px;
  margin-bottom: 2.4rem;
  background-color: ${({ theme }) => theme.colors.G_02};
`;

export const PinkText = styled.span`
  color: ${({ theme }) => theme.colors.P_06};
`;

export const LinkButton = styled.button`
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 13.4rem;
  height: 4rem;
  border-radius: 100px;
  border: none;
  color: ${({ theme }) => theme.colors.P_06};
  ${({ theme }) => theme.fonts.body_09};
  background: var(--Pink-P-06, #ffe9f1);
`;

export const SubTitle = styled.p`
  margin-bottom: 2rem;
  ${({ theme }) => theme.fonts.body_10};
  color: ${({ theme }) => theme.colors.G_07};
  text-align: center;
`;
export const KakaoButton = styled.button`
  display: flex;
  padding: 1rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 13.4rem;
  height: 4rem;
  border: none;
  color: ${({ theme }) => theme.colors.Black};
  ${({ theme }) => theme.fonts.body_09};
  border-radius: 100px;
  background: #fee500;
`;

export const ImageButton = styled.button`
  display: flex;
  padding: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
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
