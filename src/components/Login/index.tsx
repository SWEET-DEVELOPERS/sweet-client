import { useEffect } from 'react';
import { useLogin } from '../../hooks/queries/user';

const Login = () => {
  const code: string | null = new URL(window.location.href).searchParams.get('code');
  const check = localStorage.getItem('EXIT_LOGIN_TOKEN');

  useEffect(() => {
    console.log(code);
    if (code) {
      useLogin(code);
      window.location.replace('/mypage');
    }
    console.log(check);
  }, []);

  return <div>로그인 중입니다....</div>;
};

export default Login;
