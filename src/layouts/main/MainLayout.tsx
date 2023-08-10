import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <>
      <header className='h-16 flex fixed w-full bg-blue-950 z-10'>
        <div className='flex justify-center items-center my-0 mx-auto'>
          <img src='/image/tvt.png' className='w-16 h-10' />
        </div>
      </header>
      <div className='pt-16 w-full h-full items-center justify-center flex flex-col text-center'>
        <Outlet />
      </div>
    </>
  );
}
