import { useLogin } from '../../hooks/queries/member';

const Login = () => {
  useLogin();

  return <div>로그인 중입니다....</div>;
};

export default Login;
