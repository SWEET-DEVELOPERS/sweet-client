import { useEffect } from 'react';
import { useLogin } from '../../hooks/queries/user';
import { useNavigate } from 'react-router';

const Login = () => {
  const code = window.location.search;

  useEffect(() => {
    useLogin(code);
    console.log(localStorage.getItem('EXIT_LOGIN_TOKEN'));
  }, []);
  return <div />;
};

export default Login;
