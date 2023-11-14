import { SignOutButton } from '@clerk/clerk-react';
import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      className={`relative flex flex-col justify-between rounded-br-2xl rounded-tr-2xl bg-[#2f2f2f] transition-all duration-200 ease-in-out ${
        isOpen ? '-translate-x-full' : ''
      }`}
    >
      <div className='flex w-full flex-col items-center'>
        <div className='rounded-b-lg w-full rounded-tr-2xl bg-zinc-800 p-8'>
          <h1 className='text-center text-3xl font-black text-white'>LoRA</h1>
        </div>
        <div className='mt-12'>
          <ul className='flex cursor-pointer flex-col gap-8 text-center text-xl font-semibold text-white'>
            <li className='transition-all duration-200 hover:text-zinc-400'>
              Módulo 1
            </li>
            <li className='transition-all duration-200 hover:text-zinc-400'>
              Módulo 2
            </li>
            <li className='transition-all duration-200 hover:text-zinc-400'>
              Módulo 3
            </li>
          </ul>
        </div>
      </div>
      <div className='flex cursor-pointer justify-center gap-2 rounded-t-lg rounded-br-2xl bg-zinc-800 stroke-white p-6 text-white transition-all duration-200 hover:stroke-zinc-300 hover:text-zinc-300'>
        <p className='text-xl font-semibold'>Sair</p>
        <SignOutButton signOutCallback={()=> {}}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.75}
            stroke='currentColor'
            className='h-7 w-7'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9'
            />
          </svg>
        </SignOutButton>
      </div>
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className={`absolute -right-[32px] bottom-1/2  flex h-10 w-10 cursor-pointer items-center justify-center rounded-br-xl rounded-tr-xl bg-[#2f2f2f] p-[6px] text-center text-xl text-white ${
          !isOpen ? 'mx-1' : '-mx-1'
        }`}
      >
        {isOpen ? (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={2.5}
            stroke='currentColor'
            className='h-6 w-6 stroke-white'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3'
            />
          </svg>
        ) : (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={2.5}
            stroke='currentColor'
            className='h-6 w-6 stroke-white'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75'
            />
          </svg>
        )}
      </div>
    </section>
  );
}

export default Navbar;
