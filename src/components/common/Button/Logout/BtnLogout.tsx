import { ButtonHTMLAttributes } from 'react';
import * as S from './BtnLogout.style';
import { logOutInstance } from '../../../../apis/client';
import { useNavigate } from 'react-router';

type BtnLogoutProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  disabled?: boolean;
  children: React.ReactNode;
  customStyle?: React.CSSProperties;
};

const BtnLogout = ({ disabled, children, customStyle }: BtnLogoutProps) => {
  const navigate = useNavigate();
  const fetchAuth = async () => logOutInstance.post(`/oauth/logout`);
  const handleClick = () => {
    fetchAuth().then((response: any) => {
      console.log(response);
    });
    localStorage.clear();
    navigate('/');
  };
  return (
    <S.Wrapper disabled={disabled} style={customStyle} onClick={handleClick}>
      {children}
    </S.Wrapper>
  );
};

export default BtnLogout;
