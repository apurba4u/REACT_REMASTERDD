import { useNavigate } from "react-router-dom"
import { House, StepBack, StepForward } from 'lucide-react';

const NavBar2 = () => {
  let navigate = useNavigate()
  return (
    <div className="py-3 px-5 bg-cyan-700">
      <button onClick={() => {
        navigate(-1)
      }} className="font-medium bg-amber-600 px-5 py-2 rounded cursor-pointer active:scale-95"><StepBack /></button>
      <button onClick={() => {
        navigate('/')
      }} className="font-medium bg-amber-600 px-5 py-2 rounded cursor-pointer active:scale-95"><House /></button>
      <button onClick={() => {
        navigate(-1)
      }} className="font-medium bg-amber-600 px-5 py-2 rounded cursor-pointer active:scale-95"><StepForward /></button>
    </div>
  )
}

export default NavBar2
