import Link from 'next/link';
import Image from 'next/image';


function Users({users}) {
  return (
    <ul className='flex flex-wrap gap-x-4 justify-center items-center '>
      {users.map((user)=> (
        <Link href={`/users/${user.id}`} key={user.id}>
      <li className="bg-slate-400 mb-1 p-3 rounded-md 
      text-black flex justify-between items-center h-40 w-96 m-2" 
      >
        <div>
          <h5 className="font-bold text-lg">{user.id}. {user.first_name} {user.last_name}</h5>
          <p className="text-slate-100">email: {user.email}</p>
        </div>
        
          {/* <img src={user.avatar} alt={user.first_name} className="rounded-full w-20" /> */}
          
          <Image src={user.avatar} alt={user.first_name} width='120' height='120'/>
      </li>
        </Link>
      ))}

    </ul>
  )
}

export default Users;