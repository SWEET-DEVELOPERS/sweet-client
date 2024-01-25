import { PropsWithChildren, ReactNode } from 'react';
import * as S from './Title.style';

interface TitleProps {
  title?: ReactNode;
  userName?: string;
}

const Title = ({ children, userName }: PropsWithChildren<TitleProps>) => {
  return (
    <div style={{ display: 'flex', whiteSpace: 'nowrap' }}>
      {userName && <S.Username>{userName}</S.Username>}
      {/* <S.Title>{title}</S.Title> */}
      <S.Title>{children}</S.Title>
    </div>
  );
};

export default Title;
