import useLogin from '../../hooks/queries/member/useLogin';

const Login = () => {
  useLogin({ pageName: 'Start' });
  return;
};

export default Login;
