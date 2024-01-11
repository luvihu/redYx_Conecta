
import Link from 'next/link';

function Navbar() {
  return (
    <nav className='bg-slate-400 mb-4 flex justify-between items-center font-bold
     text-black px-20 p-3 text-lg'>
      <Link href='/home'>
      Home
      </Link>
     <ul>
      <li>
        <Link href='/' >
        Users
        </Link>
      </li>
     </ul>
    </nav>
  )
}

export default Navbar;