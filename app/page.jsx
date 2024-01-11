
import Users from '@/components/Users';


async function fetUsers() {
 const data = await fetch('https://reqres.in/api/users');
 const info = await data.json();
return info.data;
}

async function HomePage() {

 const users = await fetUsers();

  return (
   <>
      <Users users={users}/>
   </>
  )
}

export default HomePage