import useLogin from '../../hooks/queries/member/useLogin';

const Login = () => {
  useLogin({ pageName: 'Start' });

  return <div>로그인 중입니다....</div>;
};

export default Login;
