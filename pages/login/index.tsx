import Head from 'next/head';
import Login from '~/components/login/Login';

const LoginPage = () => {
  return (
    <>
      <Head>
        <title>점핏 | 로그인</title>
      </Head>
      <Login />
    </>
  );
};

export default LoginPage;
