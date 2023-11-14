import { SignedIn, SignedOut } from '@clerk/clerk-react';
import Navbar from '../components/Navbar/Navbar';
import { Navigate } from 'react-router-dom';

function App() {
  return (
    <>
      <SignedIn>
        <main className='grid h-screen w-full grid-cols-12 bg-zinc-900 font-ubuntu'>
          <Navbar />
        </main>
      </SignedIn>
      <SignedOut>
        <Navigate to='/login' replace={false} />
      </SignedOut>
    </>
  );
}

export default App;
