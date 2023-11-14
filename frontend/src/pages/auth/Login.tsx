import { SignIn } from '@clerk/clerk-react';

const Login = () => {
  return (
    <div className='flex h-screen w-full items-center justify-center bg-zinc-900'>
      <SignIn signUpUrl={'/register'} />
    </div>
  );
};

export default Login;
