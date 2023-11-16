import { Link, useNavigate } from 'react-router-dom';
import FormInput from '../../components/Forms/FormInput';
import { useRef } from 'react';

const Login = () => {
  const navigate = useNavigate();
  const ref = useRef<HTMLElement>(null);

  const postFetch = (e: React.SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    fetch('http://127.0.0.1:8000/api/Login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: data.get('username'),
        password: data.get('password'),
      }),
    }).then((res) => {
      if (!res.ok) {
        ref.current!.textContent = 'Username or password is incorrect.';
        ref.current!.classList.remove('hidden');
        return;
      }
      navigate('/');
    });
  };

  return (
    <div className="flex h-screen w-full items-center justify-center bg-[url('/bg-blob.svg')] bg-cover bg-no-repeat font-ubuntu">
      <form
        onSubmit={(e: React.SyntheticEvent<HTMLFormElement, SubmitEvent>) =>
          postFetch(e)
        }
        className='flex w-[400px] flex-col gap-5 rounded bg-zinc-800 p-12 text-white'
      >
        <h2 className='text-2xl font-semibold'>Login</h2>
        <FormInput
          htmlFor='username'
          placeholder='Enter your username...'
          type='text'
        />
        <FormInput
          htmlFor='password'
          placeholder='Enter your password...'
          type='password'
        />
        <button className='mt-4 rounded-md bg-neutral-700 p-2 transition-all duration-100 ease-in hover:bg-neutral-600'>
          Login
        </button>
        <span
          ref={ref}
          className='mt-4 hidden text-center  font-semibold text-red-400'
        ></span>
        <Link to={'/register'}>
          <p className='mt-4 text-center text-sm font-semibold text-white'>
            Don't have an account?
            <span className='ml-1 text-blue-400 transition-all duration-150 hover:text-blue-500'>
              Create one here!
            </span>
          </p>
        </Link>
      </form>
    </div>
  );
};

export default Login;
