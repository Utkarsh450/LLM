import { Github, Chrome } from 'lucide-react';
import { Link } from 'react-router-dom';

 const Register: React.FC = ()=> {
  return (
    <div className="w-full h-screen">
      <div className="flex items-center flex-col gap-10 justify-center mt-10">
        <div className="flex flex-col gap-4 font-['satoshi']">
          <div>
            <h1 className="text-3xl font-thin tracking-tighter mb-3 px-5">Create an account</h1>
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
           Already have an account?{' '}
            <Link to="/login" className="text-blue-600 cursor-pointer hover:underline"> Log in</Link>
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
    </div>
  );
}

export default Register;
