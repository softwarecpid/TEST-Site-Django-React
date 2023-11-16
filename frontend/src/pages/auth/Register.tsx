import { useRef } from 'react';
import FormInput from '../../components/Forms/FormInput';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
  const ref = useRef<HTMLElement>(null);
  const navigate = useNavigate();

  const postFetch = (e: React.SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    fetch('http://127.0.0.1:8000/api/Register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        user: {
          username: data.get('username'),
          password: data.get('password'),
        },
        Name: data.get('name'),
        SurName: data.get('surname'),
        Position: 'Developer',
        Email: data.get('email'),
        Telephone: data.get('telephone'),
        CPF: '123.456.789-01',
        RG: '123456789',
        BirthDate: '01/01/1990',
      }),
    }).then((res) => {
      if (!res.ok) {
        res.json().then((res) => {
          ref.current!.textContent = res.user.username[0];
          ref.current!.classList.remove('hidden');
        });
      }
      navigate('/login');
    });
  };

  return (
    <main className="flex h-screen w-full items-center justify-center bg-[url('/bg-blob.svg')] bg-cover bg-no-repeat font-ubuntu">
      <form
        onSubmit={(e: React.SyntheticEvent<HTMLFormElement, SubmitEvent>) =>
          postFetch(e)
        }
        className='flex w-[400px] flex-col gap-5 rounded bg-zinc-800 p-12 text-white'
      >
        <h2 className='text-2xl font-semibold'>Register</h2>

        <FormInput
          htmlFor={'username'}
          type={'text'}
          placeholder={'Enter your username...'}
        />
        <FormInput
          htmlFor={'email'}
          type={'email'}
          placeholder={'Enter your email...'}
        />
        <FormInput
          htmlFor={'password'}
          type={'password'}
          placeholder={'Enter your password...'}
        />
        <FormInput
          htmlFor={'name'}
          type={'text'}
          placeholder={'Enter your name...'}
        />
        <FormInput
          htmlFor={'surname'}
          type={'text'}
          placeholder={'Enter your surname...'}
        />
        <FormInput
          htmlFor={'telephone'}
          type={'number'}
          placeholder={'Enter your telephone...'}
        />

        <button className='mt-4 rounded-md bg-neutral-700 p-2 transition-all duration-100 ease-in hover:bg-neutral-600'>
          Create user
        </button>

        <span
          ref={ref}
          className='mt-4 hidden text-center text-sm font-semibold text-red-400'
        ></span>
        <Link to={'/login'}>
          <p className='mt-4 text-sm font-semibold text-white'>
            Already have an account?
            <span className='ml-1 text-blue-400 transition-all duration-150 hover:text-blue-500'>
              Sign in
            </span>
          </p>
        </Link>
      </form>
    </main>
  );
}

export default Register;
