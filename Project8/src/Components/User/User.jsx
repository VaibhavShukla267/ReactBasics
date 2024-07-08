
import { useParams } from 'react-router-dom'

function User() {


  const {userid}=useParams()
  return (
   <div className='h-screen bg-zinc-700 m-5 text-gray-300 text-center text-5xl'>User:{userid}
   <p className='text-2xl pt-14'>Hey {userid} Welcome To Our Website </p>
   
   
   
   </div>
  )
}

export default User