
import Image from 'next/image';
async function getUser(id) {
  const res = await fetch(`https://reqres.in/api/users/${id}`)
  const info = await res.json();
  return info.data;
}

async function UserId({params}) {
 const getUs = await getUser(params.id);
  return (
    <div className="bg-slate-400 p-10 rounded-md h-3/5 mt-20 flex flex-col justify-center content-center">
      <Image src={getUs.avatar} alt={getUs.first_name} width="180" height="100" className="ml-5 rounded-sm"/>
      
      <h3 className="font-bold text-3xl">{getUs.id}. {getUs.first_name} {getUs.last_name}</h3>
      <p>email: {getUs.email}</p>
    </div>
  )
}

export default UserId;

// <div>{JSON.stringify(getUs)}</div>