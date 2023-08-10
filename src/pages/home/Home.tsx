import { Link } from 'react-router-dom';
import { Icon } from '../../components/icons';

export default function Home() {
  return (
    <>
      <h2 className='mb-10 text-5xl font-extrabold w-11/12'>
        <span className='text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400'>
          Welcome To Document Comparison Software.
        </span>
      </h2>
      <Link
        to='/viewer'
        className='relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-sky-500 rounded-full shadow-md group'
      >
        <span className='absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-sky-500 group-hover:translate-x-0 ease'>
          <Icon.HomeButtonSVG />
        </span>
        <span className='absolute flex items-center justify-center w-full h-full text-sky-500 transition-all duration-300 transform group-hover:translate-x-full ease'>
          Goto Viewer
        </span>
        <span className='relative invisible'> Goto Viewer</span>
      </Link>
    </>
  );
}
