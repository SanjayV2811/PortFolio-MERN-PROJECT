import { useContext } from 'react'
import { OwnerContext } from '../context/OwnerContext'

const Navbar = () => {
  const { logout } = useContext(OwnerContext);
 return (
    <div className="h-16 bg-white  shadow-black/30 shadow-lg flex items-center justify-between px-6 ">
      <h1 className="text-xl font-semibold">Owner Dashboard</h1>
      <button className="border px-4 py-2 rounded-xl hover:bg-gray-100" onClick={logout}>Logout</button>
      
    </div>
  );
}

export default Navbar