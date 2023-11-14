import { SignUp } from '@clerk/clerk-react';

function Register() {
  return (
    <main className="flex h-screen w-full bg-[url('/bg-blob.svg')] bg-cover bg-no-repeat justify-center items-center font-ubuntu">
      <div className='text-white text-center'>
        <SignUp redirectUrl={'/'} signInUrl={'/login'} />
      </div>
    </main>
  );
}

export default Register;
