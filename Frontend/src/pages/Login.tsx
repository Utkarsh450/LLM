import { Github, Chrome } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../store/store';
import { asyncLoadUserFromLocalStorage, asyncregisteruser } from '../store/actions/userActions';
import { asynccreatechat, asyncDeleteChatById, asyncFetchChats } from '../store/actions/chatActions';
import { useEffect } from 'react';
 const Login: React.FC = ()=> {
  const dispatch = useDispatch<AppDispatch>();
  const handleSubmit = ()=>{
    // dispatch(asyncFetchChats())
    dispatch(asyncDeleteChatById("690f93d09861563e94081083"))
    // dispatch(asynccreatechat("hi"))
    // dispatch(asyncregisteruser(
    //   {fullName: {firstName: "test4", lastName: "test5"},email: "test@gmail.com", password:"test@1234" }))
  }

  useEffect(()=>{
        dispatch(asyncLoadUserFromLocalStorage());
        dispatch(asyncFetchChats())
  }, [])
  return (
    <div className="w-full h-screen">
      <div className="flex items-center flex-col gap-10 justify-center mt-10">
        <div className="flex flex-col gap-4 font-['satoshi']">
          <div>
            <h1 className="text-3xl font-thin tracking-tighter mb-3 px-5">Welcome Back</h1>
          </div>
          <input
            className="w-72 h-14 p-3 rounded-full border border-zinc-400 text-md outline-none text-zinc-500 focus:ring-2 focus:ring-blue-500 transition-all"
            placeholder="Email address"
            type="email"
            required
          />
          <div className="w-72 h-fit p-3 rounded-full bg-black text-zinc-50 text-center cursor-pointer hover:bg-zinc-800 active:scale-95 transition-all">
            Continue
          </div>
          <div className="px-10">
            Don't have a account ?{' '}
            <Link to="/register" className="text-blue-600 cursor-pointer hover:underline">Register</Link>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-24 bg-zinc-200 h-[0.1rem]"></div>
          <div className="text-zinc-600">OR</div>
          <div className="w-24 bg-zinc-200 h-[0.1rem]"></div>
        </div>

        <div className="flex flex-col gap-4 font-['satoshi']">
          <div className="w-64 h-fit p-2 px-4 flex items-center justify-center gap-2 text-center font-semibold rounded-full border border-zinc-400 cursor-pointer hover:bg-zinc-100 active:scale-95 transition-all">
            <Chrome size={18} /> Continue with Google
          </div>
          <div className="w-64 h-fit p-2 px-4 flex items-center justify-center gap-2 text-center font-semibold rounded-full border border-zinc-400 cursor-pointer hover:bg-zinc-100 active:scale-95 transition-all">
            <Github size={18} /> Continue with Github
          </div>
        </div>
      </div>
      <button onClick={handleSubmit} className='px-3 py-2 rounded-full bg-red-500'>Click me</button>
    </div>
  );
}

export default Login;
