import { useState } from "react"
import { Link } from "react-router-dom"
import { Eye, EyeOff } from "lucide-react"

const Key: React.FC = () => {
    const [isPassword, setisPassword] = useState<boolean>(false)
  return (
    <div className='w-full flex items-center justify-center'>
         <div className="flex flex-col gap-4 font-['satoshi']">
          <div>
            <h1 className="text-3xl font-thin tracking-tighter mb-3 px-5">Create your account</h1>
            <h1 className="text-md text-zinc-400 font-thin tracking-tighter mb-3 px-5">Set your password for Aurora to continue</h1>
          </div>
          <input
            className="w-72 h-12 p-3 rounded-full border border-zinc-400 text-md outline-none text-zinc-500 focus:ring-2 focus:ring-blue-500 transition-all"
            placeholder="Email address"
            type="email"
            required
          />
          <div className="flex relative">
            <input
            className="w-72 h-12 p-3 rounded-full border border-zinc-400 text-md outline-none text-zinc-500 focus:ring-2 focus:ring-blue-500 transition-all"
            placeholder="Password"
            type={ isPassword ? "text" : "password"}
            required
          />
          <button onClick={()=>setisPassword(!isPassword)} className="absolute right-10 top-1/2 -translate-y-1/2">
           { isPassword ?  <EyeOff /> :  <Eye />}
          </button>
          </div>
          <div className="w-72 h-fit p-3 rounded-full bg-black text-zinc-50 text-center cursor-pointer hover:bg-zinc-800 active:scale-95 transition-all">
            Continue
          </div>
          <div className="px-10">
           Already have an account?{' '}
            <Link to="/login" className="text-blue-600 cursor-pointer hover:underline"> Log in</Link>
          </div>
        </div>
    </div>
  )
}

export default Key