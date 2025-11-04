import { NavLink } from 'react-router-dom'

const Navbar: React.FC = () => {
    return (
        <div className='w-full h-16 flex justify-between items-center p-10 font-[satoshi] bg-transparent'>
            <div className='flex gap-6 items-center'>
                <NavLink to="/" className={"font-semibold flex items-center text-3xl"}>Aurora AI</NavLink>
            </div>
            <div className='flex gap-6 items-center'>
                <NavLink to="/pricing" className={"font-medium text-[1rem] text-zinc-800"}>Pricing</NavLink>
                <NavLink to="SignUp" className={"font-medium text-[1rem] text-zinc-800"}>About</NavLink>
                <NavLink to="/login" className={"font-medium text-[1rem] text-zinc-800"}>Login</NavLink>
                <NavLink to="SignUp" className={"font-medium w-fit hover:bg-zinc-900 h-fit p-2 rounded-3xl bg-[#3c3c3c] text-[0.8rem] text-zinc-300"}>Get Started</NavLink>
            </div>
        </div>
    )
}

export default Navbar