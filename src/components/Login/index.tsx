import { useLogin } from '../../hooks/queries/user';

const Login = () => {
  useLogin();

  return <div>로그인 중입니다....</div>;
};

export default Login;
