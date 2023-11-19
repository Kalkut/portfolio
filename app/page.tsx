import Office from './babylon/Office';

export default function Home() {
  return (
    <>
      <Office />
      <header className='absolute right-0 bottom-0 pr-4 pb-4 2xl:pr-8 2xl:pb-8'>
        <h1 className='text-white text-3xl sm:text-4xl 2xl:text-6xl font-bold text-end'>Bérenger Makita</h1>
        <h2 className='text-end sm:text-2xl 2xl:text-3xl'>Fullstack & 3D/XR Web Development</h2>
      </header>
    </>
  );
}
