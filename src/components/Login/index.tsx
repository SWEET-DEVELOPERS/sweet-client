import { useEffect } from 'react';
import { useLogin } from '../../hooks/queries/user';

const Login = () => {
  const code: string | null = new URL(window.location.href).searchParams.get('code');

  useEffect(() => {
    if (code) {
      // switch (method) {
      //   case 'LOGIN':
      console.log('클라 로그인 api 요청 component 실행 됐다이!!!!');
      useLogin(code);
      //   break;
      // case 'LOGOUT':
      //   localStorage.removeItem('EXIT_LOGIN_TOKEN');
      //   navigate('/');
      //   break;
      // default:
      //   break;
      //}
    }
  }, []);

  return <div>로그인 중입니다....</div>;
};

export default Login;
